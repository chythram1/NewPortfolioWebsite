const projects = [
  {
    id: 1,
    title: "Frank Ocean Song Recommender",
    description: "Uses sentiment analysis to recommend a song based on your inputted mood",
    image: "/projects/project1.png",
    tags: ["Python", "JavaScript", "TextBlob", "CSS", "HTML"],
    githubUrl: "https://github.com/chythram1/FrankOceanSongRecommender",
    demoUrl: "https://frank-ocean-song-recommender.vercel.app/",
  },
  {
    id: 2,
    title: "Finance News Intelligence System",
    description: "End-to-end system that ingests finance news, performs sentiment analysis, and makes financial predictions",
    image: "/projects/project2.png",
    tags: ["Python", "Next.js", "LangChain", "FastAPI", "TypeScript", "PostgreSQL"],
    githubUrl: null,
    demoUrl: null,
    comingSoon: true,
  },
  {
    id: 3,
    title: "TempoLearn",
    description: "AI-powered study assistant that transforms lecture notes into summaries, flashcards, and calendar events",
    image: "/projects/project3.png",
    tags: ["Next.js", "TypeScript", "FastAPI", "LangChain", "PostgreSQL", "OpenAI"],
    githubUrl: "https://github.com/chythram1/TempoLearn",
    demoUrl: "https://tempolearn.vercel.app/demo",
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-[#00FFC6]">Projects</span>
        </h2>
        
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some projects I've built!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs relative"
            >
              {/* Coming Soon Badge */}
              {project.comingSoon && (
                <div className="absolute top-3 right-3 z-10 px-3 py-1 bg-yellow-500 text-black text-xs font-bold rounded-full">
                  Coming Soon
                </div>
              )}

              <div className={`h-48 overflow-hidden ${project.comingSoon ? 'opacity-60' : ''}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex space-x-3">
                  {project.comingSoon ? (
                    <span className="px-4 py-2 text-sm text-muted-foreground italic">
                      🚧 In Development
                    </span>
                  ) : (
                    <>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 text-sm border rounded hover:bg-secondary"
                        >
                          GitHub
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 text-sm bg-[#00FFC6] text-black rounded hover:opacity-80"
                        >
                          Live Demo
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};