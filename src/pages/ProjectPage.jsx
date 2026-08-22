import PagePlaceholder from '../components/PagePlaceholder.jsx'

function ProjectPage({ projectName }) {
  return (
    <PagePlaceholder
      description={`The ${projectName} case study will be developed in a later phase.`}
      title={projectName}
    />
  )
}

export default ProjectPage
