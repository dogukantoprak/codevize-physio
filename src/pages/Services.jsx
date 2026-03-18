import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import SEO from '../components/common/SEO.jsx'
import Reveal from '../components/common/Reveal.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import { journeySteps, services } from '../data/siteData.js'

function Services() {
  return (
    <>
      <SEO
        title="Hizmetlerimiz"
        description="Ortopedik rehabilitasyon, nörolojik fizik tedavi, spor fizyoterapisi, robotik rehabilitasyon, geriatrik fizik tedavi ve manuel terapi alanlarını keşfedin."
        path="/services"
      />

      <section className="page-hero">
        <div className="page-container page-hero__grid">
          <Reveal className="page-hero__copy">
            <span className="eyebrow-pill">Tedavi programlarımız</span>
            <h1>Karar vermeyi kolaylaştıran detaylı hizmet sayfaları.</h1>
            <p>
              Bu sayfa her tedavi alanının kimler için uygun olduğunu, neleri kapsadığını ve kliniğin nasıl ayrıştığını açık biçimde gösterir.
            </p>
            <div className="page-hero__actions">
              <Link className="button button--primary" to="/contact">
                Konsültasyon Al
              </Link>
              <a className="button button--secondary" href="#service-overview">
                Hizmetleri incele
              </a>
            </div>
          </Reveal>

          <Reveal className="page-hero__panel" delay={0.12}>
            <div className="overview-card">
              <strong>6 temel uzmanlık alanı</strong>
              <p>Ortopedik, nörolojik, spor, robotik, geriatrik ve manuel terapi alanlarında yapılandırılmış bakım.</p>
              <ul>
                <li>Net tedavi konumlandırması</li>
                <li>Kanıta dayalı ilerleme planı</li>
                <li>Hızlı yönlendirme ve karar kolaylığı</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="service-overview">
        <div className="page-container">
          <SectionHeading
            eyebrow="Tedavi Alanları"
            title="Neyi tedavi ediyoruz ve bunu nasıl anlatıyoruz?"
            description="Her kart, kullanıcıyı servis detay sayfasına ilerletecek kadar net ve güven verici olacak şekilde tasarlandı."
          />

          <div className="services-listing">
            {services.map((service, index) => (
              <Reveal className="service-listing-card" key={service.slug} delay={index * 0.05}>
                <div>
                  <span className="service-listing-card__tag">{service.tagline}</span>
                  <h2>{service.name}</h2>
                  <p>{service.description}</p>
                </div>
                <div className="service-listing-card__columns">
                  <div>
                    <h3>Uygun olduğu durumlar</h3>
                    <ul>
                      {service.conditions.slice(0, 4).map((condition) => (
                        <li key={condition}>
                          <CheckCircle2 size={16} />
                          {condition}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3>Uygulanan yöntemler</h3>
                    <ul>
                      {service.techniques.slice(0, 4).map((item) => (
                        <li key={item}>
                          <CheckCircle2 size={16} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Link className="text-link" to={`/services/${service.slug}`}>
                  Detay sayfasını aç
                  <ArrowRight size={16} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="page-container">
          <SectionHeading
            eyebrow="Tedavi Süreci"
            title="Hizmet sayfasında da net görünen iyileşme akışı"
            description="Süreç şeffaf olduğunda kullanıcı için randevu almak daha düşük riskli görünür."
            align="center"
          />
          <div className="journey-grid">
            {journeySteps.map((step, index) => (
              <Reveal className="journey-step" key={step.step} delay={index * 0.05}>
                <span className="journey-step__number">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
