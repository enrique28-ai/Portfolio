import { Link } from 'react-router-dom'
import skills from '../data/skills.js'

function SkillsPage() {
  return (
    <article className="skills-page section-block" aria-labelledby="skills-title">
      <div className="content-container">
        <header className="skills-page__header">
          <p className="technical-label">Skills</p>
          <div>
            <h1 id="skills-title">Capabilities demonstrated through projects</h1>
            <p className="skills-page__introduction body-large">
              My technical skills are presented here through the work that demonstrates them.
              Each capability connects an application responsibility to the tools I used and
              the project evidence available in this portfolio.
            </p>
          </div>
        </header>

        <div className="skills-ledger">
          <div className="skills-ledger__head" aria-hidden="true">
            <span>Capability</span>
            <span>Tools / methods</span>
            <span>Project evidence</span>
          </div>

          {skills.map((skill) => (
            <section className="skills-ledger__row" key={skill.id}>
              <div className="skills-ledger__capability">
                <h2>{skill.title}</h2>
                <p>{skill.description}</p>
              </div>

              <div className="skills-ledger__methods">
                <h3 className="skills-ledger__label">Tools and methods</h3>
                <ul>
                  {skill.methods.map((method) => (
                    <li key={method}>{method}</li>
                  ))}
                </ul>
              </div>

              <div className="skills-ledger__evidence">
                <h3 className="skills-ledger__label">Demonstrated in</h3>
                <ul>
                  {skill.evidence.map(({ details, path, project, summary }) => (
                    <li key={project}>
                      <Link className="text-link" to={path}>
                        {project}
                      </Link>
                      {summary ? <p>{summary}</p> : null}
                      {details ? (
                        <ul>
                          {details.map((detail) => (
                            <li key={detail}>{detail}</li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>

        <p className="skills-page__qualification">
          These entries describe experience demonstrated in the linked work. They do not
          assign proficiency levels or claim specialization beyond the evidence shown.
        </p>
      </div>
    </article>
  )
}

export default SkillsPage
