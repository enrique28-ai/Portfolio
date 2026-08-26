import { Route, Routes } from 'react-router-dom'
import SiteLayout from './layouts/SiteLayout.jsx'
import ContactPage from './pages/ContactPage.jsx'
import CrudProcessCaseStudyPage from './pages/CrudProcessCaseStudyPage.jsx'
import HomePage from './pages/HomePage.jsx'
import MedRecordCaseStudyPage from './pages/MedRecordCaseStudyPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/crud-process" element={<CrudProcessCaseStudyPage />} />
        <Route path="projects/medrecord" element={<MedRecordCaseStudyPage />} />
        <Route
          path="projects/dr-vips"
          element={<ProjectPage projectName="DR-VIPS" />}
        />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
