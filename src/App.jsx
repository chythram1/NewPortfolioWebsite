import React from 'react';
import ColorBends from "./components/colorbends";
import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/herosection";
import { AboutSection } from "./components/about";
import { SkillsSection } from "./components/skills";
import { ProjectsSection } from "./components/projects";
import { ExperienceSection } from "./components/experience";
import { ContactSection } from "./components/contact";
import { ScrollReveal } from "./components/scrollreveal";

function App() {
  return (
    <div>
       <ColorBends
        colors={["#ff5c7a", "#8a5cff", "#114554ff"]}
        rotation={0}
        speed={0.2}
        scale={1.0}
        frequency={1.0}
        warpStrength={1.0}
        mouseInfluence={1}
        parallax={0.5}
        noise={0.04}
        transparent={false}
      />
      <Navbar />
      <HeroSection />
      
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>
      
      <ScrollReveal delay={0.1}>
        <SkillsSection />
      </ScrollReveal>
      
      <ScrollReveal delay={0.1}>
        <ProjectsSection />
      </ScrollReveal>
      
      <ScrollReveal delay={0.1}>
        <ExperienceSection />
      </ScrollReveal>
      
      <ScrollReveal delay={0.1}>
        <ContactSection />
      </ScrollReveal>
    </div>
  );
}

export default App;