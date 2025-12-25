import React from 'react';
import './experience.css';

const experiences = [
  {
    id: 1,
    title: "Software Engineer Intern at Markel",
    description: "Refined internal AI assistant for the Product Regulatory Services team using C#, Microsoft Semantic Kernel, and REST API calls, reducing manual form lookup by 70%. Enabled underwriters to focus on projects that provided real value.",
    image: "/projects/Markel.JPEG",
    tags: ["Python", "Azure Databricks", "SQL", "Power BI", "C#", "Angular.js"],
  },
  {
    id: 2,
    title: "IT Intern at Indivior",
    description: "Developed Power BI dashboard for various business teams, refined knowledge base libraries, and solved over 30 support tickets in ServiceNow. Got converted to a contractor in the school year to continue work!",
    image: "/projects/experience2.jpg",
    tags: ["Power BI", "ServiceNow", "Azure AD", "Adobe Premiere Pro", "Excel"],
  },
  {
    id: 3,
    title: "Research Assistant at the Intrusion Detection Lab (VCU)",
    description: "Research Project aimed at understanding conspiracy theory propagation networks on Twitter",
    image: "/projects/experience3.png",
    tags: ["Python", "Twitter", "Tweepy", "OverLeaf", "LaTeX", "Data Analysis"],
    demoUrl: "https://ieeexplore.ieee.org/document/10154285",
  },
];

export const ExperienceSection = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="section-header">
        <h2 className="section-title">My <span className="gradient-text">Highlighted Experiences</span></h2>
      </div>

      <div className="experience-grid">
        {experiences.map((experience) => (
          <div key={experience.id} className="experience-card">
            <div className="experience-thumb">
              <img src={experience.image} alt={experience.title} />
            </div>
            <div className="experience-body">
              <div className="experience-tags">
                {experience.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              <h3>{experience.title}</h3>
              <p className="experience-description">{experience.description}</p>
              {experience.demoUrl && (
                <div className="experience-links">
                  <a href={experience.demoUrl} target="_blank" rel="noopener noreferrer" className="experience-link primary">
                    View Publication
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};