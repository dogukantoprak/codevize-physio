import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'

const HomePage = lazy(() => import('./pages/Home.jsx'))
const ServicesPage = lazy(() => import('./pages/Services.jsx'))
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetail.jsx'))
const AboutPage = lazy(() => import('./pages/About.jsx'))
const ContactPage = lazy(() => import('./pages/Contact.jsx'))
const NotFoundPage = lazy(() => import('./pages/NotFound.jsx'))

function LoadingScreen() {
  return (
    <div className="loading-screen" role="status" aria-live="polite">
      <div className="loading-screen__pulse" aria-hidden="true" />
      <p>Daha iyi bir iyileşme deneyimi hazırlanıyor...</p>
    </div>
  )
}

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
