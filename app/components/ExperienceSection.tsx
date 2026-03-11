import ExperienceCard from "./ExperienceCard";

const orangefr = {
  title: "Stagiaire Développement Mobile",
  date: "Décembre 2023 - Juin 2024",
  description: "Stage de Neuille avec Jean-Marc, Hervé, Jean-Luc et Fred.",
  image: "/images/Orange-cropped.png",
};

const stellantisfr = {
  title: "Stagiaire Reseau de site",
  date: "Juin 2022 - Aout 2022",
  description: "Stage de Neuille avec Christophe Bauquin le coquin.",
  image: "/images/stellantis.png",
};

const labfr = {
  title: "Stagiaire IIoT",
  date: "Juin 2021 - Juillet 2021",
  description:
    "Stage de Neuille avec Stephane Marie le mec le plus mignon de France.",
  image: "/images/cropped-OVALT.png",
};

export default function ExperienceSection() {
  return (
    <div className="flex flex-col justify-center items-center py-10 gap-10">
      <ExperienceCard {...orangefr} />
      <ExperienceCard {...stellantisfr} reverse />
      <ExperienceCard {...labfr} />
    </div>
  );
}
