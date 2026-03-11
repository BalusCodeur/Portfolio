export interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  slug: string;
  tags: string[];
  link?: string;
}
export const projects: Project[] = [
  {
    title: "BougeTonUQAC",
    description:
      "Application mobile pour partager des activités pour les nouveaux arrivants a l’UQAC.",
    image: "/images/poco.png",
    slug: "BougeTonUQAC",
    tags: ["Java", "Android Studio", "Firebase"],
    longDescription:
      "Application mobile pour partager des activités pour les nouveaux arrivants a l’UQAC.\nCréation de groupes de discussion et carte interactive.",
    link: "https://github.com/GalaxiGames23/BougeTonUqac",
  },
  {
    title: "FaisCroquer",
    description:
      "Application mobile permettant à deux utilisateurs de partager des ingrédients pour un repas ou un apéro.",
    image: "/images/poco.png",
    slug: "FaisCroquer",
    tags: ["Flutter", "Dart", "Firebase"],
    longDescription:
      "Application mobile permettant à deux utilisateurs de partager des ingrédients pour un repas ou un apéro. Pour les copains quoi...",
  },
  {
    title: "PoulpeJeu",
    description: "Jeu mobile sur le thème de la célèbre série Squid Game",
    image: "/images/poco.png",
    slug: "PoulpeJeu",
    tags: ["Flutter", "Dart", "Firebase"],
    longDescription:
      "Jeu mobile sur le thème de la célèbre série Squid Game comportant plusieurs mini jeux choisis aléatoirement pour mettre en compétition deux utilisateurs connectes en wifi.",
    link: "https://github.com/BalusCodeur/PoulpeJeu",
  },
  {
    title: "Prototype Réfrigérateur Connecté",
    description:
      "Dispositif scannant les étiquettes RFID de produits stockés dans un réfrigérateur",
    image: "/images/poco.png",
    slug: "Frigo",
    tags: ["Flutter", "Dart", "Raspberry Pi", "python", "Firebase"],
    longDescription:
      "Dispositif scannant les étiquettes RFID de produits stockés dans un réfrigérateur pour permettre d’afficher son contenu dans une application mobile grâce à Firestore. Récupération de données sur les aliments grâce à OpenFoodFacts ( Base de donnée alimentaire) et surveillance de la température et humidité de l’appareil avec des capteurs.",
  },
  {
    title: "Banshi",
    description:
      "Extension Web permettant d’analyser les téléchargements effectues sur le navigateur de l’utilisateur et détecter les fichiers dangereux.",
    image: "/images/poco.png",
    slug: "Frigo",
    tags: ["HTML", "CSS", "Javascript"],
    longDescription:
      "Extension Web permettant d’analyser les téléchargements effectues sur le navigateur de l’utilisateur et détecter les fichiers dangereux.",
    link: "https://github.com/Kali-ki/Banshy_",
  },
];
