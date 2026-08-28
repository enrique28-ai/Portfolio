import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills', to: '/skills' },
  { label: 'Contact', to: '/contact' },
]

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-container site-header__inner">
        <NavLink className="site-identity" to="/">
          Enrique Preciado
        </NavLink>

        <nav aria-label="Primary navigation" className="site-nav">
          <ul className="site-nav__list" role="list">
            {navItems.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  className={({ isActive }) =>
                    `site-nav__link${isActive ? ' site-nav__link--active' : ''}`
                  }
                  end={to === '/'}
                  to={to}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader
