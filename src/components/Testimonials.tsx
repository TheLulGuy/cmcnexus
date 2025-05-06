import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    name: "Sarah Johnson",
    userName: "@sarah_marketing",
    comment: "CMC Nexus transformed our online presence! Our website traffic increased by 300% within just two months of working with them.",
  },
  {
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=200",
    name: "Michael Chen",
    userName: "@mike_entrepreneur",
    comment: "The social media management team is phenomenal. They understand our brand voice perfectly and have helped us grow our Instagram following by 5x.",
  },
  {
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200",
    name: "Priya Patel",
    userName: "@priya_designs",
    comment: "As a small business owner, I was skeptical about digital marketing, but CMC Nexus delivered results beyond my expectations. Worth every penny!",
  },
  {
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200",
    name: "David Wilson",
    userName: "@david_ceo",
    comment: "Their website development team created a stunning, high-converting site for our SaaS product in record time. Highly recommend their services!",
  },
  {
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200",
    name: "Emily Rodriguez",
    userName: "@emily_consultant",
    comment: "The YouTube marketing strategy they implemented helped us reach 100k subscribers faster than we ever imagined possible. Truly experts in their field!",
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
    name: "James Kim",
    userName: "@james_startups",
    comment: "We've tried several marketing agencies, but none compare to CMC Nexus. Their data-driven approach and creative execution are unmatched.",
  }
];
export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          People Love{" "}
        </span>
        This Landing Page
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
