import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  tags?: string[];
}

export default function ProjectCard({
  title,
  description,
  image,
  slug,
  tags = [],
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`}>
      <div className="flex gap-6 p-6 rounded-2xl bg-[#2d4a2d] hover:-translate-y-1 transition-transform duration-300">
        {/* <Image
          src={image}
          alt={`Logo ${title}`}
          className="w-20 h-20 object-cover rounded-xl flex-shrink-0"
          width={80}
          height={80}
        /> */}

        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-[#f5f0e8]">{title}</h2>
          <p className="text-sm text-[#9c8f7a] leading-relaxed">
            {description}
          </p>
          <div className="flex gap-2 flex-wrap mt-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full bg-[#8faa72]/20 text-[#8faa72]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
