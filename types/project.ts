// types/project.ts
export type Project = {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  slug: string;
  image: string; // ← le ? = optionnel
  liveUrl?: string;
  githubUrl?: string;
};
