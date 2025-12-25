import React from 'react';
import './projectssection.css';

const projects = [
  {
    id: 1,
    title: "Frank Ocean Song Recommender",
    description: "Uses sentiment analysis to recommend a song based on your inputted mood",
    image: "/projects/project1.png",
    tags: ["Python", "JavaScript", "TextBlob"],
    githubUrl: "https://github.com/chythram1/FrankOceanSongRecommender",
    demoUrl: "https://frank-ocean-song-recommender.vercel.app/",
  },
  {
    id: 2,
    title: "Finance News Intelligence",
    description: "End-to-end system for finance news sentiment analysis and market predictions",
    image: "/projects/project2.png",
    tags: ["Python", "Next.js", "LangChain", "FastAPI"],
    githubUrl: null,
    demoUrl: null,
    comingSoon: true,
  },
  {
    id: 3,
    title: "TempoLearn",
    description: "AI-powered study assistant that transforms lecture notes into summaries and flashcards",
    image: "/projects/project3.png",
    tags: ["Next.js", "FastAPI", "LangChain", "OpenAI"],
    githubUrl: "https://github.com/chythram1/TempoLearn",
    demoUrl: "https://tempolearn.vercel.app/demo",
  }
];

export const ProjectsSection = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="section-header">
        <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
        <p className="section-subtitle">A selection of things I've built</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className={`project-thumb ${project.comingSoon ? 'dimmed' : ''}`}>
              {project.comingSoon && <span className="badge">Coming Soon</span>}
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-body">
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                {project.comingSoon ? (
                  <span className="in-progress">🚧 In development</span>
                ) : (
                  <>
                    {project.demoUrl && (
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link primary">
                        Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link ghost">
                        GitHub
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};