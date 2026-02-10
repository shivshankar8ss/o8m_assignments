import { useEffect, useState } from "react";
import { fetchHeroes } from "../../api/hero.api";

const Hero = () => {
  const [heroes, setHeroes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHeroes()
      .then((data) => {
        setHeroes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // auto slide every 4 seconds
  useEffect(() => {
    if (!heroes.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === heroes.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [heroes]);

  if (loading) return <p>Loading hero...</p>;
  if (!heroes.length) return null;

  const hero = heroes[currentIndex];

  return (
    <section style={{ padding: "60px", background: "#f5f5f5" }}>
      <h1>{hero.title}</h1>
      <p>{hero.description}</p>

      {hero.ctaText && (
        <a href={hero.ctaLink}>
          <button>{hero.ctaText}</button>
        </a>
      )}

      <div style={{ marginTop: "20px" }}>
        {heroes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              margin: "0 5px",
              background:
                index === currentIndex ? "black" : "gray",
              color: "white"
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
