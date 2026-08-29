export const SITE_ORIGIN = 'https://enriquepreciado.dev'

const homeUrl = `${SITE_ORIGIN}/`

export const routeMetadata = {
  '/': {
    title: 'Enrique Preciado | Engineering, Business & Software',
    description:
      'Academic and professional portfolio of Enrique Preciado, connecting Industrial Engineering, Business Management, and software development through project work.',
    canonical: homeUrl,
  },
  '/projects': {
    title: 'Projects | Enrique Preciado',
    description:
      "Explore CRUD-Process, MedRecord, and DR-VIPS through concise summaries of each project's purpose, technical structure, and development significance.",
    canonical: `${SITE_ORIGIN}/projects`,
  },
  '/projects/crud-process': {
    title: 'CRUD-Process Case Study | Enrique Preciado',
    description:
      'Case study of CRUD-Process, a Flask and MySQL application connecting authenticated process records, application-defined calculations, and charted output.',
    canonical: `${SITE_ORIGIN}/projects/crud-process`,
  },
  '/projects/medrecord': {
    title: 'MedRecord Case Study | Enrique Preciado',
    description:
      'Case study of MedRecord, a Django and PostgreSQL application organizing account-owned patients, diagnosis records, scoped search, and local time display.',
    canonical: `${SITE_ORIGIN}/projects/medrecord`,
  },
  '/projects/dr-vips': {
    title: 'DR-VIPS Case Study | Enrique Preciado',
    description:
      'Case study of DR-VIPS, tracing six versions of a React, Express, and MongoDB application as roles, access workflows, histories, testing, and delivery expanded.',
    canonical: `${SITE_ORIGIN}/projects/dr-vips`,
  },
  '/skills': {
    title: 'Skills | Enrique Preciado',
    description:
      'Technical capabilities demonstrated across CRUD-Process, MedRecord, and DR-VIPS, mapped to tools, methods, and specific evidence from each case study.',
    canonical: `${SITE_ORIGIN}/skills`,
  },
  '/contact': {
    title: 'Contact | Enrique Preciado',
    description:
      'Professional contact options for Enrique Preciado, with approved email, LinkedIn, and GitHub links for admissions, academic, recruiting, and project inquiries.',
    canonical: `${SITE_ORIGIN}/contact`,
  },
}

export const notFoundMetadata = {
  title: 'Page Not Found | Enrique Preciado',
  robots: 'noindex, follow',
}

export const homepageStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_ORIGIN}/#person`,
      name: 'Enrique Preciado',
      url: homeUrl,
      sameAs: [
        'https://github.com/enrique28-ai',
        'https://www.linkedin.com/in/enriquerpreciado',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_ORIGIN}/#website`,
      url: homeUrl,
      name: 'Enrique Preciado Portfolio',
      inLanguage: 'en',
      creator: {
        '@id': `${SITE_ORIGIN}/#person`,
      },
    },
  ],
}
