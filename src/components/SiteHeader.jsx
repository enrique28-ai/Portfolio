import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

function SiteHeader() {
  return (
    <header className="border-b border-slate-200">
      <div className="site-container flex flex-wrap items-center justify-between gap-4 py-4">
        <NavLink className="font-semibold" to="/">
          Enrique Preciado
        </NavLink>

        <nav aria-label="Primary navigation">
          <ul className="flex flex-wrap gap-4" role="list">
            {navItems.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'underline underline-offset-4' : 'hover:underline'
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
