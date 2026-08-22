import { Outlet } from 'react-router-dom'
import SiteFooter from '../components/SiteFooter.jsx'
import SiteHeader from '../components/SiteHeader.jsx'

function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="site-container flex-1" id="main-content">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}

export default SiteLayout
