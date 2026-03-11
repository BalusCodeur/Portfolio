import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../../data/projects";

export default async function ProjetPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  // Si le slug existe pas → page 404
  if (!project) notFound();

  return (
    <div className="max-w-2xl mx-auto px-6 py-16 flex flex-col gap-8">
      <Link href="/" className="text-sm text-[#8faa72] hover:underline">
        ← Retour
      </Link>

      <Image
        src={project.image}
        alt={project.title}
        width={80}
        height={80}
        className="rounded-xl"
      />

      <div className="flex flex-col gap-3">
        <h1 className="text-4xl font-bold text-[#2d4a2d]">{project.title}</h1>
        <div className="flex gap-2 flex-wrap">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full bg-[#8faa72]/20 text-[#8faa72]"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-[#9c8f7a] leading-relaxed">
          {project.longDescription}
        </p>
      </div>
    </div>
  );
}
