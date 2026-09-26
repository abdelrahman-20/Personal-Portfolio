import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="#hero"
      className="relative min-h-screen flex flex-col justify-center items-center mx-auto"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* NAME */}
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="opacity-0 animate-fade-in">Hi, I'am</span>
            <span className="opacity-0 animate-fade-in-delay-1 text-primary ml-2">
              Abdelrahman
            </span>
            <span className="opacity-0 animate-fade-in-delay-2 ml-2">
              Salem
            </span>
          </h1>

          {/* BIO */}
          <p className="text-lg md:text-xl text-foreground max-w-2xl opacity-0 animate-fade-in-delay-3 mx-auto">
            Software Engineer and Web Developer committed to lifelong learning
            and innovation. I'm always exploring new technologies and
            contributing to projects that make
          </p>

          {/* GO TO PROJECTS */}
          <div>
            <a
              href="#projects"
              className="cosmic-button opacity-0 animate-fade-in-delay-4"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* SCROLL-DOWN */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-foreground/80 mb-2">Scroll</span>
        <ArrowDown />
      </div>
    </section>
  );
}
