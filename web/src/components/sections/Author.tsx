import { User } from "lucide-react";

export function Author() {
  const authors = [
    {
      name: "Nandu Mahesh",
      linkedin: "https://www.linkedin.com/in/nandumahesh/",
    },
    {
      name: "Gaurav Agarwalla",
      linkedin: "https://www.linkedin.com/in/gauravag18/",
    },
  ];

  return (
    <aside
      className="w-full max-w-sm mx-auto flex flex-col gap-2 px-4 py-3
      bg-black/60 border border-cyan-400/20 rounded-xl
      shadow-[0_0_16px_rgba(0,255,255,0.12)]
      backdrop-blur-md"
      aria-labelledby="author-heading"
    >
      <h2
        id="author-heading"
        className="text-sm font-semibold text-cyan-300 text-center mb-2"
      >
        Website Authors
      </h2>

      <div className="flex flex-row flex-wrap gap-3 justify-center">
        {authors.map((a, idx) => (
          <a
            key={idx}
            href={a.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-0 flex items-center gap-2
              bg-gradient-to-br from-black/40 to-cyan-500/10
              border border-white/10 rounded-lg px-3 py-2
              shadow-[0_0_10px_rgba(0,255,255,0.1)]
              hover:shadow-[0_0_16px_rgba(0,255,255,0.35)]
              hover:border-cyan-400/40
              transition-all duration-300"
          >
            <User className="w-4 h-4 text-cyan-300 flex-shrink-0" />
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-cyan-300">{a.name}</span>
              <span className="text-[10px] text-cyan-400">LinkedIn</span>
            </div>
          </a>
        ))}
      </div>
    </aside>
  );
}

export default Author;
