import Reveal from '../common/Reveal.jsx'
import SectionHeading from '../common/SectionHeading.jsx'

const steps = [
  {
    number: 1,
    title: 'İlk Değerlendirme',
    description: '60 dakikalık kapsamlı fiziksel değerlendirme ve detaylı anamnez',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80&auto=format&fit=crop',
    details: [
      'Tıbbi geçmiş inceleme',
      'Fiziksel muayene',
      'Fonksiyonel testler',
      'Ağrı değerlendirmesi',
      'Hareket analizi',
    ],
  },
  {
    number: 2,
    title: 'Kişisel Tedavi Planı',
    description: 'Hedeflerinize ve durumunuza özel kanıta dayalı plan',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1b?w=400&q=80&auto=format&fit=crop',
    details: [
      'Kısa ve uzun vadeli hedefler',
      'Bireysel egzersiz programı',
      'Manuel terapi teknikleri',
      'Ev egzersizleri planı',
      'Beklenen iyileşme süresi',
    ],
  },
  {
    number: 3,
    title: 'Aktif Tedavi Süreci',
    description: 'Birebir fizyoterapist eşliğinde düzenli tedavi seansları',
    image:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80&auto=format&fit=crop',
    details: [
      'Manuel terapi uygulamaları',
      'Terapötik egzersizler',
      'Robotik terapi gerektiğinde',
      'Ağrı kontrolü ve yönetimi',
      'Haftalık ilerleme takibi',
    ],
  },
  {
    number: 4,
    title: 'Uzun Vadeli Başarı',
    description: 'Kalıcı sonuçlar ve tekrarlayan yaralanmaların önlenmesi',
    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80&auto=format&fit=crop',
    details: [
      'Ev egzersiz programı',
      'Yaşam tarzı önerileri',
      'Yaralanma önleme stratejileri',
      'Düzenli kontrol seansları',
      '7/24 danışmanlık desteği',
    ],
  },
]

function TreatmentProcess() {
  return (
    <section className="section">
      <div className="page-container">
        <SectionHeading
          eyebrow="İyileşme Yolculuğunuz"
          title="Bilimsel, kademeli ve görünür bir tedavi süreci"
          description="Hasta daha ilk dakikada nasıl ilerleyeceğini anlamalı. Bu zaman çizelgesi belirsizliği azaltır."
          align="center"
        />

        <div className="treatment-process">
          <div className="treatment-process__line" aria-hidden="true" />
          <div className="treatment-process__grid">
            {steps.map((step, index) => (
              <Reveal className="treatment-step" key={step.number} delay={index * 0.05}>
                <div className="treatment-step__number">{step.number}</div>
                <div className="treatment-step__image">
                  <img src={step.image} alt={step.title} loading="lazy" />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <ul>
                  {step.details.map((detail) => (
                    <li key={detail}>
                      <span>✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TreatmentProcess
