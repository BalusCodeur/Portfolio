import Image from "next/image";

interface ExperienceCardProps {
  title: string;
  period: string;
  description: string;
  image: string;
  reverse?: boolean;
  onClick?: () => void;
}

export default function ExperienceCard({
  title,
  period,
  description,
  image,
  reverse = false,
  onClick,
}: ExperienceCardProps) {
  return (
    <div
      className={`flex gap-6 p-6 rounded-2xl bg-pine w-full max-w-3xl ${
        reverse ? "flex-row-reverse" : "flex-row"
      }`}
      onClick={onClick}
    >
      <div className="bg-white rounded-xl relative overflow-hidden shrink-0 w-24 h-24">
        <Image
          src={image}
          alt="Logo entreprise"
          fill
          className=" object-contain"
        />
      </div>

      <div className="flex flex-col gap-2 flex-1">
        <h2 className="text-xl font-bold text-[#f5f0e8]">{title}</h2>
        <p className="text-sm text-[#8faa72]">{period}</p>
        <p className="text-sm text-[#9c8f7a] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
