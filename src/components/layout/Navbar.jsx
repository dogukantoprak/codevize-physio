import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Menu, Phone, Sparkles, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import clsx from 'clsx'
import { company, services } from '../../data/siteData.js'

const MotionDiv = motion.div
const MotionNav = motion.nav

const primaryLinks = [
  { label: 'Ana Sayfa', to: '/' },
  { label: 'Hizmetlerimiz', to: '/services' },
  { label: 'Hakkımızda', to: '/about' },
  { label: 'İletişim', to: '/contact' },
]

function Brand() {
  return (
    <Link className="brand" to="/">
      <span className="brand__mark" aria-hidden="true">
        <span className="brand__pulse" />
      </span>
      <span>
        <strong>{company.name}</strong>
        <small>Fizik Tedavi & Rehabilitasyon Merkezi</small>
      </span>
    </Link>
  )
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const featuredServices = useMemo(() => services.slice(0, 4), [])
  const handleCloseMenus = () => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
  }

  return (
    <header className={clsx('site-header', isScrolled && 'site-header--scrolled')}>
      <div className="site-header__inner">
        <Brand />

        <nav className="desktop-nav" aria-label="Ana gezinme">
          {primaryLinks.map((item) =>
            item.label === 'Hizmetlerimiz' ? (
              <div
                className="desktop-nav__dropdown"
                key={item.label}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  type="button"
                  className={clsx('desktop-nav__link', isServicesOpen && 'is-active')}
                  aria-expanded={isServicesOpen}
                  onClick={() => setIsServicesOpen((current) => !current)}
                >
                  Hizmetlerimiz
                </button>
                <AnimatePresence>
                  {isServicesOpen ? (
                    <MotionDiv
                      className="mega-menu"
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="mega-menu__header">
                        <p>Teknoloji destekli tedavi alanları</p>
                        <span>
                          <Sparkles size={14} />
                          Robotik sistemler, analiz ve birebir bakım
                        </span>
                      </div>
                      <div className="mega-menu__grid">
                        {featuredServices.map((service) => (
                          <Link className="mega-menu__card" key={service.slug} to={`/services/${service.slug}`} onClick={handleCloseMenus}>
                            <strong>{service.shortName}</strong>
                            <p>{service.summary}</p>
                            <span>
                              Tedaviyi incele
                              <ArrowRight size={14} />
                            </span>
                          </Link>
                        ))}
                      </div>
                    </MotionDiv>
                  ) : null}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={handleCloseMenus}
                className={({ isActive }) => clsx('desktop-nav__link', isActive && 'is-active')}
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="site-header__actions">
          <a className="button button--ghost button--with-icon" href={company.phoneHref}>
            <Phone size={16} />
            Ara
          </a>
          <Link className="button button--primary" to="/contact">
            Ücretsiz Konsültasyon
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-label={isMenuOpen ? 'Gezinme menüsünü kapat' : 'Gezinme menüsünü aç'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <MotionNav
            className="mobile-menu"
            aria-label="Mobil gezinme"
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.24 }}
          >
            <div className="mobile-menu__links">
              {primaryLinks.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  onClick={handleCloseMenus}
                  className={({ isActive }) => clsx('mobile-menu__link', isActive && 'is-active')}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            <div className="mobile-menu__services">
              <p>Öne çıkan alanlar</p>
              <div className="mobile-menu__service-list">
                {services.slice(0, 3).map((service) => (
                  <Link key={service.slug} to={`/services/${service.slug}`} onClick={handleCloseMenus}>
                    {service.shortName}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mobile-menu__footer">
              <a href={company.phoneHref}>{company.phone}</a>
              <span>{company.hoursLabel}</span>
            </div>
          </MotionNav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
