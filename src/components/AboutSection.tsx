import { ArrowDown, Briefcase, Code, University } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="relative flex min-h-screen items-center">
      <div className="container max-w-5xl mx-auto  py-24 px-5 space-y-10">
        {/* SECTION-HEADER */}
        <h2 className="text-4xl md:text-5xl font-bold">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT-COLUMN */}
          <div className="space-y-10">
            {/* SIMPLE-INTRO */}
            <h3 className="text-lg md:text-xl font-semibold">
              Passionate <span className="text-primary">Web Developer</span>,
              And Software Engineer
            </h3>

            <p className="text-foreground/80">
              Software Engineer and Web Developer committed to lifelong learning
              and innovation
            </p>

            <p className="text-foreground/80">
              Always exploring new technologies and contributing to projects
              that make different
            </p>

            {/* ACTIONS-BUTTONS -- Contact, Get-CV */}
            <div className="pt-5 flex flex-col md:flex-row gap-6 justify-center items-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a href="#" className="cosmic-foreground-button">
                Download-CV
              </a>
            </div>
          </div>

          {/* RIGHT-COLUMN */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-5 card-hover">
              <div className="flex items-center gap-5">
                {/* ICON */}
                <div className="p-3 rounded-full bg-primary/15">
                  <Code />
                </div>

                {/* SKILL */}
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-foreground/70">
                    Full-Stack Developer with hands-on experience building
                    end-to-end web applications
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-5 card-hover">
              <div className="flex items-center gap-5">
                {/* ICON */}
                <div className="p-3 rounded-full bg-primary/15">
                  <Briefcase />
                </div>

                {/* SKILL */}
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Professional Experience
                  </h4>
                  <p className="text-foreground/70">
                    Strong problem-solving skills, adaptability, and a
                    commitment to continuous learning
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-5 card-hover">
              <div className="flex items-center gap-5">
                {/* ICON */}
                <div className="p-3 rounded-full bg-primary/15">
                  <University />
                </div>

                {/* SKILL */}
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Education</h4>
                  <p className="text-foreground/70">
                    Bachelor's degree in Computer Science, with a strong
                    foundation in software principles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL-DOWN */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce pt-20">
        <a href="#skills" className="flex flex-col items-center">
          <span className="text-sm text-foreground/80 mb-2">My-Skills</span>
          <ArrowDown />
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
