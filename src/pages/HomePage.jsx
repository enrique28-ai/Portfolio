import { Link } from 'react-router-dom'
import DevelopmentJourney from '../components/DevelopmentJourney'

function HomePage() {
  return (
    <>
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

      <section className="home-about section-block" aria-labelledby="about-title">
        <div className="content-container home-about__layout">
          <h2 id="about-title">About</h2>
          <p className="home-about__copy body-large">
            My academic path combines engineering and business perspectives on
            how organizations and systems work. Industrial Engineering directs
            my attention to processes, constraints, and connected systems.
            Business Management adds the organizational context in which
            decisions are made. Software development gives me a way to apply
            both perspectives by turning defined problems into working projects.
          </p>
        </div>
      </section>

      <section
        className="home-education section-block"
        aria-labelledby="education-title"
      >
        <div className="content-container">
          <header className="home-education__introduction">
            <h2 id="education-title">Education</h2>
            <p className="body-large">
              A double-degree academic path completed in 2026, combining
              Industrial Engineering and Business Management.
            </p>
          </header>

          <div className="education-records">
            <article className="education-record">
              <header className="education-record__header">
                <div>
                  <h3>CETYS Universidad</h3>
                  <p className="education-record__field">
                    Industrial Engineering
                  </p>
                </div>
                <p className="education-record__completion">
                  <span className="technical-label">Completion</span>
                  <span>2026</span>
                </p>
              </header>
              <dl className="education-record__details">
                <div>
                  <dt>Program context</dt>
                  <dd>Global Program · 100% English</dd>
                </div>
                <div>
                  <dt>Academic distinction</dt>
                  <dd>Magna Cum Laude</dd>
                </div>
                <div>
                  <dt>Accreditation</dt>
                  <dd>ABET-accredited program</dd>
                </div>
              </dl>
            </article>

            <article className="education-record">
              <header className="education-record__header">
                <div>
                  <h3>City University of Seattle</h3>
                  <p className="education-record__field">
                    Bachelor's in Business Management
                  </p>
                </div>
                <p className="education-record__completion">
                  <span className="technical-label">Completion</span>
                  <span>2026</span>
                </p>
              </header>
              <dl className="education-record__details">
                <div>
                  <dt>Academic distinction</dt>
                  <dd>Summa Cum Laude</dd>
                </div>
              </dl>
            </article>
          </div>

          <aside
            className="additional-credential"
            aria-labelledby="credential-title"
          >
            <p className="technical-label">Additional credential</p>
            <div className="additional-credential__content">
              <h3 id="credential-title">Six Sigma Green Belt</h3>
              <p>CETYS Universidad · 2026</p>
            </div>
          </aside>
        </div>
      </section>

      <DevelopmentJourney />
    </>
  )
}

export default HomePage
