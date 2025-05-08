// import { Button } from "./ui/button";
// import { buttonVariants } from "./ui/button";
// import { GitHubLogoIcon } from "@radix-ui/react-icons";
// import { Slide } from "react-awesome-reveal";
// import landing_image from "../assets/landing_image_without_bg.png"
// export const Hero = () => {
//   return (
//     <Slide direction="left" triggerOnce={true}>

//     <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
//       <div className="text-center lg:text-start space-y-6">
//         <main className="text-5xl md:text-6xl font-bold">
//           <h1 className="inline">
//             <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
//               Shadcn
//             </span>{" "}
//             landing page
//           </h1>{" "}
//           for{" "}
//           <h2 className="inline">
//             <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
//               React
//             </span>{" "}
//             developers
//           </h2>
//         </main>

//         <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
//           Build your React landing page effortlessly with the required sections
//           to your project.
//         </p>

//         <div className="space-y-4 md:space-y-0 md:space-x-4">
//           <Button className="w-full md:w-1/3">Get Started</Button>

//           <a
//             rel="noreferrer noopener"
//             href="https://github.com/leoMirandaa/shadcn-landing-page.git"
//             target="_blank"
//             className={`w-full md:w-1/3 ${buttonVariants({
//               variant: "outline",
//             })}`}
//             >
//             Github Repository
//             <GitHubLogoIcon className="ml-2 w-5 h-5" />
//           </a>
//         </div>
//       </div>

//       {/* Hero cards sections */}
//       <div className="z-10">
//         {/*//! Insert image here */}
//         {/* <HeroCards /> */}
//         <img
//             className="object-contain rounded-lg"
//             // src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//             src={landing_image}
//             alt=""
// />
//       </div>

//       {/* Shadow effect */}
//       <div className="shadow"></div>
//     </section>
//     </Slide>
//   );
// };

import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
// import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Slide } from "react-awesome-reveal";
import landing_image from "../assets/landing_image_without_bg.png";
import { LandingPageIcon } from "./Icons";
export const Hero = () => {
  return (
    <Slide direction="left" triggerOnce={true}>
      <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
        <div className="text-center lg:text-start space-y-6">
          <main className="text-5xl md:text-6xl font-bold">
            <h1 className="inline">
              <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
                CMC
              </span>{" "}
              Nexus
            </h1>{" "}
            <h2 className="inline">
              <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                Business
              </span>{" "}
              Solutions
            </h2>
          </main>

          <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
            Integrated technology, infrastructure, and marketing solutions to accelerate your business growth.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-full md:w-1/3">Get Started</Button>
            <a
              rel="noreferrer noopener"
              href="#contact"
              className={`w-full md:w-1/3 ${buttonVariants({
                variant: "outline",
              })}`}
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="z-10">
          {/* <img
            className="object-contain rounded-lg"
            src={landing_image}
            alt="CMC Nexus Business Solutions"
          /> */}
        </div>
            {/* <LandingPageIcon /> */}
        <div className="shadow"></div>
      </section>
    </Slide>
  );
};