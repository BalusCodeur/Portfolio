import Image from "next/image";

export default function AboutMe() {
  return (
    <div>
      <p>Moi je suis un mec qui adoooore la musique</p>
      <Image
        src="/images/poco.png"
        alt="Logo entreprise"
        className="w-32 h-32 object-cover rounded-full"
        width={400}
        height={400}
      />
    </div>
  );
}
