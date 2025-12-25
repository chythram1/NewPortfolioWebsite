import React from 'react';
import './skills.css';

const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "C#", "SQL", "HTML/CSS"]
  },
  {
    category: "Frameworks",
    skills: ["React", "Next.js", "FastAPI", "Angular.js", "LangChain"]
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Azure", "PostgreSQL", "Power BI", "Databricks", "ServiceNow"]
  },
  {
    category: "AI/ML",
    skills: ["OpenAI API", "Semantic Kernel", "NLP", "Sentiment Analysis", "Data Analysis"]
  }
];

export const SkillsSection = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
        <p className="section-subtitle">Technologies and tools I work with</p>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};