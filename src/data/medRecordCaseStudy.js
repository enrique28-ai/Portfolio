export const medRecordMetadata = [
  {
    label: 'Category',
    value: 'Patient and diagnosis record application',
  },
  {
    label: 'Application structure',
    value: 'Server-rendered Django application',
  },
  {
    label: 'Core technologies',
    value: ['Python', 'Django', 'PostgreSQL'],
  },
  {
    label: 'Data layer',
    value: 'Django ORM',
  },
]

export const recordHierarchy = {
  description:
    'Represents the authenticated identity and directly owns its Patient records.',
  label: 'Account',
  relationship: 'Directly owns Patient records',
  technicalModel: 'Django User',
  child: {
    description:
      'Belongs directly to one account and groups the diagnosis records associated with that patient.',
    label: 'Patient',
    relationship: 'Directly belongs to one account',
    technicalModel: 'Patient',
    child: {
      description:
        'The repository represents each diagnosis record with a Django model named HealthRecord. Each record belongs directly to one Patient and does not reference the account separately. Its account context is therefore inherited through the owned patient.',
      label: 'Diagnosis records',
      relationship: 'Inherit account context through the patient',
      technicalModel: 'HealthRecord',
    },
  },
}

export const patientWorkflow = [
  {
    description: 'Authenticate with Django and open the account\'s patient records.',
    label: 'Sign in',
  },
  {
    description:
      'Load patients associated with the current account and order them by name.',
    label: 'View patients',
  },
  {
    description:
      'Filter that account-scoped list with a case-insensitive name match.',
    label: 'Search by name',
  },
  {
    description:
      'Submit a name and age; the application associates the new Patient with the signed-in user.',
    label: 'Create a patient',
  },
  {
    description:
      'Retrieve a patient by identifier together with the current account\'s ownership.',
    label: 'Open a patient',
  },
  {
    description:
      'Validate and save changes to the patient\'s name or age through a Django ModelForm.',
    label: 'Update a patient',
  },
  {
    description: 'Remove an owned patient through a POST request.',
    label: 'Delete a patient',
  },
  {
    description:
      'Use the owned patient as the parent context for its related diagnosis-record list.',
    label: 'Open diagnosis records',
  },
]

export const diagnosisWorkflow = [
  {
    description:
      'Retrieve the selected patient together with the current account before accessing its diagnosis records.',
    label: 'Establish patient ownership',
  },
  {
    description:
      'Load the HealthRecord entries related to that patient, ordered from newest to oldest.',
    label: 'View diagnosis records',
  },
  {
    description:
      'Optionally filter the patient\'s records by diagnostic text or description.',
    label: 'Search records',
  },
  {
    description:
      'Submit a diagnostic entry and optional description; the application associates the new record with the selected patient.',
    label: 'Create a diagnosis record',
  },
  {
    description:
      'Retrieve the HealthRecord through its patient, then validate and save supported changes through a Django ModelForm.',
    label: 'Open or update a record',
  },
  {
    description:
      'Remove the HealthRecord through a POST request after the owned patient context has been established.',
    label: 'Delete a record',
  },
]

export const djangoResponsibilities = [
  {
    description:
      'Django\'s built-in User model, authentication forms, and session handling provide account registration, sign-in, and sign-out.',
    label: 'Identity',
  },
  {
    description:
      'The Patient, HealthRecord, and UserProfile models represent the application\'s stored data and relationships.',
    label: 'Domain records',
  },
  {
    description:
      'Django ModelForms validate supported patient and diagnosis-record inputs.',
    label: 'Input validation',
  },
  {
    description:
      'Function-based views receive requests and coordinate record operations.',
    label: 'Request handling',
  },
  {
    description:
      'Scoped ORM queries associate Patient records with the current user; HealthRecord queries then use an owned patient as their context.',
    label: 'Ownership retrieval',
  },
  {
    description:
      'URL configuration maps the patient and diagnosis-record workflows to their views.',
    label: 'Navigation',
  },
  {
    description:
      'Django templates and template inheritance render the server-generated interface, with Bootstrap providing supporting layout and control styles.',
    label: 'Presentation',
  },
  {
    description:
      'Django migrations represent the initial relational schema and the later addition of UserProfile.',
    label: 'Schema evolution',
  },
  {
    description:
      'Custom middleware and Django timezone tools activate a valid timezone for creation-time display.',
    label: 'Local time handling',
  },
]
