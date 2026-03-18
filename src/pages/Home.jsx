import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CalendarDays } from 'lucide-react'
import SEO from '../components/common/SEO.jsx'
import Hero from '../components/home/Hero.jsx'
import Services from '../components/home/Services.jsx'
import BeforeAfter from '../components/home/BeforeAfter.jsx'
import TreatmentProcess from '../components/home/TreatmentProcess.jsx'
import Equipment from '../components/home/Equipment.jsx'
import Stats from '../components/home/Stats.jsx'
import Testimonials from '../components/home/Testimonials.jsx'
import { company, contactInfo } from '../data/siteData.js'

function Home() {
  const [statsActive, setStatsActive] = useState(false)

  const medicalBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: `${company.name} ${company.descriptor}`,
    description:
      'Fizik tedavi, robotik rehabilitasyon, spor fizyoterapisi ve nörolojik tedavi hizmetleri sunan üst düzey klinik deneyimi.',
    telephone: '+90-555-123-4567',
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: contactInfo.locations[0].addressLine,
      addressLocality: 'İstanbul',
      addressCountry: 'TR',
    },
    openingHours: 'Mo-Fr 09:00-19:00, Sa 09:00-14:00',
  }

  return (
    <>
      <SEO
        title="Profesyonel Fizik Tedavi ve Robotik Rehabilitasyon"
        description="Codevize Studio; ortopedik, nörolojik ve spor fizyoterapisi ile robotik rehabilitasyon alanlarında üst düzey tedavi deneyimi sunan bir fizik tedavi merkezi konseptidir."
        path="/"
        structuredData={medicalBusinessSchema}
      />

      <Hero />
      <Services />
      <BeforeAfter />
      <Stats active={statsActive} onEnter={() => setStatsActive(true)} />
      <TreatmentProcess />
      <Equipment />
      <Testimonials />

      <section className="section">
        <div className="page-container cta-band">
          <div>
            <span className="eyebrow-pill eyebrow-pill--light">
              <CalendarDays size={16} />
              Ağrıyı ertelemeyin
            </span>
            <h2>Tedaviye ne kadar erken başlanırsa sonuç o kadar güçlü olur.</h2>
            <p>
              Ücretsiz ön görüşme ile durumunuzu anlatın, size uygun tedavi yolunu ve ilk uygun randevu aralığını birlikte planlayalım.
            </p>
          </div>
          <div className="cta-band__actions">
            <Link className="button button--primary button--white" to="/contact">
              Hemen Randevu Al
            </Link>
            <a className="button button--ghost button--inverted" href={company.phoneHref}>
              {company.phone} numarasını ara
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
