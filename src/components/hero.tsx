import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

export function Hero() {
  const greeting = "Hi, I'm Sharon!";

  return (
    <section
      id="top"
      className="relative min-h-[100dvh] flex items-center pt-24 pb-12 overflow-x-clip bg-[#f5f3ef]"
    >
      <div className="absolute inset-0 noise-overlay opacity-[0.015]" />

      {/* Subtle whimsical blob in the background */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-1/4 w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-[#d4a373]/5 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-16 items-center max-w-6xl mx-auto">

          {/* Mobile Image (shown first on small screens) */}
          <div className="block md:hidden mb-4">
            <HeroImage />
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex items-center gap-3 mb-6"
            >
              <h1 className="text-5xl md:text-7xl font-serif text-foreground tracking-tight flex items-center gap-3">
                {greeting.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1 + index * 0.03,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={char === " " ? "mr-2" : ""}
                  >
                    {char}
                  </motion.span>
                ))}
              </h1>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-2xl md:text-3xl font-light text-foreground/90 leading-snug mb-8 max-w-xl"
            >
              Engineer-turned-product manager with a designer's attention to detail.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed max-w-xl"
            >
              <p>
                I enjoy turning complex problems into intuitive, delightful experiences by balancing technical possibilities, business goals, and user needs. I'm passionate about building products that solve real customer problems and make a meaningful impact.
              </p>
              <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-xl">
                Currently shaping the admin experience at IXL Learning.
              </p>
            </motion.div>

            {/* Link Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-12 flex flex-wrap gap-4"
            >
              <SocialPill
                icon={<Linkedin size={18} />}
                label="LinkedIn"
                href="https://www.linkedin.com/in/sharonyw/"
              />
              {/* <SocialPill icon={<Github size={18} />} label="GitHub" href="https://github.com/sharonywu" /> */}
              <SocialPill
                icon={<Mail size={18} />}
                label="Email"
                href="mailto:sharonwuy3@gmail.com"
              />
            </motion.div>
          </div>

          {/* Desktop Image */}
          <div className="hidden md:block">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, rotate: 0 }}
      animate={{ opacity: 1, scale: 1, rotate: 2 }}
      whileHover={{
        rotate: [2, -2, 1, 0],
      }}
      transition={{
        rotate: {
          duration: 0.3,
        },
      }}
      className="relative w-full max-w-[400px] mx-auto origin-bottom-right"
    >
      <div className="absolute inset-0 bg-primary/10 rounded-[24px] rotate-[-4deg] scale-105 transition-transform duration-500" />
      <div className="absolute inset-0 bg-[#d4a373]/10 rounded-[24px] rotate-[2deg] scale-105 transition-transform duration-500 delay-75" />
      <img
        src="/headshot.jpg"
        alt="Sharon Wu"
        className="relative z-10 w-full h-auto object-cover rounded-[24px] shadow-xl border-[6px] border-background"
      />
    </motion.div>
  );
}

function SocialPill({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground text-foreground/70 transition-all duration-300 shadow-sm border border-border/50 hover:shadow-md"
    >
      <span className="group-hover:scale-110 transition-transform duration-300">
        {icon}
      </span>
      <span className="text-sm font-medium tracking-wide">{label}</span>
    </a>
  );
}