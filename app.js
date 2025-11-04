// Process Journey Data - From application_data_json
const processData = {
  processus_1: {
    titre: "Processus de Développement de Service",
    description: "Parcours décisionnel pour lancer un nouveau service Netflix",
    etapes: {
      etape_1: {
        id: 1,
        titre: "Détecter un besoin sur le marché",
        departement: "Data Analyse",
        duree: "1-2 semaines",
        description: "L'équipe Data Analyse identifie les opportunités et besoins clients sur le marché.",
        bouton_suivant: "Analyser le marché",
        cible_suivant: 2
      },
      etape_2: {
        id: 2,
        titre: "Analyser le marché",
        departement: "Data Analyse",
        duree: "2-3 semaines",
        description: "Analyser les tendances, opportunités et paysage concurrentiel. Élaborer rapport d'analyse.",
        bouton_suivant: "Proposer le service",
        cible_suivant: 3,
        bouton_alternatif: "Fin du processus",
        cible_alternatif: "fin"
      },
      etape_3: {
        id: 3,
        titre: "Définir la proposition de service",
        departement: "Service Commercial",
        duree: "1 semaine",
        description: "Déterminer le service proposé: prix, contenu, valeur proposée.",
        champs: [
          { nom: "Prix (€/mois)", type: "text" },
          { nom: "Contenu principal", type: "textarea" },
          { nom: "Valeur proposée", type: "textarea" }
        ],
        bouton_suivant: "Évaluer la faisabilité",
        cible_suivant: 4
      },
      etape_4: {
        id: 4,
        titre: "Estimation du budget et faisabilité",
        departement: "Service Financier",
        duree: "1-2 semaines",
        description: "Évaluer le budget du projet et sa viabilité financière.",
        champs: [
          { nom: "Budget estimé (€)", type: "number" },
          { nom: "Retour sur investissement (%)", type: "number" }
        ],
        passerelle: true,
        question: "Le projet est-il financièrement réalisable?",
        option_oui: {
          label: "Oui, financièrement viable",
          cible: 5
        },
        option_non: {
          label: "Non, réévaluation nécessaire",
          cible: "reevaluation"
        }
      },
      etape_5: {
        id: 5,
        titre: "Vérification de conformité réglementaire",
        departement: "Service Juridique",
        duree: "1-2 semaines",
        description: "Vérifier la conformité du service aux réglementations en vigueur.",
        champs: [
          { nom: "Points légaux vérifiés", type: "textarea" }
        ],
        passerelle: true,
        question: "Le service correspond-il à la réglementation?",
        option_oui: {
          label: "Conforme",
          cible: 6
        },
        option_non: {
          label: "Non conforme, modifications requises",
          cible: "modifications"
        }
      },
      etape_6: {
        id: 6,
        titre: "Examen par la Direction générale",
        departement: "Direction générale",
        duree: "1 semaine",
        description: "Revue stratégique et approbation du projet par la direction générale.",
        passerelle: true,
        question: "Maintenir le projet?",
        option_oui: {
          label: "Oui, maintenir",
          cible: 7
        },
        option_non: {
          label: "Non, modifications",
          cible: "modifications"
        }
      },
      etape_7: {
        id: 7,
        titre: "Définir les objectifs SMART",
        departement: "Direction générale",
        duree: "3-5 jours",
        description: "Définir des objectifs Spécifiques, Mesurables, Atteignables, Pertinents et Temporels.",
        champs: [
          { nom: "Objectifs spécifiques", type: "textarea" },
          { nom: "Métriques de succès", type: "textarea" }
        ],
        bouton_suivant: "Passer en production",
        cible_suivant: 8
      },
      etape_8: {
        id: 8,
        titre: "Mise en production",
        departement: "Production",
        duree: "4-12 semaines",
        description: "Développer et produire le contenu du service.",
        bouton_suivant: "Lancer la campagne marketing",
        cible_suivant: 9
      },
      etape_9: {
        id: 9,
        titre: "Campagne marketing",
        departement: "Service Communication",
        duree: "2-4 semaines",
        description: "Créer et lancer la campagne promotionnelle (bandes annonces, publicités).",
        bouton_suivant: "Mettre les forfaits à disposition",
        cible_suivant: 10
      },
      etape_10: {
        id: 10,
        titre: "Mise à disposition des forfaits",
        departement: "Service Commercial",
        duree: "Continu",
        description: "Les forfaits sont maintenant disponibles à l'achat pour les clients.",
        succes: true,
        message_succes: "🎉 Processus de développement service terminé avec succès!"
      }
    }
  },
  processus_2: {
    titre: "Gestion des Demandes Client",
    description: "Parcours décisionnel pour traiter les demandes clients",
    etapes: {
      etape_1: {
        id: 1,
        titre: "Nouvelle demande client",
        departement: "Service Client",
        duree: "Immédiat",
        description: "Recevoir et enregistrer une nouvelle demande client dans le système.",
        champs: [
          { nom: "Nom du client", type: "text" },
          { nom: "Adresse email", type: "email" },
          { nom: "Description de la demande", type: "textarea" },
          { nom: "Priorité", type: "select", options: ["Basse", "Moyenne", "Élevée"] }
        ],
        bouton_suivant: "Analyser la demande",
        cible_suivant: 2
      },
      etape_2: {
        id: 2,
        titre: "Analyser et classifier",
        departement: "Agent Service Client",
        duree: "5-15 minutes",
        description: "Analyser la demande et déterminer le type de problème.",
        passerelle: true,
        question: "Type de problème?",
        options: [
          { label: "Problème de facturation", cible: "3A" },
          { label: "Problème technique", cible: "3B" },
          { label: "Autres problèmes", cible: "3C" },
          { label: "Cas complexe", cible: "3D" }
        ]
      },
      etape_3A: {
        id: "3A",
        titre: "Problème de facturation",
        departement: "Service de facturation",
        duree: "1-3 heures",
        description: "Le service de facturation vérifie et corrige le problème de facturation.",
        bouton_suivant: "Vérifier et corriger",
        cible_suivant: "4A"
      },
      etape_4A: {
        id: "4A",
        titre: "Vérifier et corriger la facturation",
        departement: "Service de facturation",
        duree: "30 min - 1 heure",
        description: "Analyser les écarts de facturation et appliquer les corrections.",
        champs: [
          { nom: "Montant corrigé (€)", type: "number" },
          { nom: "Raison de la correction", type: "textarea" }
        ],
        passerelle: true,
        question: "La facture est-elle corrigée?",
        option_oui: {
          label: "Oui, corrigée",
          cible: "notification"
        },
        option_non: {
          label: "Non, escalade",
          cible: "3D"
        }
      },
      etape_3B: {
        id: "3B",
        titre: "Problème technique",
        departement: "Support technique",
        duree: "30 min - 4 heures",
        description: "Le support technique diagnostique et résout le problème.",
        bouton_suivant: "Résoudre le problème",
        cible_suivant: "4B"
      },
      etape_4B: {
        id: "4B",
        titre: "Résoudre le problème technique",
        departement: "Support technique",
        duree: "30 min - 4 heures",
        description: "Appliquer la solution technique identifiée.",
        champs: [
          { nom: "Solution appliquée", type: "textarea" },
          { nom: "Étapes testées", type: "textarea" }
        ],
        passerelle: true,
        question: "L'erreur est-elle corrigée?",
        option_oui: {
          label: "Oui, résolu",
          cible: "notification"
        },
        option_non: {
          label: "Non, escalade",
          cible: "3D"
        }
      },
      etape_3C: {
        id: "3C",
        titre: "Autres problèmes",
        departement: "Agent Service Client",
        duree: "10-30 minutes",
        description: "Traitement direct par l'agent du service client.",
        champs: [
          { nom: "Résolution apportée", type: "textarea" }
        ],
        bouton_suivant: "Notifier le client",
        cible_suivant: "notification"
      },
      etape_3D: {
        id: "3D",
        titre: "Cas complexe",
        departement: "Responsable Client",
        duree: "1-5 jours",
        description: "Escalade et étude approfondie du cas par le responsable client.",
        champs: [
          { nom: "Analyse du cas complexe", type: "textarea" },
          { nom: "Actions correctives", type: "textarea" }
        ],
        bouton_suivant: "Résoudre le cas",
        cible_suivant: "resolution_complexe"
      },
      resolution_complexe: {
        id: "resolution_complexe",
        titre: "Résolution du cas complexe",
        departement: "Responsable Client",
        duree: "Varié",
        description: "Cas étudié et résolu. Archive du rapport de traitement.",
        champs: [
          { nom: "Résumé de la résolution", type: "textarea" }
        ],
        bouton_suivant: "Archiver et notifier",
        cible_suivant: "notification"
      },
      notification: {
        id: "notification",
        titre: "Notifier le client",
        departement: "Agent Service Client",
        duree: "5-10 minutes",
        description: "Informer le client de l'état et de l'avancement de la tâche.",
        champs: [
          { nom: "Message au client", type: "textarea" }
        ],
        bouton_suivant: "Clôturer la demande",
        cible_suivant: "cloture"
      },
      cloture: {
        id: "cloture",
        titre: "Demande clôturée",
        departement: "Service Client",
        duree: "Immédiat",
        description: "Demande résolue et fermée dans le système.",
        succes: true,
        message_succes: "✅ Demande client traitée et clôturée avec succès!"
      }
    }
  }
};

// OLD BPMN DATA (kept for reference but not used)
const bpmn_processes_old = {
  process_1: {
    name: "Processus de développement de service",
    description: "Workflow de la détection du besoin marché jusqu'au lancement du service",
    participants: ["Data Analyse", "Service Commercial", "Service Financier", "Service Juridique", "Direction générale", "Production", "Service Communication", "Client"],
    steps: [
      { id: 1, name: "Détection d'un besoin sur le marché", department: "Data Analyse", duration: "1-2 semaines", description: "Identifier les nouvelles opportunités de marché et besoins client" },
      { id: 2, name: "Analyse du marché", department: "Data Analyse", duration: "2-3 semaines", description: "Analyser tendances du marché, opportunités et paysage concurrentiel" },
      { id: 3, name: "Proposition de service", department: "Service Commercial", duration: "1 semaine", description: "Définir tarification, contenu et proposition de valeur du service" },
      { id: 4, name: "Estimation du budget et faisabilité", department: "Service Financier", duration: "1-2 semaines", description: "Évaluer budget du projet et viabilité financière" },
      { id: 5, name: "Le projet est-il financièrement réalisable?", type: "gateway", options: ["Réalisable - Continuer", "Non réalisable - Réévaluer ou Fin"] },
      { id: 6, name: "Vérification de conformité réglementaire", department: "Service Juridique", duration: "1-2 semaines", description: "S'assurer que le service respecte régulations et exigences légales" },
      { id: 7, name: "Correspond à la réglementation?", type: "gateway", options: ["Conforme - Continuer", "Non-conforme - Modifier"] },
      { id: 8, name: "Examen du dossier", department: "Direction générale", duration: "1 semaine", description: "Revue stratégique et approbation finale" },
      { id: 9, name: "Maintenir le projet?", type: "gateway", options: ["Maintenir - Continuer", "Modifier - Réviser"] },
      { id: 10, name: "Déterminer les objectifs SMART", department: "Direction générale", duration: "3-5 jours", description: "Définir objectifs Spécifiques, Mesurables, Atteignables, Pertinents, Temporels" },
      { id: 11, name: "Mise en production", department: "Production", duration: "4-12 semaines", description: "Développer et produire le contenu du service" },
      { id: 12, name: "Campagne marketing", department: "Service Communication", duration: "2-4 semaines", description: "Créer et lancer matériel promotionnel (bandes annonce, publicités)" },
      { id: 13, name: "Mise à disposition des forfaits", department: "Service Commercial", duration: "Continu", description: "Rendre les forfaits disponibles à l'achat pour les clients" }
    ]
  },
  process_2: {
    name: "Gestion des demandes client",
    description: "Workflow de support client et résolution de problèmes",
    participants: ["Client", "Agent du service client", "Service de facturation", "Support technique", "Responsable client"],
    steps: [
      { id: 1, name: "Demande client reçue", department: "Service Client", duration: "Immédiat", description: "Nouvelle demande client enregistrée dans le système" },
      { id: 2, name: "Analyse de la demande", department: "Agent du service client", duration: "5-15 minutes", description: "Analyser et classifier la demande client" },
      { id: 3, name: "Type de problème", type: "gateway", options: ["Problème de facturation", "Problème technique", "Autre problème", "Cas complexe"] },
      { id: 4, name: "Résolution problème facturation", department: "Service de facturation", duration: "1-3 heures", description: "Vérifier et corriger les écarts de facturation" },
      { id: 5, name: "Résolution problème technique", department: "Support technique", duration: "30 min - 4 heures", description: "Diagnostiquer et résoudre les problèmes techniques" },
      { id: 6, name: "Traitement direct", department: "Agent du service client", duration: "10-30 minutes", description: "Gérer directement les demandes simples" },
      { id: 7, name: "Escalade cas complexe", department: "Responsable client", duration: "1-5 jours", description: "Analyse approfondie et résolution de cas complexes" },
      { id: 8, name: "L'erreur est corrigée?", type: "gateway", options: ["Corrigée - Clôturer", "Non corrigée - Escalader"] },
      { id: 9, name: "Notification du client", department: "Agent du service client", duration: "5-10 minutes", description: "Informer le client du statut et progression de la résolution" },
      { id: 10, name: "Archivage du rapport", department: "Service Client", duration: "5 minutes", description: "Archiver la documentation du cas" },
      { id: 11, name: "Demande clôturée", department: "Service Client", duration: "Immédiat", description: "Clôturer la demande résolue" }
    ]
  }
};

// Process Journey State
let currentProcess = null;
let currentStep = null;
let journeyHistory = [];
let formData = {};

// Data from application_data_json
// Data from application_data_json with real values
const tasksDataReal = [
  {
    titre: "Wednesday Season 2",
    departement: "Production",
    progression: 45,
    budget_total: "85M€",
    budget_utilise: "38M€",
    deadline: "15 Décembre 2025",
    statut: "on-track",
    priorite: "haute",
    equipe: "Tim Burton Productions"
  },
  {
    titre: "Avatar: The Last Airbender",
    departement: "Post-production",
    progression: 78,
    budget_total: "120M€",
    budget_utilise: "94M€",
    deadline: "8 Décembre 2025",
    statut: "on-track",
    priorite: "critique",
    equipe: "Netflix Animation"
  },
  {
    titre: "Bridgerton Season 4",
    departement: "Pre-production",
    progression: 12,
    budget_total: "95M€",
    budget_utilise: "11M€",
    deadline: "30 Janvier 2026",
    statut: "on-track",
    priorite: "haute",
    equipe: "Shondaland"
  },
  {
    titre: "Rebel Moon: Director's Cut",
    departement: "Quality Check",
    progression: 95,
    budget_total: "110M€",
    budget_utilise: "109M€",
    deadline: "5 Décembre 2025",
    statut: "on-track",
    priorite: "critique",
    equipe: "Zack Snyder"
  },
  {
    titre: "Intégration AI Analytics",
    departement: "IT & Innovation",
    progression: 60,
    budget_total: "2.5M€",
    budget_utilise: "1.5M€",
    deadline: "10 Décembre 2025",
    statut: "on-track",
    priorite: "moyenne",
    equipe: "Data & Innovation"
  }
];

const tasksData = [
  {
    nom: "Production Stranger Things S5",
    departement: "Production",
    progression: 45,
    deadline: "15 Décembre",
    statut: "on-track",
    priorite: "haute"
  },
  {
    nom: "Campagne marketing Q1 2026",
    departement: "Communication",
    progression: 20,
    deadline: "20 Janvier",
    statut: "attention",
    priorite: "moyenne"
  },
  {
    nom: "Intégration nouveau CRM",
    departement: "IT",
    progression: 60,
    deadline: "10 Décembre",
    statut: "on-track",
    priorite: "haute"
  },
  {
    nom: "Audit légal annuel",
    departement: "Legal",
    progression: 80,
    deadline: "5 Décembre",
    statut: "on-track",
    priorite: "moyenne"
  },
  {
    nom: "Refonte plateforme recommandations",
    departement: "Data & Innovation",
    progression: 35,
    deadline: "30 Janvier",
    statut: "urgent",
    priorite: "critique"
  }
];

const budgetsDataReal = [
  {
    categorie: "Production Originale",
    montant: "2.5M€",
    pourcentage: 60,
    budget_utilise: "1.8M€",
    couleur: "#E50914"
  },
  {
    categorie: "Marketing & Communication",
    montant: "800K€",
    pourcentage: 19,
    budget_utilise: "450K€",
    couleur: "#FF6B6B"
  },
  {
    categorie: "Infrastructure & Technologie",
    montant: "600K€",
    pourcentage: 14,
    budget_utilise: "550K€",
    couleur: "#B20710"
  },
  {
    categorie: "R&D & Innovation",
    montant: "300K€",
    pourcentage: 7,
    budget_utilise: "120K€",
    couleur: "#FF8888"
  }
];

const budgetParTrimestre = [
  { trimestre: "Q1 2025", montant: 1.0, realise: 0.95 },
  { trimestre: "Q2 2025", montant: 1.1, realise: 1.05 },
  { trimestre: "Q3 2025", montant: 1.0, realise: 0.98 },
  { trimestre: "Q4 2025", montant: 1.1, realise: 1.22 }
];

const budgetsData = [
  {
    nom: "Production Originale",
    budget_total: "2.5M€",
    budget_utilise: "1.8M€",
    pourcentage: 72,
    comparaison_annee: "+15%",
    tendance: "up"
  },
  {
    nom: "Marketing & Communication",
    budget_total: "800k€",
    budget_utilise: "450k€",
    pourcentage: 56,
    comparaison_annee: "+5%",
    tendance: "up"
  },
  {
    nom: "R&D & Innovation",
    budget_total: "300k€",
    budget_utilise: "120k€",
    pourcentage: 40,
    comparaison_annee: "-3%",
    tendance: "down"
  },
  {
    nom: "Opérations & Infrastructure",
    budget_total: "600k€",
    budget_utilise: "550k€",
    pourcentage: 92,
    comparaison_annee: "+8%",
    tendance: "up"
  }
];

const productionsDataReal = [
  {
    id: 1,
    titre: "Wednesday Season 2",
    genre: "Action / Thriller",
    statut: "Filming",
    statut_code: "filming",
    budget: "85M€",
    equipe_principale: "Tim Burton Productions",
    episodes: 8,
    date_sortie: "15 Décembre 2025",
    description: "Continuation des mystères de Nevermore Academy"
  },
  {
    id: 2,
    titre: "Avatar: The Last Airbender",
    genre: "Adventure / Fantasy",
    statut: "Post-production",
    statut_code: "post-prod",
    budget: "120M€",
    equipe_principale: "Netflix Animation",
    episodes: 10,
    date_sortie: "8 Décembre 2025",
    description: "Adaptation live-action de la série animée"
  },
  {
    id: 3,
    titre: "Bridgerton Season 4",
    genre: "Drama / Romance",
    statut: "Pre-production",
    statut_code: "pre-prod",
    budget: "95M€",
    equipe_principale: "Shondaland",
    episodes: 8,
    date_sortie: "30 Janvier 2026",
    description: "Nouvelle saison : Focus sur Colin & Penelope"
  },
  {
    id: 4,
    titre: "Rebel Moon: Director's Cut",
    genre: "Science-Fiction",
    statut: "Quality check",
    statut_code: "qc",
    budget: "110M€",
    equipe_principale: "Zack Snyder",
    episodes: 1,
    date_sortie: "5 Décembre 2025",
    description: "Version réalisateur du film épique"
  },
  {
    id: 5,
    titre: "The Diplomat Season 2",
    genre: "Thriller / Drama",
    statut: "Filming",
    statut_code: "filming",
    budget: "75M€",
    equipe_principale: "Deborah Cahn",
    episodes: 8,
    date_sortie: "15 Janvier 2026",
    description: "Aventures diplomatiques de Kate Wyler"
  }
];

const productionsData = [
  {
    titre: "Wednesday Season 2",
    genre: "Action / Thriller",
    statut: "Filming",
    statut_code: "filming",
    description: "Tournages en cours en Roumanie",
    duree_restante: "6 semaines",
    equipe: "Tim Burton Productions"
  },
  {
    titre: "Avatar: The Last Airbender",
    genre: "Adventure / Fantasy",
    statut: "Post-production",
    statut_code: "post-prod",
    description: "Post-production et effets spéciaux",
    duree_restante: "4 semaines",
    equipe: "Netflix Animation"
  },
  {
    titre: "Bridgerton Season 4",
    genre: "Drama / Romance",
    statut: "Pre-production",
    statut_code: "pre-prod",
    description: "Préparation des décors et castings",
    duree_restante: "10 semaines",
    equipe: "Shondaland"
  },
  {
    titre: "Rebel Moon: Director's Cut",
    genre: "Science-Fiction",
    statut: "Quality check",
    statut_code: "qc",
    description: "Contrôle qualité avant sortie",
    duree_restante: "2 semaines",
    equipe: "Zack Snyder"
  },
  {
    titre: "The Diplomat Season 2",
    genre: "Thriller",
    statut: "Filming",
    statut_code: "filming",
    description: "Tournages à New York et Washington",
    duree_restante: "8 semaines",
    equipe: "Deborah Cahn"
  }
];

// Partners data with full details from application_data_json
const partnersDataFull = {
  production: {
    titre: "Production",
    icon: "PROD",
    partenaires: [
      {
        id: 1,
        nom: "Universal Pictures",
        logo: "UNIV",
        type: "Studio Majeur",
        depuis: 2018,
        statut: "Actif",
        budget_annuel: "150M€",
        satisfaction: "4.9/5",
        description: "Studio de production leader pour blockbusters internationaux",
        projets_actuels: ["Rebel Moon: Director's Cut", "Bridgerton Season 4"],
        contact: "partners@universalstudios.com"
      },
      {
        id: 2,
        nom: "Legendary Pictures",
        logo: "LEG",
        type: "Production Indépendante",
        depuis: 2019,
        statut: "Actif",
        budget_annuel: "120M€",
        satisfaction: "4.7/5",
        description: "Producteur de films blockbuster et séries d'action",
        projets_actuels: ["Avatar: The Last Airbender", "Dune Chronicles"],
        contact: "partnerships@legendary.com"
      },
      {
        id: 3,
        nom: "Shonda Rhimes Productions",
        logo: "SHON",
        type: "Studio de Production",
        depuis: 2017,
        statut: "Actif",
        budget_annuel: "100M€",
        satisfaction: "4.8/5",
        description: "Productrice de dramas de qualité et séries romantiques",
        projets_actuels: ["Bridgerton Season 4", "The Diplomat Season 2", "Inventing Anna"],
        contact: "shonda@shondaland.com"
      },
      {
        id: 4,
        nom: "BBC Studios",
        logo: "BBC",
        type: "Radiodiffuseur Public",
        depuis: 2020,
        statut: "Actif",
        budget_annuel: "85M€",
        satisfaction: "4.6/5",
        description: "Contenu de qualité premium et dramas britanniques",
        projets_actuels: ["The Crown Spin-offs"],
        contact: "bbc.partnerships@bbc.co.uk"
      }
    ]
  },
  distribution: {
    titre: "Distribution",
    icon: "DIST",
    partenaires: [
      {
        id: 5,
        nom: "Swisscom",
        logo: "SWIS",
        type: "Opérateur Télécom",
        depuis: 2015,
        statut: "Actif",
        abonnes: "3.2M",
        satisfaction: "4.5/5",
        description: "Distributeur principal en Suisse romande",
        regions: ["Suisse", "Liechtenstein"],
        contact: "b2b@swisscom.com"
      },
      {
        id: 6,
        nom: "Orange",
        logo: "ORAN",
        type: "Opérateur Télécom",
        depuis: 2014,
        statut: "Actif",
        abonnes: "5.1M",
        satisfaction: "4.7/5",
        description: "Distributeur majeur en Europe continentale",
        regions: ["France", "Belgique", "Pays-Bas"],
        contact: "partnerships@orange.com"
      },
      {
        id: 7,
        nom: "Sky Italia",
        logo: "SKY",
        type: "Opérateur Télécom",
        depuis: 2016,
        statut: "Actif",
        abonnes: "2.8M",
        satisfaction: "4.4/5",
        description: "Distribution premium en Italie",
        regions: ["Italie"],
        contact: "partners@sky.it"
      },
      {
        id: 8,
        nom: "Proximus",
        logo: "PROX",
        type: "Opérateur Télécom",
        depuis: 2018,
        statut: "Actif",
        abonnes: "1.5M",
        satisfaction: "4.6/5",
        description: "Distributeur en Belgique francophone",
        regions: ["Belgique"],
        contact: "b2b@proximus.be"
      }
    ]
  },
  technologie: {
    titre: "Technologie",
    icon: "TECH",
    partenaires: [
      {
        id: 9,
        nom: "Amazon Web Services",
        logo: "AWS",
        type: "Cloud Infrastructure",
        depuis: 2016,
        statut: "Actif",
        budget_annuel: "25M€",
        satisfaction: "4.9/5",
        description: "Infrastructure cloud globale et stockage CDN",
        services: ["EC2 Computing", "S3 Storage", "CloudFront CDN"],
        contact: "enterprise@aws.amazon.com"
      },
      {
        id: 10,
        nom: "Google Cloud",
        logo: "GCP",
        type: "Cloud Infrastructure",
        depuis: 2019,
        statut: "Actif",
        budget_annuel: "12M€",
        satisfaction: "4.7/5",
        description: "Analytics, machine learning et big data",
        services: ["BigQuery Analytics", "AI/ML Services", "Cloud Storage"],
        contact: "sales@google.com"
      },
      {
        id: 11,
        nom: "Cloudflare",
        logo: "CF",
        type: "Cybersécurité",
        depuis: 2021,
        statut: "Actif",
        budget_annuel: "3.5M€",
        satisfaction: "4.8/5",
        description: "Protection DDoS, firewall et accélération réseau",
        services: ["DDoS Protection", "WAF", "CDN Optimisé"],
        contact: "enterprise@cloudflare.com"
      }
    ]
  },
  contenu: {
    titre: "Contenu",
    icon: "CONT",
    partenaires: [
      {
        id: 12,
        nom: "Studio Ghibli",
        logo: "GHIB",
        type: "Animation Japonaise",
        depuis: 2019,
        statut: "Actif",
        satisfaction: "5.0/5",
        description: "Studio d'animation japonais légendaire",
        titres: 500,
        contenu: "Films et séries animés de classe mondiale",
        contact: "international@ghibli.jp"
      },
      {
        id: 13,
        nom: "Madhouse Studios",
        logo: "MAD",
        type: "Animation",
        depuis: 2020,
        statut: "Actif",
        satisfaction: "4.8/5",
        description: "Studio d'animation moderne spécialisé en anime",
        titres: 200,
        contenu: "Anime contemporain de qualité",
        contact: "partnerships@madhouse.co.jp"
      }
    ]
  }
};

const partnersData = {
  production: {
    titre: "Production",
    icon: "🎥",
    partenaires: [
      { nom: "Universal Pictures", type: "Production Partenaire", icon: "🎥" },
      { nom: "Legendary Pictures", type: "Production Partenaire", icon: "🎥" },
      { nom: "Shonda Rhimes Productions", type: "Studio de Production", icon: "🎥" },
      { nom: "BBC Studios", type: "Production Originale", icon: "🎥" }
    ]
  },
  distribution: {
    titre: "Distribution",
    icon: "📡",
    partenaires: [
      { nom: "Swisscom", type: "Opérateur Distribution", icon: "📡" },
      { nom: "Orange", type: "Opérateur Distribution", icon: "📡" },
      { nom: "Sky", type: "Opérateur Distribution", icon: "📡" },
      { nom: "Proximus", type: "Opérateur Distribution", icon: "📡" }
    ]
  },
  technologie: {
    titre: "Infrastructure & Tech",
    icon: "☁️",
    partenaires: [
      { nom: "AWS", type: "Cloud Infrastructure", icon: "☁️" },
      { nom: "Google Cloud", type: "Cloud Infrastructure", icon: "☁️" },
      { nom: "Cloudflare", type: "CDN & Sécurité", icon: "🔒" }
    ]
  },
  contenu: {
    titre: "Contenu & Création",
    icon: "🎨",
    partenaires: [
      { nom: "Studio Ghibli", type: "Animation & Anime", icon: "🎨" },
      { nom: "Madhouse Studios", type: "Animation", icon: "🎨" },
      { nom: "TOHO Animation", type: "Animation Japonaise", icon: "🎨" }
    ]
  }
};

const service_packages = [
  { name: "Forfait de base", price: "7,99 €/mois", features: ["Qualité SD", "1 écran", "Mobile & Tablette"] },
  { name: "Forfait standard", price: "12,99 €/mois", features: ["Qualité Full HD", "2 écrans", "Tous les appareils"] },
  { name: "Forfait premium", price: "17,99 €/mois", features: ["Qualité 4K+HDR", "4 écrans", "Tous les appareils", "Audio spatial"] }
];

// State management
let requests = [];
let requestCounter = 1000;

// Initialize Process Launches
function initProcessLaunches() {
  const launch1 = document.getElementById('launch-process-1');
  const launch2 = document.getElementById('launch-process-2');
  const back1 = document.getElementById('process1-back');
  const back2 = document.getElementById('process2-back');

  if (launch1) {
    launch1.addEventListener('click', () => {
      startProcess('processus_1');
    });
  }

  if (launch2) {
    launch2.addEventListener('click', () => {
      startProcess('processus_2');
    });
  }

  if (back1) {
    back1.addEventListener('click', () => {
      navigateToPage('home');
      resetProcess();
    });
  }

  if (back2) {
    back2.addEventListener('click', () => {
      navigateToPage('home');
      resetProcess();
    });
  }
}

function startProcess(processKey) {
  currentProcess = processKey;
  currentStep = processKey === 'processus_1' ? 'etape_1' : 'etape_1';
  journeyHistory = [currentStep];
  formData = {};
  
  const pageName = processKey === 'processus_1' ? 'process1' : 'process2';
  navigateToPage(pageName);
  renderCurrentStep();
}

function resetProcess() {
  currentProcess = null;
  currentStep = null;
  journeyHistory = [];
  formData = {};
}

function renderCurrentStep() {
  if (!currentProcess || !currentStep) return;

  const process = processData[currentProcess];
  const step = process.etapes[currentStep];
  
  const contentId = currentProcess === 'processus_1' ? 'process1-content' : 'process2-content';
  const progressId = currentProcess === 'processus_1' ? 'process1-progress' : 'process2-progress';
  const breadcrumbId = currentProcess === 'processus_1' ? 'process1-breadcrumb' : 'process2-breadcrumb';
  
  const contentContainer = document.getElementById(contentId);
  const progressContainer = document.getElementById(progressId);
  const breadcrumbContainer = document.getElementById(breadcrumbId);

  if (!contentContainer) return;

  // Update progress
  const totalSteps = Object.keys(process.etapes).length;
  const currentStepIndex = journeyHistory.length;
  progressContainer.innerHTML = `Étape ${currentStepIndex} sur ${totalSteps} | ${process.titre}`;

  // Update breadcrumb
  breadcrumbContainer.innerHTML = journeyHistory.map((stepKey, index) => {
    const breadcrumbStep = process.etapes[stepKey];
    const isActive = index === journeyHistory.length - 1;
    const separator = index < journeyHistory.length - 1 ? '<span class="breadcrumb-separator">→</span>' : '';
    return `<span class="breadcrumb-item ${isActive ? 'active' : ''}">${breadcrumbStep.titre}</span>${separator}`;
  }).join('');

  // Render step content
  if (step.succes) {
    renderSuccessStep(step, contentContainer);
  } else if (step.passerelle) {
    renderGatewayStep(step, contentContainer);
  } else {
    renderNormalStep(step, contentContainer);
  }
}

function renderNormalStep(step, container) {
  let html = `
    <div class="step-container">
      <div class="step-header">
        <div class="step-number">${typeof step.id === 'number' ? step.id : ''}</div>
        <h3 class="step-title">${step.titre}</h3>
        <div class="step-department">Département: ${step.departement}</div>
        <div class="step-duration">Durée estimée: ${step.duree}</div>
      </div>

      <div class="step-description">
        ${step.description}
      </div>
  `;

  // Add form fields if present
  if (step.champs && step.champs.length > 0) {
    html += '<div class="step-form"><form id="step-form">';
    step.champs.forEach((champ, index) => {
      html += '<div class="form-group">';
      html += `<label>${champ.nom}</label>`;
      
      if (champ.type === 'textarea') {
        html += `<textarea class="form-input" id="field-${index}" rows="4"></textarea>`;
      } else if (champ.type === 'select') {
        html += `<select class="form-input" id="field-${index}">`;
        if (champ.options) {
          champ.options.forEach(opt => {
            html += `<option value="${opt}">${opt}</option>`;
          });
        }
        html += '</select>';
      } else {
        html += `<input type="${champ.type}" class="form-input" id="field-${index}">`;
      }
      
      html += '</div>';
    });
    html += '</form></div>';
  }

  // Add action buttons
  html += '<div class="step-actions">';
  
  if (journeyHistory.length > 1) {
    html += '<button class="btn-previous" onclick="goToPreviousStep()">← Retour</button>';
  }
  
  if (step.bouton_suivant) {
    html += `<button class="btn-next" onclick="goToNextStep('${step.cible_suivant}')">${step.bouton_suivant} →</button>`;
  }
  
  if (step.bouton_alternatif) {
    html += `<button class="btn-secondary" style="margin-left: 10px;" onclick="goToNextStep('${step.cible_alternatif}')">${step.bouton_alternatif}</button>`;
  }
  
  html += '</div>';
  html += '</div>';

  container.innerHTML = html;
}

function renderGatewayStep(step, container) {
  let html = `
    <div class="step-container">
      <div class="step-header">
        <div class="step-number">◆</div>
        <h3 class="step-title">${step.titre}</h3>
        <div class="step-department">Département: ${step.departement}</div>
        <div class="step-duration">Durée estimée: ${step.duree}</div>
      </div>

      <div class="step-description">
        ${step.description}
      </div>
  `;

  // Add form fields if present (for gateways that need input before decision)
  if (step.champs && step.champs.length > 0) {
    html += '<div class="step-form"><form id="step-form">';
    step.champs.forEach((champ, index) => {
      html += '<div class="form-group">';
      html += `<label>${champ.nom}</label>`;
      
      if (champ.type === 'textarea') {
        html += `<textarea class="form-input" id="field-${index}" rows="4"></textarea>`;
      } else if (champ.type === 'select') {
        html += `<select class="form-input" id="field-${index}">`;
        if (champ.options) {
          champ.options.forEach(opt => {
            html += `<option value="${opt}">${opt}</option>`;
          });
        }
        html += '</select>';
      } else {
        html += `<input type="${champ.type}" class="form-input" id="field-${index}">`;
      }
      
      html += '</div>';
    });
    html += '</form></div>';
  }

  html += '<div class="gateway-container">';
  html += `<div class="gateway-question">${step.question}</div>`;
  html += '<div class="gateway-options">';

  // Handle different gateway option structures
  if (step.options) {
    // Multiple options (like in process 2 step 2)
    step.options.forEach(option => {
      html += `<button class="gateway-option" onclick="goToNextStep('${option.cible}')">${option.label}</button>`;
    });
  } else if (step.option_oui && step.option_non) {
    // Yes/No options (like in process 1)
    html += `<button class="gateway-option" onclick="goToNextStep('${step.option_oui.cible}')">✅ ${step.option_oui.label}</button>`;
    html += `<button class="gateway-option" onclick="goToNextStep('${step.option_non.cible}')">❌ ${step.option_non.label}</button>`;
  }

  html += '</div></div>';
  
  if (journeyHistory.length > 1) {
    html += '<div class="step-actions"><button class="btn-previous" onclick="goToPreviousStep()">← Retour</button></div>';
  }
  
  html += '</div>';

  container.innerHTML = html;
}

function renderSuccessStep(step, container) {
  // If this is process 2 (client request), save to history
  if (currentProcess === 'processus_2') {
    const clientData = {
      clientName: formData['field-0'] || 'Client',
      description: formData['field-2'] || 'Demande traitée',
      priority: formData['field-3'] || 'Moyenne'
    };
    const requestId = addRequestFromProcess(clientData);
    
    const html = `
      <div class="success-container">
        <div class="success-icon">TERMINÉ</div>
        <h3 class="success-title">${step.titre}</h3>
        <div class="success-message">
          ${step.message_succes}<br><br>
          ${step.description}<br><br>
          <strong>Numéro de demande:</strong> ${requestId}
        </div>
        <div class="info-box">
          La demande a été enregistrée dans l'historique. Vous pouvez la consulter dans "Mes Demandes".
        </div>
        <div class="success-actions">
          <button class="btn-restart" onclick="restartProcess()">Traiter une nouvelle demande</button>
          <button class="btn-home" onclick="navigateToPage('home'); resetProcess();">Retour à l'accueil</button>
          <button class="btn-secondary" onclick="navigateToPage('my-requests'); resetProcess();">Voir mes demandes</button>
        </div>
      </div>
    `;
    container.innerHTML = html;
  } else {
    // Process 1 success
    const html = `
      <div class="success-container">
        <div class="success-icon">SUCCÈS</div>
        <h3 class="success-title">${step.titre}</h3>
        <div class="success-message">
          ${step.message_succes}<br><br>
          ${step.description}
        </div>
        <div class="success-actions">
          <button class="btn-restart" onclick="restartProcess()">Développer un nouveau service</button>
          <button class="btn-home" onclick="navigateToPage('home'); resetProcess();">Retour à l'accueil</button>
        </div>
      </div>
    `;
    container.innerHTML = html;
  }
}

function goToNextStep(targetStep) {
  if (!currentProcess) return;

  // Save form data if present
  const form = document.getElementById('step-form');
  if (form) {
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      formData[input.id] = input.value;
    });
  }

  // Handle special cases
  if (targetStep === 'fin') {
    alert('🛑 Processus terminé - Aucune opportunité viable détectée.');
    navigateToPage('home');
    resetProcess();
    return;
  }

  if (targetStep === 'reevaluation') {
    alert('⚠️ Le projet nécessite une réévaluation. Retour à l’étape de proposition.');
    currentStep = 'etape_3';
    journeyHistory.push(currentStep);
    renderCurrentStep();
    return;
  }

  if (targetStep === 'modifications') {
    alert('🛠️ Des modifications sont requises. Retour à l’étape de proposition.');
    currentStep = 'etape_3';
    journeyHistory.push(currentStep);
    renderCurrentStep();
    return;
  }

  // Navigate to target step
  const process = processData[currentProcess];
  const nextStepKey = `etape_${targetStep}`;
  
  // Check if step exists (handle both numeric and string IDs)
  if (process.etapes[nextStepKey]) {
    currentStep = nextStepKey;
  } else if (process.etapes[targetStep]) {
    currentStep = targetStep;
  } else {
    console.error('Step not found:', targetStep);
    return;
  }

  journeyHistory.push(currentStep);
  renderCurrentStep();
}

function goToPreviousStep() {
  if (journeyHistory.length <= 1) return;

  journeyHistory.pop(); // Remove current step
  currentStep = journeyHistory[journeyHistory.length - 1];
  renderCurrentStep();
}

function restartProcess() {
  if (!currentProcess) return;
  
  startProcess(currentProcess);
}

// Navigation
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const pages = document.querySelectorAll('.page');
  const accessCards = document.querySelectorAll('.access-card');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetPage = link.dataset.page;
      navigateToPage(targetPage);
    });
  });

  accessCards.forEach(card => {
    card.addEventListener('click', () => {
      const targetPage = card.dataset.page;
      navigateToPage(targetPage);
    });
  });
}

function navigateToPage(pageName) {
  const navLinks = document.querySelectorAll('.nav-link');
  const pages = document.querySelectorAll('.page');

  navLinks.forEach(link => {
    if (link.dataset.page === pageName) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  pages.forEach(page => {
    if (page.id === pageName) {
      page.classList.add('active');
    } else {
      page.classList.remove('active');
    }
  });
}

// BPMN Process Rendering
function renderProcessFlow(processKey, containerId) {
  const process = bpmn_processes[processKey];
  const container = document.getElementById(containerId);
  
  if (!container) return;

  container.innerHTML = '';

  process.steps.forEach((step, index) => {
    // Create step element
    const stepDiv = document.createElement('div');
    stepDiv.className = step.type === 'gateway' ? 'process-step gateway' : 'process-step';
    stepDiv.dataset.processKey = processKey;
    stepDiv.dataset.stepId = step.id;

    const stepIdDiv = document.createElement('div');
    stepIdDiv.className = 'step-id';
    stepIdDiv.textContent = `Étape ${step.id}`;

    const stepNameDiv = document.createElement('div');
    stepNameDiv.className = 'step-name';
    stepNameDiv.textContent = step.name;

    if (step.department) {
      const stepDeptDiv = document.createElement('div');
      stepDeptDiv.className = 'step-department';
      stepDeptDiv.textContent = step.department;
      stepDiv.appendChild(stepIdDiv);
      stepDiv.appendChild(stepNameDiv);
      stepDiv.appendChild(stepDeptDiv);
    } else {
      stepDiv.appendChild(stepIdDiv);
      stepDiv.appendChild(stepNameDiv);
    }

    stepDiv.addEventListener('click', () => showStepDetails(processKey, step));

    container.appendChild(stepDiv);

    // Add arrow between steps
    if (index < process.steps.length - 1) {
      const arrow = document.createElement('div');
      arrow.className = 'flow-arrow';
      arrow.textContent = '→';
      container.appendChild(arrow);
    }
  });
}

function showStepDetails(processKey, step) {
  const modal = document.getElementById('step-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');

  modalTitle.textContent = step.name;

  let bodyContent = '';

  if (step.type === 'gateway') {
    bodyContent = `
      <div class="modal-info">
        <strong>Type:</strong> Passerelle décisionnelle
      </div>
      <div class="modal-info">
        <strong>Options de décision:</strong>
        <ul style="margin-top: 10px; padding-left: 20px;">
          ${step.options.map(option => `<li>${option}</li>`).join('')}
        </ul>
      </div>
      <div class="modal-info">
        <strong>Description:</strong> Il s'agit d'un point de décision dans le workflow où le processus se divise selon des critères spécifiques.
      </div>
    `;
  } else {
    bodyContent = `
      <div class="modal-info">
        <strong>Département responsable:</strong> ${step.department}
      </div>
      <div class="modal-info">
        <strong>Durée estimée:</strong> ${step.duration}
      </div>
      <div class="modal-info">
        <strong>Description:</strong> ${step.description}
      </div>
      <div class="modal-info">
        <strong>Actions requises:</strong>
        <ul style="margin-top: 10px; padding-left: 20px;">
          <li>Consulter toute la documentation pertinente</li>
          <li>Coordonner avec les membres de l'équipe</li>
          <li>Compléter les tâches assignées dans les délais</li>
          <li>Mettre à jour le statut du processus dans le système</li>
        </ul>
      </div>
    `;
  }

  modalBody.innerHTML = bodyContent;
  modal.classList.add('active');
}



// Support Form - now handles requests from process journey
function initSupportForm() {
  // Form initialization removed since requests are created through process journey
  // This function is kept for compatibility
}

function addRequestFromProcess(clientData) {
  const request = {
    id: `REQ-${requestCounter}`,
    clientName: clientData.clientName || 'Client',
    problemType: clientData.problemType || 'Non spécifié',
    description: clientData.description || 'Demande traitée via processus',
    priority: clientData.priority || 'Moyenne',
    status: 'Traitée',
    date: new Date().toLocaleString('fr-FR')
  };

  requests.unshift(request);
  requestCounter++;
  renderRequests();
  
  return request.id;
}

function renderRequests() {
  const container = document.getElementById('requests-table');
  if (!container) return;

  container.innerHTML = '';

  const displayRequests = requests.slice(0, 10); // Show last 10 requests

  displayRequests.forEach(request => {
    const item = document.createElement('div');
    item.className = 'request-item';

    const statusClass = request.status === 'Ouverte' ? 'status-open' : 
                        request.status === 'En cours' ? 'status-in-progress' : 
                        request.status === 'Traitée' ? 'status-treated' :
                        'status-resolved';

    item.innerHTML = `
      <div class="request-header">
        <span class="request-id">${request.id}</span>
        <span class="request-status ${statusClass}">${request.status}</span>
      </div>
      <div class="request-details">
        <div class="request-detail"><strong>Client:</strong> ${request.clientName}</div>
        <div class="request-detail"><strong>Type:</strong> ${request.problemType}</div>
        <div class="request-detail"><strong>Priorité:</strong> ${request.priority}</div>
      </div>
      <div class="request-detail" style="margin-top: 10px;"><strong>Description:</strong> ${request.description}</div>
      <div class="request-detail" style="margin-top: 5px; font-size: 12px; color: #808080;">${request.date}</div>
    `;

    container.appendChild(item);
  });

  if (requests.length === 0) {
    container.innerHTML = '<div style="text-align: center; padding: 60px;"><p style="color: #808080; font-size: 16px; font-weight: 600; margin-bottom: 12px;">Aucune demande enregistrée</p><p style="color: #808080; font-size: 14px;">Les demandes traitées via le processus apparaissent ici.</p></div>';
  }
}

// Search Requests
function initSearch() {
  const searchInput = document.getElementById('search-requests');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredRequests = requests.filter(req => 
      req.id.toLowerCase().includes(searchTerm) ||
      req.clientName.toLowerCase().includes(searchTerm) ||
      req.problemType.toLowerCase().includes(searchTerm)
    );

    renderFilteredRequests(filteredRequests);
  });
}

function renderFilteredRequests(filteredRequests) {
  const container = document.getElementById('requests-table');
  if (!container) return;

  container.innerHTML = '';

  filteredRequests.slice(0, 10).forEach(request => {
    const item = document.createElement('div');
    item.className = 'request-item';

    const statusClass = request.status === 'Ouverte' ? 'status-open' : 
                        request.status === 'En cours' ? 'status-in-progress' : 
                        request.status === 'Traitée' ? 'status-treated' :
                        'status-resolved';

    item.innerHTML = `
      <div class="request-header">
        <span class="request-id">${request.id}</span>
        <span class="request-status ${statusClass}">${request.status}</span>
      </div>
      <div class="request-details">
        <div class="request-detail"><strong>Client:</strong> ${request.clientName}</div>
        <div class="request-detail"><strong>Type:</strong> ${request.problemType}</div>
        <div class="request-detail"><strong>Priorité:</strong> ${request.priority}</div>
      </div>
      <div class="request-detail" style="margin-top: 10px;"><strong>Description:</strong> ${request.description}</div>
      <div class="request-detail" style="margin-top: 5px; font-size: 12px; color: #808080;">${request.date}</div>
    `;

    container.appendChild(item);
  });

  if (filteredRequests.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: #808080; padding: 40px;">Aucune demande correspondante trouvée.</p>';
  }
}

// Modal handling
function initModal() {
  const modal = document.getElementById('step-modal');
  const closeBtn = document.querySelector('.modal-close');

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
}

// Add some sample requests for demo  
function addSampleRequests() {
  const sampleRequests = [
    {
      id: 'REQ-997',
      clientName: 'Jean Dupont',
      problemType: 'Facturation',
      description: 'Double facturation sur ma carte bancaire pour l\'abonnement de ce mois',
      priority: 'Élevée',
      status: 'Traitée',
      date: new Date(Date.now() - 2 * 60 * 60 * 1000).toLocaleString('fr-FR')
    },
    {
      id: 'REQ-998',
      clientName: 'Marie Martin',
      problemType: 'Technique',
      description: 'Impossible de visionner le contenu, problèmes de mise en mémoire tampon constants',
      priority: 'Moyenne',
      status: 'Traitée',
      date: new Date(Date.now() - 1 * 60 * 60 * 1000).toLocaleString('fr-FR')
    },
    {
      id: 'REQ-999',
      clientName: 'Pierre Bernard',
      problemType: 'Autre',
      description: 'Question concernant le changement de forfait d\'abonnement',
      priority: 'Basse',
      status: 'Traitée',
      date: new Date(Date.now() - 24 * 60 * 60 * 1000).toLocaleString('fr-FR')
    },
    {
      id: 'REQ-996',
      clientName: 'Sophie Lefebvre',
      problemType: 'Facturation',
      description: 'Demande de remboursement suite à une erreur de facturation',
      priority: 'Moyenne',
      status: 'Traitée',
      date: new Date(Date.now() - 48 * 60 * 60 * 1000).toLocaleString('fr-FR')
    },
    {
      id: 'REQ-995',
      clientName: 'Thomas Moreau',
      problemType: 'Cas complexe',
      description: 'Problème récurrent avec la qualité de streaming',
      priority: 'Élevée',
      status: 'Traitée',
      date: new Date(Date.now() - 72 * 60 * 60 * 1000).toLocaleString('fr-FR')
    }
  ];

  requests = [...sampleRequests];
  requestCounter = 1000;
}

// Render Tasks Grid
function renderTasks() {
  const container = document.getElementById('tasks-grid');
  if (!container) return;

  container.innerHTML = '';

  tasksDataReal.forEach(task => {
    const card = document.createElement('div');
    card.className = 'task-card';

    const statusClass = task.statut;
    const statusLabel = task.statut === 'on-track' ? 'En cours' : 
                        task.statut === 'attention' ? 'Attention' : 'Urgent';

    card.innerHTML = `
      <div class="task-header">
        <div class="task-name">${task.titre}</div>
        <div class="task-status ${statusClass}">${statusLabel}</div>
      </div>
      <div class="task-info">
        <div class="task-detail">
          <strong>Département</strong>
          ${task.departement}
        </div>
        <div class="task-detail">
          <strong>Deadline</strong>
          ${task.deadline}
        </div>
      </div>
      <div class="task-progress">
        <div class="progress-header">
          <span class="progress-label">Progression</span>
          <span class="progress-value">${task.progression}%</span>
        </div>
        <div class="progress-bar-container">
          <div class="progress-bar-fill ${statusClass}" style="width: ${task.progression}%"></div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

// Render Budgets Grid
function renderBudgets() {
  const container = document.getElementById('budgets-grid');
  if (!container) return;

  container.innerHTML = '';

  budgetsDataReal.forEach(budget => {
    const card = document.createElement('div');
    card.className = 'budget-card';

    const trendIcon = budget.tendance === 'up' ? '↑' : '↓';
    const trendClass = budget.tendance;

    card.innerHTML = `
      <div class="budget-header">
        <div class="budget-name">${budget.categorie}</div>
        <div class="budget-amounts">
          <span class="budget-used">${budget.budget_utilise}</span>
          <span class="budget-total">/ ${budget.montant}</span>
        </div>
      </div>
      <div class="budget-progress">
        <div class="progress-header">
          <span class="progress-label">Budget utilisé</span>
          <span class="progress-value">${budget.pourcentage}%</span>
        </div>
        <div class="progress-bar-container">
          <div class="progress-bar-fill" style="width: ${budget.pourcentage}%"></div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

// Render Productions Grid
function renderProductions() {
  const container = document.getElementById('productions-grid');
  if (!container) return;

  container.innerHTML = '';

  productionsDataReal.forEach(production => {
    const card = document.createElement('div');
    card.className = 'production-card';

    card.innerHTML = `
      <div class="production-image">PRODUCTION</div>
      <div class="production-content">
        <div class="production-header">
          <div class="production-title">${production.titre}</div>
          <div class="production-genre">${production.genre}</div>
        </div>
        <div class="production-status-badge ${production.statut_code}">${production.statut}</div>
        <div class="production-description">${production.description}</div>
        <div class="production-meta">
          <div class="production-meta-item">
            <strong>Équipe</strong>
            ${production.equipe_principale}
          </div>
          <div class="production-meta-item">
            <strong>Sortie</strong>
            ${production.date_sortie}
          </div>
          <div class="production-meta-item">
            <strong>Budget</strong>
            ${production.budget}
          </div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

// Render Partners Categories
function renderPartners() {
  renderPartnersInContainer('partners-categories');
  renderPartnersInContainer('partners-page-categories');
}

function renderPartnersInContainer(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';

  Object.keys(partnersDataFull).forEach(categoryKey => {
    const category = partnersDataFull[categoryKey];
    
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'partner-category';

    const titleDiv = document.createElement('div');
    titleDiv.className = 'partner-category-title';
    titleDiv.innerHTML = `
      <span class="partner-category-icon">${category.icon}</span>
      <span>${category.titre}</span>
    `;

    const gridDiv = document.createElement('div');
    gridDiv.className = 'partners-grid';

    category.partenaires.forEach(partner => {
      const partnerCard = document.createElement('div');
      partnerCard.className = 'partner-card partner-card-clickable';
      partnerCard.innerHTML = `
        <div class="partner-icon">${partner.logo}</div>
        <div class="partner-name">${partner.nom}</div>
        <div class="partner-type">${partner.type}</div>
      `;
      
      partnerCard.addEventListener('click', () => {
        showPartnerModal(partner, categoryKey);
      });
      
      gridDiv.appendChild(partnerCard);
    });

    categoryDiv.appendChild(titleDiv);
    categoryDiv.appendChild(gridDiv);
    container.appendChild(categoryDiv);
  });
}

// Tab Management
function initHomeTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.dataset.tab;
      
      // Update buttons
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Update content
      tabContents.forEach(content => {
        if (content.id === `tab-${targetTab}`) {
          content.classList.add('active');
        } else {
          content.classList.remove('active');
        }
      });
    });
  });
}

// Chart.js Initialization
let budgetPieChart = null;
let budgetBarChart = null;

function initCharts() {
  // Pie Chart - Budget Distribution
  const pieCtx = document.getElementById('budgetPieChart');
  if (pieCtx && !budgetPieChart) {
    budgetPieChart = new Chart(pieCtx, {
      type: 'doughnut',
      data: {
        labels: budgetsDataReal.map(b => b.categorie),
        datasets: [{
          data: budgetsDataReal.map(b => b.pourcentage),
          backgroundColor: ['#E50914', '#FF6B6B', '#B20710', '#FF8888'],
          borderColor: '#141414',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#ffffff',
              padding: 15,
              font: { size: 12 }
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const label = context.label || '';
                const value = context.parsed || 0;
                return `${label}: ${value}% (${budgetsDataReal[context.dataIndex].montant})`;
              }
            }
          }
        }
      }
    });
  }

  // Bar Chart - Quarterly Budget
  const barCtx = document.getElementById('budgetBarChart');
  if (barCtx && !budgetBarChart) {
    budgetBarChart = new Chart(barCtx, {
      type: 'bar',
      data: {
        labels: budgetParTrimestre.map(q => q.trimestre),
        datasets: [
          {
            label: 'Budget prévu (M€)',
            data: budgetParTrimestre.map(q => q.montant),
            backgroundColor: 'rgba(229, 9, 20, 0.6)',
            borderColor: '#E50914',
            borderWidth: 2
          },
          {
            label: 'Dépensé (M€)',
            data: budgetParTrimestre.map(q => q.realise),
            backgroundColor: 'rgba(255, 107, 107, 0.6)',
            borderColor: '#FF6B6B',
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: { color: '#ffffff' },
            grid: { color: 'rgba(255, 255, 255, 0.1)' }
          },
          x: {
            ticks: { color: '#ffffff' },
            grid: { color: 'rgba(255, 255, 255, 0.1)' }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: '#ffffff',
              padding: 15,
              font: { size: 12 }
            }
          }
        }
      }
    });
  }
}

// Partner Modal Management
function initPartnerModal() {
  const modal = document.getElementById('partner-modal');
  const closeBtn = document.getElementById('partner-modal-close');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
}

function showPartnerModal(partner, categoryKey) {
  const modal = document.getElementById('partner-modal');
  const modalBody = document.getElementById('partner-modal-body');

  let categoryBadgeClass = categoryKey;
  
  let html = `
    <div class="partner-modal-header">
      <div class="partner-modal-icon">${partner.logo}</div>
      <div class="partner-modal-name">${partner.nom}</div>
      <div class="partner-modal-type">${partner.type}</div>
      <span class="partner-modal-status">Actif depuis ${partner.depuis}</span>
    </div>

    <div class="partner-modal-tabs">
      <button class="partner-tab-btn active" data-partner-tab="details">Détails</button>
      <button class="partner-tab-btn" data-partner-tab="projects">Projets Communs</button>
      <button class="partner-tab-btn" data-partner-tab="request">Nouvelle Demande</button>
    </div>

    <div class="partner-tab-content active" id="partner-tab-details">
      <div class="partner-description">${partner.description}</div>
      
      <div class="partner-info-grid">
        <div class="partner-info-item">
          <div class="partner-info-label">Depuis</div>
          <div class="partner-info-value">${partner.depuis}</div>
        </div>
        <div class="partner-info-item">
          <div class="partner-info-label">Satisfaction</div>
          <div class="partner-info-value">${partner.satisfaction} ⭐</div>
        </div>
  `;

  if (partner.budget_annuel) {
    html += `
        <div class="partner-info-item">
          <div class="partner-info-label">Budget annuel</div>
          <div class="partner-info-value">${partner.budget_annuel}</div>
        </div>
    `;
  }

  if (partner.abonnes) {
    html += `
        <div class="partner-info-item">
          <div class="partner-info-label">Abonnés</div>
          <div class="partner-info-value">${partner.abonnes}</div>
        </div>
    `;
  }

  if (partner.titres) {
    html += `
        <div class="partner-info-item">
          <div class="partner-info-label">Titres disponibles</div>
          <div class="partner-info-value">${partner.titres}+</div>
        </div>
    `;
  }

  html += `
        <div class="partner-info-item">
          <div class="partner-info-label">Contact</div>
          <div class="partner-info-value" style="font-size: 14px; word-break: break-all;">${partner.contact}</div>
        </div>
      </div>
  `;

  if (partner.services) {
    html += `
      <h4 style="margin: 24px 0 16px; font-size: 18px; color: #ffffff;">Services</h4>
      <ul class="partner-projects-list">
        ${partner.services.map(service => `<li>${service}</li>`).join('')}
      </ul>
    `;
  }

  if (partner.regions) {
    html += `
      <h4 style="margin: 24px 0 16px; font-size: 18px; color: #ffffff;">Régions</h4>
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        ${partner.regions.map(region => `<span class="partner-badge ${categoryBadgeClass}">${region}</span>`).join('')}
      </div>
    `;
  }

  html += `</div>`;

  // Projects Tab
  html += `
    <div class="partner-tab-content" id="partner-tab-projects">
      <h4 style="margin-bottom: 20px; font-size: 18px; color: #ffffff;">Projets actuels avec ${partner.nom}</h4>
  `;

  if (partner.projets_actuels && partner.projets_actuels.length > 0) {
    html += `<ul class="partner-projects-list" style="list-style: none; padding-left: 0;">`;
    partner.projets_actuels.forEach(projet => {
      html += `<li>${projet}</li>`;
    });
    html += `</ul>`;
  } else {
    html += `<p style="color: rgba(255, 255, 255, 0.5); text-align: center; padding: 40px;">Aucun projet actuel pour le moment</p>`;
  }

  html += `</div>`;

  // Request Form Tab
  html += `
    <div class="partner-tab-content" id="partner-tab-request">
      <h4 style="margin-bottom: 20px; font-size: 18px; color: #ffffff;">Faire une nouvelle demande à ${partner.nom}</h4>
      <form class="partner-request-form" id="partner-request-form">
        <div class="form-group">
          <label>Type de demande</label>
          <select class="form-input" id="request-type" required>
            <option value="">Sélectionnez un type</option>
            <option value="Service">Service</option>
            <option value="Collaboration">Collaboration</option>
            <option value="Support">Support</option>
            <option value="Autre">Autre</option>
          </select>
        </div>
        <div class="form-group">
          <label>Objet</label>
          <input type="text" class="form-input" id="request-subject" placeholder="Objet de la demande" required>
        </div>
        <div class="form-group">
          <label>Description</label>
          <textarea class="form-input" id="request-description" placeholder="Décrivez votre demande en détail" required></textarea>
        </div>
        <div class="form-group">
          <label>Date souhaitée</label>
          <input type="date" class="form-input" id="request-date" required>
        </div>
        <div class="form-group">
          <label>Budget estimé</label>
          <input type="text" class="form-input" id="request-budget" placeholder="Ex: 50K€">
        </div>
        <div class="form-group">
          <label>Priorité</label>
          <select class="form-input" id="request-priority" required>
            <option value="Basse">Basse</option>
            <option value="Moyenne">Moyenne</option>
            <option value="Élevée">Élevée</option>
          </select>
        </div>
        <button type="submit" class="partner-request-submit">Envoyer la demande</button>
        <div id="request-success" style="display: none;" class="request-success-message">
          Demande envoyée avec succès à ${partner.nom}!
        </div>
      </form>
    </div>
  `;

  modalBody.innerHTML = html;

  // Init partner tabs
  const partnerTabBtns = modalBody.querySelectorAll('.partner-tab-btn');
  const partnerTabContents = modalBody.querySelectorAll('.partner-tab-content');

  partnerTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.dataset.partnerTab;
      
      partnerTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      partnerTabContents.forEach(content => {
        if (content.id === `partner-tab-${targetTab}`) {
          content.classList.add('active');
        } else {
          content.classList.remove('active');
        }
      });
    });
  });

  // Handle form submission
  const form = document.getElementById('partner-request-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const successMsg = document.getElementById('request-success');
      successMsg.style.display = 'block';
      
      // Reset form
      setTimeout(() => {
        form.reset();
        setTimeout(() => {
          successMsg.style.display = 'none';
        }, 3000);
      }, 1000);
    });
  }

  modal.classList.add('active');
}

// Render all tasks for "Mes Taches" page
function renderAllTasks() {
  const container = document.getElementById('all-tasks-container');
  if (!container) return;

  const allTasksData = [
    {
      titre: "Révision scénario Bridgerton Season 4",
      projet: "Bridgerton Season 4",
      statut: "En cours",
      statut_code: "progress",
      date_limite: "10 Décembre 2025",
      assignee: "Stéphane Rollin",
      progression: 60
    },
    {
      titre: "Rapport d'assurance qualité Avatar ATLA",
      projet: "Avatar: The Last Airbender",
      statut: "À faire",
      statut_code: "todo",
      date_limite: "8 Décembre 2025",
      assignee: "Marine Laurent",
      progression: 0
    },
    {
      titre: "Calibrage budget Q4 2025",
      projet: "Finance & Budgets",
      statut: "En révision",
      statut_code: "review",
      date_limite: "12 Décembre 2025",
      assignee: "Thomas Mercier",
      progression: 85
    },
    {
      titre: "Documentation API intégration Analytics",
      projet: "Intégration AI Analytics",
      statut: "À faire",
      statut_code: "todo",
      date_limite: "20 Décembre 2025",
      assignee: "Julie Suzanne",
      progression: 30
    },
    {
      titre: "Préparation contrats partenaires",
      projet: "Partenariats",
      statut: "En retard",
      statut_code: "late",
      date_limite: "5 Décembre 2025",
      assignee: "Antoine Bouvier",
      progression: 45
    }
  ];

  container.innerHTML = '';

  allTasksData.forEach(task => {
    const row = document.createElement('div');
    row.className = 'task-table-row';

    const statusLabel = {
      'todo': 'À faire',
      'progress': 'En cours',
      'review': 'En révision',
      'done': 'Terminé',
      'late': 'En retard'
    }[task.statut_code] || task.statut;

    row.innerHTML = `
      <div class="task-table-cell">
        <strong>${task.titre}</strong>
        <span>Projet: ${task.projet}</span>
      </div>
      <div class="task-table-cell">
        <strong>Statut</strong>
        <span class="task-status ${task.statut_code}">${statusLabel}</span>
      </div>
      <div class="task-table-cell">
        <strong>Échéance</strong>
        <span>${task.date_limite}</span>
      </div>
      <div class="task-table-cell">
        <strong>Assigné à</strong>
        <span>${task.assignee}</span>
      </div>
      <div class="task-table-cell">
        <strong>${task.progression}%</strong>
        <div class="progress-bar-container" style="margin-top: 8px;">
          <div class="progress-bar-fill" style="width: ${task.progression}%"></div>
        </div>
      </div>
    `;

    container.appendChild(row);
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initProcessLaunches();
  initModal();
  initHomeTabs();
  renderTasks();
  renderBudgets();
  renderProductions();
  renderPartners();
  initPartnerModal();
  renderAllTasks();
  
  // Init charts after a short delay to ensure canvas elements are rendered
  setTimeout(initCharts, 100);
  initSupportForm();
  initSearch();
  addSampleRequests();
  renderRequests();
});
