export const drVipsMetadata = [
  { label: 'Category', value: 'Patient and diagnosis record application' },
  { label: 'Documented evolution', value: 'Versions 1.0\u20136.0' },
  { label: 'Application structure', value: 'React client + Express API' },
  { label: 'Core technologies', value: ['React', 'Node.js', 'Express', 'MongoDB'] },
  { label: 'Interface', value: ['English', 'Spanish'] },
  { label: 'Testing', value: 'Backend + frontend automated tests' },
]

export const responsibilityExpansion = [
  {
    evidence: ['React', 'Express', 'MongoDB', 'JWT bearer authentication'],
    responsibility: 'Record foundation',
    summary:
      'Established a React client and an Express/MongoDB API for authenticated patient and diagnosis record management. This created the client/server and record foundation that every later version extended.',
    version: '1.0',
  },
  {
    evidence: ['HTTP-only cookies', 'Zustand', 'TanStack Query', 'Pagination and search'],
    responsibility: 'Session and data flow',
    summary:
      'Moved sessions into HTTP-only cookies, added account verification and password-recovery flows, and organized authentication and server data with Zustand and TanStack Query. Pagination and search made record retrieval a more explicit backend responsibility.',
    version: '2.0',
  },
  {
    evidence: ['Google sign-in', 'CAPTCHA', 'Profiles', 'Eligibility rules'],
    responsibility: 'Identity and eligibility',
    summary:
      'Expanded account access with Google sign-in, CAPTCHA checks, profiles, avatar handling, and professional-account eligibility. This broadened identity and account validation before role-specific record authorization became part of the application.',
    version: '3.0',
  },
  {
    evidence: [
      'Expanded Mongoose models',
      'Validation',
      'Measurements',
      'Structured diagnosis fields',
    ],
    responsibility: 'Record depth',
    summary:
      'Expanded patient and diagnosis records with additional structured fields, measurements, location and phone handling, treatments, operations, and corresponding validation. The project’s focus moved from record presence toward deeper record structure and input rules.',
    version: '4.0',
  },
  {
    evidence: ['Backend role checks', 'Patient review', 'i18n', 'Rate limiting'],
    responsibility: 'Role-specific responsibility',
    summary:
      'Established doctor and patient roles with backend role checks, patient-facing record review, English and Spanish interface resources, and additional request limits. Record responsibility now depended on who was acting, not only on who originally created a record.',
    version: '5.0',
  },
  {
    evidence: [
      'Access requests',
      'Historical snapshots',
      'Appointments',
      'Tests and CI',
      'Docker and Wrangler',
    ],
    responsibility: 'Coordinated responsibilities',
    summary:
      'Added shared-access requests, patient and diagnosis histories, guardian-linked records, appointments, in-app notifications, selective runtime translation, service decomposition, automated tests, CI, and deployment-oriented configuration. The application now coordinates responsibilities across records, identities, relationships, follow-up, and verification.',
    version: '6.0',
  },
]
