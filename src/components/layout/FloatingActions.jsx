import { MessageCircleMore, Phone } from 'lucide-react'
import { company } from '../../data/siteData.js'

function FloatingActions() {
  return (
    <>
      <div className="floating-actions" aria-label="Hızlı iletişim aksiyonları">
        <a
          className="floating-actions__button floating-actions__button--chat"
          href={company.whatsAppHref}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp üzerinden yazın"
        >
          <MessageCircleMore size={18} />
          <span>Yazın</span>
        </a>
        <a className="floating-actions__button floating-actions__button--call" href={company.phoneHref} aria-label="Kliniği arayın">
          <Phone size={18} />
          <span>Ara</span>
        </a>
      </div>

      <div className="mobile-sticky-bar" aria-label="Mobil hızlı aksiyonlar">
        <a className="mobile-sticky-bar__action" href={company.phoneHref}>
          <Phone size={18} />
          Hemen ara
        </a>
        <a className="mobile-sticky-bar__action mobile-sticky-bar__action--chat" href={company.whatsAppHref} target="_blank" rel="noreferrer">
          <MessageCircleMore size={18} />
          WhatsApp
        </a>
      </div>
    </>
  )
}

export default FloatingActions
