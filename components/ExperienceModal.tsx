import { useEffect, useRef } from "react";
import type { Experience } from "@/types/experience";

type ExperienceModalProps = {
  experience: Experience | null;
  onClose: () => void;
};

export default function ExperienceModal({
  experience,
  onClose,
}: ExperienceModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (experience) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [experience]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
      className="bg-pine w-lg h-96 m-auto rounded-2xl shadow-2xl border overflow-hidden border-espresso"
    >
      {experience && (
        <div onClick={(e) => e.stopPropagation()}>
          <h2 className="text-cream p-2 font-bold text-lg">
            {`${experience.title} chez ${experience.company}`}
          </h2>
          <h3 className="text-accent px-2 pb-2 text-md">{experience.period}</h3>
          <div>{experience.longDescription}</div>
          <div className="flex flex-row">
            {experience.stack.map((techno) => (
              <div className="bg-pine/20  mx-0.5 px-2">{techno}</div>
            ))}
          </div>
          <button onClick={onClose}>Fermer</button>
        </div>
      )}
    </dialog>
  );
}
