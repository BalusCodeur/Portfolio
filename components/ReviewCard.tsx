import Image from "next/image";

interface ReviewCardProps {
  title: string;
  description: string;
  image: string;
  author: string;
  note: number;
  active: boolean;
  position: string;
}

export default function ReviewCard({
  title,
  description,
  image,
  note,
  author,
  active,
  position,
}: ReviewCardProps) {
  const base =
    "absolute flex flex-row w-128 h-64 bg-zinc-800 text-white px-10 py-14 rounded-2xl transition-all duration-500";

  return (
    <div
      className={`
        ${base}
        ${
          position === "center"
            ? "scale-110 z-20 opacity-100"
            : "scale-75 z-10 opacity-60"
        }
        ${position === "left" ? "-translate-x-48" : ""}
        ${position === "right" ? "translate-x-48" : ""}
      `}
    >
      <div className="overflow-hidden">
        <Image
          src={image}
          alt="Logo entreprise"
          className="w-32 h-32 object-cover rounded-full"
          width={400}
          height={400}
        />
      </div>

      <div className="flex flex-col px-5 gap-2 flex-1">
        <h1 className="title-1">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
