import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { company, contactInfo, quickLinks, services } from '../../data/siteData.js'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div className="site-footer__brand">
          <p className="site-footer__eyebrow">Codevize Studio Hakkında</p>
          <h2>İstanbul’da modern fizik tedavi ve rehabilitasyon deneyimi.</h2>
          <p>
            Robotik terapi, manuel tedavi ve kişiye özel programlarla iyileşme sürecinize eşlik eden modern bir klinik deneyimi tasarladık.
          </p>
          <div className="site-footer__newsletter">
            <span>Bilgi ve randevu alın</span>
            <Link className="button button--secondary" to="/contact">
              İletişime geç
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div>
          <p className="site-footer__eyebrow">Hizmetlerimiz</p>
          <ul className="site-footer__list">
            {services.map((service) => (
              <li key={service.slug}>
                <Link to={`/services/${service.slug}`}>{service.shortName}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="site-footer__eyebrow">Hızlı Bağlantılar</p>
          <ul className="site-footer__list">
            {quickLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="site-footer__eyebrow">İletişim</p>
          <ul className="site-footer__contact">
            <li>
              <MapPin size={16} />
              <span>{contactInfo.locations[0].addressLine}</span>
            </li>
            <li>
              <Phone size={16} />
              <a href={company.phoneHref}>{company.phone}</a>
            </li>
            <li>
              <Mail size={16} />
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
          </ul>
          <div className="site-footer__emergency">
            <span>Acil destek mi gerekiyor?</span>
            <a href={company.phoneHref}>Kliniği doğrudan arayın</a>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>© 2026 {company.name}. Tüm hakları saklıdır.</p>
        <p>
          Portföy projesi amaçlıdır. {company.name} kurgusal bir markadır. Görseller, yorumlar, sertifikalar ve iletişim bilgileri tanıtım amaçlıdır.
        </p>
      </div>
    </footer>
  )
}

export default Footer
