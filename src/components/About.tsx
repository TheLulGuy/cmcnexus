// import { Statistics } from "./Statistics";
// import pilot from "../assets/pilot.png";
// import { Slide } from "react-awesome-reveal";
// export const About = () => {
//   return (
//     <Slide direction="up" triggerOnce={true}>

//     <section
//       id="about"
//       className="container py-24 sm:py-32"
//       >
//       <div className="bg-muted/50 border rounded-lg py-12">
//         <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
//           <img
//             src={pilot}
//             alt=""
//             className="w-[300px] object-contain rounded-lg"
//             />
//           <div className="bg-green-0 flex flex-col justify-between">
//             <div className="pb-6">
//               <h2 className="text-3xl md:text-4xl font-bold">
//                 <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
//                   About{" "}
//                 </span>
//                 Company
//               </h2>
//               <p className="text-xl text-muted-foreground mt-4">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//                 enim ad minim veniam, quis nostrud exercitation ullamco laboris
//                 nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
//                 amet, consectetur adipiscing elit.
//               </p>
//             </div>

//             <Statistics />
//           </div>
//         </div>
//       </div>
//     </section>
//     </Slide>
//   );
// };


import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";
import { Slide } from "react-awesome-reveal";

export const About = () => {
  return (
    <Slide direction="up" triggerOnce={true}>
      <section id="about" className="container py-24 sm:py-32">
        <div className="bg-muted/50 border rounded-lg py-12">
          <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
            <img
              src={pilot}
              alt="CMC Nexus Team"
              className="w-[300px] object-contain rounded-lg"
            />
            <div className="flex flex-col justify-between">
              <div className="pb-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    About{" "}
                  </span>
                  CMC Nexus
                </h2>
                <p className="text-xl text-muted-foreground mt-4">
                  CMC Nexus is a multi-disciplinary business solutions provider offering integrated services across Technology, Infrastructure, and Marketing. 
                  We empower businesses with scalable, efficient solutions designed to accelerate growth and streamline operations. 
                  Our diverse capabilities allow clients to access end-to-end execution from digital transformation to workspace development.
                </p>
              </div>

              <Statistics />
            </div>
          </div>
        </div>
      </section>
    </Slide>
  );
};