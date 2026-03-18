import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Reveal from '../common/Reveal.jsx'
import SectionHeading from '../common/SectionHeading.jsx'

const services = [
  {
    icon: '🦴',
    title: 'Ortopedik Rehabilitasyon',
    description:
      'Ameliyat sonrası iyileşme, eklem problemleri ve kas-iskelet sistemi yaralanmalarında uzman tedavi.',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80&auto=format&fit=crop',
    slug: '/services/orthopedic-rehabilitation',
    treatments: [
      'Diz ve kalça protezi sonrası rehabilitasyon',
      'Spor yaralanmaları tedavisi',
      'Bel ve boyun fıtığı tedavisi',
      'Omuz ağrıları ve donuk omuz yönetimi',
    ],
  },
  {
    icon: '🧠',
    title: 'Nörolojik Fizik Tedavi',
    description:
      'İnme, MS ve Parkinson gibi nörolojik durumlarda fonksiyonel iyileşme programları.',
    image:
      'https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=800&q=80&auto=format&fit=crop',
    slug: '/services/neurological-therapy',
    treatments: [
      'İnme sonrası rehabilitasyon',
      'Parkinson hastalığı yönetimi',
      'Multipl Skleroz tedavisi',
      'Denge ve koordinasyon eğitimi',
    ],
  },
  {
    icon: '🤖',
    title: 'Robotik Rehabilitasyon',
    description:
      'En son teknoloji robotik sistemler ile hassas, ölçülebilir ve etkili tedavi planları.',
    image:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80&auto=format&fit=crop',
    slug: '/services/robotic-rehabilitation',
    badge: 'TEKNOLOJİ',
    treatments: [
      'Lokomat yürüme robotu ile tedavi',
      'Üst ekstremite robotik terapi',
      'Yapay zekâ destekli egzersiz planlaması',
      'Gerçek zamanlı performans analizi',
    ],
  },
  {
    icon: '🏃',
    title: 'Spor Fizyoterapisi',
    description:
      'Sporcular için yaralanma önleme, performans artırma ve sakatlık sonrası dönüş programları.',
    image:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80&auto=format&fit=crop',
    slug: '/services/sports-medicine',
    treatments: [
      'Performans değerlendirmesi',
      'Yaralanma sonrası spora dönüş',
      'Fonksiyonel hareket analizi',
      'Kinesio bantlama uygulamaları',
    ],
  },
  {
    icon: '👴',
    title: 'Geriatrik Fizik Tedavi',
    description:
      'Yaşlılarda düşme önleme, mobilite artırma ve yaşam kalitesi geliştirme programları.',
    image:
      'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=800&q=80&auto=format&fit=crop',
    slug: '/services/geriatric-care',
    treatments: [
      'Düşme riski değerlendirmesi',
      'Denge ve güç egzersizleri',
      'Osteoporoz yönetimi',
      'Bağımsız yaşam desteği',
    ],
  },
  {
    icon: '💆',
    title: 'Manuel Terapi',
    description:
      'El teknikleri ile eklem mobilizasyonu, yumuşak doku tedavisi ve ağrı yönetimi.',
    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80&auto=format&fit=crop',
    slug: '/services/manual-therapy',
    treatments: [
      'Eklem mobilizasyonu',
      'Miyofasyal gevşetme',
      'Kuru iğneleme',
      'Ağrı yönetimi teknikleri',
    ],
  },
]

function Services() {
  return (
    <section className="section">
      <div className="page-container">
        <SectionHeading
          eyebrow="Tedavi Alanları"
          title="Soyut değil, gerçek fizik tedavi hizmetleri"
          description="Her kartta hangi hasta grubuna hitap ettiğimiz, hangi tedavileri uyguladığımız ve hangi probleme çözüm sunduğumuz açıkça görünür."
        />

        <div className="pt-services-grid">
          {services.map((service, index) => (
            <Reveal className="pt-service-card" key={service.title} delay={index * 0.05}>
              <div className="pt-service-card__media">
                <img src={service.image} alt={service.title} loading="lazy" />
                {service.badge ? <span className="pt-service-card__badge">{service.badge}</span> : null}
              </div>
              <div className="pt-service-card__body">
                <div className="pt-service-card__title">
                  <span>{service.icon}</span>
                  <h3>{service.title}</h3>
                </div>
                <p>{service.description}</p>
                <ul>
                  {service.treatments.map((treatment) => (
                    <li key={treatment}>
                      <CheckCircle2 size={16} />
                      {treatment}
                    </li>
                  ))}
                </ul>
                <Link to={service.slug}>
                  Detaylı incele
                  <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
