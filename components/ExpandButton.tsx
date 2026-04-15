interface SectionSplitterProps {
  title: string;
}

export default function SectionSplitter({ title }: SectionSplitterProps) {
  return (
    <div className="mt-8 mb-4">
      <h1 className="title-1">{title}</h1>
      <div className="flex-1 h-px bg-amber-50"></div>
    </div>
  );
}
