import ProjectCard from "./ProjectCard";

import { projects } from "../data/projects";

export default function ProjectSection() {
  return (
    <section className="py-16 px-6 mx-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
}
