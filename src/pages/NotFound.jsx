import { Link } from 'react-router-dom'
import SEO from '../components/common/SEO.jsx'

function NotFound() {
  return (
    <>
      <SEO title="Sayfa Bulunamadı" description="İstediğiniz sayfa Codevize Studio tanıtım web sitesinde bulunamadı." path="/404" />
      <section className="not-found">
        <div className="page-container">
          <span className="eyebrow-pill">404</span>
          <h1>Aradığınız sayfa bu iyileşme yolculuğunda yer almıyor.</h1>
          <p>Aşağıdaki bağlantıları kullanarak ana deneyime geri dönebilirsiniz.</p>
          <div className="page-hero__actions">
            <Link className="button button--primary" to="/">
              Ana sayfaya dön
            </Link>
            <Link className="button button--secondary" to="/contact">
              Klinik ile iletişime geç
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default NotFound
