import { Link } from 'react-router-dom'

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container site-footer__inner">
        <p>Enrique Preciado — Academic and professional portfolio.</p>

        <nav aria-label="Footer navigation" className="site-footer__nav">
          <ul className="site-footer__links" role="list">
            <li>
              <Link className="text-link" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <a className="text-link" href="https://github.com/enrique28-ai">
                GitHub
              </a>
            </li>
            <li>
              <a
                className="text-link"
                href="https://www.linkedin.com/in/enriquerpreciado"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default SiteFooter
