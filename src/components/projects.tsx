import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Award } from "lucide-react";

const PROJECTS = [
  {
    title: "e(co)mission",
    context: "SheHacks V",
    description:
      "Web app comparing greenhouse gas emissions of different transit routes and modes. Placed top 20 out of 100+ teams.",
    tags: ["HTML/CSS", "Bootstrap", "Figma"],
    link: "https://devpost.com/software/e-co-mission",
    awardName: "Wolfram Alpha Award",
  },
  {
    title: "SitDown",
    context: "Hack the North 2020++",
    description:
      "Mobile workplace safety and room-booking app designed to support the return to the office during COVID-19.",
    tags: ["Flutter", "Dart", "Vonage API"],
    link: "https://devpost.com/software/sitdown-hbjvmp",
  },
  {
    title: "Pawsitive Relations",
    context: "Waterloo Capstone Design",
    description:
      "Custom CRM developed to centralize community member data and streamline outreach for a local Humane Society.",
    tags: ["React", "Node.js", "MongoDB"],
  },
];

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-32 bg-[#f5f0e6] relative">
      <div className="absolute top-0 right-[10%] w-[1px] h-32 bg-gradient-to-b from-border/0 via-primary/20 to-border/0" />
      <div className="absolute bottom-0 left-[15%] w-[1px] h-32 bg-gradient-to-b from-border/0 via-primary/20 to-border/0" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">
            <span className="text-sm font-medium uppercase tracking-widest text-primary">
              Portfolio
            </span>
            <div className="w-12 h-[1px] bg-primary/30 hidden md:block" />
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground text-center md:text-left mb-6">
            Things I've <span className="font-bold italic">built.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">
          {PROJECTS.map((project, index) => {
            const card = (
              <>
                <div className="absolute -inset-2 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />

                {/* Header */}
                <div className="relative z-10 flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-medium uppercase tracking-widest text-primary mb-3 block">
                      {project.context}
                    </span>

                    <h3 className="text-2xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {project.link && (
                    <div className="w-8 h-8 rounded-full bg-secondary/80 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                      <ArrowUpRight size={16} />
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="relative z-10 text-muted-foreground font-light mb-8">
                  {project.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium tracking-wide text-foreground/60 px-2.5 py-1 bg-secondary/50 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Award */}
                {project.awardName && (
                  <div className="flex items-center gap-2 mt-3 relative z-10 text-amber-600">
                    <Award
                      size={16}
                      strokeWidth={1.8}
                      className="shrink-0"
                    />
                    <span className="text-xs uppercase tracking-widest font-medium">
                      {project.awardName}
                    </span>
                  </div>
                )}
              </>
            );
            const sharedProps = {
              initial: { opacity: 0, y: 30 },
              animate: inView ? { opacity: 1, y: 0 } : {},
              whileHover: {
                scale: 1.02,
                transition: {
                  duration: 0.1,
                  ease: "easeOut",
                },
              },
              transition: {
                duration: 0.5,
                delay: 0.2 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              },
              className:
                "group relative flex flex-col p-8 bg-card border border-border shadow-sm rounded-2xl overflow-hidden cursor-pointer",
            };
            return project.link ? (
              <motion.a
                key={project.title}
                {...sharedProps}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {card}
              </motion.a>
            ) : (
              <motion.div
                key={project.title}
                {...sharedProps}
                className={`${sharedProps.className} cursor-default`}
              >
                {card}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
