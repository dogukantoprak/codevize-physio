import Reveal from '../common/Reveal.jsx'
import SectionHeading from '../common/SectionHeading.jsx'

const equipment = [
  {
    name: 'Lokomat Yürüme Robotu',
    description:
      'Nörolojik hastalarda yürüme rehabilitasyonu için dünya standartlarına yakın, veri destekli bir eğitim sistemi.',
    image:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80&auto=format&fit=crop',
    features: ['Hassas sensörler', 'Gerçek zamanlı geri bildirim', 'Objektif ölçüm ve takip'],
  },
  {
    name: 'Elektroterapi Cihazları',
    description:
      'TENS, ultrason ve elektrostimülasyon ile ağrı kontrolünü ve doku iyileşmesini destekleyen sistemler.',
    image:
      'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=600&q=80&auto=format&fit=crop',
    features: ['Ağrı azaltma', 'Kas aktivasyonu', 'İyileşme sürecini destekleme'],
  },
  {
    name: 'Fonksiyonel Egzersiz Ekipmanları',
    description:
      'TRX, kettlebell, denge tahtaları ve performans ekipmanları ile günlük hayata taşınan güç çalışmaları.',
    image:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80&auto=format&fit=crop',
    features: ['Fonksiyonel güç', 'Merkez bölge stabilizasyonu', 'Propriyosepsiyon gelişimi'],
  },
]

function Equipment() {
  return (
    <section className="section pt-equipment">
      <div className="page-container">
        <SectionHeading
          eyebrow="Son Teknoloji Ekipmanlar"
          title="Tedaviyi hissettiren, gösteren ve ölçen cihazlar"
          description="Fizik tedavi merkezi hissi yalnızca metinle kurulmaz. Ekipman dili ve görsel dili de bunu net göstermeli."
          align="center"
        />

        <div className="equipment-grid">
          {equipment.map((item, index) => (
            <Reveal className="equipment-card" key={item.name} delay={index * 0.05}>
              <div className="equipment-card__image">
                <img src={item.image} alt={item.name} loading="lazy" />
                <span>Yeni nesil</span>
              </div>
              <div className="equipment-card__body">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="equipment-card__features">
                  {item.features.map((feature) => (
                    <div key={feature}>
                      <i />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Equipment
