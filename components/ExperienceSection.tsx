import { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import ExperienceModal from "./ExperienceModal";
import { Experience } from "@/types/experience";
import { experiences } from "@/data/experiences";

interface Props {
  selectedExperience: Experience | null;
  onSelect: (experience: Experience) => void;
}

export default function ExperienceSection({
  selectedExperience,
  onSelect,
}: Props) {
  return (
    <div className="flex flex-col justify-center items-center py-10 gap-10">
      {experiences.map((experience) => (
        <ExperienceCard
          key={experience.title}
          {...experience}
          onClick={() => {
            onSelect(experience);
            console.log(selectedExperience);
          }}
        />
      ))}
    </div>
  );
}
