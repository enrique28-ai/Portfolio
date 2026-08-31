export const crudProcessMetadata = [
  {
    label: 'Category',
    value: 'Process-data web application',
  },
  {
    label: 'Application structure',
    value: 'Server-rendered Flask application',
  },
  {
    label: 'Core technologies',
    value: ['Python', 'Flask', 'SQLAlchemy', 'MySQL'],
  },
  {
    label: 'Interface and reporting',
    value: ['Jinja', 'Matplotlib'],
  },
]

export const systemFlowLayers = [
  {
    description:
      'The user creates an account, selects a table, or submits process data through server-rendered forms.',
    label: 'Interface',
  },
  {
    description:
      'Authentication and process blueprints receive each request, while WTForms checks the supported form inputs.',
    label: 'Flask routes and forms',
  },
  {
    description:
      'Route logic decides what records should be created, retrieved, updated, deleted, or included in a calculation.',
    label: 'Application logic',
  },
  {
    description:
      'Models and queries represent users, tables, and process records in Python and connect those operations to the relational database.',
    label: 'SQLAlchemy',
  },
  {
    description:
      'The database persists account identities, ownership relationships, named tables, and their process records.',
    label: 'MySQL',
  },
  {
    description:
      'Retrieved data is passed to Jinja templates so the user can see the saved records and the output produced by the application.',
    label: 'Rendered response',
  },
]

export const supportingPaths = [
  {
    description:
      'A Flask route passes process results to Matplotlib, which returns an SVG chart.',
    label: 'Reporting path',
  },
  {
    description:
      'Browser JavaScript sends a request to /predict, where the PyTorch classifier selects a predefined response or fallback.',
    label: 'Support path',
  },
]

export const workflowSteps = [
  {
    description: 'Create an account or access an existing one.',
    label: 'Register or sign in',
  },
  {
    description: 'Choose the named group in which process records will be organized.',
    label: 'Create or select a table',
  },
  {
    description:
      'Record a name, duration, standard cycle time, units produced, setup time, and downtime. Time-based inputs are expressed in seconds.',
    label: 'Enter process data',
  },
  {
    description:
      'Flask receives the submitted form, applies validation and application logic, and uses SQLAlchemy to persist the record.',
    label: 'Save the record',
  },
  {
    description:
      'The application loads the selected table, its process records, and their calculated process-efficiency percentages.',
    label: 'Retrieve and review',
  },
  {
    description: 'A saved process record can be changed or removed from its table.',
    label: 'Update or delete',
  },
  {
    description:
      'The application sends the selected process results to Matplotlib and returns an SVG comparison chart.',
    label: 'Request the chart',
  },
]

export const recordDefinitions = [
  {
    description:
      'Represents the account identity and owns tables and process records.',
    label: 'User',
  },
  {
    description:
      'Belongs to one user and groups a named set of related process records.',
    label: 'Table',
  },
  {
    description:
      'Belongs to both a user and a table. The current workflow stores a name, duration, standard cycle time, units produced, setup time, downtime, author, and a sequential identifier within its table.',
    label: 'Process',
  },
]

export const calculationRows = [
  {
    expression: 'standard cycle time \u00D7 units produced',
    label: 'Standard time',
  },
  {
    expression: 'duration \u2212 downtime \u2212 setup time',
    label: 'Net operating time',
  },
  {
    expression: 'standard time \u00F7 net operating time \u00D7 100',
    label: 'Process efficiency',
  },
]
