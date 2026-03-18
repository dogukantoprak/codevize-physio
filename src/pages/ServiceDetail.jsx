import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle2, Clock3, ShieldCheck } from 'lucide-react'
import SEO from '../components/common/SEO.jsx'
import Reveal from '../components/common/Reveal.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import Accordion from '../components/common/Accordion.jsx'
import ContactForm from '../components/common/ContactForm.jsx'
import { services } from '../data/siteData.js'

function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const relatedServices = services.filter((item) => item.slug !== service.slug).slice(0, 3)

  return (
    <>
      <SEO
        title={service.name}
        description={`${service.name} için Codevize Studio'da sunulan ileri teknoloji destekli fizik tedavi ve rehabilitasyon yaklaşımını keşfedin.`}
        path={`/services/${service.slug}`}
      />

      <section className="page-hero page-hero--narrow">
        <div className="page-container">
          <Reveal className="page-hero__copy">
            <Link className="breadcrumb-link" to="/services">
              <ArrowLeft size={16} />
              Hizmetlere geri dön
            </Link>
            <span className="eyebrow-pill">{service.tagline}</span>
            <h1>{service.name}</h1>
            <p>{service.description}</p>
            <div className="page-hero__actions">
              <Link className="button button--primary" to="/contact">
                Konsültasyon Al
              </Link>
              <a className="button button--secondary" href="#service-intake">
                Hızlı Başvuru
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="page-container service-detail-layout">
          <div className="service-detail-layout__main">
            <Reveal>
              <SectionHeading
                eyebrow="Genel Bakış"
                title={`${service.shortName} için tedavi yaklaşımımız`}
                description={service.tagline}
              />
              <div className="copy-stack">
                {service.detailIntro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <div className="detail-dual-grid">
                <article className="detail-card">
                  <h3>Tedavi ettiğimiz durumlar</h3>
                  <ul className="icon-list">
                    {service.conditions.map((item) => (
                      <li key={item}>
                        <CheckCircle2 size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
                <article className="detail-card">
                  <h3>Uyguladığımız teknikler</h3>
                  <ul className="icon-list">
                    {service.techniques.map((item) => (
                      <li key={item}>
                        <CheckCircle2 size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </Reveal>

            <Reveal>
              <div className="detail-dual-grid">
                <article className="detail-card">
                  <h3>Neden bu tedavi yolunu seçiyorlar?</h3>
                  <ul className="icon-list">
                    {service.benefits.map((item) => (
                      <li key={item}>
                        <ShieldCheck size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
                <article className="detail-card">
                  <h3>Kullandığımız teknolojiler</h3>
                  <ul className="icon-list">
                    {service.technology.map((item) => (
                      <li key={item}>
                        <Clock3 size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </Reveal>

            <Reveal>
              <div className="metric-banner">
                <strong>{service.featuredMetric.value}</strong>
                <span>{service.featuredMetric.label}</span>
              </div>
            </Reveal>

            <Reveal>
              <SectionHeading
                eyebrow="Süreç"
                title="Şeffaf ve öngörülebilir tedavi planı"
                description="Her aşamada neyle karşılaşacağınızı bilmeniz, tedaviye güvenle devam etmenizi sağlar."
              />
              <div className="roadmap-list">
                {service.roadmap.map((item) => (
                  <div className="roadmap-list__item" key={item}>
                    <span />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <div className="testimonial-highlight">
                <p>{service.testimonial.quote}</p>
                <strong>{service.testimonial.name}</strong>
                <span>{service.testimonial.role}</span>
              </div>
            </Reveal>

            <Reveal>
              <SectionHeading
                eyebrow="Sık Sorulan Sorular"
                title="Hastalarımızın en sık sorduğu sorular"
                description="Karar sürecinizi kolaylaştırmak için en çok merak edilen başlıkları net şekilde yanıtlıyoruz."
              />
              <Accordion items={service.faqs} />
            </Reveal>

            <Reveal>
              <SectionHeading
                eyebrow="İlgili Hizmetler"
                title="Size uygun diğer tedavi alanlarını inceleyin"
                description="Benzer ihtiyaçlara yönelik diğer rehabilitasyon çözümlerimizi de değerlendirebilirsiniz."
              />
              <div className="related-grid">
                {relatedServices.map((item) => (
                  <Link className="related-card" key={item.slug} to={`/services/${item.slug}`}>
                    <strong>{item.name}</strong>
                    <p>{item.summary}</p>
                    <span>
                      Hizmeti incele
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>

          <aside className="service-detail-layout__aside" id="service-intake">
            <div className="sticky-panel">
              <ContactForm
                compact
                defaultService={service.name}
                title="Hızlı İletişim"
                description="Hedeflerinizi paylaşın; sizi uygun fizyoterapist ve randevu aralığıyla eşleştirelim."
              />
              <div className="sticky-panel__details">
                <h3>Klinik Saatleri</h3>
                <p>Pzt-Cum: 06:00-20:00</p>
                <p>Cts: 08:00-14:00</p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

export default ServiceDetail
