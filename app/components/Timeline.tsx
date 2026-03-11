interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  emoji?: string;
}

const events: TimelineEvent[] = [
  {
    year: "2001",
    title: "Je débarque",
    description: "Naissance quelque part en France",
    emoji: "👶",
  },
  {
    year: "2018",
    title: "Premier PC gamer",
    description: "Le début de la dépendance",
    emoji: "🖥️",
  },
  {
    year: "2022",
    title: "Début du dev",
    description: "Hello World en Python",
    emoji: "🐍",
  },
];

interface TimelineItemProps {
  event: TimelineEvent;
  reverse: boolean;
}

// Composant "privé", pas besoin de export
function TimelineItem({ event, reverse }: TimelineItemProps) {
  return (
    <div
      className={`flex flex-col sm:flex-row ${reverse ? "sm:flex-row-reverse" : ""} items-center gap-4 mb-8`}
    >
      {/* Carte */}
      <div className="w-full sm:w-[30%] flex flex-col gap-2 bg-[#2d4a2d] p-4 rounded-xl">
        <span className="text-xl">{event.emoji}</span>
        <span className="text-xs text-[#8faa72]">{event.year}</span>
        <h3 className="font-bold text-[#f5f0e8] text-sm">{event.title}</h3>
        <p className="text-xs text-[#f5f0e8]/60">{event.description}</p>
      </div>

      {/* Point */}
      <div className="w-3 h-3 rounded-full bg-[#8faa72] flex-shrink-0 z-10" />

      {/* Espace vide — caché sur mobile, visible sur desktop */}
      <div className="hidden sm:block sm:w-[30%]" />
    </div>
  );
}

export default function Timeline() {
  return (
    <div className="relative px-4 my-4">
      {/* Ligne cachée sur mobile, centrée sur desktop */}
      <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[#2d4a2d]/30" />

      {events.map((event, index) => (
        <TimelineItem key={index} event={event} reverse={index % 2 === 0} />
      ))}
    </div>
  );
}
