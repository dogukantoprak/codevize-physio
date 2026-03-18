import Reveal from '../common/Reveal.jsx'
import SectionHeading from '../common/SectionHeading.jsx'

const testimonials = [
  {
    name: 'Ahmet Yılmaz',
    role: 'Diz Protezi Rehabilitasyonu',
    quote:
      'Ameliyat sonrası yürüyemiyordum. 8 haftalık tedavi sonunda artık günlük aktivitelerimi rahatça yapabiliyorum. Robotik terapi gerçekten fark yarattı.',
  },
  {
    name: 'Zeynep Kaya',
    role: 'İnme Sonrası İyileşme',
    quote:
      'Felç geçirdikten sonra sol kolumu kullanamıyordum. 12 haftalık nörolojik fizik tedavi programı sayesinde fonksiyonlarımın büyük bölümünü geri kazandım.',
  },
  {
    name: 'Mehmet Özkan',
    role: 'Spor Yaralanması',
    quote:
      'ACL ameliyatı sonrası profesyonel futbol kariyerime dönebildim. Spor fizyoterapistleri gerçekten işinin ehliydi.',
  },
  {
    name: 'Fatma Demir',
    role: 'Kronik Bel Ağrısı',
    quote:
      'Uzun süredir devam eden ağrım ilk kez bu kadar net değerlendirildi. Manuel terapi ve egzersizler ciddi rahatlama sağladı.',
  },
]

function Testimonials() {
  return (
    <section className="section section--soft">
      <div className="page-container">
        <SectionHeading
          eyebrow="Hasta Yorumları"
          title="Tedavi deneyimini hasta dilinden anlatan kısa ama güçlü yorumlar"
          description="Sayısal başarı hikâyelerine ek olarak duygusal güven ve ikna katmanı."
        />

        <div className="pt-testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <Reveal className="pt-testimonial-card" key={testimonial.name} delay={index * 0.05}>
              <span className="pt-testimonial-card__rating">★★★★★</span>
              <p>{testimonial.quote}</p>
              <div>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
