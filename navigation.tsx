import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const sections = ["top", "experience", "projects", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Experience", href: "experience" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-16 flex items-center justify-between py-5">
        <button onClick={() => scrollTo("top")} className="font-serif text-base font-light tracking-wide text-foreground hover:text-primary transition-colors">
          Sharon Wu
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button key={link.name} onClick={() => scrollTo(link.href)}
              className={`text-[11px] font-medium tracking-widest uppercase transition-colors ${activeSection === link.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
              {link.name}
            </button>
          ))}
        </nav>

        <button className="md:hidden p-1 text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}
