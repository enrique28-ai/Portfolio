function FeaturedProjectRecord({ project }) {
  const recordClassName = project.evolution
    ? 'featured-project-record featured-project-record--current'
    : 'featured-project-record'

  return (
    <article className={recordClassName}>
      <header className="featured-project-record__identity">
        <p className="technical-label">{project.category}</p>
        <h2>{project.name}</h2>
      </header>

      <div className="featured-project-record__narrative">
        <p className="featured-project-record__summary">{project.summary}</p>

        <div className="featured-project-record__evidence">
          <p className="technical-label">What it demonstrates</p>
          <p>{project.evidence}</p>
        </div>

        <div className="featured-project-record__metadata">
          <p>
            <span className="visually-hidden">Technologies: </span>
            {project.technologies.join(' \u00B7 ')}
          </p>
          {project.evolution ? <p>{project.evolution}</p> : null}
        </div>
      </div>
    </article>
  )
}

export default FeaturedProjectRecord
