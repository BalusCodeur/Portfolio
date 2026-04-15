interface SectionSplitterProps {
  title: string;
}

export default function SectionSplitter({ title }: SectionSplitterProps) {
  return (
    <div className="mt-8 mb-4 flex flex-col gap-2">
      <h2 className="text-3xl font-bold text-[#2d4a2d]">{title}</h2>
      <div className="h-px bg-[#2d4a2d]/20"></div>
    </div>
  );
}
