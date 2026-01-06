import React, { useState, useEffect } from 'react';
import ColorBends from "./components/colorbends";
import Navbar from "./components/navbar";
import { GridScan } from "./components/GridScan";
const items = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
    ];
import { HeroSection } from "./components/herosection";
import { LogoBar } from "./components/logobar";
import { AboutSection } from "./components/about";
import { SkillsSection } from "./components/skills";
import { ProjectsSection } from "./components/projects";
import { ExperienceSection } from "./components/experience";
import { ContactSection } from "./components/contact";
import { ScrollReveal } from "./components/scrollreveal";

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3200); // Start fade out at 3.2 seconds

    const completeTimer = setTimeout(() => {
      setLoading(false);
    }, 4200); // Complete transition at 4.2 seconds

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  if (loading) {
    return (
      <div style={{
        width: '100%',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 1s ease-out',
        zIndex: 9999
      }}>
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#392e4e"
          gridScale={0.1}
          scanColor="#FF9FFC"
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '2.5em',
          fontWeight: '700',
          background: 'linear-gradient(90deg, #ff5c7a, #8a5cff, #5c9eff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          zIndex: 8,
          animation: 'pulse 2s ease-in-out infinite'
        }}>
          Loading Experience...
        </div>
        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{
      opacity: loading ? 0 : 1,
      transition: 'opacity 1s ease-in',
      animation: loading ? 'none' : 'fadeIn 1s ease-in'
    }}>
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
  <Navbar
    items={items}
    particleCount={15}
    particleDistances={[90, 10]}
    particleR={100}
    initialActiveIndex={0}
    animationTime={600}
    timeVariance={300}
    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
  />
  

      <HeroSection />

      <LogoBar />

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