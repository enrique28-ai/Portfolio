import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <section className="home-hero section-block" aria-labelledby="hero-title">
      <div className="site-container">
        <div className="home-hero__content">
          <p className="home-hero__eyebrow">Enrique Preciado</p>
          <h1 className="home-hero__title" id="hero-title">
            Engineering, business, and software shape how I approach problems.
          </h1>
          <p className="home-hero__summary body-large">
            My background combines Industrial Engineering at CETYS Universidad,
            Business Management at City University of Seattle, and software
            development. This portfolio traces that progression through
            CRUD-Process, MedRecord, and DR-VIPS.
          </p>
          <div className="home-hero__actions">
            <Link className="button button--primary" to="/projects">
              Explore Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
