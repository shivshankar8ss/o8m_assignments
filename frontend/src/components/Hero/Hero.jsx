import { useEffect, useState } from "react";
import { fetchHeroes } from "../../api/hero.api";

const Hero = () => {
  const [sections, setSections] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    fetchHeroes().then((data) => {
      const sorted = data.sort((a, b) => a.priority - b.priority);
      setSections(sorted);
    });
  }, []);

  if (!sections.length) return null;

  const current = sections[active];

  return (
    <section className="relative min-h-screen bg-black text-white flex">
      
      {/* LEFT CONTENT */}
      <div className="flex-1 px-12 py-32 z-10">
        <h1 className="text-6xl font-semibold leading-tight max-w-3xl">
          {current.title}
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-xl">
          {current.description}
        </p>

        {current.ctaText && (
          <button className="mt-10 px-10 py-4 bg-white text-black font-medium">
            {current.ctaText}
          </button>
        )}
      </div>

      {/* RIGHT SECTIONS */}
      <div className="hidden lg:flex w-[420px] h-screen">
        {sections.map((sec, index) => (
          <button
            key={sec._id}
            onClick={() => setActive(index)}
            className={`
              flex-1
              flex
              items-center
              justify-center
              transition-all
              duration-300
              ${
                index === active
                  ? "bg-white text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              }
            `}
          >
            <span className="rotate-90 text-lg font-medium tracking-wide">
              {sec.sectionLabel || `Section ${index + 1}`}
            </span>
          </button>
        ))}
      </div>

      {/* BACKGROUND IMAGE */}
      {current.mediaUrl && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${current.mediaUrl})` }}
        />
      )}
    </section>
  );
};

export default Hero;
