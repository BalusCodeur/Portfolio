import { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    company: "Orange",
    title: "Stagiaire Développement Mobile",
    period: "Décembre 2023 - Juin 2024",
    description:
      "Stage chez Orange Innovation au sein de l'equipe Orange telephone",
    longDescription:
      "Stage de 6 mois au sein de l’equipe developpant Orange Telephone pour Orange Innovation. Developpement de nouvelles fonctionnalites pour l’application se reposant sur des technologies de telephonie en developpement. Developpement d’un portail Web permettant la generation et visualisation de mini-apps simple a l’aide d’un LLM.",
    image: "/images/Orange-cropped.png",
    stack: [
      "Android",
      "java",
      "Flutter",
      "Dart",
      "Javascript",
      "CSS",
      "HuggingFace",
      "OpenAI API",
      "LangChain",
      "python",
    ],
  },

  {
    company: "Stellantis",
    title: "Stagiaire Reseau de site",
    period: "Juin 2022 - Aout 2022",
    description:
      "Stage au sein de l'equipe reseau du site Stellantis de la janais",
    longDescription:
      "Stage de 3 mois sur le site stellantis de la Janais, assistance de l’equipe reseau pour trouver l’origine de problemes de connexions wifi de vehicules automatiques, modification de scripts de recuperation des equipements reseau sur tout le site et mise en place de serveurs et configuration de ces derniers.",
    image: "/images/stellantis.png",
    stack: ["Macro Excel", "Korn Shell", "Perl", "SQL", "HTML", "WiFi"],
  },

  {
    company: "LAB4I",
    title: "Stagiaire IIoT",
    period: "Juin 2021 - Juillet 2021",
    description: "Stage chez Ovalt au sein de LAB4I",
    longDescription:
      "Test et configurations de logiciels de monitoring IIoT. Test et mise en comparaison des logiciels Aveva Insight et Moneo. Creation de dashboard sur chaque solution, redaction de documentation technique et demonstration a l’equipe.",
    image: "/images/cropped-OVALT.png",
    stack: ["Moneo", "Aveva", "IO-Link"],
  },
];
