import { Slide } from "react-awesome-reveal";
import future_u_logo from "../assets/sponsorsLogos/Blue Yellow Elegant Professional University Logo_20250426_112827_0000.png";
import fashion_logo from "../assets/sponsorsLogos/Black_Elegant_Woman_Fashion_Brand.png";
import chicken_logo from "../assets/sponsorsLogos/Black_Red_Rooster_Coffee_Bar.png";
import green_threads_logo from "../assets/sponsorsLogos/Green and White Modern Simple Borcelle Organic.png";
import sponsors_combination from "../assets/sponsorsLogos/Sponsors_combination.png";
import furniture_logo from "../assets/sponsorsLogos/Black White Flat Modern Illustrative Furniture Logo_20250426_113200_0000.png";
import award_all from "../assets/sponsorsLogos/award_all.png"

interface SponsorProps {
  icon: JSX.Element;
  name: string;
  type?: 'regular' | 'combination' | 'award';
}

const imageSources = [
  future_u_logo,
  fashion_logo,
  chicken_logo,
  green_threads_logo,
  furniture_logo,
  sponsors_combination,
  award_all,
];

const sponsorNames = [
  " ",
  " ",
  " ",
  " ",
  " ",
  "Our Proud Partners",
  "Awards", // Will be used for both award images
];

const sponsors: SponsorProps[] = imageSources.map((src, index) => {
  const isCombination = index === 5;
  const isAward = index >= 6;
  
  return {
    icon: (
      <img 
        src={src}
        alt=""
        className={
          isCombination ? "w-[350px] object-contain rounded-lg" :
          isAward ? "w-[400px] object-contain rounded-lg" :
          "w-[220px] object-contain rounded-lg"
        }
      />
    ),
    name: sponsorNames[index],
    type: isCombination ? 'combination' : isAward ? 'award' : 'regular'
  };
});

export const Sponsors = () => {
  const regularSponsors = sponsors.filter(s => s.type === 'regular');
  const combinationSponsor = sponsors.find(s => s.type === 'combination');
  const awardSponsors = sponsors.filter(s => s.type === 'award');

  return (
    <Slide triggerOnce={true} direction="right">
      <section id="sponsors" className="container pt-24 sm:py-32">
        <h2 className="text-center text-md lg:text-2xl font-bold mb-8 text-primary">
          Investors and Founders
        </h2>

        {/* Regular sponsors */}
        <div className="flex flex-wrap justify-center items-center gap-1 md:gap-8 mb-12">
          {regularSponsors.map(({ icon, name }, index) => (
            <div key={index} className="flex items-center gap-1 text-muted-foreground/60">
              <span>{icon}</span>
              <h3 className="text-xl font-bold">{name}</h3>
            </div>
          ))}
        </div>

        {/* Combination sponsor */}
        {combinationSponsor && (
          <div className="flex flex-col items-center gap-1 mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary">
              {combinationSponsor.name}
            </h3>
            <div className="flex justify-center">
              {combinationSponsor.icon}
            </div>
          </div>
        )}

        {/* Awards section */}
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-2xl lg:text-3xl font-bold text-primary">
            Awards
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {awardSponsors.map(({ icon }, index) => (
              <div key={index}>
                {icon}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Slide>
  );
};