import React from 'react';
import './skills.css';

const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "Java", "SQL", "JavaScript", "TypeScript", "C#", "HTML/CSS"]
  },
  {
    category: "Frameworks",
    skills: ["React", "Next.js", "FastAPI", "Angular.js", "Node.js"]
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Azure", "Azure Databricks","AWS", "Power BI","ServiceNow", "Azure Data Factory"]
  },
  {
    category: "AI/ML",
    skills: ["OpenAI", "LangChain", "PyTorch", "Prompt Engineering", "Sentiment Analysis", "Data Analysis"]
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