const baseWhatsAppMessage = encodeURIComponent(
  "Merhaba, fizik tedavi ve rehabilitasyon hizmetleriniz hakkında bilgi almak istiyorum.",
)

export const company = {
  name: 'Codevize Studio',
  descriptor: 'Fizik Tedavi & Rehabilitasyon Merkezi',
  tagline: 'İleri teknoloji. Kişisel ilgi. Güçlü sonuçlar.',
  phone: '+90 (555) 123 45 67',
  phoneHref: 'tel:+905551234567',
  email: 'info@codevizestudio.com',
  whatsAppHref: `https://wa.me/905551234567?text=${baseWhatsAppMessage}`,
  hoursLabel: 'Pzt-Cum 09:00-19:00 | Cts 09:00-14:00',
}

export const contactInfo = {
  locations: [
    {
      name: 'Nişantaşı ana merkez',
      addressLine: 'Nişantaşı, İstanbul',
      mapsUrl: 'https://maps.google.com/?q=Nişantaşı+İstanbul',
      details: 'Birebir tedavi odaları, hareket analizi alanı ve modern egzersiz stüdyosu.',
    },
    {
      name: 'Levent teknoloji kliniği',
      addressLine: 'Levent, İstanbul',
      mapsUrl: 'https://maps.google.com/?q=Levent+İstanbul',
      details: 'Robotik rehabilitasyon sistemleri, nörolojik tedavi alanı ve performans laboratuvarı.',
    },
  ],
  responseTime: '10 dakika ortalama geri dönüş',
  insurancePromise: 'Birçok özel sağlık sigortası için yönlendirme ve ödeme desteği sunuyoruz.',
}

export const quickLinks = [
  { label: 'Ana Sayfa', to: '/' },
  { label: 'Hakkımızda', to: '/about' },
  { label: 'Hizmetlerimiz', to: '/services' },
  { label: 'İletişim', to: '/contact' },
]

export const trustSignals = [
  '4,9/5 hasta memnuniyeti',
  'Lisanslı fizyoterapistler',
  'Robotik rehabilitasyon altyapısı',
  'Kişiye özel tedavi planları',
  'Sigorta ve ödeme desteği',
]

export const heroMetrics = [
  { value: '2.500+', label: 'Tedavi edilen hasta' },
  { value: '15+', label: 'Yıllık klinik deneyim' },
  { value: '%98', label: 'Başarı oranı' },
]

export const services = [
  {
    slug: 'orthopedic-rehabilitation',
    shortName: 'Ortopedik',
    name: 'Ortopedik Rehabilitasyon',
    iconKey: 'bone',
    summary: 'Ameliyat sonrası, eklem ve kas-iskelet sistemi sorunlarında yapılandırılmış toparlanma.',
    tagline: 'Ameliyat sonrası iyileşme, ağrı yönetimi ve fonksiyonel geri dönüş için.',
    description:
      'Ortopedik rehabilitasyon; ameliyat sonrası toparlanma, bel-boyun sorunları, omuz ağrıları ve spor yaralanmalarında ağrıyı azaltmayı ve hareket kalitesini artırmayı hedefler.',
    detailIntro: [
      'Ortopedik tedavi sürecimiz yalnızca ağrıyı azaltmaya odaklanmaz. Aynı zamanda eklem hareket açıklığını, kas gücünü ve günlük yaşam kapasitesini güvenli şekilde yeniden inşa eder.',
      'Her hastada değerlendirme; ağrı, hareket açıklığı, kuvvet dengesi ve fonksiyonel gereksinimlere göre yapılır. Böylece program genel değil, gerçekten kişisel olur.',
    ],
    conditions: [
      'Diz ve kalça protezi sonrası rehabilitasyon',
      'Bel ve boyun fıtığı tedavisi',
      'Omuz sıkışması ve donuk omuz',
      'Bağ yaralanmaları ve menisküs sorunları',
      'Kronik eklem ağrıları ve artrit yönetimi',
    ],
    techniques: [
      'Manuel terapi ve eklem mobilizasyonu',
      'Kademeli kuvvetlendirme egzersizleri',
      'Duruş ve yürüyüş analizi',
      'Ağrı yönetimi ve eğitim',
      'Günlük yaşama ve işe dönüş planlaması',
    ],
    benefits: [
      'Günlük hareketlerde daha az ağrı',
      'Ameliyat sonrası daha güvenli toparlanma',
      'Daha güçlü eklem desteği',
      'İşe, yürüyüşe ve egzersize daha rahat dönüş',
    ],
    technology: ['Hareket analizi', 'Kuvvet ve denge değerlendirmesi', 'İlerleme takip raporları'],
    roadmap: ['60 dakikalık değerlendirme', '6-12 haftalık kişisel plan', 'Haftalık ilerleme güncellemesi'],
    featuredMetric: { value: '%63', label: '6. haftada ortalama ağrı azalması' },
    testimonial: {
      quote:
        'Diz ameliyatı sonrası yürümekte zorlanıyordum. Planlı ve açıklayıcı tedavi yaklaşımı sayesinde kısa sürede güvenimi yeniden kazandım.',
      name: 'Selin A.',
      role: 'Ameliyat sonrası diz rehabilitasyonu',
    },
    faqs: [
      {
        question: 'Ameliyat sonrası fizik tedaviye ne zaman başlamalıyım?',
        answer:
          'Cerrahınızın onayı doğrultusunda çoğu durumda ilk günler veya ilk iki hafta içinde başlanması önerilir. Erken ve kontrollü hareket uzun vadeli sonucu iyileştirir.',
      },
      {
        question: 'Ameliyat olmadıysam yine de ortopedik tedavi alabilir miyim?',
        answer:
          'Evet. Bel, boyun, omuz, diz ve kronik ağrı şikâyetlerinde ameliyat olmadan da fizik tedavi çok etkili olabilir.',
      },
      {
        question: 'Ev egzersiz programı veriyor musunuz?',
        answer:
          'Evet. Her hastaya hedefe uygun, anlaşılır ve sürdürülebilir bir ev egzersiz programı verilir.',
      },
    ],
  },
  {
    slug: 'neurological-therapy',
    shortName: 'Nörolojik',
    name: 'Nörolojik Fizik Tedavi',
    iconKey: 'brain',
    summary: 'İnme, Parkinson ve denge bozukluklarında fonksiyonel kazanımı artıran özel programlar.',
    tagline: 'İnme, Parkinson, MS ve denge sorunlarında ölçülebilir ilerleme için.',
    description:
      'Nörolojik fizik tedavi; yürüme, denge, koordinasyon ve günlük yaşam bağımsızlığını geliştirmek için yapılandırılmış tekrar ve görev odaklı çalışmalardan oluşur.',
    detailIntro: [
      'Nörolojik rehabilitasyon sabır, doğru tekrar ve uzman yönlendirme gerektirir. Tedavide amaç yalnızca hareket ettirmek değil, fonksiyonel kullanım kalitesini artırmaktır.',
      'Yürüme, denge, oturup kalkma, kol fonksiyonu ve günlük yaşam aktiviteleri düzenli olarak takip edilir. Böylece aile ve hasta ilerlemeyi net biçimde görebilir.',
    ],
    conditions: [
      'İnme sonrası rehabilitasyon',
      'Parkinson hastalığı yönetimi',
      'Multipl Skleroz (MS) desteği',
      'Denge ve koordinasyon bozuklukları',
      'Omurilik yaralanması sonrası destek',
    ],
    techniques: [
      'Yürüme ve denge eğitimi',
      'Görev odaklı tekrar çalışmaları',
      'Üst ekstremite fonksiyon eğitimi',
      'Düşme önleme stratejileri',
      'Aile ve bakım veren eğitimi',
    ],
    benefits: [
      'Daha güvenli yürüyüş',
      'Daha iyi denge ve koordinasyon',
      'Günlük yaşamda daha fazla bağımsızlık',
      'Daha net ve takip edilebilir ilerleme',
    ],
    technology: ['Robotik yürüme desteği', 'Denge değerlendirme sistemleri', 'Seans bazlı ilerleme takibi'],
    roadmap: ['Fonksiyonel başlangıç değerlendirmesi', 'Haftalık yoğunluk planı', 'Ev yaşamına transfer çalışmaları'],
    featuredMetric: { value: '%41', label: 'Ortalama mobilite puanı artışı' },
    testimonial: {
      quote:
        'İnme sonrası yürümek ve denge kurmak benim için çok zordu. Düzenli çalışma ve açıklayıcı yaklaşım sayesinde her hafta biraz daha iyi hissettim.',
      name: 'Hakan T.',
      role: 'İnme sonrası hareket eğitimi',
    },
    faqs: [
      {
        question: 'Robotik destek her nörolojik hastada gerekli mi?',
        answer:
          'Hayır. Robotik sistemler uygun hastalarda tekrar kalitesini ve güvenliği artırmak için kullanılır. Her plan klinik değerlendirmeye göre hazırlanır.',
      },
      {
        question: 'Aile üyeleri seanslara katılabilir mi?',
        answer:
          'Evet. Özellikle evde destek gerektiren durumlarda aile bireylerinin süreci görmesi ve öğrenmesi çok faydalıdır.',
      },
      {
        question: 'İlerleme nasıl ölçülür?',
        answer:
          'Yürüme kalitesi, denge testleri, günlük yaşam aktiviteleri ve fonksiyonel hedefler düzenli aralıklarla ölçülür.',
      },
    ],
  },
  {
    slug: 'sports-medicine',
    shortName: 'Spor',
    name: 'Spor Fizyoterapisi',
    iconKey: 'activity',
    summary: 'Spor yaralanmalarında güvenli dönüş ve performans kazanımı için yapılandırılmış takip.',
    tagline: 'Spor sakatlığı sonrası sahaya ve antrenmana güçlü dönüş için.',
    description:
      'Spor fizyoterapisi; yaralanma sonrası spora dönüş, hareket kalitesinin geliştirilmesi ve yeniden sakatlanma riskinin azaltılması için özel olarak planlanır.',
    detailIntro: [
      'Sporcu rehabilitasyonunda yalnızca ağrının azalması yeterli değildir. Hedef; kuvvet, denge, hız ve özgüvenin yeniden kazanılmasıdır.',
      'Bu nedenle değerlendirme sadece şikâyete değil, sporun türüne, performans hedeflerine ve yüklenme kapasitesine göre yapılır.',
    ],
    conditions: [
      'Kas yaralanmaları',
      'Bağ ve menisküs sorunları',
      'Koşucu yaralanmaları',
      'Omuz ve sıçrama sporları yaralanmaları',
      'Spora dönüş öncesi performans değerlendirmesi',
    ],
    techniques: [
      'Fonksiyonel hareket analizi',
      'Kuvvet ve denge çalışmaları',
      'Spor odaklı egzersiz planlaması',
      'Yüklenme yönetimi',
      'Spora dönüş testleri',
    ],
    benefits: [
      'Sahaya daha güvenli dönüş',
      'Yeniden sakatlanma riskinde azalma',
      'Daha iyi hareket kontrolü',
      'Performans odaklı toparlanma',
    ],
    technology: ['Performans ölçüm araçları', 'Hızlı hareket analizi', 'Hazırlık değerlendirme raporları'],
    roadmap: ['Başlangıç performans analizi', 'Kademeli güçlenme', 'Spora dönüş onayı'],
    featuredMetric: { value: '%89', label: 'Planlanan sürede spora dönüş oranı' },
    testimonial: {
      quote:
        'ACL ameliyatı sonrası yalnızca iyileşmek değil, yeniden güvenle oynamak istiyordum. Program tam olarak bunu sağladı.',
      name: 'Mert K.',
      role: 'Spor sakatlığı sonrası dönüş',
    },
    faqs: [
      {
        question: 'Sadece profesyonel sporcularla mı çalışıyorsunuz?',
        answer:
          'Hayır. Amatör sporcular, koşucular, fitness yapanlar ve aktif yaşam süren herkes için uygun programlar oluşturuyoruz.',
      },
      {
        question: 'Spora dönüş hazır olup olmadığım nasıl anlaşılır?',
        answer:
          'Ağrı durumu, kuvvet dengesi, hareket kalitesi ve spora özgü test sonuçları birlikte değerlendirilir.',
      },
      {
        question: 'Tedavi sırasında antrenmana devam edebilir miyim?',
        answer:
          'Birçok durumda evet. Ancak yüklenme miktarı ve içerik kontrollü şekilde düzenlenir.',
      },
    ],
  },
  {
    slug: 'robotic-rehabilitation',
    shortName: 'Robotik',
    name: 'Robotik Rehabilitasyon',
    iconKey: 'bot',
    summary: 'Ölçülebilir ilerleme, gerçek zamanlı geri bildirim ve hassas hareket eğitimi.',
    tagline: 'İleri teknoloji ile desteklenen, veriye dayalı fizik tedavi yaklaşımı.',
    description:
      'Robotik rehabilitasyon; yürüyüş, denge ve motor kontrol çalışmalarında daha fazla tekrar kalitesi ve daha net ölçüm sunar.',
    detailIntro: [
      'Bu alan Codevize Studio’nun en güçlü farklılaştırıcılarından biridir. Robotik sistemler, uygun hastalarda tedavi sürecini hem daha güvenli hem de daha ölçülebilir hale getirir.',
      'Burada teknoloji fizyoterapistin yerini almaz. Tam tersine, fizyoterapistin kararlarını destekleyerek daha hassas ve takip edilebilir seanslar sağlar.',
    ],
    conditions: [
      'İnme sonrası yürüme eğitimi',
      'Nörolojik denge ve koordinasyon sorunları',
      'Alt ekstremite motor kontrol eksiklikleri',
      'Yürüme paterninde bozulma',
      'Veri destekli takip gerektiren karmaşık vakalar',
    ],
    techniques: [
      'Lokomat yürüme robotu ile çalışma',
      'Robot destekli tekrar eğitimi',
      'Gerçek zamanlı biyogeribildirim',
      'Yapay zeka destekli hareket analizi',
      'Fonksiyonel transfer çalışmaları',
    ],
    benefits: [
      'Daha kaliteli tekrar',
      'Daha net ilerleme ölçümü',
      'Daha güvenli yürüme çalışmaları',
      'Daha hassas tedavi planlaması',
    ],
    technology: ['Lokomat benzeri yürüme robotu', 'Üst ekstremite robotik modüller', 'Yapay zeka destekli analiz ekranı'],
    roadmap: ['Uygunluk değerlendirmesi', 'Robotik seans blokları', 'Günlük yaşama geçiş çalışmaları'],
    featuredMetric: { value: '%32', label: 'Uygun vakalarda daha hızlı yürüme gelişimi' },
    testimonial: {
      quote:
        'Seanslardan sonra ilerlememi sayı ve grafiklerle görmek motivasyonumu çok artırdı. Artık neyin geliştiğini net görebiliyorum.',
      name: 'Aylin D.',
      role: 'Robotik yürüme eğitimi alan hasta',
    },
    faqs: [
      {
        question: 'Robotik rehabilitasyon kimler için uygundur?',
        answer:
          'Yürüme bozukluğu, nörolojik kayıp, denge sorunu veya daha yoğun tekrar gereksinimi olan hastalarda özellikle faydalı olabilir.',
      },
      {
        question: 'Robotik tedavi rahatsız edici midir?',
        answer:
          'Hayır. Cihazlar kişinin boyuna, kilosuna ve toleransına göre ayarlanır. Seanslar güvenli ve kontrollü şekilde ilerler.',
      },
      {
        question: 'Robotik tedavi manuel tedavinin yerini alır mı?',
        answer:
          'Hayır. Robotik uygulamalar, manuel terapi ve egzersiz programının yanında destekleyici bir araçtır.',
      },
    ],
  },
  {
    slug: 'geriatric-care',
    shortName: 'Geriatrik',
    name: 'Geriatrik Fizik Tedavi',
    iconKey: 'heartPulse',
    summary: 'İleri yaşta güvenli hareket, düşme önleme ve bağımsız yaşam desteği.',
    tagline: 'Yaşlılarda mobilite, denge ve güvenli günlük yaşam için.',
    description:
      'Geriatrik fizik tedavi; düşme riskini azaltmak, kas gücünü artırmak ve kişinin günlük yaşamda daha bağımsız hareket etmesini desteklemek için planlanır.',
    detailIntro: [
      'Bu program ileri yaşta hareket korkusunu azaltmaya ve güvenli mobiliteyi artırmaya odaklanır. Oturup kalkma, merdiven çıkma, yürüme ve denge gibi günlük ihtiyaçlar tedavinin merkezindedir.',
      'Aile üyeleri için de süreç açık ve anlaşılır tutulur. Hangi alanlarda gelişme olduğu ve evde nelere dikkat edilmesi gerektiği düzenli olarak paylaşılır.',
    ],
    conditions: [
      'Düşme riski ve denge sorunları',
      'Kas zayıflığı ve hareket kısıtlılığı',
      'Hastane sonrası mobilite kaybı',
      'Yürüme güveninde azalma',
      'Günlük yaşam aktivitelerinde zorlanma',
    ],
    techniques: [
      'Denge ve reaksiyon çalışmaları',
      'Fonksiyonel kuvvet egzersizleri',
      'Yürüme eğitimi',
      'Ev içi güvenlik önerileri',
      'Bakım veren eğitimi',
    ],
    benefits: [
      'Daha güvenli hareket',
      'Düşme riskinde azalma',
      'Günlük yaşamda daha fazla bağımsızlık',
      'Kas gücü ve denge gelişimi',
    ],
    technology: ['Denge ölçüm araçları', 'Takip raporları', 'Düşük etkili destek sistemleri'],
    roadmap: ['Risk değerlendirmesi', 'Fonksiyonel güçlendirme', 'Uzun vadeli denge planı'],
    featuredMetric: { value: '%52', label: 'Düşme risk göstergelerinde ortalama azalma' },
    testimonial: {
      quote:
        'Tedavi süreci hem annem hem bizim için çok açıklayıcıydı. Günlük yaşamda çok daha güvenli hareket etmeye başladı.',
      name: 'Nihal E.',
      role: 'Yakını için destek alan aile üyesi',
    },
    faqs: [
      {
        question: 'Aile üyeleri evde nasıl destek olacağını öğrenebilir mi?',
        answer:
          'Evet. Ev içi düzenleme, destek şekli ve güvenli hareket konusunda aile bireylerine yönlendirme yapıyoruz.',
      },
      {
        question: 'Seanslar çok yorucu olur mu?',
        answer:
          'Hayır. Seans yoğunluğu kişinin yaşına, kondisyonuna ve toleransına göre dikkatle ayarlanır.',
      },
      {
        question: 'Hastane sonrası zayıflık için uygun mudur?',
        answer:
          'Evet. Hastane veya uzun süreli hareketsizlik sonrası mobilite kaybında oldukça faydalı olabilir.',
      },
    ],
  },
  {
    slug: 'manual-therapy',
    shortName: 'Manuel',
    name: 'Manuel Terapi',
    iconKey: 'sparkles',
    summary: 'Eklem ve yumuşak doku odaklı, ağrıyı azaltan ve hareketi rahatlatan uygulamalar.',
    tagline: 'Ağrı yönetimi ve hareket açılımı için el becerisine dayalı tedavi yaklaşımı.',
    description:
      'Manuel terapi; eklem mobilizasyonu, yumuşak doku teknikleri ve ağrı yönetimi yöntemleri ile hareketi rahatlatmayı ve egzersize geçişi kolaylaştırmayı hedefler.',
    detailIntro: [
      'Manuel terapi, doğru hastada ve doğru zamanda uygulandığında ağrı yönetiminde güçlü destek sağlar. Özellikle eklem sertliği, kas spazmı ve hareket kısıtlılığında etkili olabilir.',
      'Biz manuel terapiyi tek başına bir çözüm olarak değil, egzersiz ve eğitimle birlikte ilerleyen bütüncül bir planın parçası olarak kullanıyoruz.',
    ],
    conditions: [
      'Eklem sertliği',
      'Kas spazmı ve gerginlik',
      'Omuz, boyun ve bel ağrıları',
      'Hareket açıklığı kısıtlılığı',
      'Yumuşak doku hassasiyetleri',
    ],
    techniques: [
      'Eklem mobilizasyonu',
      'Miyofasyal gevşetme',
      'Kuru iğneleme',
      'Yumuşak doku teknikleri',
      'Ağrı yönetimi uygulamaları',
    ],
    benefits: [
      'Daha rahat hareket',
      'Kas ve eklem gerginliğinde azalma',
      'Egzersizlere geçişte kolaylık',
      'Ağrıda kısa vadede rahatlama',
    ],
    technology: ['Değerlendirme odaklı manuel yaklaşım', 'Hareket takibi', 'Seans sonrası yönlendirme planı'],
    roadmap: ['Klinik değerlendirme', 'Hedefe uygun manuel uygulama', 'Egzersizle destekleme'],
    featuredMetric: { value: '%57', label: 'Kısa vadede ağrı rahatlaması bildiren hasta oranı' },
    testimonial: {
      quote:
        'Boyun ve omuz bölgesindeki sıkışma hissim manuel terapi ve egzersiz kombinasyonuyla ciddi şekilde azaldı.',
      name: 'Zehra N.',
      role: 'Manuel terapi alan kronik ağrı hastası',
    },
    faqs: [
      {
        question: 'Manuel terapi tek başına yeterli olur mu?',
        answer:
          'Çoğu zaman en iyi sonuç manuel terapi ile egzersiz, postür eğitimi ve günlük yaşam düzenlemeleri birlikte olduğunda alınır.',
      },
      {
        question: 'Kuru iğneleme herkese uygulanır mı?',
        answer:
          'Hayır. Uygunluk değerlendirmesi yapılır ve yalnızca klinik olarak gerekli olduğunda uygulanır.',
      },
      {
        question: 'Seans sonrası ağrı olur mu?',
        answer:
          'Bazı hastalarda kısa süreli hassasiyet olabilir. Bu durum genellikle geçicidir ve seans öncesinde size detaylı bilgi verilir.',
      },
    ],
  },
]

export const differentiators = [
  {
    title: 'Lisanslı uzman ekip',
    description: 'Ortopedik, nörolojik ve spor fizyoterapisi alanlarında deneyimli fizyoterapistler.',
  },
  {
    title: 'Robotik ve yapay zeka desteği',
    description: 'Tedavi sürecini ölçülebilir ve daha şeffaf hale getiren ileri teknoloji altyapısı.',
  },
  {
    title: 'Kişiye özel tedavi planı',
    description: 'Her hasta için hedefe, yaşam düzenine ve şikâyet tipine göre özel program hazırlanır.',
  },
  {
    title: 'Sonuç odaklı yaklaşım',
    description: 'İyileşme süreci net hedefler ve düzenli takip ile yönetilir.',
  },
  {
    title: 'Esnek randevu saatleri',
    description: 'Yoğun yaşam temposuna uyum sağlayan planlama seçenekleri sunulur.',
  },
  {
    title: 'Sigorta ve ödeme desteği',
    description: 'Tedavi öncesinde süreç ve ödeme seçenekleri açık şekilde paylaşılır.',
  },
]

export const technologies = [
  {
    id: 'robotic-gait',
    title: 'Robotik yürüme sistemi',
    eyebrow: 'İmza teknoloji',
    description:
      'Yürüme kalitesi, adım simetrisi ve dayanıklılığı artırmak için kontrollü ve güvenli tekrar sunar.',
    bullets: ['Daha kaliteli tekrar', 'Gerçek zamanlı yürüyüş verisi', 'Daha güvenli yürüme çalışması'],
    quote: 'Hasta yalnızca çalışmaz, ilerlediğini de somut olarak görür.',
  },
  {
    id: 'ai-analytics',
    title: 'Yapay zeka destekli hareket analizi',
    eyebrow: 'İlerleme zekâsı',
    description:
      'Hareket kalitesini raporlayan sistemler sayesinde hem terapist hem hasta süreci daha net takip eder.',
    bullets: ['Başlangıç ve ilerleme karşılaştırması', 'Spora dönüş hazırlığı değerlendirmesi', 'Daha doğru egzersiz uyarlaması'],
    quote: 'Ne kadar geliştiğinizi hissetmek güzel, görmek çok daha güçlüdür.',
  },
  {
    id: 'manual-lab',
    title: 'Manuel terapi altyapısı',
    eyebrow: 'Uzman el becerisi',
    description:
      'Eklem mobilizasyonu, yumuşak doku çalışmaları ve ağrı yönetimi uygulamaları egzersizle entegre şekilde ilerler.',
    bullets: ['Hareket rahatlaması', 'Egzersize daha kolay geçiş', 'Şikâyete göre hedefli uygulama'],
    quote: 'Ellerle yapılan tedavi, hareket kalitesini iyileştirdiğinde gerçek değer üretir.',
  },
]

export const stats = [
  { value: 2500, suffix: '+', label: 'Tedavi edilen hasta' },
  { value: 98, suffix: '%', label: 'Başarı oranı' },
  { value: 15, suffix: '+', label: 'Yıllık deneyim' },
  { value: 24, suffix: '/7', label: 'Destek hattı' },
  { value: 50, suffix: '+', label: 'Desteklenen sigorta planı' },
  { value: 10, suffix: ' dk', label: 'Ortalama geri dönüş' },
  { value: 100, suffix: '%', label: 'Lisanslı çekirdek ekip' },
  { value: 4.9, suffix: '★', label: 'Ortalama değerlendirme', decimals: 1 },
]

export const journeySteps = [
  {
    step: '01',
    title: 'İlk İletişim',
    description: 'Online form, telefon veya WhatsApp ile ön görüşme başlatın.',
  },
  {
    step: '02',
    title: 'Değerlendirme',
    description: '60 dakikalık kapsamlı muayene ile ağrı, hareket ve hedefler netleştirilir.',
  },
  {
    step: '03',
    title: 'Tedavi Planı',
    description: 'Kişisel hedeflerinize uygun, kanıta dayalı bir yol haritası hazırlanır.',
  },
  {
    step: '04',
    title: 'Aktif Tedavi',
    description: 'Birebir seanslarla manuel terapi, egzersiz ve gerekirse robotik destek uygulanır.',
  },
  {
    step: '05',
    title: 'Kalıcı Başarı',
    description: 'Ev programı ve takip önerileriyle sürdürülebilir sonuç hedeflenir.',
  },
]

export const testimonials = [
  {
    name: 'Ahmet Yılmaz',
    role: 'Diz protezi rehabilitasyonu',
    duration: '8 hafta',
    result: 'Ağrı 8/10 → 2/10',
    quote:
      'Ameliyat sonrası yürüyemiyordum. Planlı ve güçlü tedavi süreci sayesinde artık günlük işlerimi rahatlıkla yapabiliyorum.',
  },
  {
    name: 'Zeynep Kaya',
    role: 'İnme sonrası iyileşme',
    duration: '12 hafta',
    result: 'Kol fonksiyonu %20 → %85',
    quote:
      'Nörolojik fizik tedavi ve robotik destek sayesinde sol kolumu çok daha işlevsel kullanmaya başladım.',
  },
  {
    name: 'Mehmet Özkan',
    role: 'ACL sonrası spora dönüş',
    duration: '6 ay',
    result: 'Spora dönüş tamamlandı',
    quote:
      'Spor fizyoterapisi süreci çok profesyoneldi. Sadece iyileşmedim, sahaya daha güçlü döndüm.',
  },
  {
    name: 'Fatma Demir',
    role: 'Kronik bel ağrısı',
    duration: '10 hafta',
    result: 'Oturma toleransı +3 saat',
    quote:
      'Bel ağrım yıllardır sürüyordu. İlk kez ağrımı anlayan ve gerçekten bana uygun bir program sunan bir ekip gördüm.',
  },
  {
    name: 'Orhan Polat',
    role: 'Denge ve düşme önleme',
    duration: '7 hafta',
    result: 'Denge puanı +%36',
    quote:
      'Artık yürürken kendimi daha güvende hissediyorum. Seanslar yorucu değil, düzenli ve çok açıklayıcıydı.',
  },
  {
    name: 'Mina Güneş',
    role: 'Manuel terapi ve omuz ağrısı',
    duration: '6 hafta',
    result: 'Hareket açıklığı belirgin artış',
    quote:
      'Omuzumu kaldırmakta zorlanıyordum. Manuel terapi ve egzersizlerle çok daha rahat hareket etmeye başladım.',
  },
]

export const insuranceProviders = [
  'Acıbadem Sigorta',
  'Allianz',
  'AXA',
  'Anadolu Sigorta',
  'Mapfre',
  'Sompo',
  'Türkiye Sigorta',
  'Unico',
  'Demir Hayat',
]

export const team = [
  {
    name: 'Dr. Elif Karaca',
    credentials: 'PT, DPT, OCS',
    specialty: 'Ortopedik rehabilitasyon uzmanı',
    experience: '14 yıllık deneyim',
    statement: 'Amacım, karmaşık iyileşme süreçlerini hasta için anlaşılır ve güvenli hale getirmek.',
    bio: 'Elif Karaca; diz, omuz, omurga ve ameliyat sonrası toparlanma alanlarında çalışan deneyimli bir ortopedik fizyoterapisttir. Tedavi planlarında egzersiz progresyonunu ve hasta eğitimini birlikte kullanır.',
    education: 'Marmara Üniversitesi ve ileri ortopedik klinik eğitim programları',
    certifications: 'Ortopedik Klinik Uzmanlığı, Kuru İğneleme, Manuel Terapi Eğitimi',
  },
  {
    name: 'Dr. Kerem Aydın',
    credentials: 'PT, DPT, NCS',
    specialty: 'Nörolojik fizik tedavi ve yürüme rehabilitasyonu',
    experience: '12 yıllık deneyim',
    statement: 'Nörolojik tedavide doğru tekrar ve doğru hedef, gerçek farkı yaratır.',
    bio: 'Kerem Aydın; inme, Parkinson, denge bozuklukları ve robotik yürüme eğitimi alanlarında çalışan bir nörolojik rehabilitasyon uzmanıdır.',
    education: 'Hacettepe Üniversitesi ve uluslararası nörorehabilitasyon eğitimleri',
    certifications: 'Nörolojik Klinik Uzmanlığı, Vestibüler Rehabilitasyon, Robotik Sistem Eğitimi',
  },
  {
    name: 'Dr. Asya Demir',
    credentials: 'PT, SCS',
    specialty: 'Spor fizyoterapisi ve spora dönüş',
    experience: '10 yıllık deneyim',
    statement: 'Sporcu için hedef yalnızca ağrısız olmak değil, yeniden hazır hissetmektir.',
    bio: 'Asya Demir; koşucular, takım sporcuları ve aktif yaşam süren bireylerle çalışır. Tedavi yaklaşımı kuvvet, hareket verimliliği ve güvenli dönüş üzerine kuruludur.',
    education: 'İstanbul Üniversitesi-Cerrahpaşa ve sporcu sağlığı eğitimleri',
    certifications: 'Spor Klinik Uzmanlığı, Kuvvet ve Kondisyon, Spora Dönüş Testleme',
  },
  {
    name: 'Melis Şahin',
    credentials: 'PT, MSc',
    specialty: 'Geriatrik fizik tedavi ve düşme önleme',
    experience: '11 yıllık deneyim',
    statement: 'Hareket özgürlüğü, ileri yaşta yaşam kalitesinin en güçlü belirleyicilerinden biridir.',
    bio: 'Melis Şahin; ileri yaşta mobilite kaybı, denge sorunları ve hastane sonrası toparlanma süreçlerinde çalışır. Tedavi planlarını günlük yaşamın gerçek ihtiyaçlarına göre tasarlar.',
    education: 'Dokuz Eylül Üniversitesi, Sağlıklı Yaşlanma yüksek lisansı',
    certifications: 'Düşme Önleme Uzmanlığı, Denge ve Mobilite Eğitimi',
  },
  {
    name: 'Deniz Çakır',
    credentials: 'PT, MSc',
    specialty: 'Manuel terapi ve ağrı yönetimi',
    experience: '9 yıllık deneyim',
    statement: 'Doğru el becerisi, doğru egzersizle birleştiğinde iyileşme süreci çok daha etkili hale gelir.',
    bio: 'Deniz Çakır; boyun, omuz, bel ve yumuşak doku kaynaklı ağrılarda manuel terapiyi egzersiz ve postür eğitimiyle birlikte kullanır.',
    education: 'Ege Üniversitesi ve ileri manuel terapi eğitimleri',
    certifications: 'Manuel Terapi, Kuru İğneleme, Ağrı Yönetimi Yaklaşımları',
  },
  {
    name: 'Ozan Tunç',
    credentials: 'Rehabilitasyon Mühendisi',
    specialty: 'Robotik sistemler ve hareket analizi',
    experience: '8 yıllık deneyim',
    statement: 'Teknoloji ancak doğru klinik yorumla birleştiğinde gerçek değer üretir.',
    bio: 'Ozan Tunç; robotik rehabilitasyon altyapısı, hareket verisi takibi ve seans bazlı analiz sistemlerinin klinik kullanımı üzerine çalışır.',
    education: 'Boğaziçi Üniversitesi Biyomedikal Mühendisliği',
    certifications: 'Klinik Hareket Analizi, Rehabilitasyon Sistem Entegrasyonu',
  },
]

export const storyMilestones = [
  {
    year: '2016',
    title: 'Butik hareket kliniği olarak kuruldu',
    text: 'Kişiye özel tedavi yaklaşımıyla küçük ama yüksek temaslı bir klinik yapısı kuruldu.',
  },
  {
    year: '2019',
    title: 'Spor ve ameliyat sonrası alanlara genişledi',
    text: 'Performans odaklı rehabilitasyon ve ölçülebilir takip sistemleri eklendi.',
  },
  {
    year: '2023',
    title: 'Robotik rehabilitasyon alanı açıldı',
    text: 'Yürüme ve nörolojik tedavi süreçlerinde ileri teknoloji aktif olarak kullanılmaya başlandı.',
  },
  {
    year: '2026',
    title: 'Hasta deneyimi yeniden tasarlandı',
    text: 'İlk iletişimden uzun vadeli takibe kadar tüm temas noktaları daha net ve güven veren hale getirildi.',
  },
]

export const facilityHighlights = [
  {
    title: 'Karşılama ve danışma alanı',
    description: 'Sakin, profesyonel ve mahremiyeti koruyan bir ilk izlenim deneyimi sunar.',
  },
  {
    title: 'Bireysel tedavi odaları',
    description: 'Manuel terapi, değerlendirme ve birebir görüşmeler için tasarlanmış özel alanlar.',
  },
  {
    title: 'Robotik tedavi alanı',
    description: 'Yürüme robotu, sensör destekli değerlendirme ve görsel geri bildirim ekranları içerir.',
  },
  {
    title: 'Fonksiyonel egzersiz stüdyosu',
    description: 'Günlük yaşam ve spora dönüş odaklı kuvvet, denge ve hareket çalışmaları için hazırlanmıştır.',
  },
]

export const awards = [
  'Lisanslı çekirdek klinik ekip',
  'Robotik rehabilitasyon eğitim partnerliği',
  'Kalite ve güvenlik odaklı klinik işleyiş',
  'Sürekli mesleki gelişim programları',
  'Sporcu sağlığı ve performans değerlendirme altyapısı',
  'Hasta deneyimi odaklı hizmet yaklaşımı',
]

export const communityPrograms = [
  'Amatör spor kulüpleri için ücretsiz tarama günleri',
  'Ağrı, duruş ve hareket eğitimi üzerine seminerler',
  'İleri yaş hareketliliği destek programları',
  'Seçilmiş vakalar için sosyal destek odaklı tedavi blokları',
]

export const careerValues = [
  'Mentorluk ve vaka tartışması kültürü',
  'Ortopedik, nörolojik ve spor alanları arasında disiplinler arası çalışma',
  'Klinik verimliliği artıran modern sistemler',
  'Hasta ve terapist için kaliteli bir çalışma ortamı',
]

export const contactFaqs = [
  {
    question: 'İlk randevu için sevk gerekiyor mu?',
    answer:
      'Çoğu hasta için ilk değerlendirme öncesi sevk gerekmiyor. Ancak sigorta kapsamı için gerekliyse sizi yönlendiriyoruz.',
  },
  {
    question: 'İlk görüşmeye ne getirmeliyim?',
    answer:
      'Varsa tetkik sonuçlarınızı, ameliyat raporunuzu ve rahat hareket edebileceğiniz kıyafetleri getirmeniz yeterlidir.',
  },
  {
    question: 'Seans süreleri ne kadar?',
    answer:
      'İlk değerlendirme genellikle 60 dakika, takip seansları ise tedavi planına göre 45-60 dakika sürer.',
  },
  {
    question: 'Aynı gün randevu alabilir miyim?',
    answer:
      'Uygunluk durumuna göre evet. Özellikle ameliyat sonrası veya şiddetli ağrı yaşayan vakalar önceliklendirilebilir.',
  },
  {
    question: 'Otopark imkânı var mı?',
    answer:
      'Evet. Her iki lokasyonda da yakın çevrede ücretli otopark ve kolay ulaşım seçenekleri bulunur.',
  },
]
