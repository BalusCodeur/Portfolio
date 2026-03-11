import Image from "next/image";

interface ExperienceCardProps {
  title: string;
  date: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export default function ExperienceCard({
  title,
  date,
  description,
  image,
  reverse = false,
}: ExperienceCardProps) {
  return (
    <div
      className={`flex gap-6 p-6 rounded-2xl bg-[#2d4a2d] w-full max-w-3xl ${
        reverse ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="bg-white rounded-xl overflow-hidden flex-shrink-0">
        <Image
          src={image}
          alt="Logo entreprise"
          className="w-20 h-20 object-cover"
          width={80}
          height={80}
        />
      </div>

      <div className="flex flex-col gap-2 flex-1">
        <h2 className="text-xl font-bold text-[#f5f0e8]">{title}</h2>
        <p className="text-sm text-[#8faa72]">{date}</p>
        <p className="text-sm text-[#9c8f7a] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
