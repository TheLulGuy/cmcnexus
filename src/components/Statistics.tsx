import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

export const Statistics = () => {
  interface statsProps {
    quantity: number;
    description: string;
    showPlus: boolean;
  }

  const stats: statsProps[] = [
    {
      quantity: 2700,
      description: "Projects",
      showPlus: true
    },
    {
      quantity: 1800,
      description: "Clients",
      showPlus: true
    },
    {
      quantity: 112,
      description: "Partners",
      showPlus: false
    },
    {
      quantity: 3,
      description: "Services",
      showPlus: false
    },
  ];

  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const [countingComplete, setCountingComplete] = useState(false);

  useEffect(() => {
    const duration = 2000; // Total animation duration in ms
    const startTime = Date.now();
    let animationFrameId: number;

    const easeOutQuad = (t: number) => t * (2 - t); // Easing function for slow finish

    const animateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuad(progress);

      setCounts(
        stats.map(stat => Math.floor(easedProgress * stat.quantity))
      );

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateCount);
      } else {
        setCountingComplete(true);
      }
    };

    animateCount();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ description, showPlus }, index) => (
          <div key={description} className="space-y-2 text-center">
            <div className="flex items-center justify-center">
              <h2 className="text-3xl sm:text-4xl font-bold">
                {counts[index].toLocaleString()}
              </h2>
              {showPlus && countingComplete && (
                <Fade duration={500} triggerOnce>
                  <span className="text-3xl sm:text-4xl font-bold text-primary">+</span>
                </Fade>
              )}
            </div>
            <p className="text-xl text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};