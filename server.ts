import express from 'express';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
import { GoogleGenAI, GenerateVideosOperation } from '@google/genai';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '25mb' }));

function getGenAIClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not configured on the server.');
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Detailed cinematic prompt matching the user's exact specification
const HERO_VIDEO_PROMPT = `Cinematic luxury automotive brand film and seamless background loop inside a dark, clean, sophisticated automotive paint studio. On the right side of the frame is a classic crimson red BMW E30 rally coupe body shell with its recognizable box-flared wheel arches, sharp contours, and gloss black tubular interior roll cage. A professional automotive painter seen from behind wears a dark charcoal work jacket with the authentic white logo 'PEDRO GRAZINA', 'pintura automóvel', and '+351 911 044 842' cleanly integrated onto the back fabric. He uses a professional HVLP spray gun to apply a fine, realistic clear-coat mist onto the glossy red bodywork. Cold-white linear studio lights reflect smoothly across the wet-look red paint panels and metallic curves while the left side of the frame maintains deep obsidian black negative space for website typography. Slow, controlled tracking camera movement, photorealistic materials, seamless atmospheric loop.`;

// 1. Start Veo 3.1 Video Generation
app.post('/api/generate-video', async (_req, res) => {
  try {
    const ai = getGenAIClient();

    // Load the generated BMW E30 painter keyframe as the starting reference frame
    const keyframePath = path.resolve(
      process.cwd(),
      'src/assets/images/hero_e30_painter_back_1791120439154.jpg'
    );

    let imageParam: { imageBytes: string; mimeType: string } | undefined;
    if (fs.existsSync(keyframePath)) {
      const bytes = fs.readFileSync(keyframePath);
      imageParam = {
        imageBytes: bytes.toString('base64'),
        mimeType: 'image/jpeg',
      };
    }

    const operation = await ai.models.generateVideos({
      model: 'veo-3.1-lite-generate-preview',
      prompt: HERO_VIDEO_PROMPT,
      ...(imageParam ? { image: imageParam } : {}),
      config: {
        numberOfVideos: 1,
        resolution: '720p',
        aspectRatio: '16:9',
        ...(imageParam ? { lastFrame: imageParam } : {}),
      },
    });

    res.json({ operationName: operation.name });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'Failed to start video generation';
    console.error('Error in /api/generate-video:', message);
    res.status(500).json({ error: message });
  }
});

// 2. Poll Video Generation Status
app.post('/api/video-status', async (req, res) => {
  try {
    const { operationName } = req.body;
    if (!operationName) {
      res.status(400).json({ error: 'Missing operationName' });
      return;
    }

    const ai = getGenAIClient();
    const op = new GenerateVideosOperation();
    op.name = operationName;

    const updated = await ai.operations.getVideosOperation({ operation: op });
    res.json({
      done: Boolean(updated.done),
      error: updated.error ? String(updated.error.message || updated.error) : null,
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'Failed to check video status';
    console.error('Error in /api/video-status:', message);
    res.status(500).json({ error: message });
  }
});

// 3. Download Completed Video Stream
app.post('/api/video-download', async (req, res) => {
  try {
    const { operationName } = req.body;
    if (!operationName) {
      res.status(400).json({ error: 'Missing operationName' });
      return;
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      res.status(500).json({ error: 'GEMINI_API_KEY is not configured' });
      return;
    }

    const ai = getGenAIClient();
    const op = new GenerateVideosOperation();
    op.name = operationName;

    const updated = await ai.operations.getVideosOperation({ operation: op });
    const uri = updated.response?.generatedVideos?.[0]?.video?.uri;

    if (!uri) {
      res.status(404).json({ error: 'Generated video URI not found' });
      return;
    }

    const videoRes = await fetch(uri, {
      headers: { 'x-goog-api-key': apiKey },
    });

    if (!videoRes.ok || !videoRes.body) {
      res.status(502).json({ error: 'Failed to fetch video stream from upstream' });
      return;
    }

    res.setHeader('Content-Type', 'video/mp4');
    const reader = videoRes.body.getReader();
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      res.write(Buffer.from(value));
    }
    res.end();
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'Failed to download generated video';
    console.error('Error in /api/video-download:', message);
    res.status(500).json({ error: message });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
