export type Language = 'pt' | 'en' | 'fr';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string;
  iconType: 'spray' | 'bodywork' | 'parts' | 'polish';
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
    scheduleLabel: string;
    scheduleValue: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      serviceLabel: string;
      serviceOptions: {
        fullPaint: string;
        bodyRepair: string;
        partsPaint: string;
        polishing: string;
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
  phoneHref: 'tel:+351911044842',
  whatsappNumber: '351911044842',
  email: 'contacto@pedrograzina.pt',
  instagramUrl: 'https://instagram.com',
  instagramHandle: '@pedrograzina.pintura',
};

export const HERO_IMAGE = IMAGE_PATHS.hero;

export const translations: Record<Language, Translations> = {
  pt: {
    meta: {
      title: 'Pedro Grazina — Pintura Automóvel & Reparação de Carroçarias',
      description:
        'Pintura automóvel e reparação de carroçarias com acabamento profissional e atenção ao detalhe em Portugal.',
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
      kicker: 'PINTURA AUTOMÓVEL · REPARAÇÃO DE CARROÇARIAS',
      title: 'Damos uma nova vida à sua viatura.',
      subtitle:
        'Pintura automóvel e reparação de carroçarias com acabamento profissional e atenção ao detalhe.',
      ctaPrimary: 'Pedir Orçamento',
      ctaSecondary: 'Ver Trabalhos',
      trustPillars: {
        quality: 'Afinação exata de cor',
        precision: 'Cabine de pintura pressurizada',
        finish: 'Acabamento de origem e rigor técnico',
      },
    },
    services: {
      kicker: 'ESPECIALIDADES TÉCNICAS',
      title: 'Os nossos serviços',
      subtitle:
        'Intervenções rigorosas em pintura e chapa, executadas com materiais de elevada durabilidade e controlo exigente em cada etapa.',
      items: [
        {
          id: 'pintura-automovel',
          number: '01',
          title: 'Pintura Automóvel',
          description:
            'Pintura completa ou parcial com acabamento profissional e correspondência de cor.',
          details: 'Estufa controlada · Vernizes de alto sólido',
          iconType: 'spray',
        },
        {
          id: 'reparacao-carrocaria',
          number: '02',
          title: 'Reparação de Carroçaria',
          description:
            'Reparação de danos, amolgadelas e elementos da carroçaria.',
          details: 'Alinhamento de painéis · Nivelamento de precisão',
          iconType: 'bodywork',
        },
        {
          id: 'pintura-pecas',
          number: '03',
          title: 'Pintura de Peças',
          description:
            'Pintura de para-choques, portas, capôs, guarda-lamas e outros componentes.',
          details: 'Plásticos, alumínio e aço · Textura original',
          iconType: 'parts',
        },
        {
          id: 'polimento-acabamento',
          number: '04',
          title: 'Polimento e Acabamento',
          description:
            'Tratamento e acabamento para devolver brilho e qualidade à pintura.',
          details: 'Correção de verniz · Proteção e profundidade ótica',
          iconType: 'polish',
        },
      ],
    },
    gallery: {
      kicker: 'PORTFÓLIO & PROCESSO',
      title: 'O nosso trabalho fala por nós.',
      subtitle:
        'Da preparação de chapa à aplicação de verniz em estufa e polimento final. Cada viatura recebe um tratamento meticuloso.',
      filterAll: 'Todos os Trabalhos',
      filterPaint: 'Pintura & Cabine',
      filterBodywork: 'Carroçaria',
      filterPolish: 'Acabamento & Detalhe',
      viewLarger: 'Ver em detalhe',
      closeLightbox: 'Fechar visualização',
      previousImage: 'Imagem anterior',
      nextImage: 'Imagem seguinte',
      items: [
        {
          id: 'work-1',
          title: 'Pintura Integral em Cabine Pressurizada',
          category: 'paint',
          processTag: 'Pintura Automóvel · Aplicação de Verniz',
          description:
            'Aplicação uniforme de verniz cerâmico de alto brilho com controlo de temperatura e filtragem de partículas.',
          alt: 'Pintor automóvel profissional a aplicar verniz numa porta dentro da cabine de pintura',
          imageUrl: IMAGE_PATHS.paintBooth,
          aspectClass: 'aspect-[16/10]',
          spanClass: 'md:col-span-7',
        },
        {
          id: 'work-2',
          title: 'Reparação de Guarda-Lamas & Preparação de Chapa',
          category: 'bodywork',
          processTag: 'Carroçaria · Nivelamento e Primário',
          description:
            'Recuperação estrutural e modelação de painel traseiro com transição perfeita entre chapa viva e aparelho.',
          alt: 'Detalhe de reparação de carroçaria e preparação de chapa num painel traseiro automóvel',
          imageUrl: IMAGE_PATHS.bodywork,
          aspectClass: 'aspect-[4/3]',
          spanClass: 'md:col-span-5',
        },
        {
          id: 'work-3',
          title: 'Polimento Técnico & Correção de Brilho',
          category: 'polish',
          processTag: 'Polimento · Acabamento Espelhado',
          description:
            'Refinamento multicamada da superfície pintada para eliminar micro-imperfeições e garantir reflexo cristalino.',
          alt: 'Técnico a realizar polimento profissional num capô pintado em cinza antracite metálico',
          imageUrl: IMAGE_PATHS.polishing,
          aspectClass: 'aspect-[4/3]',
          spanClass: 'md:col-span-5',
        },
        {
          id: 'work-4',
          title: 'Repintura Completa Cinza Grafite Metálico',
          category: 'paint',
          processTag: 'Resultado Final · Viatura Concluída',
          description:
            'Acabamento final com correspondência exata de tonalidade metálica, alinhamento de folgas e profundidade de cor.',
          alt: 'Desportivo pintado em cinza grafite metálico com acabamento brilhante em estúdio',
          imageUrl: IMAGE_PATHS.finishedCoupe,
          aspectClass: 'aspect-[16/10]',
          spanClass: 'md:col-span-7',
        },
        {
          id: 'work-5',
          title: 'BMW E30 Rally — Pintura Integral de Carroçaria & Rollbar',
          category: 'paint',
          processTag: 'Projeto Completo · Chapa, Rollbar & Pintura Vermelha',
          description:
            'Preparação integral de carroçaria, pintura de estrutura tubular interior em preto brilhante e acabamento exterior em vermelho de alto brilho.',
          alt: 'BMW E30 Rally com pintura vermelha de alto brilho e rollbar preto em estúdio Pedro Grazina',
          imageUrl: IMAGE_PATHS.e30Contour,
          aspectClass: 'aspect-[21/9]',
          spanClass: 'md:col-span-12',
        },
      ],
    },
    quote: {
      kicker: 'ORÇAMENTO & CONTACTO DIRETO',
      title: 'Precisa de renovar a pintura da sua viatura?',
      subtitle:
        'Envie-nos os detalhes do seu pedido e entre em contacto connosco para obter um orçamento.',
      directContactTitle: 'Contacto Direto',
      directContactSubtitle:
        'Prefere falar connosco de imediato? Envie fotografias dos danos por WhatsApp ou ligue diretamente para uma avaliação rápida.',
      whatsappCta: 'Conversar no WhatsApp',
      whatsappDirectNote: 'Resposta rápida · Pode enviar fotografias da viatura',
      phoneLabel: 'Telefone / Telemóvel',
      emailLabel: 'Email Profissional',
      scheduleLabel: 'Atendimento',
      scheduleValue: 'Segunda a Sexta · 08:30 – 18:30 | Sábado por marcação',
      form: {
        nameLabel: 'Nome',
        namePlaceholder: 'O seu nome completo',
        phoneLabel: 'Telefone',
        phonePlaceholder: '+351 912 345 678',
        emailLabel: 'Email',
        emailPlaceholder: 'oseuemail@exemplo.pt',
        serviceLabel: 'Tipo de Serviço (Opcional)',
        serviceOptions: {
          fullPaint: 'Pintura Automóvel (Completa ou Parcial)',
          bodyRepair: 'Reparação de Carroçaria / Amolgadelas',
          partsPaint: 'Pintura de Peças (Para-choques, Capô, Portas)',
          polishing: 'Polimento e Acabamento',
          other: 'Outro pedido / Avaliação geral',
        },
        messageLabel: 'Mensagem',
        messagePlaceholder:
          'Descreva a marca/modelo da viatura e as peças ou danos que pretende reparar ou pintar...',
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
        'Olá Pedro Grazina, gostaria de pedir um orçamento de pintura / reparação automóvel.',
    },
    footer: {
      tagline:
        'Especialistas em pintura automóvel, reparação de carroçarias e acabamento de precisão.',
      navigationTitle: 'Navegação',
      contactsTitle: 'Contactos',
      socialTitle: 'Redes Sociais',
      rights: 'Todos os direitos reservados.',
    },
  },

  en: {
    meta: {
      title: 'Pedro Grazina — Automotive Paint & Bodywork Repair',
      description:
        'Professional automotive painting, bodywork repair, parts refinishing, and precision polishing with meticulous attention to detail.',
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
      kicker: 'AUTOMOTIVE PAINTWORK · BODYSHOP SPECIALISTS',
      title: 'We bring new life to your vehicle.',
      subtitle:
        'Professional automotive painting and bodywork repair delivered with factory-grade finish and meticulous attention to detail.',
      ctaPrimary: 'Request a Quote',
      ctaSecondary: 'View Our Work',
      trustPillars: {
        quality: 'Precision color matching',
        precision: 'Pressurized spray booth',
        finish: 'Factory-grade finish & durability',
      },
    },
    services: {
      kicker: 'CORE CAPABILITIES',
      title: 'Our services',
      subtitle:
        'High-precision paintwork and body repair executed with durable OEM-grade coatings and strict quality control at every stage.',
      items: [
        {
          id: 'pintura-automovel',
          number: '01',
          title: 'Automotive Painting',
          description:
            'Full or partial resprays with a flawless professional finish and exact color matching.',
          details: 'Climate-controlled booth · High-solid clear coats',
          iconType: 'spray',
        },
        {
          id: 'reparacao-carrocaria',
          number: '02',
          title: 'Bodywork Repair',
          description:
            'Expert repair of collision damage, dents, creases, and structural body panels.',
          details: 'Panel alignment · Precision surface leveling',
          iconType: 'bodywork',
        },
        {
          id: 'pintura-pecas',
          number: '03',
          title: 'Parts Painting',
          description:
            'Dedicated refinishing for bumpers, doors, hoods, fenders, mirrors, and trim components.',
          details: 'Plastics, aluminum & steel · OEM texture matching',
          iconType: 'parts',
        },
        {
          id: 'polimento-acabamento',
          number: '04',
          title: 'Polishing & Finishing',
          description:
            'Multi-stage paint treatment and refinement to restore deep gloss and optical clarity.',
          details: 'Clear coat correction · Deep mirror reflection',
          iconType: 'polish',
        },
      ],
    },
    gallery: {
      kicker: 'PORTFOLIO & CRAFTSMANSHIP',
      title: 'Our work speaks for itself.',
      subtitle:
        'From bare-metal panel preparation to pressurized booth clear-coating and final machine polishing. Every vehicle receives uncompromising care.',
      filterAll: 'All Projects',
      filterPaint: 'Paint & Booth',
      filterBodywork: 'Bodywork',
      filterPolish: 'Finishing & Detail',
      viewLarger: 'Inspect detail',
      closeLightbox: 'Close preview',
      previousImage: 'Previous image',
      nextImage: 'Next image',
      items: [
        {
          id: 'work-1',
          title: 'Full Booth Respray & Clear Coat Application',
          category: 'paint',
          processTag: 'Automotive Paint · Booth Application',
          description:
            'Uniform high-gloss ceramic clear coat application under controlled temperature and particle filtration.',
          alt: 'Professional automotive painter spraying clear coat onto a car door inside a pressurized paint booth',
          imageUrl: IMAGE_PATHS.paintBooth,
          aspectClass: 'aspect-[16/10]',
          spanClass: 'md:col-span-7',
        },
        {
          id: 'work-2',
          title: 'Rear Quarter Panel Shaping & Primer Surfacer',
          category: 'bodywork',
          processTag: 'Bodywork · Metal Leveling & Primer',
          description:
            'Structural panel restoration and contour shaping with seamless transition from brushed metal to matte primer.',
          alt: 'Close-up of precision bodywork repair and metal preparation on a rear quarter panel',
          imageUrl: IMAGE_PATHS.bodywork,
          aspectClass: 'aspect-[4/3]',
          spanClass: 'md:col-span-5',
        },
        {
          id: 'work-3',
          title: 'Multi-Stage Machine Polishing & Gloss Correction',
          category: 'polish',
          processTag: 'Polishing · Mirror Finish',
          description:
            'Fine rotary and dual-action refinement on freshly cured paintwork to eliminate micro-defects and maximize gloss.',
          alt: 'Technician machine polishing a freshly painted metallic anthracite hood',
          imageUrl: IMAGE_PATHS.polishing,
          aspectClass: 'aspect-[4/3]',
          spanClass: 'md:col-span-5',
        },
        {
          id: 'work-4',
          title: 'Complete Metallic Graphite Grey Refinish',
          category: 'paint',
          processTag: 'Completed Vehicle · Final Inspection',
          description:
            'Finished result featuring exact metallic flake alignment, crisp body lines, and wet-look clear coat depth.',
          alt: 'Sports coupe finished in deep metallic graphite grey inside an inspection studio',
          imageUrl: IMAGE_PATHS.finishedCoupe,
          aspectClass: 'aspect-[16/10]',
          spanClass: 'md:col-span-7',
        },
        {
          id: 'work-5',
          title: 'BMW E30 Rally — Full Shell & Roll Cage Refinish',
          category: 'paint',
          processTag: 'Complete Build · Body Shell, Roll Cage & Crimson Finish',
          description:
            'Full bare-shell preparation, gloss black tubular roll cage painting, and high-gloss crimson exterior finish under studio inspection.',
          alt: 'BMW E30 Rally finished in high-gloss crimson red with gloss black roll cage in studio',
          imageUrl: IMAGE_PATHS.e30Contour,
          aspectClass: 'aspect-[21/9]',
          spanClass: 'md:col-span-12',
        },
      ],
    },
    quote: {
      kicker: 'ESTIMATE & DIRECT CONTACT',
      title: 'Need to restore your vehicle’s paintwork?',
      subtitle:
        'Send us the details of your request and get in touch with us for a personalized quote.',
      directContactTitle: 'Direct Contact',
      directContactSubtitle:
        'Prefer to speak with us right away? Send photos of the damage via WhatsApp or call us directly for a fast assessment.',
      whatsappCta: 'Chat on WhatsApp',
      whatsappDirectNote: 'Fast reply · Feel free to send photos of your vehicle',
      phoneLabel: 'Phone / Mobile',
      emailLabel: 'Business Email',
      scheduleLabel: 'Working Hours',
      scheduleValue: 'Monday to Friday · 08:30 – 18:30 | Saturday by appointment',
      form: {
        nameLabel: 'Name',
        namePlaceholder: 'Your full name',
        phoneLabel: 'Phone',
        phonePlaceholder: '+351 912 345 678',
        emailLabel: 'Email',
        emailPlaceholder: 'youremail@example.com',
        serviceLabel: 'Service Needed (Optional)',
        serviceOptions: {
          fullPaint: 'Automotive Painting (Full or Partial)',
          bodyRepair: 'Bodywork & Dent Repair',
          partsPaint: 'Parts Painting (Bumpers, Hood, Doors)',
          polishing: 'Polishing & Paint Refinement',
          other: 'Other request / General assessment',
        },
        messageLabel: 'Message',
        messagePlaceholder:
          'Describe your vehicle make/model and the panels or damage you would like repaired or painted...',
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
        'Specialists in automotive painting, bodywork repair, and precision finishing.',
      navigationTitle: 'Navigation',
      contactsTitle: 'Contact',
      socialTitle: 'Social',
      rights: 'All rights reserved.',
    },
  },

  fr: {
    meta: {
      title: 'Pedro Grazina — Peinture Automobile & Réparation de Carrosserie',
      description:
        'Atelier spécialisé en peinture automobile, réparation de carrosserie, peinture de pièces et polissage professionnel avec le souci du détail.',
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
      kicker: 'PEINTURE AUTOMOBILE · RÉPARATION DE CARROSSERIE',
      title: 'Nous redonnons vie à votre véhicule.',
      subtitle:
        'Peinture automobile et réparation de carrosserie avec une finition professionnelle et un souci absolu du détail.',
      ctaPrimary: 'Demander un Devis',
      ctaSecondary: 'Voir nos Réalisations',
      trustPillars: {
        quality: 'Colorimétrie de haute précision',
        precision: 'Cabine de peinture pressurisée',
        finish: 'Finition d’origine et haute durabilité',
      },
    },
    services: {
      kicker: 'SAVOIR-FAIRE TECHNIQUE',
      title: 'Nos services',
      subtitle:
        'Interventions de haute précision en peinture et tôlerie, réalisées avec des matériaux durables et un contrôle rigoureux à chaque étape.',
      items: [
        {
          id: 'pintura-automovel',
          number: '01',
          title: 'Peinture Automobile',
          description:
            'Peinture complète ou partielle avec finition professionnelle et correspondance exacte des teintes.',
          details: 'Cabine climatisée · Vernis hauts solides',
          iconType: 'spray',
        },
        {
          id: 'reparacao-carrocaria',
          number: '02',
          title: 'Réparation de Carrosserie',
          description:
            'Réparation des dommages, bosses, impacts et éléments structurels de carrosserie.',
          details: 'Alignement des panneaux · Dressage de précision',
          iconType: 'bodywork',
        },
        {
          id: 'pintura-pecas',
          number: '03',
          title: 'Peinture de Pièces',
          description:
            'Peinture de pare-chocs, portières, capots, ailes, rétroviseurs et autres composants.',
          details: 'Plastiques, aluminium et acier · Grain d’origine',
          iconType: 'parts',
        },
        {
          id: 'polimento-acabamento',
          number: '04',
          title: 'Polissage et Finition',
          description:
            'Traitement et finition soignée pour redonner éclat, profondeur et qualité à la peinture.',
          details: 'Correction du vernis · Brillance miroir durable',
          iconType: 'polish',
        },
      ],
    },
    gallery: {
      kicker: 'PORTFOLIO & RÉALISATIONS',
      title: 'Notre travail parle de lui-même.',
      subtitle:
        'De la préparation de la tôle à l’application du vernis en cabine pressurisée jusqu’au lustrage final. Chaque véhicule fait l’objet d’un soin méticuleux.',
      filterAll: 'Toutes les Réalisations',
      filterPaint: 'Peinture & Cabine',
      filterBodywork: 'Carrosserie',
      filterPolish: 'Finition & Détail',
      viewLarger: 'Voir en détail',
      closeLightbox: 'Fermer l’aperçu',
      previousImage: 'Image précédente',
      nextImage: 'Image suivante',
      items: [
        {
          id: 'work-1',
          title: 'Peinture Intégrale en Cabine Pressurisée',
          category: 'paint',
          processTag: 'Peinture Automobile · Application de Vernis',
          description:
            'Application homogène de vernis céramique haute brillance sous température contrôlée et filtration des particules.',
          alt: 'Peintre automobile professionnel appliquant du vernis sur une portière en cabine',
          imageUrl: IMAGE_PATHS.paintBooth,
          aspectClass: 'aspect-[16/10]',
          spanClass: 'md:col-span-7',
        },
        {
          id: 'work-2',
          title: 'Réparation d’Aile Arrière & Préparation Tôlerie',
          category: 'bodywork',
          processTag: 'Carrosserie · Dressage et Apprêt',
          description:
            'Remise en forme du panneau arrière avec transition parfaite entre la tôle brossée et l’apprêt de finition.',
          alt: 'Gros plan sur une réparation de carrosserie et préparation de tôle sur une aile arrière',
          imageUrl: IMAGE_PATHS.bodywork,
          aspectClass: 'aspect-[4/3]',
          spanClass: 'md:col-span-5',
        },
        {
          id: 'work-3',
          title: 'Polissage Technique & Correction de Brillance',
          category: 'polish',
          processTag: 'Polissage · Finition Miroir',
          description:
            'Affinage mécanique de la surface vernie pour éliminer les micro-défauts et obtenir une réflexion cristalline.',
          alt: 'Technicien effectuant un polissage professionnel sur un capot gris anthracite métallisé',
          imageUrl: IMAGE_PATHS.polishing,
          aspectClass: 'aspect-[4/3]',
          spanClass: 'md:col-span-5',
        },
        {
          id: 'work-4',
          title: 'Peinture Complète Gris Graphite Métallisé',
          category: 'paint',
          processTag: 'Véhicule Terminé · Contrôle Final',
          description:
            'Résultat final avec correspondance exacte de la teinte métallisée, alignement précis et profondeur du vernis.',
          alt: 'Coupé sportif peint en gris graphite métallisé avec finition brillante en atelier',
          imageUrl: IMAGE_PATHS.finishedCoupe,
          aspectClass: 'aspect-[16/10]',
          spanClass: 'md:col-span-7',
        },
        {
          id: 'work-5',
          title: 'BMW E30 Rally — Peinture Intégrale Caisse & Arceau',
          category: 'paint',
          processTag: 'Projet Complet · Caisse, Arceau Noir & Rouge Brillant',
          description:
            'Préparation complète de la caisse, peinture de l’arceau tubulaire en noir brillant et finition extérieure rouge haute brillance.',
          alt: 'BMW E30 Rally avec peinture rouge haute brillance et arceau noir en atelier Pedro Grazina',
          imageUrl: IMAGE_PATHS.e30Contour,
          aspectClass: 'aspect-[21/9]',
          spanClass: 'md:col-span-12',
        },
      ],
    },
    quote: {
      kicker: 'DEVIS & CONTACT DIRECT',
      title: 'Besoin de rénover la peinture de votre véhicule ?',
      subtitle:
        'Envoyez-nous les détails de votre demande et contactez-nous pour obtenir un devis personnalisé.',
      directContactTitle: 'Contact Direct',
      directContactSubtitle:
        'Vous préférez nous parler immédiatement ? Envoyez des photos des dommages sur WhatsApp ou appelez-nous directement pour une évaluation rapide.',
      whatsappCta: 'Discuter sur WhatsApp',
      whatsappDirectNote:
        'Réponse rapide · Vous pouvez envoyer des photos du véhicule',
      phoneLabel: 'Téléphone / Mobile',
      emailLabel: 'Email Professionnel',
      scheduleLabel: 'Horaires',
      scheduleValue:
        'Lundi au Vendredi · 08h30 – 18h30 | Samedi sur rendez-vous',
      form: {
        nameLabel: 'Nom',
        namePlaceholder: 'Votre nom complet',
        phoneLabel: 'Téléphone',
        phonePlaceholder: '+351 912 345 678',
        emailLabel: 'Email',
        emailPlaceholder: 'votreemail@exemple.fr',
        serviceLabel: 'Service Souhaité (Optionnel)',
        serviceOptions: {
          fullPaint: 'Peinture Automobile (Complète ou Partielle)',
          bodyRepair: 'Réparation de Carrosserie / Débosselage',
          partsPaint: 'Peinture de Pièces (Pare-chocs, Capot, Portières)',
          polishing: 'Polissage et Finition',
          other: 'Autre demande / Évaluation générale',
        },
        messageLabel: 'Message',
        messagePlaceholder:
          'Indiquez la marque/modèle du véhicule ainsi que les pièces ou dommages à réparer ou peindre...',
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
        'Bonjour Pedro Grazina, je souhaiterais demander un devis pour une peinture / réparation de carrosserie.',
    },
    footer: {
      tagline:
        'Spécialistes en peinture automobile, réparation de carrosserie et finition de haute précision.',
      navigationTitle: 'Navigation',
      contactsTitle: 'Contacts',
      socialTitle: 'Réseaux Sociaux',
      rights: 'Tous droits réservés.',
    },
  },
};
