import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { useState } from "react";
import { projects } from "../constants/projects";
import { SiGithub } from "react-icons/si";
import type { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ProjectSection = () => {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);

  return (
    <section id="projects" className="relative flex min-h-screen items-center">
      <div className="container mx-auto max-w-6xl space-y-6 px-5 py-24">
        {/* SECTION-HEADER */}
        <h2 className="text-4xl md:text-5xl font-bold">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-primary-foreground/70 mb-10 max-w-2xl mx-auto">
          Here are some of my project
        </p>

        {/* PROJECT CARDS */}
        <div className="relative px-9 sm:px-12">
          <button
            type="button"
            onClick={() => swiper?.slidePrev()}
            aria-label="Show previous projects"
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-primary/30 bg-card p-2 text-primary shadow-lg transition hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <ArrowLeft size={20} />
          </button>

          <Swiper
            onSwiper={setSwiper}
            loop
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="py-3!"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.title} className="h-auto!">
                <article className="group flex h-full flex-col overflow-hidden rounded-xl bg-card text-foreground shadow-xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
                  {/* Project-Thumbnail */}
                  <div className="h-50 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div className="flex flex-1 flex-col items-center gap-3 px-3 py-4 max-h-90">
                    {/* Project Title & Description */}
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="mx-auto max-w-[90%] text-center text-sm text-foreground/70">
                      {project.description}
                    </p>

                    {/* Project Tags */}
                    <div className="flex flex-wrap items-center justify-center gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-primary/30 bg-primary/5 px-4 py-1 text-[12px] font-medium text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Project External Links */}
                    <div className="mt-auto flex items-center gap-3 pt-2">
                      <a
                        href={project.demoURL}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open demo for ${project.title}`}
                        className="rounded-full border border-primary/30 bg-primary/5 p-2 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        <ExternalLink size={16} />
                      </a>

                      <a
                        href={project.githubURL}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open GitHub for ${project.title}`}
                        className="rounded-full border border-primary/30 bg-primary/5 p-2 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        <SiGithub size={16} />
                      </a>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            onClick={() => swiper?.slideNext()}
            aria-label="Show next projects"
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-primary/30 bg-card p-2 text-primary shadow-lg transition hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Github Profile Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/abdelrahman-20"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-3"
          >
            Check My Github <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
