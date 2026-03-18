import { Link } from 'react-router-dom'
import { ArrowRight, Award, Bot, CalendarDays, MapPin, Star, Users } from 'lucide-react'
import Reveal from '../common/Reveal.jsx'

const heroImage =
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1b?w=1920&q=80&auto=format&fit=crop'

const trustBadges = [
  { icon: Award, label: 'Lisanslı Fizyoterapistler' },
  { icon: Bot, label: 'Robotik Rehabilitasyon' },
  { icon: Users, label: '2.500+ Hasta Tedavi Edildi' },
  { icon: Star, label: '%98 Başarı Oranı' },
]

function Hero() {
  return (
    <section
      className="pt-hero"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(29, 78, 216, 0.86), rgba(22, 163, 74, 0.8)), url('${heroImage}')`,
      }}
    >
      <div className="pt-hero__mesh" aria-hidden="true" />
      <div className="page-container pt-hero__shell">
        <Reveal className="pt-hero__content">
          <span className="eyebrow-pill eyebrow-pill--light">
            <MapPin size={16} />
            İstanbul'da üst düzey fizik tedavi deneyimi
          </span>
          <h1>Profesyonel Fizik Tedavi & Rehabilitasyon</h1>
          <p>
            Robotik terapi, manuel tedavi ve kişiye özel egzersiz programları ile ameliyat sonrası, spor sakatlığı ve kronik ağrı süreçlerinizde iyileşmenize rehberlik ediyoruz.
          </p>

          <div className="pt-hero__actions">
            <Link className="button button--primary" to="/contact">
              Ücretsiz Ön Görüşme Al
            </Link>
            <Link className="button button--secondary button--hero" to="/services">
              Tedavi Alanlarını İncele
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="pt-hero__trust">
            {trustBadges.map((badge) => {
              const IconComponent = badge.icon

              return (
                <span key={badge.label}>
                  <IconComponent size={16} />
                  {badge.label}
                </span>
              )
            })}
          </div>
        </Reveal>

        <Reveal className="pt-hero__aside" delay={0.12}>
          <div className="pt-hero__panel">
            <div className="pt-hero__panel-header">
              <span>
                <CalendarDays size={16} />
                Bugün başlayın
              </span>
              <strong>Aynı gün değerlendirme imkânı</strong>
            </div>

            <div className="pt-hero__highlights">
              <article>
                <small>ORTOPEDİK</small>
                <strong>Ameliyat sonrası ve kronik ağrı</strong>
              </article>
              <article>
                <small>NÖROLOJİK</small>
                <strong>İnme, Parkinson ve denge eğitimi</strong>
              </article>
              <article>
                <small>ROBOTİK</small>
                <strong>Lokomat ve ileri teknoloji destekli tedavi</strong>
              </article>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Hero
