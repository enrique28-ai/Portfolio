export const developmentJourney = [
  {
    id: 'crud-process',
    name: 'CRUD-Process',
    description:
      'CRUD-Process established an authenticated Flask application for recording process data, organizing entries into user-owned tables, calculating an application-defined efficiency percentage, and charting results.',
    metadata: ['Python', 'Flask', 'SQLAlchemy', 'MySQL'],
    transition: {
      label: 'What changed next',
      copy: 'The focus moved from calculating an operational workflow to keeping related records connected to the right account and subject.',
    },
  },
  {
    id: 'medrecord',
    name: 'MedRecord',
    description:
      'MedRecord used Django and PostgreSQL to connect users, patients, and diagnosis records. Search, timestamps, and timezone-aware display added structure around how those records were created and retrieved.',
    metadata: ['Python', 'Django', 'PostgreSQL'],
    transition: {
      label: 'What changed next',
      copy: 'DR-VIPS changed both the application structure and the depth of the record model: a React interface communicated with an Express and MongoDB API, creating a foundation that continued to evolve across six versions.',
    },
  },
  {
    id: 'dr-vips',
    name: 'DR-VIPS',
    description:
      'Across versions 1.0 through 6.0, DR-VIPS retained its patient-and-diagnosis core while expanding application structure, record depth, user roles, workflows, history, and automated verification.',
    metadata: ['React', 'Express', 'MongoDB'],
    versions: [
      {
        version: '1.0',
        description:
          'Established the React client and Express/MongoDB API around authenticated patient and diagnosis records.',
      },
      {
        version: '2.0',
        description:
          'Reorganized authentication, protected navigation, and server-data handling while expanding verification and record search.',
      },
      {
        version: '3.0',
        description:
          'Extended account access with CAPTCHA checks, Google sign-in, eligibility rules, and profile management.',
      },
      {
        version: '4.0',
        description:
          'Expanded the patient and diagnosis models with additional structured data, validation, filtering, and presentation.',
      },
      {
        version: '5.0',
        description:
          'Introduced doctor and patient roles, a patient-facing review workflow, bilingual interface support, and additional request protections.',
      },
      {
        version: '6.0',
        description:
          'Expanded the system with record histories, guardian-linked and access-request workflows, appointments, notifications, a service layer, automated tests, and CI.',
      },
    ],
  },
]
