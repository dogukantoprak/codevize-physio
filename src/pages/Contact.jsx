import { CalendarClock, Mail, MapPin, MessageCircleMore, Phone } from 'lucide-react'
import SEO from '../components/common/SEO.jsx'
import Reveal from '../components/common/Reveal.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import Accordion from '../components/common/Accordion.jsx'
import ContactForm from '../components/common/ContactForm.jsx'
import { company, contactFaqs, contactInfo } from '../data/siteData.js'

function Contact() {
  return (
    <>
      <SEO
        title="İletişim ve Randevu"
        description="Randevu alın, klinik lokasyonlarını inceleyin ve başvuru sürecine dair sık sorulan sorulara ulaşın."
        path="/contact"
      />

      <section className="page-hero">
        <div className="page-container page-hero__grid">
          <Reveal className="page-hero__copy">
            <span className="eyebrow-pill">Bize ulaşın</span>
            <h1>Hızlı, açık ve güven veren iletişim akışı.</h1>
            <p>
              İletişim deneyimi; masaüstü ve mobilde kolay başvuru, net bilgi ve hastayı yormayan bir form akışı üzerine kuruldu.
            </p>
          </Reveal>

          <Reveal className="page-hero__panel" delay={0.12}>
            <div className="overview-card">
              <strong>{contactInfo.responseTime}</strong>
              <p>Ameliyat sonrası sorular, kronik ağrı başvuruları ve robotik tedavi uygunluğu için idealdir.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="page-container contact-layout">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal className="contact-sidebar" delay={0.08}>
            <div className="contact-sidebar__card">
              <h3>İletişim bilgileri</h3>
              <ul className="contact-sidebar__list">
                <li>
                  <Phone size={18} />
                  <a href={company.phoneHref}>{company.phone}</a>
                </li>
                <li>
                  <Mail size={18} />
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </li>
                <li>
                  <CalendarClock size={18} />
                  <span>{company.hoursLabel}</span>
                </li>
              </ul>
            </div>

            <div className="contact-sidebar__card">
              <h3>Lokasyonlar</h3>
              {contactInfo.locations.map((location) => (
                <a className="location-card" href={location.mapsUrl} key={location.name} target="_blank" rel="noreferrer">
                  <div>
                    <strong>{location.name}</strong>
                    <p>{location.addressLine}</p>
                    <small>{location.details}</small>
                  </div>
                  <MapPin size={18} />
                </a>
              ))}
            </div>

            <div className="contact-sidebar__card">
              <h3>Alternatif iletişim yolları</h3>
              <div className="contact-actions">
                <a className="button button--secondary" href={company.whatsAppHref} target="_blank" rel="noreferrer">
                  <MessageCircleMore size={18} />
                  WhatsApp
                </a>
                <a className="button button--ghost" href={company.phoneHref}>
                  <Phone size={18} />
                  Geri arama talebi
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="page-container">
          <SectionHeading
            eyebrow="Lokasyonlar"
            title="Görsel karmaşa yaratmadan konum bilgisi sunan yapı"
            description="Bu bölüm, klasik harita gömülerinin bıraktığı soğuk alan hissini ortadan kaldırır."
          />
          <div className="map-panel">
            <div className="map-panel__surface" aria-hidden="true">
              <span className="map-panel__marker map-panel__marker--one" />
              <span className="map-panel__marker map-panel__marker--two" />
            </div>
            <div className="map-panel__content">
              {contactInfo.locations.map((location) => (
                <div key={location.name}>
                  <strong>{location.name}</strong>
                  <p>{location.addressLine}</p>
                  <small>{location.details}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page-container">
          <SectionHeading
            eyebrow="Sık Sorulan Sorular"
            title="Randevuyu geciktiren sorulara kısa ve net yanıtlar"
            description="Bu bölüm, karar verme sürecindeki belirsizliği azaltır ve iletişim yükünü düşürür."
          />
          <Accordion items={contactFaqs} />
        </div>
      </section>
    </>
  )
}

export default Contact
