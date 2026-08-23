import { developmentJourney } from '../data/developmentJourney'

function TechnologyMetadata({ items }) {
  return (
    <p className="journey-stage__metadata">
      <span className="visually-hidden">Technologies: </span>
      {items.join(' \u00B7 ')}
    </p>
  )
}

function VersionRegister({ versions }) {
  return (
    <ol
      className="journey-versions"
      aria-label="DR-VIPS version progression"
    >
      {versions.map(({ version, description }) => (
        <li className="journey-version" key={version}>
          <span className="journey-version__rail" aria-hidden="true" />
          <p className="journey-version__label">
            <span className="visually-hidden">DR-VIPS </span>
            {version}
          </p>
          <p className="journey-version__description">{description}</p>
        </li>
      ))}
    </ol>
  )
}

function DevelopmentJourney() {
  return (
    <section
      className="development-journey section-block"
      aria-labelledby="journey-title"
    >
      <div className="content-container">
        <header className="development-journey__introduction">
          <p className="technical-label">Development Journey</p>
          <div className="development-journey__heading">
            <h2 id="journey-title">From one system to the next</h2>
            <p className="body-large">
              Three projects trace a change in both subject matter and
              application structure. CRUD-Process connected operational data to
              calculation; MedRecord organized related records; DR-VIPS carried
              that record concept into a separate client and API that continued
              to evolve across six versions.
            </p>
          </div>
        </header>

        <ol className="journey-major-list complexity-spine">
          {developmentJourney.map((stage) => (
            <li className="journey-stage" key={stage.id}>
              <span className="journey-stage__rail" aria-hidden="true" />
              <article className="journey-stage__content">
                <h3>{stage.name}</h3>
                <p className="journey-stage__description">
                  {stage.description}
                </p>
                <TechnologyMetadata items={stage.metadata} />

                {stage.versions && (
                  <VersionRegister versions={stage.versions} />
                )}
              </article>

              {stage.transition && (
                <div className="journey-transition">
                  <p className="technical-label">{stage.transition.label}</p>
                  <p>{stage.transition.copy}</p>
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default DevelopmentJourney
