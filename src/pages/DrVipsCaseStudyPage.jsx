import {
  drVipsMetadata,
  responsibilityExpansion,
} from '../data/drVipsCaseStudy.js'

function DrVipsCaseStudyPage() {
  return (
    <article className="case-study dr-vips-case-study">
      <header className="case-study-header section-block">
        <div className="content-container">
          <p className="technical-label">{'Case Study \u00B7 DR-VIPS'}</p>
          <h1>DR-VIPS</h1>
          <p className="case-study-header__introduction body-large">
            DR-VIPS is a patient and diagnosis record application developed across six
            sequential versions. It began with authenticated record management and expanded
            into role-specific access, patient review, historical snapshots, guardian-linked
            records, coordinated follow-up, automated testing, and deployment-oriented
            workflows.
          </p>

          <dl className="case-study-metadata">
            {drVipsMetadata.map(({ label, value }) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{Array.isArray(value) ? value.join(' \u00B7 ') : value}</dd>
              </div>
            ))}
          </dl>

          <div className="dr-vips-case-study__actions">
            <a className="button button--primary" href="https://dr-vips.com">
              View live demo
            </a>
            <a
              className="dr-vips-case-study__source text-link"
              href="https://github.com/enrique28-ai/DR-VIPS-6.0"
            >
              View source on GitHub
            </a>
          </div>
        </div>
      </header>

      <CaseStudySection heading="Project context">
        <div className="case-study-prose narrative-flow">
          <p>
            CRUD-Process taught me how interface behavior, backend logic, and database
            persistence connect in a complete application flow. MedRecord moved that work
            toward structured, subject-centered records.
          </p>
          <p>
            DR-VIPS became the project in which I repeatedly expanded the responsibilities
            surrounding those records—first through a separated client and API, then through
            identity, roles, access decisions, record review, history, coordinated follow-up,
            automated verification, and deployment workflow.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection heading="Six versions, expanding responsibilities" isPrimary>
        <div className="case-study-prose narrative-flow">
          <p>
            DR-VIPS developed through six sequential versions. Each stage introduced a
            different kind of application responsibility rather than simply adding more fields
            or interface features.
          </p>
          <ResponsibilityLedger />
        </div>
      </CaseStudySection>

      <CaseStudySection heading="From ownership to coordinated access">
        <div className="case-study-prose narrative-flow">
          <p>
            Earlier versions used the authenticated creator as the main record boundary.
            Version 5.0 introduced separate doctor and patient responsibilities, while version
            6.0 made access itself an explicit workflow.
          </p>
          <p>
            Record discovery allows a doctor to locate a limited preview of a record they do
            not own. Discovery does not grant permission or copy the record. The doctor submits
            an access request, and the adult patient or current guardian-linked account reviews
            it. Approval adds the doctor to the record’s owners; rejection leaves access
            unchanged.
          </p>
          <p
            className="dr-vips-access-sequence"
            aria-label="Record discovery, then access request, then review, then shared access"
          >
            <span>Record discovery</span>
            <span aria-hidden="true">{'→'}</span>
            <span>Access request</span>
            <span aria-hidden="true">{'→'}</span>
            <span>Review</span>
            <span aria-hidden="true">{'→'}</span>
            <span>Shared access</span>
          </p>
          <p>
            These are separate application steps: finding a record is not the same as receiving
            permission, and the action historically named “import” now creates a pending request
            rather than immediately granting access.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection heading="Record change, review, and history">
        <div className="case-study-prose narrative-flow">
          <p>
            Doctor-created or updated patient information can produce a pending decision for the
            related patient-facing account. While that decision remains pending, the application
            may block additional edits so another proposed state is not introduced before the
            current one is resolved.
          </p>
          <p>
            Approval establishes the accepted profile state and stores a historical snapshot.
            Rejection restores or reconstructs the previously accepted information according to
            the records available. Diagnosis creation and updates also produce snapshots that
            preserve the record state and identify the editing account.
          </p>
          <p>
            These features provide application-level record review and change history. They are
            not a formal audit system, compliance log, or medical-consent mechanism.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection heading="Guardian-linked records">
        <div className="case-study-prose narrative-flow">
          <p>
            Version 6.0 extends patient-facing behavior to minor records associated with a
            guardian account. The application groups related minor records, provides
            guardian-facing child record and history views, and allows the associated account
            to review changes and decide access requests concerning the minor.
          </p>
          <p>
            Guardian reassignment is constrained by application rules. The current guardian
            record must be marked deceased, while the replacement must be represented as a
            living adult with an approved profile that lists the child. Reassignment updates the
            minor’s grouping information and stores a historical snapshot of the change.
          </p>
          <p>
            These are application-defined account relationships. The repository does not
            establish legal guardianship verification.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection heading="Appointments, notifications, and reminders">
        <div className="case-study-prose narrative-flow">
          <p>
            Appointments connect a doctor with a patient record through defined start and end
            times and an application status. Creation checks whether the doctor owns the
            selected record, whether the patient is living, and whether the proposed time
            overlaps another active appointment for either participant.
          </p>
          <p>
            Doctor and patient-facing accounts can review appointments through a calendar
            interface. Appointment creation, acceptance, cancellation, and rejection can
            generate bilingual in-app notifications with read and unread states.
          </p>
          <p>
            The backend also includes scheduled reminder logic using <code>node-cron</code>. It
            checks accepted appointments at configured intervals and creates
            duplicate-resistant reminder notifications. That background job is currently
            disabled in the production configuration.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection heading="Language and translation">
        <div className="case-study-prose narrative-flow">
          <p>
            DR-VIPS treats interface localization and record translation as separate
            responsibilities.
          </p>
          <p>
            The React interface uses i18next and react-i18next with English and Spanish
            resources for navigation, forms, messages, and other interface text.
          </p>
          <p>
            Selected record fields can also be translated at request time through the DeepL
            API. This applies to supported diagnosis descriptions, patient record lists, health
            snapshots, and historical snapshots. If translation is unavailable or not
            configured, the application returns the original content.
          </p>
          <p>
            Runtime translation is limited to selected fields; it does not automatically
            translate the entire database or every value in a record.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection heading="Application organization">
        <div className="case-study-prose narrative-flow">
          <p>
            The React and Tailwind CSS client uses Axios for API communication, TanStack Query
            for server-data retrieval and updates, Zustand for authentication state, feature
            hooks for repeated operations, and route guards for verified and role-specific
            navigation.
          </p>
          <p>
            The Express backend organizes behavior through routes, controllers, middleware,
            services, and Mongoose models. Authentication, role checks, request limits,
            validation, and error handling are applied before or around the record operations
            they protect.
          </p>
          <p>
            By version 6.0, patient behavior had been divided among services for record reading,
            writing, listing, patient portals, approval, history, and access requests. This
            separation makes the application’s growing responsibilities more explicit without
            implying microservices or a formal architectural methodology.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection heading="Testing and deployment workflow">
        <div className="case-study-prose narrative-flow">
          <p>
            Version 6.0 introduced substantive automated testing across the backend and
            frontend. Backend tests cover authentication, middleware, patient services, access
            requests, ownership, privacy, guardian behavior, histories, diagnoses,
            appointments, notifications, reminders, and startup behavior. Frontend Vitest
            suites cover authentication pages, role-aware navigation, record workflows, access
            requests, child views, notifications, and the calendar.
          </p>
          <p>
            GitHub Actions connects those tests to syntax checks, frontend builds, build
            verification, and committed-whitespace checks. A separate deployment workflow
            performs preflight validation before invoking Wrangler and includes production
            smoke-test logic.
          </p>
          <p>
            The repository also contains a Dockerfile, health endpoints, startup checks,
            graceful shutdown behavior, and Cloudflare Worker and Container configuration.
            Together, these files demonstrate a deployment-oriented workflow; they do not
            establish scale, uptime, or infrastructure expertise.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection heading="Development approach" quiet>
        <div className="case-study-prose narrative-flow">
          <p>
            I developed DR-VIPS iteratively across six versions. In the earlier versions, I
            combined my own implementation and code analysis with experimentation, learning
            resources, and ChatGPT as a development assistant.
          </p>
          <p>
            By version 6.0, that workflow had expanded to include Codex and OpenCode for
            planning, implementation support, review, testing, and iteration, while I continued
            to inspect changes and manually validate application behavior. This also gave me
            experience working with reusable skills and task-specific subagents as part of an
            AI-assisted engineering workflow.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection heading="What the implementation demonstrates">
        <div className="case-study-prose narrative-flow">
          <p>
            DR-VIPS demonstrates the progressive expansion of application responsibility across
            a sustained series of versions. The project moved from creator-owned patient and
            diagnosis records toward backend-enforced roles, explicit access decisions,
            patient-facing review, historical snapshots, guardian-linked behavior, and
            coordinated appointment and notification workflows.
          </p>
          <p>
            It also demonstrates a growing distinction between authentication and
            authorization, increasingly explicit relationship and lifecycle rules, more
            organized client and backend responsibilities, and a broader verification workflow
            through automated tests, CI, startup checks, and deployment configuration.
          </p>
          <p>
            Its significance comes from how these responsibilities interact, not from the
            number of features present.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection heading="What I learned">
        <div className="case-study-prose narrative-flow">
          <p>
            DR-VIPS became the project through which I learned how the pieces of a larger
            full-stack application work together. I learned to connect MongoDB to a Node.js and
            Express backend, build the client with React and Tailwind CSS, implement JWT-based
            authentication, organize API communication with Axios and frontend hooks, and apply
            request rate limiting to selected application flows. I also gained experience
            handling image uploads with Cloudinary, building English and Spanish interface
            localization with i18n, and translating selected record fields dynamically through
            the DeepL API.
          </p>
          <p>
            As the project expanded, I learned to write and maintain automated tests across both
            the backend and frontend. With substantial assistance while learning these tools, I
            gained experience connecting tests and deployment checks to GitHub Actions and
            configuring the application for Cloudflare with Docker and Wrangler. I also learned
            to use AI-assisted development workflows more systematically through ChatGPT, Codex,
            and OpenCode, including reusable skills and specialized subagents for development,
            review, and testing.
          </p>
          <p>
            The most challenging area was permissions and guardian-linked behavior. Its
            correctness depended on several roles and relationships interacting as intended, so
            I repeatedly combined automated tests with manual verification to identify
            regressions and confirm that access rules behaved correctly.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection heading="Repository-visible constraints" quiet>
        <div className="case-study-prose narrative-flow">
          <p>
            Patient and diagnosis histories are application-level historical snapshots rather
            than a formal audit system. Guardian relationships are defined through application
            data and rules rather than legal verification.
          </p>
          <p>
            Runtime translation applies only to selected record fields, and the automated test
            suites do not establish comprehensive coverage. The repository includes scheduled
            appointment-reminder logic, but that background job is currently disabled in the
            production configuration.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection heading="Development significance" isClosing>
        <div className="case-study-prose narrative-flow">
          <p>
            DR-VIPS marks the point where my software work moved beyond record CRUD toward
            coordinating roles, permissions, record changes, review, history, relationships,
            and follow-up workflows.
          </p>
          <p>
            Across six versions, the project also expanded how I tested, organized, reviewed,
            and configured a full-stack application. Its place in this portfolio comes from that
            progression in responsibility—including the more systematic AI-assisted engineering
            practices I adopted while developing version 6.0.
          </p>
        </div>
      </CaseStudySection>
    </article>
  )
}

function ResponsibilityLedger() {
  return (
    <ol className="responsibility-ledger">
      {responsibilityExpansion.map(({ evidence, responsibility, summary, version }) => (
        <li className="responsibility-ledger__item" key={version}>
          <header className="responsibility-ledger__header">
            <p className="responsibility-ledger__version">{version}</p>
            <h3>{responsibility}</h3>
          </header>
          <p className="responsibility-ledger__summary">{summary}</p>
          <p className="responsibility-ledger__evidence">
            <span className="visually-hidden">Evidence: </span>
            {evidence.join(' \u00B7 ')}
          </p>
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

export default DrVipsCaseStudyPage
