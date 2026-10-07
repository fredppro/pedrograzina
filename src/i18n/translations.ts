export type Language = 'pt' | 'en' | 'fr';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string;
  iconType: 'spray' | 'bodywork' | 'headlights' | 'polish';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  processTag: string;
  description: string;
  alt: string;
  imageUrl: string;
  aspectClass: string;
  spanClass: string;
}

export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    services: string;
    gallery: string;
    quote: string;
    contact: string;
    requestQuote: string;
    whatsapp: string;
    instagram: string;
    openMenu: string;
    closeMenu: string;
    languageLabel: string;
  };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustPillars: {
      quality: string;
      precision: string;
      finish: string;
    };
  };
  services: {
    kicker: string;
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  gallery: {
    kicker: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterPaint: string;
    filterBodywork: string;
    filterPolish: string;
    viewLarger: string;
    closeLightbox: string;
    previousImage: string;
    nextImage: string;
    items: GalleryItem[];
  };
  quote: {
    kicker: string;
    title: string;
    subtitle: string;
    directContactTitle: string;
    directContactSubtitle: string;
    whatsappCta: string;
    whatsappDirectNote: string;
    phoneLabel: string;
    emailLabel: string;
    addressLabel: string;
    addressValue: string;
    directionsLabel: string;
    scheduleLabel: string;
    scheduleValue: string;
    scheduleWeekend: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      serviceLabel: string;
      serviceOptions: {
        customPaint: string;
        crashRepair: string;
        polishing: string;
        headlights: string;
        other: string;
      };
      messageLabel: string;
      messagePlaceholder: string;
      submitButton: string;
      submittingButton: string;
      responseGuarantee: string;
      validation: {
        nameRequired: string;
        phoneRequired: string;
        phoneInvalid: string;
        emailRequired: string;
        emailInvalid: string;
        messageRequired: string;
      };
      success: {
        title: string;
        message: string;
        sendAnother: string;
        openWhatsappNow: string;
      };
    };
  };
  floating: {
    buttonAria: string;
    menuTitle: string;
    whatsappLabel: string;
    phoneLabel: string;
    instagramLabel: string;
    emailLabel: string;
    prefilledWhatsappText: string;
  };
  footer: {
    tagline: string;
    navigationTitle: string;
    contactsTitle: string;
    socialTitle: string;
    rights: string;
  };
}

import heroImg from '../assets/images/hero_e30_painter_back_1791120439154.jpg';
import e30ContourImg from '../assets/images/hero_e30_rollcage_contour_1791120462550.jpg';
import paintBoothImg from '../assets/images/gallery_paint_booth_1791116986449.jpg';
import bodyworkImg from '../assets/images/gallery_bodywork_repair_1791116998437.jpg';
import polishingImg from '../assets/images/gallery_polishing_detail_1791117009608.jpg';
import finishedCoupeImg from '../assets/images/gallery_finished_coupe_1791117021371.jpg';

const IMAGE_PATHS = {
  hero: heroImg,
  e30Contour: e30ContourImg,
  paintBooth: paintBoothImg,
  bodywork: bodyworkImg,
  polishing: polishingImg,
  finishedCoupe: finishedCoupeImg,
};

export const CONTACT_INFO = {
  companyName: 'Pedro Grazina',
  specialty: 'Pintura Automóvel',
  phoneDisplay: '+351 911 044 842',
  phoneShort: '911 044 842',
  phoneHref: 'tel:+351911044842',
  whatsappNumber: '351911044842',
  email: 'pgrazina.pintura@gmail.com',
  streetAddress: 'Rua Outeiro da Rosa nº 11 (Zona Industrial da Zicofa)',
  locality: 'Leiria',
  country: 'Portugal',
  fullAddress: 'Rua Outeiro da Rosa nº 11 (Zn Industrial da Zicofa), Leiria, Portugal',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Rua+Outeiro+da+Rosa+11+Zicofa+Leiria+Portugal',
  instagramUrl: 'https://www.instagram.com/pgrazina.pintura/',
  instagramHandle: '@pgrazina.pintura',
  certifiedMaterial: 'SIKKENS',
};

export const HERO_IMAGE = IMAGE_PATHS.hero;

export const translations: Record<Language, Translations> = {
  pt: {
    meta: {
      title: 'Pedro Grazina — Pintura Automóvel & Reparação de Sinistros em Leiria',
      description:
        'Oficina em Leiria (Zicofa) especializada em pintura personalizada, reparação de sinistros, polimentos gerais e recuperação de faróis com material certificado SIKKENS.',
    },
    nav: {
      services: 'Serviços',
      gallery: 'Galeria',
      quote: 'Orçamento',
      contact: 'Contacto',
      requestQuote: 'Pedir Orçamento',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      openMenu: 'Abrir menu de navegação',
      closeMenu: 'Fechar menu de navegação',
      languageLabel: 'Selecionar idioma',
    },
    hero: {
      kicker: 'LEIRIA · PINTURA AUTOMÓVEL & REPARAÇÃO DE SINISTROS',
      title: 'Damos uma nova vida à sua viatura.',
      subtitle:
        'Pintura personalizada, reparação de sinistros, polimentos gerais e recuperação de faróis com acabamento profissional e material certificado SIKKENS.',
      ctaPrimary: 'Pedir Orçamento',
      ctaSecondary: 'Ver Trabalhos',
      trustPillars: {
        quality: 'Material certificado SIKKENS',
        precision: 'Recuperação de faróis (Garantia 2 anos)',
        finish: 'Reparação de sinistros e pintura personalizada',
      },
    },
    services: {
      kicker: 'MATERIAL CERTIFICADO SIKKENS DE QUALIDADE',
      title: 'Os nossos serviços',
      subtitle:
        'Intervenções rigorosas com material certificado SIKKENS de elevada qualidade, garantindo durabilidade, brilho e precisão em cada detalhe.',
      items: [
        {
          id: 'pintura-personalizada',
          number: '01',
          title: 'Pintura Personalizada',
          description:
            'Pintura automóvel completa, parcial ou personalizada com acabamento de excelência e afinação exata de cor.',
          details: 'Material certificado SIKKENS · Estufa controlada',
          iconType: 'spray',
        },
        {
          id: 'reparacoes-sinistros',
          number: '02',
          title: 'Reparações de Sinistros',
          description:
            'Recuperação completa de danos de colisão, amolgadelas e alinhamento rigoroso de elementos da carroçaria.',
          details: 'Reparação multimarca · Rigor estrutural e estético',
          iconType: 'bodywork',
        },
        {
          id: 'polimentos-gerais',
          number: '03',
          title: 'Polimentos Gerais',
          description:
            'Tratamento e correção de verniz para eliminar riscos superficiais e devolver brilho profundo e proteção à pintura.',
          details: 'Renovação de brilho · Acabamento espelhado',
          iconType: 'polish',
        },
        {
          id: 'recuperacao-afinacao-farois',
          number: '04',
          title: 'Recuperação e Afinação de Faróis',
          description:
            'Restauro completo da transparência das óticas e afinação precisa do feixe luminoso para máxima segurança e inspeção.',
          details: 'Recuperação de faróis com garantia de 2 anos',
          iconType: 'headlights',
        },
      ],
    },
    gallery: {
      kicker: 'PORTFÓLIO & PROCESSO',
      title: 'O nosso trabalho fala por nós.',
      subtitle:
        'Da reparação de sinistros e preparação de carroçaria à pintura personalizada com produtos SIKKENS e polimento final.',
      filterAll: 'Todos os Trabalhos',
      filterPaint: 'Pintura & Cabine',
      filterBodywork: 'Sinistros & Carroçaria',
      filterPolish: 'Polimento & Faróis',
      viewLarger: 'Ver em detalhe',
      closeLightbox: 'Fechar visualização',
      previousImage: 'Imagem anterior',
      nextImage: 'Imagem seguinte',
      items: [
        {
          id: 'work-1',
          title: 'Pintura Personalizada em Cabine Pressurizada',
          category: 'paint',
          processTag: 'Pintura Automóvel · Material Certificado SIKKENS',
          description:
            'Aplicação uniforme de pintura e verniz SIKKENS de alto brilho com controlo de temperatura e filtragem de partículas.',
          alt: 'Pintor automóvel Pedro Grazina a aplicar verniz SIKKENS numa porta dentro da cabine de pintura em Leiria',
          imageUrl: IMAGE_PATHS.paintBooth,
          aspectClass: 'aspect-[16/10]',
          spanClass: 'md:col-span-7',
        },
        {
          id: 'work-2',
          title: 'Reparação de Sinistros & Preparação de Carroçaria',
          category: 'bodywork',
          processTag: 'Sinistros · Nivelamento e Primário',
          description:
            'Recuperação de painel após sinistro com modelação rigorosa de chapa e aplicação de aparelho de alta densidade.',
          alt: 'Detalhe de reparação de sinistro e preparação de chapa num painel traseiro automóvel',
          imageUrl: IMAGE_PATHS.bodywork,
          aspectClass: 'aspect-[4/3]',
          spanClass: 'md:col-span-5',
        },
        {
          id: 'work-3',
          title: 'Polimentos Gerais & Correção de Brilho',
          category: 'polish',
          processTag: 'Polimento Geral · Acabamento Espelhado',
          description:
            'Polimento técnico multicamada para eliminar micro-imperfeições e devolver profundidade ótica à pintura.',
          alt: 'Técnico a realizar polimento geral profissional num capô pintado em cinza antracite metálico',
          imageUrl: IMAGE_PATHS.polishing,
          aspectClass: 'aspect-[4/3]',
          spanClass: 'md:col-span-5',
        },
        {
          id: 'work-4',
          title: 'Pintura Integral Cinza Grafite Metálico',
          category: 'paint',
          processTag: 'Resultado Final · Acabamento SIKKENS',
          description:
            'Acabamento final com correspondência exata de tonalidade metálica, alinhamento de folgas e profundidade de verniz.',
          alt: 'Desportivo pintado em cinza grafite metálico com acabamento brilhante na oficina em Leiria',
          imageUrl: IMAGE_PATHS.finishedCoupe,
          aspectClass: 'aspect-[16/10]',
          spanClass: 'md:col-span-7',
        },
        {
          id: 'work-5',
          title: 'BMW E30 Rally — Pintura Personalizada de Carroçaria & Rollbar',
          category: 'paint',
          processTag: 'Projeto Completo · Chapa, Rollbar & Pintura SIKKENS',
          description:
            'Preparação integral de carroçaria, pintura de estrutura tubular interior em preto brilhante e acabamento exterior em vermelho de alto brilho.',
          alt: 'BMW E30 Rally com pintura vermelha de alto brilho e rollbar preto por Pedro Grazina em Leiria',
          imageUrl: IMAGE_PATHS.e30Contour,
          aspectClass: 'aspect-[21/9]',
          spanClass: 'md:col-span-12',
        },
      ],
    },
    quote: {
      kicker: 'ORÇAMENTO & CONTACTO DIRETO — LEIRIA',
      title: 'Precisa de renovar a pintura da sua viatura?',
      subtitle:
        'Envie-nos os detalhes do seu pedido ou visite-nos na Zona Industrial da Zicofa, em Leiria, para obter um orçamento.',
      directContactTitle: 'Contacto Direto & Localização',
      directContactSubtitle:
        'Prefere falar connosco de imediato? Envie fotografias por WhatsApp, ligue diretamente ou visite a nossa oficina em Leiria.',
      whatsappCta: 'Conversar no WhatsApp',
      whatsappDirectNote: 'Resposta rápida · Pode enviar fotografias da viatura',
      phoneLabel: 'Telefone / Telemóvel',
      emailLabel: 'Email',
      addressLabel: 'Morada da Oficina',
      addressValue: 'Rua Outeiro da Rosa nº 11 (Zn Industrial da Zicofa), Leiria, Portugal',
      directionsLabel: 'Ver no Google Maps',
      scheduleLabel: 'Horário de Funcionamento',
      scheduleValue: 'Segunda a Sexta-feira: 09:00 – 18:00',
      scheduleWeekend: 'Sábado e Domingo: Encerrado',
      form: {
        nameLabel: 'Nome',
        namePlaceholder: 'O seu nome completo',
        phoneLabel: 'Telefone',
        phonePlaceholder: '+351 911 044 842',
        emailLabel: 'Email',
        emailPlaceholder: 'oseuemail@exemplo.pt',
        serviceLabel: 'Tipo de Serviço (Opcional)',
        serviceOptions: {
          customPaint: 'Pintura Personalizada / Pintura Automóvel',
          crashRepair: 'Reparações de Sinistros / Carroçaria',
          polishing: 'Polimentos Gerais',
          headlights: 'Recuperação de Faróis (Garantia 2 Anos) / Afinação',
          other: 'Outro pedido / Orçamento geral',
        },
        messageLabel: 'Mensagem',
        messagePlaceholder:
          'Descreva a marca/modelo da viatura e o serviço pretendido (pintura, reparação de sinistro, polimento ou faróis)...',
        submitButton: 'Pedir Orçamento',
        submittingButton: 'A enviar pedido...',
        responseGuarantee:
          'Os seus dados são utilizados exclusivamente para responder ao seu pedido de orçamento.',
        validation: {
          nameRequired: 'Por favor, indique o seu nome.',
          phoneRequired: 'Por favor, indique o seu número de telefone.',
          phoneInvalid: 'Introduza um número de telefone válido.',
          emailRequired: 'Por favor, indique o seu endereço de email.',
          emailInvalid: 'Introduza um endereço de email válido.',
          messageRequired:
            'Por favor, descreva brevemente o serviço pretendido.',
        },
        success: {
          title: 'Pedido de orçamento registado com sucesso.',
          message:
            'Obrigado pelo seu contacto. Analisaremos os detalhes indicados e responderemos com a maior brevidade. Se desejar enviar fotografias da viatura, pode fazê-lo diretamente via WhatsApp.',
          sendAnother: 'Enviar novo pedido',
          openWhatsappNow: 'Enviar fotografias por WhatsApp',
        },
      },
    },
    floating: {
      buttonAria: 'Contactos rápidos e WhatsApp',
      menuTitle: 'Contacto Rápido',
      whatsappLabel: 'WhatsApp Direto',
      phoneLabel: 'Ligar Agora',
      instagramLabel: 'Instagram',
      emailLabel: 'Enviar Email',
      prefilledWhatsappText:
        'Olá Pedro Grazina, gostaria de pedir um orçamento de pintura automóvel / reparação.',
    },
    footer: {
      tagline:
        'Reparações de sinistros, pintura personalizada, polimentos gerais e recuperação de faróis com material certificado SIKKENS em Leiria.',
      navigationTitle: 'Navegação',
      contactsTitle: 'Contactos',
      socialTitle: 'Redes Sociais',
      rights: 'Todos os direitos reservados.',
    },
  },

  en: {
    meta: {
      title: 'Pedro Grazina — Automotive Paint & Accident Repair in Leiria',
      description:
        'Automotive paint shop in Leiria (Zicofa), Portugal. Accident repairs, custom paintwork, full polishing, and headlight restoration (2-year warranty) with certified SIKKENS materials.',
    },
    nav: {
      services: 'Services',
      gallery: 'Gallery',
      quote: 'Quote',
      contact: 'Contact',
      requestQuote: 'Request a Quote',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
      languageLabel: 'Select language',
    },
    hero: {
      kicker: 'LEIRIA · CUSTOM PAINTWORK & ACCIDENT REPAIR',
      title: 'We bring new life to your vehicle.',
      subtitle:
        'Custom automotive painting, accident bodywork repair, general polishing, and headlight restoration using certified high-quality SIKKENS materials.',
      ctaPrimary: 'Request a Quote',
      ctaSecondary: 'View Our Work',
      trustPillars: {
        quality: 'Certified SIKKENS materials',
        precision: 'Headlight restoration (2-year warranty)',
        finish: 'Accident repair & custom paintwork',
      },
    },
    services: {
      kicker: 'CERTIFIED SIKKENS QUALITY MATERIALS',
      title: 'Our services',
      subtitle:
        'High-precision paintwork and collision repair executed with certified SIKKENS coatings for lasting durability, gloss, and color accuracy.',
      items: [
        {
          id: 'pintura-personalizada',
          number: '01',
          title: 'Custom & Full Painting',
          description:
            'Full, partial, or bespoke automotive paintwork with a flawless professional finish and exact color matching.',
          details: 'Certified SIKKENS materials · Pressurized booth',
          iconType: 'spray',
        },
        {
          id: 'reparacoes-sinistros',
          number: '02',
          title: 'Accident & Collision Repair',
          description:
            'Complete recovery of collision damage, dents, and precision panel alignment for all vehicle makes.',
          details: 'Multi-brand collision repair · Structural precision',
          iconType: 'bodywork',
        },
        {
          id: 'polimentos-gerais',
          number: '03',
          title: 'General Polishing',
          description:
            'Full clear-coat treatment and machine refinement to remove surface swirls and restore deep mirror gloss.',
          details: 'Gloss restoration · Deep optical clarity',
          iconType: 'polish',
        },
        {
          id: 'recuperacao-afinacao-farois',
          number: '04',
          title: 'Headlight Restoration & Alignment',
          description:
            'Complete optical clarity restoration and precision beam alignment for road safety and vehicle inspection.',
          details: 'Headlight restoration with a 2-year warranty',
          iconType: 'headlights',
        },
      ],
    },
    gallery: {
      kicker: 'PORTFOLIO & CRAFTSMANSHIP',
      title: 'Our work speaks for itself.',
      subtitle:
        'From collision bodywork preparation to bespoke SIKKENS booth resprays and final machine polishing in our Leiria workshop.',
      filterAll: 'All Projects',
      filterPaint: 'Paint & Booth',
      filterBodywork: 'Accident & Bodywork',
      filterPolish: 'Polishing & Detail',
      viewLarger: 'Inspect detail',
      closeLightbox: 'Close preview',
      previousImage: 'Previous image',
      nextImage: 'Next image',
      items: [
        {
          id: 'work-1',
          title: 'Custom Respray in Pressurized Booth',
          category: 'paint',
          processTag: 'Automotive Paint · Certified SIKKENS Materials',
          description:
            'Uniform high-gloss SIKKENS clear coat application under controlled temperature and particle filtration.',
          alt: 'Pedro Grazina spraying SIKKENS clear coat onto a car door inside a pressurized paint booth in Leiria',
          imageUrl: IMAGE_PATHS.paintBooth,
          aspectClass: 'aspect-[16/10]',
          spanClass: 'md:col-span-7',
        },
        {
          id: 'work-2',
          title: 'Collision Repair & Panel Preparation',
          category: 'bodywork',
          processTag: 'Accident Repair · Metal Leveling & Primer',
          description:
            'Structural panel restoration and contour shaping with seamless transition from brushed metal to high-build primer.',
          alt: 'Close-up of precision collision bodywork repair and metal preparation on a rear quarter panel',
          imageUrl: IMAGE_PATHS.bodywork,
          aspectClass: 'aspect-[4/3]',
          spanClass: 'md:col-span-5',
        },
        {
          id: 'work-3',
          title: 'General Machine Polishing & Gloss Correction',
          category: 'polish',
          processTag: 'General Polishing · Mirror Finish',
          description:
            'Multi-stage machine refinement on paintwork to eliminate surface defects and maximize gloss.',
          alt: 'Technician performing general machine polishing on a metallic anthracite hood',
          imageUrl: IMAGE_PATHS.polishing,
          aspectClass: 'aspect-[4/3]',
          spanClass: 'md:col-span-5',
        },
        {
          id: 'work-4',
          title: 'Complete Metallic Graphite Grey Refinish',
          category: 'paint',
          processTag: 'Completed Vehicle · SIKKENS Finish',
          description:
            'Finished result featuring exact metallic flake alignment, crisp body lines, and wet-look clear coat depth.',
          alt: 'Sports coupe finished in deep metallic graphite grey inside our Leiria workshop',
          imageUrl: IMAGE_PATHS.finishedCoupe,
          aspectClass: 'aspect-[16/10]',
          spanClass: 'md:col-span-7',
        },
        {
          id: 'work-5',
          title: 'BMW E30 Rally — Custom Shell & Roll Cage Refinish',
          category: 'paint',
          processTag: 'Complete Build · Body Shell, Roll Cage & SIKKENS Finish',
          description:
            'Full bare-shell preparation, gloss black tubular roll cage painting, and high-gloss crimson exterior finish.',
          alt: 'BMW E30 Rally finished in high-gloss crimson red with gloss black roll cage by Pedro Grazina',
          imageUrl: IMAGE_PATHS.e30Contour,
          aspectClass: 'aspect-[21/9]',
          spanClass: 'md:col-span-12',
        },
      ],
    },
    quote: {
      kicker: 'ESTIMATE & DIRECT CONTACT — LEIRIA',
      title: 'Need to restore your vehicle’s paintwork?',
      subtitle:
        'Send us the details of your request or visit our workshop in Zona Industrial da Zicofa, Leiria, for a personalized quote.',
      directContactTitle: 'Direct Contact & Location',
      directContactSubtitle:
        'Prefer to speak with us right away? Send photos via WhatsApp, call us directly, or visit our workshop in Leiria.',
      whatsappCta: 'Chat on WhatsApp',
      whatsappDirectNote: 'Fast reply · Feel free to send photos of your vehicle',
      phoneLabel: 'Phone / Mobile',
      emailLabel: 'Email',
      addressLabel: 'Workshop Address',
      addressValue: 'Rua Outeiro da Rosa nº 11 (Zn Industrial da Zicofa), Leiria, Portugal',
      directionsLabel: 'Open in Google Maps',
      scheduleLabel: 'Opening Hours',
      scheduleValue: 'Monday to Friday: 09:00 – 18:00',
      scheduleWeekend: 'Saturday & Sunday: Closed',
      form: {
        nameLabel: 'Name',
        namePlaceholder: 'Your full name',
        phoneLabel: 'Phone',
        phonePlaceholder: '+351 911 044 842',
        emailLabel: 'Email',
        emailPlaceholder: 'youremail@example.com',
        serviceLabel: 'Service Needed (Optional)',
        serviceOptions: {
          customPaint: 'Custom Painting / Full or Partial Respray',
          crashRepair: 'Accident & Collision Repair',
          polishing: 'General Polishing',
          headlights: 'Headlight Restoration (2-Year Warranty) & Alignment',
          other: 'Other request / General estimate',
        },
        messageLabel: 'Message',
        messagePlaceholder:
          'Describe your vehicle make/model and the service needed (custom paint, accident repair, polishing, or headlights)...',
        submitButton: 'Request a Quote',
        submittingButton: 'Sending request...',
        responseGuarantee:
          'Your information is used strictly to reply to your quote request.',
        validation: {
          nameRequired: 'Please enter your name.',
          phoneRequired: 'Please enter your phone number.',
          phoneInvalid: 'Please enter a valid phone number.',
          emailRequired: 'Please enter your email address.',
          emailInvalid: 'Please enter a valid email address.',
          messageRequired: 'Please briefly describe the service you need.',
        },
        success: {
          title: 'Quote request received.',
          message:
            'Thank you for reaching out. We will review your request details and get back to you promptly. If you would like to share photos of your vehicle, you can send them directly via WhatsApp.',
          sendAnother: 'Submit another request',
          openWhatsappNow: 'Send vehicle photos via WhatsApp',
        },
      },
    },
    floating: {
      buttonAria: 'Quick contact options and WhatsApp',
      menuTitle: 'Quick Contact',
      whatsappLabel: 'Direct WhatsApp',
      phoneLabel: 'Call Now',
      instagramLabel: 'Instagram',
      emailLabel: 'Send Email',
      prefilledWhatsappText:
        'Hello Pedro Grazina, I would like to request a quote for automotive painting / bodywork repair.',
    },
    footer: {
      tagline:
        'Accident repairs, custom paintwork, general polishing, and headlight restoration with certified SIKKENS materials in Leiria.',
      navigationTitle: 'Navigation',
      contactsTitle: 'Contact',
      socialTitle: 'Social',
      rights: 'All rights reserved.',
    },
  },

  fr: {
    meta: {
      title: 'Pedro Grazina — Peinture Automobile & Sinistres à Leiria',
      description:
        'Atelier à Leiria (Zicofa), Portugal spécialisé en peinture personnalisée, réparation de sinistres, polissage général et rénovation de phares (garantie 2 ans) avec produits certifiés SIKKENS.',
    },
    nav: {
      services: 'Services',
      gallery: 'Galerie',
      quote: 'Devis',
      contact: 'Contact',
      requestQuote: 'Demander un Devis',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      openMenu: 'Ouvrir le menu de navigation',
      closeMenu: 'Fermer le menu de navigation',
      languageLabel: 'Choisir la langue',
    },
    hero: {
      kicker: 'LEIRIA · PEINTURE PERSONNALISÉE & RÉPARATION DE SINISTRES',
      title: 'Nous redonnons vie à votre véhicule.',
      subtitle:
        'Peinture personnalisée, réparation de sinistres, polissage général et rénovation de phares avec finition professionnelle et produits certifiés SIKKENS.',
      ctaPrimary: 'Demander un Devis',
      ctaSecondary: 'Voir nos Réalisations',
      trustPillars: {
        quality: 'Produits certifiés SIKKENS',
        precision: 'Rénovation de phares (Garantie 2 ans)',
        finish: 'Réparation de sinistres & peinture sur mesure',
      },
    },
    services: {
      kicker: 'MATÉRIAUX CERTIFIÉS SIKKENS DE HAUTE QUALITÉ',
      title: 'Nos services',
      subtitle:
        'Interventions rigoureuses avec des matériaux certifiés SIKKENS de première qualité, garantissant durabilité, brillance et précision.',
      items: [
        {
          id: 'pintura-personalizada',
          number: '01',
          title: 'Peinture Personnalisée',
          description:
            'Peinture automobile complète, partielle ou personnalisée avec finition professionnelle et correspondance exacte des teintes.',
          details: 'Matériaux certifiés SIKKENS · Cabine pressurisée',
          iconType: 'spray',
        },
        {
          id: 'reparacoes-sinistros',
          number: '02',
          title: 'Réparations de Sinistres',
          description:
            'Remise en état complète après accident, débosselage et alignement précis des éléments de carrosserie.',
          details: 'Réparation multimarque · Rigueur structurelle',
          iconType: 'bodywork',
        },
        {
          id: 'polimentos-gerais',
          number: '03',
          title: 'Polissages Généraux',
          description:
            'Traitement complet et correction du vernis pour éliminer les micro-rayures et redonner un éclat miroir durable.',
          details: 'Rénovation de brillance · Profondeur optique',
          iconType: 'polish',
        },
        {
          id: 'recuperacao-afinacao-farois',
          number: '04',
          title: 'Rénovation et Réglage de Phares',
          description:
            'Restauration complète de la transparence des optiques et réglage précis du faisceau lumineux pour le contrôle technique.',
          details: 'Rénovation de phares avec garantie de 2 ans',
          iconType: 'headlights',
        },
      ],
    },
    gallery: {
      kicker: 'PORTFOLIO & RÉALISATIONS',
      title: 'Notre travail parle de lui-même.',
      subtitle:
        'De la réparation de sinistres à l’application de peinture SIKKENS en cabine pressurisée jusqu’au polissage final dans notre atelier à Leiria.',
      filterAll: 'Toutes les Réalisations',
      filterPaint: 'Peinture & Cabine',
      filterBodywork: 'Sinistres & Carrosserie',
      filterPolish: 'Polissage & Détail',
      viewLarger: 'Voir en détail',
      closeLightbox: 'Fermer l’aperçu',
      previousImage: 'Image précédente',
      nextImage: 'Image suivante',
      items: [
        {
          id: 'work-1',
          title: 'Peinture Personnalisée en Cabine Pressurisée',
          category: 'paint',
          processTag: 'Peinture Automobile · Produits Certifiés SIKKENS',
          description:
            'Application homogène de vernis SIKKENS haute brillance sous température contrôlée et filtration des particules.',
          alt: 'Peintre automobile Pedro Grazina appliquant du vernis SIKKENS en cabine à Leiria',
          imageUrl: IMAGE_PATHS.paintBooth,
          aspectClass: 'aspect-[16/10]',
          spanClass: 'md:col-span-7',
        },
        {
          id: 'work-2',
          title: 'Réparation de Sinistres & Préparation Tôlerie',
          category: 'bodywork',
          processTag: 'Sinistres · Dressage et Apprêt',
          description:
            'Remise en forme du panneau arrière après sinistre avec transition parfaite entre la tôle brossée et l’apprêt.',
          alt: 'Gros plan sur une réparation de carrosserie et préparation de tôle sur une aile arrière',
          imageUrl: IMAGE_PATHS.bodywork,
          aspectClass: 'aspect-[4/3]',
          spanClass: 'md:col-span-5',
        },
        {
          id: 'work-3',
          title: 'Polissage Général & Correction de Brillance',
          category: 'polish',
          processTag: 'Polissage Général · Finition Miroir',
          description:
            'Affinage mécanique de la surface vernie pour éliminer les défauts et obtenir une réflexion cristalline.',
          alt: 'Technicien effectuant un polissage général sur un capot gris anthracite métallisé',
          imageUrl: IMAGE_PATHS.polishing,
          aspectClass: 'aspect-[4/3]',
          spanClass: 'md:col-span-5',
        },
        {
          id: 'work-4',
          title: 'Peinture Complète Gris Graphite Métallisé',
          category: 'paint',
          processTag: 'Véhicule Terminé · Finition SIKKENS',
          description:
            'Résultat final avec correspondance exacte de la teinte métallisée, alignement précis et profondeur du vernis.',
          alt: 'Coupé sportif peint en gris graphite métallisé dans notre atelier à Leiria',
          imageUrl: IMAGE_PATHS.finishedCoupe,
          aspectClass: 'aspect-[16/10]',
          spanClass: 'md:col-span-7',
        },
        {
          id: 'work-5',
          title: 'BMW E30 Rally — Peinture Intégrale Caisse & Arceau',
          category: 'paint',
          processTag: 'Projet Complet · Caisse, Arceau Noir & Finition SIKKENS',
          description:
            'Préparation complète de la caisse, peinture de l’arceau tubulaire en noir brillant et finition extérieure rouge haute brillance.',
          alt: 'BMW E30 Rally avec peinture rouge haute brillance et arceau noir par Pedro Grazina à Leiria',
          imageUrl: IMAGE_PATHS.e30Contour,
          aspectClass: 'aspect-[21/9]',
          spanClass: 'md:col-span-12',
        },
      ],
    },
    quote: {
      kicker: 'DEVIS & CONTACT DIRECT — LEIRIA',
      title: 'Besoin de rénover la peinture de votre véhicule ?',
      subtitle:
        'Envoyez-nous les détails de votre demande ou rendez-nous visite dans la Zone Industrielle da Zicofa, à Leiria, pour obtenir un devis.',
      directContactTitle: 'Contact Direct & Localisation',
      directContactSubtitle:
        'Vous préférez nous parler immédiatement ? Envoyez des photos sur WhatsApp, appelez-nous ou passez à notre atelier à Leiria.',
      whatsappCta: 'Discuter sur WhatsApp',
      whatsappDirectNote:
        'Réponse rapide · Vous pouvez envoyer des photos du véhicule',
      phoneLabel: 'Téléphone / Mobile',
      emailLabel: 'Email',
      addressLabel: 'Adresse de l’Atelier',
      addressValue: 'Rua Outeiro da Rosa nº 11 (Zn Industrial da Zicofa), Leiria, Portugal',
      directionsLabel: 'Voir sur Google Maps',
      scheduleLabel: 'Horaires d’Ouverture',
      scheduleValue: 'Lundi au Vendredi : 09h00 – 18h00',
      scheduleWeekend: 'Samedi et Dimanche : Fermé',
      form: {
        nameLabel: 'Nom',
        namePlaceholder: 'Votre nom complet',
        phoneLabel: 'Téléphone',
        phonePlaceholder: '+351 911 044 842',
        emailLabel: 'Email',
        emailPlaceholder: 'votreemail@exemple.fr',
        serviceLabel: 'Service Souhaité (Optionnel)',
        serviceOptions: {
          customPaint: 'Peinture Personnalisée / Peinture Automobile',
          crashRepair: 'Réparations de Sinistres / Carrosserie',
          polishing: 'Polissages Généraux',
          headlights: 'Rénovation de Phares (Garantie 2 Ans) & Réglage',
          other: 'Autre demande / Devis général',
        },
        messageLabel: 'Message',
        messagePlaceholder:
          'Indiquez la marque/modèle du véhicule et la prestation souhaitée (peinture personnalisée, sinistre, polissage ou phares)...',
        submitButton: 'Demander un Devis',
        submittingButton: 'Envoi en cours...',
        responseGuarantee:
          'Vos coordonnées sont utilisées uniquement pour répondre à votre demande de devis.',
        validation: {
          nameRequired: 'Veuillez indiquer votre nom.',
          phoneRequired: 'Veuillez indiquer votre numéro de téléphone.',
          phoneInvalid: 'Veuillez saisir un numéro de téléphone valide.',
          emailRequired: 'Veuillez indiquer votre adresse email.',
          emailInvalid: 'Veuillez saisir une adresse email valide.',
          messageRequired:
            'Veuillez décrire brièvement la prestation souhaitée.',
        },
        success: {
          title: 'Demande de devis envoyée avec succès.',
          message:
            'Merci de nous avoir contactés. Nous analyserons votre demande et vous répondrons dans les plus brefs délais. Si vous souhaitez partager des photos de votre véhicule, vous pouvez les envoyer directement via WhatsApp.',
          sendAnother: 'Envoyer une nouvelle demande',
          openWhatsappNow: 'Envoyer des photos sur WhatsApp',
        },
      },
    },
    floating: {
      buttonAria: 'Contacts rapides et WhatsApp',
      menuTitle: 'Contact Rapide',
      whatsappLabel: 'WhatsApp Direct',
      phoneLabel: 'Appeler Maintenant',
      instagramLabel: 'Instagram',
      emailLabel: 'Envoyer un Email',
      prefilledWhatsappText:
        'Bonjour Pedro Grazina, je souhaiterais demander un devis pour une peinture / réparation automobile.',
    },
    footer: {
      tagline:
        'Réparations de sinistres, peinture personnalisée, polissages généraux et rénovation de phares avec produits certifiés SIKKENS à Leiria.',
      navigationTitle: 'Navigation',
      contactsTitle: 'Contacts',
      socialTitle: 'Réseaux Sociaux',
      rights: 'Tous droits réservés.',
    },
  },
};
