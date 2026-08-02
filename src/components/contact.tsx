import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Send } from "lucide-react";

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [hovered, setHovered] = useState(false);

  return (
    <section id="contact" ref={ref} className="pt-28 pb-12 md:pt-40 md:pb-12 bg-[#ae6d47] relative overflow-hidden">
      {/* Whimsical background shapes */}
      <div className="absolute top-[10%] -left-[10%] w-[40%] h-[80%] bg-white/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-[20%] right-[0%] w-[50%] h-[60%] bg-[#f5f0e6]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light mb-8 tracking-tight text-[#f5f0e6]">
            Let's <span className="font-bold italic text-[#f5d6b8]">connect!</span>
          </h2>

          <p className="text-xl md:text-2xl font-light text-[#f5f0e6]/80 max-w-2xl mx-auto mb-16 leading-relaxed">
            Interested in working together or learning more about my experience? I'd love to hear from you.
          </p>

          <a
            href="&#109;&#97;i&#108;&#116;o&#58;sh&#97;%72%6&#70;n%77u%7&#57;3&#64;g&#109;ai&#108;%2E%6&#51;o%6D"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="
              group inline-flex items-center gap-2 px-6 py-3 rounded-full
              bg-white/10 border border-[#f5f0e6]/25 backdrop-blur-sm
              text-xl md:text-3xl font-serif font-medium text-[#f5d6b8]
              hover:bg-white/15 hover:border-[#f5f0e6]/50 hover:-translate-y-1
              transition-all duration-500 mb-24 relative overflow-visible
            "
          >
            <span>s&#104;ar&#111;nwuy3&#64;gm&#97;i&#108;&#46;com</span>

            <span className="relative flex items-center justify-center shrink-0 w-12 h-12">
              {/* Loopty-loop trail */}
              <svg
                className="absolute inset-0 top-[6px] w-full h-full overflow-visible pointer-events-none"
                viewBox="0 0 48 48"
              >
                <motion.path
                  d="
                    M13.6,25.9
                    C13.6,15.7 27.2,14 28.9,24.2
                    C30.6,34.4 18.7,36.1 17,25.9
                    C15.3,17.4 23.8,12.3 34,14
                  "
                  fill="none"
                  stroke="#f5d6b8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray="2 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={hovered ? { pathLength: [0, 1], opacity: [0, 1] } : { pathLength: 0, opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </svg>

              {/* Airplane - stays at rest, aligned with email; flies on hover */}
              <motion.div
                className="relative z-10"
                animate={hovered ? { x: 10, y: -10, rotate: -12 } : { x: 0, y: 0, rotate: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Send size={24} className="text-[#f5d6b8]" />
              </motion.div>
            </span>
          </a>

          <div className="border-t border-[#f5f0e6]/30 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-6 text-sm uppercase tracking-widest font-medium text-[#f5f0e6]/70">
              <a
                href="https://www.linkedin.com/in/sharonyw/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f5f0e6] transition-colors flex items-center gap-2"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/sharonxwu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f5f0e6] transition-colors flex items-center gap-2"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>

              <a
                href="https://devpost.com/sharonywu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f5f0e6] transition-colors"
              >
                Devpost
              </a>
            </div>

            <p className="text-sm font-light text-[#f5f0e6]/50">
              © {new Date().getFullYear()} Sharon Wu.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
