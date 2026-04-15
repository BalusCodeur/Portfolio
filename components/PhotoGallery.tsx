import Image from "next/image";
import { useState } from "react";

interface Photo {
  src: string;
  alt: string;
  legend: string;
}

const photos: Photo[] = [
  {
    src: "/images/gallery/cabane_cheuvreuil.png",
    alt: "peinture",
    legend: "J'aime la peinture",
  },
  {
    src: "/images/gallery/kerlann.jpg",
    alt: "kerlann",
    legend: "J'adore la maison de campagne de ma maman",
  },
];

export default function PhotoGallery() {
  const [selected, setSelected] = useState<Photo | null>(null);
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            onClick={() => setSelected(photo)}
            className="cursor-pointer rounded-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-8"
        >
          <div className="flex flex-col items-center gap-4 max-w-2xl">
            <Image
              src={selected.src}
              alt={selected.alt}
              width={800}
              height={600}
              className="rounded-2xl object-contain max-h-[70vh]"
            />
            {selected.legend && (
              <p className="text-[#f5f0e8] text-center">{selected.legend}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
