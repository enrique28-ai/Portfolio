import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import RouteMeta from '../components/RouteMeta.jsx'
import SiteFooter from '../components/SiteFooter.jsx'
import SiteHeader from '../components/SiteHeader.jsx'

function SiteLayout() {
  const { pathname } = useLocation()
  const mainRef = useRef(null)
  const previousPathname = useRef(pathname)

  useEffect(() => {
    if (previousPathname.current === pathname) {
      return
    }

    previousPathname.current = pathname
    window.scrollTo({ top: 0, behavior: 'auto' })
    mainRef.current?.focus({ preventScroll: true })
  }, [pathname])

  return (
    <>
      <RouteMeta pathname={pathname} />
      <div className="site-shell">
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <SiteHeader />
        <main
          className="site-main"
          id="main-content"
          ref={mainRef}
          tabIndex="-1"
        >
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </>
  )
}

export default SiteLayout
