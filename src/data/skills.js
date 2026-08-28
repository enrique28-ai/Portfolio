const skills = [
  {
    id: 'full-stack-application-development',
    title: 'Full-stack application development',
    description:
      'I have built database-backed applications that connect user interfaces, backend request handling, application logic, and persistent data, progressing from server-rendered projects to a separated React client and Express API.',
    methods: [
      'Python',
      'JavaScript',
      'Flask',
      'Django',
      'React',
      'Node.js',
      'Express',
      'Server-rendered templates',
      'Client/API separation',
      'External service integration',
    ],
    evidence: [
      {
        project: 'CRUD-Process',
        path: '/projects/crud-process',
        details: ['Jinja interface', 'Flask routes and application logic', 'SQLAlchemy', 'MySQL'],
      },
      {
        project: 'MedRecord',
        path: '/projects/medrecord',
        details: ['Django templates', 'views and forms', 'Django ORM', 'PostgreSQL'],
      },
      {
        project: 'DR-VIPS',
        path: '/projects/dr-vips',
        details: [
          'React client',
          'Axios communication',
          'Express API',
          'services and middleware',
          'MongoDB',
        ],
      },
    ],
  },
  {
    id: 'data-modeling-and-persistence',
    title: 'Data modeling and persistence',
    description:
      'I have modeled account-owned and related records across relational and document databases, using application data layers to create, retrieve, update, search, and preserve context between records.',
    methods: [
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'SQLAlchemy',
      'Django ORM',
      'Mongoose',
      'Foreign-key relationships',
      'Document models',
      'Schema migrations',
      'Scoped queries',
      'Historical snapshots',
    ],
    evidence: [
      {
        project: 'CRUD-Process',
        path: '/projects/crud-process',
        summary: 'User → Table → Process relational ownership',
      },
      {
        project: 'MedRecord',
        path: '/projects/medrecord',
        summary: 'Account → Patient → HealthRecord relationships and scoped retrieval',
      },
      {
        project: 'DR-VIPS',
        path: '/projects/dr-vips',
        summary:
          'Patient, diagnosis, history, access-request, appointment, notification, and guardian-linked models',
      },
    ],
  },
  {
    id: 'authentication-and-access-workflows',
    title: 'Authentication and access workflows',
    description:
      'Authentication establishes an account’s identity; authorization determines which records and workflows that identity may access. My project work includes authenticated accounts, ownership-scoped retrieval, and, in DR-VIPS, backend role and access-request checks.',
    methods: [
      'Flask and Django account authentication',
      'JWT authentication',
      'HTTP-only cookie sessions',
      'Account verification',
      'Password recovery',
      'Ownership-scoped queries',
      'Backend role checks',
      'Shared-access requests',
      'Patient review',
      'Guardian-linked application rules',
      'CAPTCHA',
      'Request rate limiting',
    ],
    evidence: [
      {
        project: 'CRUD-Process',
        path: '/projects/crud-process',
        summary: 'Authenticated accounts and user-owned application records',
      },
      {
        project: 'MedRecord',
        path: '/projects/medrecord',
        summary: 'Django authentication and account-scoped patient retrieval',
      },
      {
        project: 'DR-VIPS',
        path: '/projects/dr-vips',
        summary:
          'Backend roles, ownership checks, access requests, patient-facing review, and guardian-linked access decisions',
      },
    ],
  },
  {
    id: 'frontend-application-development',
    title: 'Frontend application development',
    description:
      'My frontend work progressed from server-rendered templates to a React interface with structured API communication, server-data handling, authentication state, reusable feature hooks, and English and Spanish localization.',
    methods: [
      'Jinja',
      'Django templates',
      'React',
      'Tailwind CSS',
      'Axios',
      'TanStack Query',
      'Zustand',
      'Feature hooks',
      'i18next',
      'react-i18next',
      'Responsive interfaces',
      'In-app notifications',
      'Cloudinary upload integration',
    ],
    evidence: [
      {
        project: 'CRUD-Process',
        path: '/projects/crud-process',
        summary: 'Forms, server-rendered responses, charts, and browser interactions',
      },
      {
        project: 'MedRecord',
        path: '/projects/medrecord',
        summary: 'Django templates and account-scoped record interfaces',
      },
      {
        project: 'DR-VIPS',
        path: '/projects/dr-vips',
        summary:
          'React/Tailwind client, Axios, feature hooks, TanStack Query, authentication state, role-aware navigation, bilingual interface resources, calendar, and notifications',
      },
    ],
  },
  {
    id: 'testing-and-verification',
    title: 'Testing and verification',
    description:
      'In DR-VIPS 6.0, I worked with backend and frontend automated tests, manual verification, CI checks, startup checks, and smoke-test logic to identify regressions across connected workflows.',
    methods: [
      'Backend automated tests',
      'Vitest',
      'Manual workflow verification',
      'Regression testing',
      'Syntax and build checks',
      'GitHub Actions',
      'Startup and health checks',
      'Production smoke-test logic',
    ],
    evidence: [
      {
        project: 'DR-VIPS',
        path: '/projects/dr-vips',
        summary: 'Demonstrated primarily in DR-VIPS 6.0',
      },
    ],
  },
  {
    id: 'delivery-configuration-and-automation',
    title: 'Delivery configuration and automation',
    description:
      'I have worked with GitHub Actions, a Dockerfile, Wrangler, and Cloudflare configuration to connect testing, build validation, preflight checks, and deployment-oriented application setup.',
    methods: [
      'GitHub Actions',
      'Dockerfile',
      'Wrangler',
      'Cloudflare Workers and Containers configuration',
      'Build verification',
      'Deployment preflight',
      'Health endpoints',
      'Startup checks',
      'Graceful shutdown',
      'Smoke-test workflow',
    ],
    evidence: [
      {
        project: 'DR-VIPS',
        path: '/projects/dr-vips',
        summary: 'Demonstrated primarily in DR-VIPS 6.0',
      },
    ],
  },
  {
    id: 'ai-assisted-development-and-review',
    title: 'AI-assisted development and review',
    description:
      'I use ChatGPT, Codex, and OpenCode as development assistants for planning, implementation support, review, testing, and iterative validation, while continuing to inspect changes and manually verify application behavior.',
    methods: [
      'ChatGPT',
      'Codex',
      'OpenCode',
      'Reusable skills',
      'Task-specific subagents',
      'Planning support',
      'Implementation support',
      'Code review',
      'Test assistance',
      'Iterative manual validation',
    ],
    evidence: [
      {
        project: 'DR-VIPS',
        path: '/projects/dr-vips',
        summary:
          'The DR-VIPS case study documents the progression from earlier ChatGPT-assisted development to a more systematic Codex/OpenCode workflow in version 6.0.',
      },
    ],
  },
]

export default skills
