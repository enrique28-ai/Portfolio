function ContactPage() {
  return (
    <article className="contact-page section-block" aria-labelledby="contact-title">
      <div className="content-container">
        <header className="contact-page__header">
          <p className="technical-label">Contact</p>
          <div>
            <h1 id="contact-title">Continue the conversation</h1>
            <p className="contact-page__introduction body-large">
              For admissions, academic, recruiting, or project-related inquiries, use the
              professional channels below. You can also continue reviewing my work through
              the linked profiles.
            </p>
          </div>
        </header>

        <div className="contact-directory">
          <section className="contact-directory__row">
            <p className="contact-directory__category technical-label">
              Professional contact
            </p>
            <h2>Email</h2>
            <div className="contact-directory__details">
              <p>
                For university admissions, academic, recruiting, and project-related
                correspondence.
              </p>
              <a
                className="text-link contact-directory__action"
                href="mailto:enriqueprecia@gmail.com"
              >
                Email Enrique
              </a>
              <span className="contact-directory__email-address">
                enriqueprecia@gmail.com
              </span>
            </div>
          </section>

          <section className="contact-directory__row">
            <p className="contact-directory__category technical-label">
              Professional profile
            </p>
            <h2>LinkedIn</h2>
            <div className="contact-directory__details">
              <p>Education, professional background, and current career context.</p>
              <a
                className="text-link contact-directory__action"
                href="https://www.linkedin.com/in/enriquerpreciado"
              >
                View LinkedIn profile
              </a>
            </div>
          </section>

          <section className="contact-directory__row">
            <p className="contact-directory__category technical-label">Technical profile</p>
            <h2>GitHub</h2>
            <div className="contact-directory__details">
              <p>
                Source code and repository history for the projects documented in this
                portfolio.
              </p>
              <a
                className="text-link contact-directory__action"
                href="https://github.com/enrique28-ai"
              >
                View GitHub profile
              </a>
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}

export default ContactPage
