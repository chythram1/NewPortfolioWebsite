import React from 'react';
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