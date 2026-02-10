import { useEffect, useState } from "react";
import { fetchHeroes } from "../../api/hero.api";

const Hero = () => {
  const [heroes, setHeroes] = useState([]);
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

  if (loading) return <p>Loading hero...</p>;

  return (
    <section>
      {heroes.map((hero) => (
        <div key={hero._id}>
          <h1>{hero.title}</h1>
          <p>{hero.description}</p>
          <a href={hero.ctaLink}>{hero.ctaText}</a>
        </div>
      ))}
    </section>
  );
};

export default Hero;
