import Image from "next/image";

export default function Header() {
  return (
    <div className="flex-col items-start py-16 px-6 gap-6">
      <Image
        src="/images/poco.png"
        alt="Ma photo"
        className="w-32 h-32 object-cover rounded-full"
        width={400}
        height={400}
      />

      <div className="flex flex-col gap-2">
        <h1
          style={{ fontFamily: "var(--font-serif)" }}
          className="text-6xl font-bold text-[#2d4a2d] leading-tight"
        >
          Nathan
          <br />
          Babus
        </h1>
        <p className="text-lg" style={{ color: "var(--muted)" }}>
          Développeur & Geek 🌿
        </p>
      </div>

      <p
        className="max-w-md text-base leading-relaxed"
        style={{ color: "var(--muted)" }}
      >
        I love coding, but what's really building our society is human
        conections
      </p>
    </div>
  );
}
