import FeaturedProjectRecord from '../components/FeaturedProjectRecord.jsx'
import featuredProjects from '../data/featuredProjects.js'

function ProjectsPage() {
  return (
    <section className="projects-index section-block" aria-labelledby="projects-title">
      <div className="content-container">
        <header className="projects-index__introduction">
          <p className="technical-label">Featured Projects</p>
          <div>
            <h1 id="projects-title">Projects in context</h1>
            <p className="body-large">
              This selection presents the purpose and technical shape of three software
              projects. Each overview identifies what the project handles, how it is built,
              and what the implementation demonstrates.
            </p>
            <p className="projects-index__context case-study-qualification">
              These projects were independently developed as learning and portfolio work. They
              were not commissioned by an employer or client and have not been used in
              real-world operational or clinical settings.
            </p>
          </div>
        </header>

        <div className="featured-project-records">
          {featuredProjects.map((project) => (
            <FeaturedProjectRecord key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsPage
