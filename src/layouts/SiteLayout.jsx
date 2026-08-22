import { Outlet } from 'react-router-dom'
import SiteFooter from '../components/SiteFooter.jsx'
import SiteHeader from '../components/SiteHeader.jsx'

function SiteLayout() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <SiteHeader />
      <main className="site-main" id="main-content">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}

export default SiteLayout
