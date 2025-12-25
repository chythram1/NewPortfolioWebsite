import React from 'react';
import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/herosection";
import { AboutSection } from "./components/about";
import { SkillsSection } from "./components/skills";
import { ProjectsSection } from "./components/projects";
import { ExperienceSection } from "./components/experience";
import { ContactSection } from "./components/contact";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}

export default App;