import { useEffect, useState } from "react";

export type Stars = {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
  animationDuration: number;
}[];

export type Meteors = {
  id: number;
  size: number;
  x: number;
  y: number;
  animationDelay: number;
  animationDuration: number;
}[];

const StarsBackground = () => {
  // Stars List
  const [stars, setStars] = useState<Stars>([]);
  const [meteors, setMeteors] = useState<Meteors>([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
      generateMeteors();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const newStars = [];
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000,
    );

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const newMeteors = [];
    const numberOfMeteors = 15;
    // For Dynamic Number of Meteors: Math.floor((window.innerWidth * window.innerHeight) / 1000000);

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        animationDelay: Math.random(),
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Stars */}
      {stars.map((star) => {
        return (
          <div
            key={star.id}
            className="star animate-pulse-subtle"
            style={{
              height: star.size + "px",
              width: star.size + "px",
              left: star.x + "%",
              top: star.y + "%",
              opacity: star.opacity + "%",
              animationDuration: star.animationDuration + "s",
            }}
          ></div>
        );
      })}

      {/* Meteors */}
      {meteors.map((meteor) => {
        return (
          <div
            key={meteor.id}
            className="meteor animate-meteor"
            style={{
              height: meteor.size + "px",
              width: meteor.size * 10 + "px",
              left: meteor.x + "%",
              top: meteor.y + "%",
              animationDelay: meteor.animationDelay + "s",
              animationDuration: meteor.animationDuration + "s",
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default StarsBackground;
