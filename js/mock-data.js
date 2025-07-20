const mockData = {
  company: {
    name: "Fikasso Security SAS",
    tagline: "Digitalization & Security Solutions",
    description: "Startup spécialisée dans la digitalisation et la sécurisation des entreprises basée à Ouagadougou, Burkina Faso",
    phone: "+226 XX XX XX XX",
    email: "contact@fikassotech.com",
    website: "https://fikassotech.com",
    address: "Ouagadougou, Burkina Faso",
    founded: "2020",
    mission: "Accompagner les entreprises dans leur transformation numérique en offrant des solutions personnalisées et sécurisées"
  },

  services: [
    {
      id: 1,
      title: "Technologie Sécuritaire Biométrique",
      description: "Mise en place de systèmes de reconnaissance biométrique pour renforcer la sécurité des accès",
      icon: "fas fa-fingerprint",
      image: "https://images.unsplash.com/photo-1496368077930-c1e31b4e5b44?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eXxlbnwwfHx8fDE3NTI4NDQ1MDV8MA&ixlib=rb-4.1.0&q=85",
      features: ["Reconnaissance faciale", "Empreintes digitales", "Contrôle d'accès", "Authentification multi-facteurs"]
    },
    {
      id: 2,
      title: "Gestion et Sécurisation des Données",
      description: "Solutions pour protéger les informations critiques de l'entreprise",
      icon: "fas fa-database",
      image: "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxzZWN1cml0eXxlbnwwfHx8fDE3NTI4NDQ1MDV8MA&ixlib=rb-4.1.0&q=85",
      features: ["Chiffrement des données", "Sauvegarde sécurisée", "Conformité RGPD", "Audit de sécurité"]
    },
    {
      id: 3,
      title: "Solutions Digitales IA",
      description: "Création de logiciels et d'applications sur mesure utilisant des technologies avancées",
      icon: "fas fa-brain",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5fGVufDB8fHx8MTc1Mjc0OTk3M3ww&ixlib=rb-4.1.0&q=85",
      features: ["Intelligence artificielle", "Machine Learning", "Automatisation", "Analyse prédictive"]
    },
    {
      id: 4,
      title: "Solutions Microsoft",
      description: "Fourniture et intégration de produits Microsoft adaptés aux besoins des clients",
      icon: "fas fa-cloud",
      image: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHxjeWJlcnNlY3VyaXR5fGVufDB8fHx8MTc1Mjc0OTk3M3ww&ixlib=rb-4.1.0&q=85",
      features: ["Office 365", "Azure Cloud", "Windows Server", "Support technique"]
    },
    {
      id: 5,
      title: "Vidéosurveillance & Contrôles d'Accès",
      description: "Installation de systèmes de surveillance et de contrôle pour sécuriser les locaux",
      icon: "fas fa-camera",
      image: "https://images.unsplash.com/photo-1485230405346-71acb9518d9c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxzZWN1cml0eXxlbnwwfHx8fDE3NTI4NDQ1MDV8MA&ixlib=rb-4.1.0&q=85",
      features: ["Caméras IP", "Système d'alarme", "Surveillance 24/7", "Contrôle à distance"]
    },
    {
      id: 6,
      title: "Domotique & Maison Intelligente",
      description: "Solutions pour automatiser et sécuriser les environnements résidentiels et professionnels",
      icon: "fas fa-home",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxjeWJlcnNlY3VyaXR5fGVufDB8fHx8MTc1Mjc0OTk3M3ww&ixlib=rb-4.1.0&q=85",
      features: ["Automatisation domestique", "Éclairage intelligent", "Sécurité connectée", "Gestion énergétique"]
    }
  ],

  team: [
    {
      id: 1,
      name: "Dr. Amadou Traoré",
      position: "CEO & Fondateur",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5fGVufDB8fHx8MTc1Mjc0OTk3M3ww&ixlib=rb-4.1.0&q=85",
      bio: "Expert en cybersécurité avec plus de 15 ans d'expérience dans la sécurisation des entreprises",
      specialties: ["Cybersécurité", "Transformation digitale", "Leadership"]
    },
    {
      id: 2,
      name: "Fatou Ouedraogo",
      position: "CTO",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5fGVufDB8fHx8MTc1Mjc0OTk3M3ww&ixlib=rb-4.1.0&q=85",
      bio: "Ingénieure en intelligence artificielle, spécialisée dans le développement de solutions innovantes",
      specialties: ["Intelligence Artificielle", "Développement", "Innovation"]
    },
    {
      id: 3,
      name: "Ibrahim Sawadogo",
      position: "Responsable Sécurité",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5fGVufDB8fHx8MTc1Mjc0OTk3M3ww&ixlib=rb-4.1.0&q=85",
      bio: "Spécialiste en sécurité physique et électronique avec expertise en vidéosurveillance",
      specialties: ["Sécurité physique", "Vidéosurveillance", "Contrôles d'accès"]
    },
    {
      id: 4,
      name: "Mariam Kone",
      position: "Consultante Microsoft",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5fGVufDB8fHx8MTc1Mjc0OTk3M3ww&ixlib=rb-4.1.0&q=85",
      bio: "Certifiée Microsoft Azure, experte en solutions cloud et productivité",
      specialties: ["Microsoft Azure", "Office 365", "Cloud Solutions"]
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Ousmane Diallo",
      company: "Banque Atlantique Burkina",
      position: "Directeur IT",
      content: "Fikasso Security a transformé notre infrastructure de sécurité. Leur expertise en biométrie et sécurisation des données nous a permis de renforcer considérablement notre système de protection.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5fGVufDB8fHx8MTc1Mjc0OTk3M3ww&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 2,
      name: "Aminata Kabore",
      company: "Orange Burkina Faso",
      position: "Responsable Sécurité",
      content: "La solution de vidéosurveillance déployée par Fikasso Security dépasse nos attentes. L'équipe est professionnelle et le suivi technique est excellent.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5fGVufDB8fHx8MTc1Mjc0OTk3M3ww&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 3,
      name: "Boukary Sanogo",
      company: "Ministère de l'Économie",
      position: "Directeur Général",
      content: "Grâce à Fikasso Security, nous avons pu digitaliser nos processus tout en maintenant le plus haut niveau de sécurité. Leur approche sur mesure est remarquable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxjeWJlcnNlY3VyaXR5fGVufDB8fHx8MTc1Mjc0OTk3M3ww&ixlib=rb-4.1.0&q=85"
    }
  ],

  stats: [
    { id: 1, label: "Clients Satisfaits", value: 150, suffix: "+" },
    { id: 2, label: "Projets Réalisés", value: 300, suffix: "+" },
    { id: 3, label: "Années d'Expérience", value: 5, suffix: "" },
    { id: 4, label: "Certifications", value: 25, suffix: "+" }
  ],

  blog: [
    {
      id: 1,
      title: "L'Intelligence Artificielle au Service de la Cybersécurité",
      excerpt: "Comment l'IA révolutionne la détection des menaces et la protection des données",
      author: "Dr. Amadou Traoré",
      date: "2024-01-15",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5fGVufDB8fHx8MTc1Mjc0OTk3M3ww&ixlib=rb-4.1.0&q=85",
      category: "Cybersécurité"
    },
    {
      id: 2,
      title: "La Biométrie: L'Avenir de la Sécurité d'Accès",
      excerpt: "Les avantages et défis de l'implémentation des systèmes biométriques en entreprise",
      author: "Fatou Ouedraogo",
      date: "2024-01-10",
      image: "https://images.unsplash.com/photo-1496368077930-c1e31b4e5b44?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eXxlbnwwfHx8fDE3NTI4NDQ1MDV8MA&ixlib=rb-4.1.0&q=85",
      category: "Technologie"
    },
    {
      id: 3,
      title: "Transformation Digitale: Guide Pratique pour les PME",
      excerpt: "Étapes clés pour réussir sa transformation numérique tout en maintenant la sécurité",
      author: "Ibrahim Sawadogo",
      date: "2024-01-05",
      image: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHxjeWJlcnNlY3VyaXR5fGVufDB8fHx8MTc1Mjc0OTk3M3ww&ixlib=rb-4.1.0&q=85",
      category: "Transformation"
    }
  ]
};

const mockFunctions = {
  submitContactForm: (formData) => {
    console.log('Contact form submitted:', formData);
    return Promise.resolve({ success: true, message: 'Message envoyé avec succès!' });
  },

  subscribeNewsletter: (email) => {
    console.log('Newsletter subscription:', email);
    return Promise.resolve({ success: true, message: 'Inscription réussie!' });
  },

  requestQuote: (serviceId, details) => {
    console.log('Quote requested:', { serviceId, details });
    return Promise.resolve({ success: true, message: 'Devis demandé avec succès!' });
  }
};