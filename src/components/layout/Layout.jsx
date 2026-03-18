import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import FloatingActions from './FloatingActions.jsx'

function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  return (
    <>
      <a className="skip-link" href="#main-content">
        Ana içeriğe geç
      </a>
      <Navbar />
      <main id="main-content" className="main-shell">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}

export default Layout
