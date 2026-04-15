import { siReact } from "simple-icons";

function Icon({ icon, className }: { icon: any; className?: string }) {
  return (
    <svg
      className={className}
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor" // 👈 permet de colorer l’icône avec Tailwind
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={icon.path} />
    </svg>
  );
}
