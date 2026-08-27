const featuredProjects = [
  {
    category: 'Process-data web application',
    caseStudyPath: '/projects/crud-process',
    evidence:
      'How structured operational data can support a defined calculation and reporting workflow.',
    id: 'crud-process',
    name: 'CRUD-Process',
    summary:
      'An authenticated Flask application for organizing user-owned process records, calculating efficiency from recorded values, and presenting charted results.',
    technologies: ['Python', 'Flask', 'SQLAlchemy', 'MySQL'],
  },
  {
    category: 'Patient and diagnosis record application',
    caseStudyPath: '/projects/medrecord',
    evidence:
      'How related records can be organized around the account and subject they belong to.',
    id: 'medrecord',
    name: 'MedRecord',
    summary:
      'A Django application that connects authenticated users with patient and diagnosis records in PostgreSQL, with account-scoped creation, search, and retrieval.',
    technologies: ['Python', 'Django', 'PostgreSQL'],
  },
  {
    category: 'Iterative full-stack application',
    caseStudyPath: '/projects/dr-vips',
    evidence:
      'How one project family was revised to support a wider set of records, roles, and workflows.',
    evolution: 'Documented evolution: 1.0\u20136.0',
    id: 'dr-vips',
    name: 'DR-VIPS',
    summary:
      'A React client and Express/MongoDB API developed across six repository versions. It extends patient and diagnosis records into doctor- and patient-specific workflows, English and Spanish interface support, record histories, and automated tests.',
    technologies: ['React', 'Express', 'MongoDB'],
  },
]

export default featuredProjects
