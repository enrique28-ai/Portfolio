import {
  diagnosisWorkflow,
  djangoResponsibilities,
  medRecordMetadata,
  patientWorkflow,
  recordHierarchy,
} from '../data/medRecordCaseStudy.js'

function MedRecordCaseStudyPage() {
  return (
    <article className="case-study">
      <header className="case-study-header section-block">
        <div className="content-container">
          <p className="technical-label">{'Case Study \u00B7 MedRecord'}</p>
          <h1>MedRecord</h1>
          <p className="case-study-header__introduction body-large">
            MedRecord was my first project built with Django. It organizes account-owned
            patients and their related diagnosis records in PostgreSQL, using Django’s
            framework conventions to structure relational data, authenticated record
            workflows, and scoped retrieval.
          </p>

          <dl className="case-study-metadata">
            {medRecordMetadata.map(({ label, value }) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{Array.isArray(value) ? value.join(' \u00B7 ') : value}</dd>
              </div>
            ))}
          </dl>

          <div className="case-study-header__actions">
            <a
              className="button button--secondary"
              href="https://medrecord.enriquepreciado.dev"
              rel="noopener noreferrer"
              target="_blank"
            >
              View running sample
            </a>
            <a
              className="case-study-header__source text-link"
              href="https://github.com/enrique28-ai/Medrecord"
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
            MedRecord is a server-rendered application in which authenticated users maintain
            their own patients and the diagnosis records associated with each patient. Users
            can create, retrieve, update, delete, and search both record types within that
            account-scoped structure.
          </p>
          <p>
            MedRecord was independently developed as learning and portfolio work. It explores
            record organization through a medical domain; it has not been used in clinical
            practice, for real clinical care, or to manage real-world patient records.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection heading="Account-scoped record hierarchy" isPrimary>
        <div className="case-study-prose narrative-flow">
          <p>
            MedRecord organizes data around the subject each record describes. The account
            directly owns its patients, while each diagnosis record belongs to a patient and
            receives its account context through that relationship.
          </p>

          <HierarchyLevel item={recordHierarchy} />

          <p>
            This hierarchy preserves both ownership and subject context during retrieval. The
            application reaches a diagnosis record through a patient that already belongs to
            the current account, rather than treating the diagnosis record as an independent
            account-level row.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection heading="Patient workflow">
        <div className="case-study-prose narrative-flow">
          <p>
            The patient workflow establishes the account context used by the related
            diagnosis-record workflow.
          </p>
          <Workflow steps={patientWorkflow} />
        </div>
      </CaseStudySection>

      <CaseStudySection heading="Diagnosis-record workflow">
        <div className="case-study-prose narrative-flow">
          <p>
            Diagnosis-record operations begin by retrieving a patient that belongs to the
            current account. The application then works with records related to that patient.
          </p>
          <Workflow steps={diagnosisWorkflow} />
        </div>
      </CaseStudySection>

      <CaseStudySection heading="Scoped search">
        <div className="case-study-prose narrative-flow">
          <p>
            MedRecord applies search after relational scope has already been established. The
            patient list uses the <code>q</code> query parameter to filter the current account’s
            patients by a case-insensitive name match with <code>name__icontains</code>.
          </p>
          <p>
            Within an owned patient, the diagnosis-record list uses the same query parameter
            to match either <code>diagnostic__icontains</code> or{' '}
            <code>description__icontains</code>, also case-insensitively. Results remain
            restricted to that patient and are ordered from newest to oldest.
          </p>
          <p>These are straightforward record filters rather than full-text or advanced search.</p>
        </div>
      </CaseStudySection>

      <CaseStudySection heading="How Django organizes the application">
        <div className="case-study-prose narrative-flow">
          <p>
            As my first Django project, MedRecord gave each application responsibility a
            framework-defined location. The implementation remains a single Django app with
            function-based views, but it uses Django’s conventions to connect its main parts.
          </p>
          <dl className="django-responsibilities">
            {djangoResponsibilities.map(({ description, label }) => (
              <div className="django-responsibilities__item" key={label}>
                <dt>{label}</dt>
                <dd>{description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </CaseStudySection>

      <CaseStudySection heading="PostgreSQL and the Django ORM">
        <div className="case-study-prose narrative-flow">
          <p>
            MedRecord configures PostgreSQL through <code>dj-database-url</code> and accesses it
            through the Django ORM. Model foreign keys define the User-to-Patient and
            Patient-to-HealthRecord relationships, while two Django migrations represent the
            initial relational schema and the later addition of UserProfile.
          </p>
          <p>
            The repository demonstrates PostgreSQL configuration and ORM-backed persistence. It
            does not establish database optimization, scaling, or production performance.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection heading="Creation time and local display">
        <div className="case-study-prose narrative-flow">
          <p>
            Each <code>HealthRecord</code> stores a <code>created_at</code> timestamp. Django
            timezone support is enabled, and browser JavaScript stores a detected IANA timezone
            in a cookie. Middleware activates a valid timezone, and the diagnosis-record list
            uses Django’s <code>localtime</code> filter before displaying the creation date and
            time.
          </p>
          <p>
            A UserProfile timezone field also exists, but the repository does not show an
            automatic profile-creation flow or a preference-editing interface. This supports
            localized creation-time display; it is not an audit trail, record history, or
            revision system.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection heading="What the implementation demonstrates">
        <div className="case-study-prose narrative-flow">
          <p>
            MedRecord demonstrates subject-centered relational modeling, account-scoped patient
            retrieval, diagnosis records reached through an owned patient, Django ModelForms,
            CRUD workflows, scoped search, PostgreSQL persistence through the Django ORM, schema
            migrations, and timezone-aware display of record creation times.
          </p>
          <p>
            Its value in the portfolio is the way these responsibilities are organized around
            related records, not a claim of clinical or production maturity.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection heading="What I learned">
        <div className="case-study-prose narrative-flow">
          <p>
            MedRecord was my first project built with Django. Through it, I learned how Django
            structures a database-backed web application, how its main components work together,
            how to integrate PostgreSQL through the Django ORM, how to define relationships
            between related models, and how to implement scoped record search.
          </p>
          <p>
            That experience extended my earlier database-backed application work from grouped
            operational records toward more structured, subject-centered relationships.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection heading="Repository-visible constraints" quiet>
        <p className="case-study-prose">
          The repository does not include a substantive automated test suite or a record-revision
          or audit-history model, and it does not demonstrate an automatic UserProfile creation
          or preference-editing workflow. The running deployment is provided as historical
          implementation evidence. It does not establish production readiness, scale, uptime,
          or clinical use.
        </p>
      </CaseStudySection>

      <CaseStudySection heading="Development significance" isClosing>
        <p className="case-study-prose">
          MedRecord extended my earlier database-backed application work by organizing related
          records around a patient and using Django’s framework conventions to structure those
          responsibilities. It marks a move from grouping operational records inside user-owned
          tables toward preserving relational context around the subject each record describes.
        </p>
      </CaseStudySection>
    </article>
  )
}

function HierarchyLevel({ item }) {
  return (
    <dl className="record-hierarchy">
      <div className="record-hierarchy__item">
        <dt>
          <span className="record-hierarchy__label">{item.label}</span>
          <span className="record-hierarchy__model">Technical model: {item.technicalModel}</span>
        </dt>
        <dd>
          <p className="record-hierarchy__relationship">{item.relationship}</p>
          <p>{item.description}</p>
          {item.child ? <HierarchyLevel item={item.child} /> : null}
        </dd>
      </div>
    </dl>
  )
}

function Workflow({ steps }) {
  return (
    <ol className="case-study-workflow">
      {steps.map(({ description, label }) => (
        <li key={label}>
          <h3>{label}</h3>
          <p>{description}</p>
        </li>
      ))}
    </ol>
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

export default MedRecordCaseStudyPage
