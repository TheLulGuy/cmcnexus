// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Check } from "lucide-react";

// enum PopularPlanType {
//   NO = 0,
//   YES = 1,
// }

// interface PricingProps {
//   title: string;
//   popular: PopularPlanType;
//   price: number;
//   description: string;
//   buttonText: string;
//   benefitList: string[];
// }

// const pricingList: PricingProps[] = [
//   {
//     title: "Basic",
//     popular: 0,
//     price: 2999,
//     description:
//       "Basic service plan, for startups and small teams looking for a basic solution.",
//     buttonText: "Get Started",
//     benefitList: [
//       "Hosting: ₹XXX/Month",
//       "3 Email Account",
//       "Order sys: ₹3500",
//       "Multi Language",
//       "-",
//     ],
//   },
//   {
//     title: "Standard",
//     popular: 1,
//     price: 7999,
//     description:
//       "Perfect for growing businesses needing advanced features",
//     buttonText: "Start Free Trial",
//     benefitList: [
//       "Everyhing in Basic + ",
//       "Hosting: ₹0 for 1 year",
//       "Order Sys: ₹2500",
//       "Priority support",
//       "Multiple Languages",
//     ],
//   },
//   {
//     title: "Premium",
//     popular: 0,
//     price: 12999,
//     description:
//       "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
//     buttonText: "Contact US",
//     benefitList: [
//       "10 Team member",
//       "8 GB Storage",
//       "Upto 10 pages",
//       "Priority support",
//       "lorem ipsum dolor",
//     ],
//   },
// ];

// export const Pricing = () => {
//   return (
//     <section
//       id="pricing"
//       className="container py-24 sm:py-32"
//     >
//       <h2 className="text-3xl md:text-4xl font-bold text-center">
//         Get
//         <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
//           {" "}
//           Unlimited{" "}
//         </span>
//         Access
//       </h2>
//       <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
//         reiciendis.
//       </h3>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {pricingList.map((pricing: PricingProps) => (
//           <Card
//             key={pricing.title}
//             className={
//               pricing.popular === PopularPlanType.YES
//                 ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
//                 : ""
//             }
//           >
//             <CardHeader>
//               <CardTitle className="flex item-center justify-between">
//                 {pricing.title}
//                 {pricing.popular === PopularPlanType.YES ? (
//                   <Badge
//                     variant="secondary"
//                     className="text-sm text-primary"
//                   >
//                     Most popular
//                   </Badge>
//                 ) : null}
//               </CardTitle>
//               <div>
//                 <span className="text-3xl font-bold">₹{pricing.price}</span>
//                 <span className="text-muted-foreground"> /month</span>
//               </div>

//               <CardDescription>{pricing.description}</CardDescription>
//             </CardHeader>

//             <CardContent>
//               <Button className="w-full">{pricing.buttonText}</Button>
//             </CardContent>

//             <hr className="w-4/5 m-auto mb-4" />

//             <CardFooter className="flex">
//               <div className="space-y-4">
//                 {pricing.benefitList.map((benefit: string) => (
//                   <span
//                     key={benefit}
//                     className="flex"
//                   >
//                     <Check className="text-green-500" />{" "}
//                     <h3 className="ml-2">{benefit}</h3>
//                   </span>
//                 ))}
//               </div>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// };

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingOption {
  title: string;
  popular?: PopularPlanType;
  price: number;
  originalPrice?: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

interface PricingSection {
  title: string;
  options: PricingOption[];
}

const pricingSections: PricingSection[] = [
  {
    title: "Website Hosting",
    options: [
      {
        title: "Basic",
        popular: PopularPlanType.NO,
        price: 2999,
        description: "Basic service plan, for startups and small teams looking for a basic solution.",
        buttonText: "Get Started",
        benefitList: [
          "Hosting: ₹400/Month",
          "3 Email Account",
          "Order Management System(₹3500 one-time setup)",
          "Multi Language Support",
          "Basic Website Analytics",
          "5 GB Storage (Enough for 50+ products)"
        ]
      },
      {
        title: "Standard",
        popular: PopularPlanType.YES,
        price: 7999,
        description: "Perfect for growing businesses needing advanced features",
        buttonText: "Start Free Trial",
        benefitList: [
          "Everything in Basic +",
          "Hosting: ₹0 for 1 year",
          "Order Sys: ₹2500",
          "Priority support",
          "Multiple Languages"
        ]
      },
      {
        title: "Premium",
        popular: PopularPlanType.NO,
        price: 12999,
        description: "Premium solution for established businesses",
        buttonText: "Contact US",
        benefitList: [
          "Everything in Standard +",
          "10 Team Member login",
          "20 GB storage(500+ products/media)",
          "Custom Page Designs(Up to 10 pages)",
          "Dedicated Account Manager",
          "Monthly SEO Reports",
        ]
      }
    ]
  },
  {
    title: "Social Media Marketing",
    options: [
      {
        title: "Starter",
        popular: PopularPlanType.NO,
        price: 999,
        description: "For students, creators and local shops",
        buttonText: "Begin Growth",
        benefitList: [
          "1 platform (IG/FB/YT)",
          "10 designed posts/month",
          "Captions + Hashtags",
          "Scheduled posting",
          "Canva designs",
          "Extra posts: ₹150 each"
        ]
      },
      {
        title: "Growth",
        popular: PopularPlanType.NO,
        price: 1499,
        description: "For startups and small brands",
        buttonText: "Start Free Trial",
        benefitList: [
          "2 platforms",
          "14 posts/month (7 each)",
          "Bio optimization",
          "Basic performance report",
          "Reels: ₹200 each",
          "Extra platform: ₹500"
        ]
      },
      {
        title: "Premium",
        popular: PopularPlanType.YES,
        price: 2499,
        description: "For MSMEs and coaching centers",
        buttonText: "Go Premium",
        benefitList: [
          "2 platforms",
          "25 posts + 2 reels",
          "Strategic content calendar",
          "Monthly analytics report",
          "Canva Pro designs",
          "DM Handling: ₹500"
        ]
      },
      {
        title: "Ultra Premium",
        popular: PopularPlanType.NO,
        price: 4999,
        description: "For YouTube-focused creators & brands",
        buttonText: "Maximize Reach",
        benefitList: [
          "30-day multi-platform campaign",
          "Video marketing strategy",
          "SEO-optimized content",
          "Custom thumbnails",
          "Weekly performance reviews",
          "Community engagement"
        ]
      }
    ]
  }
];
export const Pricing = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Our
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Pricing{" "}
        </span>
        Plans
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Choose the perfect solution for your business needs
      </h3>

      {pricingSections.map((section) => (
        <div key={section.title} className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">{section.title}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {section.options.map((pricing) => (
              <Card
                key={pricing.title}
                className={
                  pricing.popular === PopularPlanType.YES
                    ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-primary"
                    : ""
                }
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {pricing.title}
                    {pricing.popular === PopularPlanType.YES ? (
                      <Badge variant="secondary" className="text-sm text-primary">
                        Most popular
                      </Badge>
                    ) : null}
                  </CardTitle>
                  <div>
                    <span className="text-3xl font-bold">₹{pricing.price}</span>
                    {pricing.originalPrice && (
                      <span className="text-muted-foreground line-through ml-2">
                        ₹{pricing.originalPrice}
                      </span>
                    )}
                    <span className="text-muted-foreground block">/package</span>
                  </div>
                  <CardDescription>{pricing.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <Button className="w-full">{pricing.buttonText}</Button>
                </CardContent>

                <hr className="w-4/5 m-auto mb-4" />

                <CardFooter className="flex">
                  <div className="space-y-4">
                    {pricing.benefitList.map((benefit) => (
                      <span key={benefit} className="flex">
                        <Check className="text-green-500" />
                        <h3 className="ml-2">{benefit}</h3>
                      </span>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};