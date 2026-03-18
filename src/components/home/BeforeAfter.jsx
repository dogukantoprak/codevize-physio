import Reveal from '../common/Reveal.jsx'
import SectionHeading from '../common/SectionHeading.jsx'

const stories = [
  {
    title: 'Diz Protezi Rehabilitasyonu',
    patient: 'Ahmet Bey, 65 yaşında',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1b?w=600&q=80&auto=format&fit=crop',
    metrics: [
      { label: 'Ağrı Seviyesi', value: '8/10 → 2/10' },
      { label: 'Yürüme Mesafesi', value: '50 m → 2 km' },
      { label: 'Tedavi Süresi', value: '8 hafta' },
    ],
    quote: '"Ameliyat sonrası yürüyemiyordum. Şimdi torunumla parkta yürüyüş yapıyorum."',
  },
  {
    title: 'İnme Sonrası İyileşme',
    patient: 'Ayşe Hanım, 58 yaşında',
    image:
      'https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=600&q=80&auto=format&fit=crop',
    metrics: [
      { label: 'Kol Fonksiyonu', value: '%20 → %85' },
      { label: 'Günlük Aktivite', value: 'Bağımlı → Bağımsız' },
      { label: 'Tedavi Süresi', value: '12 hafta' },
    ],
    quote: '"Robotik terapi sayesinde kolumu tekrar güvenle kullanabiliyorum."',
  },
  {
    title: 'ACL Rekonstrüksiyonu',
    patient: 'Mehmet, 28 yaşında - Futbolcu',
    image:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80&auto=format&fit=crop',
    metrics: [
      { label: 'Spora Dönüş', value: '6 ay' },
      { label: 'Diz Stabilitesi', value: '%100 restore' },
      { label: 'Performans', value: 'Yaralanma öncesi seviye' },
    ],
    quote: '"Profesyonel seviyeye geri dönebildim. Program ciddi, ölçülebilir ve nokta atışıydı."',
  },
]

function BeforeAfter() {
  return (
    <section className="section section--soft">
      <div className="page-container">
        <SectionHeading
          eyebrow="Başarı Hikâyeleri"
          title="Ölçülebilir iyileşme örnekleri"
          description="Hasta hikâyeleri duygusal olduğu kadar sayısal olarak da güven vermeli. Bu alan tam olarak bunu yapıyor."
          align="center"
        />

        <div className="before-after-grid">
          {stories.map((story, index) => (
            <Reveal className="before-after-card" key={story.title} delay={index * 0.05}>
              <img src={story.image} alt={story.title} loading="lazy" />
              <div className="before-after-card__body">
                <h3>{story.title}</h3>
                <p>{story.patient}</p>
                <div className="before-after-card__metrics">
                  {story.metrics.map((metric) => (
                    <div key={metric.label}>
                      <span>{metric.label}</span>
                      <strong>{metric.value}</strong>
                    </div>
                  ))}
                </div>
                <blockquote>{story.quote}</blockquote>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BeforeAfter
