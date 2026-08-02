import { Navigation } from "./components/navigation";
import { Hero } from "./components/hero";
import { Experience } from "./components/experience";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";

export default function App() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}
