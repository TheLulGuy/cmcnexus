import { Radar } from "lucide-react";
import { Slide } from "react-awesome-reveal";
import future_u_logo from "../assets/sponsorsLogos/Blue Yellow Elegant Professional University Logo_20250426_112827_0000.png";
import fashion_logo from "../assets/sponsorsLogos/Black_Elegant_Woman_Fashion_Brand.png"
import chicken_logo from "../assets/sponsorsLogos/Black Red Rooster Coffee Bar.png"
import green_threads_logo from "../assets/sponsorsLogos/Green and White Modern Simple Borcelle Organic.png"
import sponsors_combination from "../assets/sponsorsLogos/Sponsors_combination.png"

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}


const imageSources = [
  future_u_logo,
  fashion_logo,
  chicken_logo,
  green_threads_logo,
  "",
  sponsors_combination,

]

const sponsorNames = [
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
]

const sponsors: SponsorProps[] = imageSources.map((src, index) => ({
  icon: (
    <img 
      src={src}
      alt={""}
      className="w-[220px] object-contain rounded-lg" // Consistent for all
    />
  ),
  name: sponsorNames[index] || `Sponsor ${index + 1}` // Fallback
}));

export const Sponsors = () => {
  return (
    <Slide triggerOnce={true} direction="right">

    <section
      id="sponsors"
      className="container pt-24 sm:py-32"
    >
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Investors and founders
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsors.map(({ icon, name }: SponsorProps) => (
          <div
            key={name}
            className="flex items-center gap-1 text-muted-foreground/60"
          >
            <span>{icon}</span>
            <h3 className="text-xl  font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
    </Slide>
  );
};
