import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold">
            Transform Your Business With
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              CMC Nexus Technology
            </span>
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Join industry leaders who trust our innovative solutions. Experience seamless 
            integration, cutting-edge features, and unparalleled support designed to 
            accelerate your digital transformation.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto hover:bg-primary/90 transition-all">
            Schedule a Consultation
          </Button>
          <Button
            variant="outline"
            className="w-full md:w-auto hover:bg-accent transition-all"
          >
            Explore Our Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};