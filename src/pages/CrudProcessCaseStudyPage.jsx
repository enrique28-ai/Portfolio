import {
  calculationRows,
  crudProcessMetadata,
  recordDefinitions,
  supportingPaths,
  systemFlowLayers,
  workflowSteps,
} from '../data/crudProcessCaseStudy.js'

function CrudProcessCaseStudyPage() {
  return (
    <article className="case-study">
      <header className="case-study-header section-block">
        <div className="content-container">
          <p className="technical-label">{'Case Study \u00B7 CRUD-Process'}</p>
          <h1>CRUD-Process</h1>
          <p className="case-study-header__introduction body-large">
            CRUD-Process was my first complete database-backed web application. It allows
            authenticated users to organize process observations while connecting what they
            see in the interface to Flask application logic, relational SQL data, and
            calculated and charted output.
          </p>

          <dl className="case-study-metadata">
            {crudProcessMetadata.map(({ label, value }) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{Array.isArray(value) ? value.join(' \u00B7 ') : value}</dd>
              </div>
            ))}
          </dl>

          <div className="case-study-header__actions">
            <a
              className="button button--secondary"
              href="https://crud.enriquepreciado.dev"
              rel="noopener noreferrer"
              target="_blank"
            >
              View running sample
            </a>
            <a
              className="case-study-header__source text-link"
              href="https://github.com/enrique28-ai/CRUD-Process"
            >
              View source on GitHub
            </a>
          </div>
          <p className="case-study-header__sample-note case-study-qualification">
            Historical project sample. This deployed version is provided as implementation
            evidence and does not represent a currently maintained production application.
          </p>
        </div>
      </header>

      <CaseStudySection heading="Project context">
        <div className="case-study-prose narrative-flow">
          <p>
            CRUD-Process organizes process observations into named tables owned by each
            account. Users can enter structured process records, retrieve and update saved
            information, apply application logic to the recorded values, and review calculated
            and charted output.
          </p>
          <p>
            CRUD-Process was independently developed for learning and portfolio purposes and
            has not been used to manage real production processes in an organizational setting.
            Its importance in this portfolio comes from bringing interface behavior, backend
            logic, and relational persistence into one complete application workflow.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection heading="From interface to database" isPrimary>
        <div className="case-study-prose narrative-flow">
          <p>
            CRUD-Process helped me understand how each layer of a database-backed application
            participates in the same user action. Information entered through the interface
            moves through Flask routes and application logic, is represented through
            SQLAlchemy, and is stored in MySQL. When the information is requested again, the
            application retrieves it and passes it to a Jinja template that renders the
            updated interface.
          </p>

          <ol className="system-flow">
            {systemFlowLayers.map(({ description, label }) => (
              <li className="system-flow__item" key={label}>
                <h3>{label}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>

          <dl className="supporting-paths">
            {supportingPaths.map(({ description, label }) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </CaseStudySection>

      <CaseStudySection heading="A complete user workflow">
        <div className="case-study-prose narrative-flow">
          <p>
            The application connects account access, record organization, calculation, and
            reporting in one authenticated path.
          </p>
          <ol className="case-study-workflow">
            {workflowSteps.map(({ description, label }) => (
              <li key={label}>
                <h3>{label}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </CaseStudySection>

      <CaseStudySection heading="Record structure">
        <div className="case-study-prose narrative-flow">
          <p>
            Three relational models keep process records connected to the account and table
            that give them context.
          </p>
          <dl className="record-structure">
            {recordDefinitions.map(({ description, label }) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{description}</dd>
              </div>
            ))}
          </dl>
          <p>
            This relationship keeps records organized by account and table rather than storing
            every process as an unrelated row.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection heading="Process-efficiency calculation">
        <div className="case-study-prose narrative-flow">
          <p>
            The application compares the standard production time represented by each process
            record with its net operating time to calculate a process-efficiency percentage.
          </p>
          <dl className="calculation-record">
            {calculationRows.map(({ expression, label }) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{expression}</dd>
              </div>
            ))}
          </dl>
          <p className="case-study-qualification">
            This is the process-efficiency calculation implemented by the application. The
            repository does not establish external validation of the formula or its assumptions
            as a recognized industrial KPI. It is presented here as historical implementation
            evidence.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection heading="Reporting with Matplotlib">
        <p className="case-study-prose">
          Matplotlib generates an SVG line chart using the process names in entry order and the
          calculated process-efficiency percentage for each process. The chart compares records
          by process order and expands its vertical range when a calculated value exceeds 100%.
          Because this view does not model timestamps, it is not historical or time-series
          analysis.
        </p>
      </CaseStudySection>

      <CaseStudySection heading="Supporting intent classifier" quiet>
        <div className="case-study-prose narrative-flow">
          <p>
            A secondary support feature explores bounded intent classification inside the
            application. It uses regular-expression tokenization, NLTK Porter stemming, and a
            bag-of-words representation as input to a PyTorch network with three linear layers
            and ReLU activation.
          </p>
          <p>
            The training data contains 37 example phrases across nine curated intent
            categories. Training uses a batch size of 8, a hidden size of 8, Adam optimization,
            cross-entropy loss, and 1,750 epochs. At runtime, a confidence above 0.75 selects a
            predefined response; otherwise, the interface returns a fallback.
          </p>
          <p>
            This was a limited classification experiment rather than a generative language
            system. The repository provides no held-out evaluation or classifier-accuracy
            evidence.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection heading="What the implementation demonstrates">
        <p className="case-study-prose">
          CRUD-Process demonstrates the integration of an authenticated user workflow, form
          validation, relational data ownership, SQL persistence, CRUD operations, Flask route
          logic, a process-efficiency calculation, server-generated SVG reporting, and a
          bounded classification experiment. Its value is the way these responsibilities work
          together inside one complete database-backed application, not a claim of production
          maturity.
        </p>
      </CaseStudySection>

      <CaseStudySection heading="What I learned">
        <div className="case-study-prose narrative-flow">
          <p>
            CRUD-Process was my first complete database-backed web application. Building it
            helped me understand how information entered through an interface moves through
            backend application logic into a relational SQL database, and how those same layers
            work together when data is retrieved, updated, and presented again to the user.
          </p>
          <p>
            It was also my first substantial experience using Flask to connect those parts of
            an application. That experience became a foundation for the more structured
            record-oriented applications I built afterward.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection heading="Repository-visible constraints" quiet>
        <p className="case-study-prose">
          The repository does not include an automated test suite, database migration history,
          or held-out classifier evaluation. It also does not establish external validation of
          the process-efficiency calculation. The Process model retains a legacy operator-count
          column for schema compatibility, but the current form, create/update workflow,
          interface, and process-efficiency calculation no longer use operator count.
          Authentication and account flows represent an early implementation rather than an
          audited production design.
        </p>
      </CaseStudySection>

      <CaseStudySection heading="Development significance" isClosing>
        <p className="case-study-prose">
          CRUD-Process established an early foundation for account-scoped records, relational
          persistence, and complete application workflows. It marks the point where database
          structure, backend logic, and interface behavior first became one connected system in
          my portfolio.
        </p>
      </CaseStudySection>
    </article>
  )
}

function CaseStudySection({ children, heading, isClosing = false, isPrimary = false, quiet = false }) {
  const classNames = [
    'case-study-section',
    isPrimary ? 'case-study-section--primary' : '',
    quiet ? 'case-study-section--quiet' : '',
    isClosing ? 'case-study-section--closing' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section className={classNames}>
      <div className="content-container case-study-section__layout">
        <h2>{heading}</h2>
        {children}
      </div>
    </section>
  )
}

export default CrudProcessCaseStudyPage
