import { useState } from 'react'
import { BriefcaseBusiness, GraduationCap, HeartHandshake } from 'lucide-react'
import SEO from '../components/common/SEO.jsx'
import Reveal from '../components/common/Reveal.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import Modal from '../components/common/Modal.jsx'
import {
  awards,
  careerValues,
  communityPrograms,
  facilityHighlights,
  storyMilestones,
  team,
} from '../data/siteData.js'

function About() {
  const [selectedMember, setSelectedMember] = useState(null)

  return (
    <>
      <SEO
        title="Hakkımızda"
        description="Codevize Studio’nun ekip yapısını, klinik vizyonunu, gelişim hikâyesini ve fizik tedavi yaklaşımını keşfedin."
        path="/about"
      />

      <section className="page-hero">
        <div className="page-container page-hero__grid">
          <Reveal className="page-hero__copy">
            <span className="eyebrow-pill">Uzmanlık ile teknolojinin buluştuğu yer</span>
            <h1>Güven veren, modern ve insan odaklı bir klinik hikâyesi.</h1>
            <p>
              Hakkımızda sayfası yalnızca ekip tanıtımı değildir. Aynı zamanda hastanın karar verirken ihtiyaç duyduğu güven, şeffaflık ve kalite hissini güçlendirir.
            </p>
          </Reveal>
          <Reveal className="page-hero__panel" delay={0.12}>
            <div className="overview-card">
              <strong>Güven odaklı yapı</strong>
              <p>Hikâye, ekip, klinik alanları ve topluluk yaklaşımı birlikte daha güçlü bir marka algısı kurar.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="page-container">
          <SectionHeading
            eyebrow="Hikâyemiz"
            title="Markayı güçlü gösteren gelişim zaman çizelgesi"
            description="Bu anlatı, kurgusal bir markayı bile güven veren bir klinik konseptine dönüştürür."
          />
          <div className="timeline-grid">
            {storyMilestones.map((item, index) => (
              <Reveal className="timeline-card" key={item.year} delay={index * 0.05}>
                <span>{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="page-container">
          <SectionHeading
            eyebrow="Ekibimiz"
            title="Klinik uzmanlığı net gösteren ekip profilleri"
            description="Her profilde uzmanlık alanı, deneyim yılı ve daha detaylı biyografi için açılır içerik bulunur."
          />
          <div className="team-grid">
            {team.map((member, index) => (
              <Reveal className="team-card" key={member.name} delay={index * 0.04}>
                <div className="team-card__avatar" aria-hidden="true">
                  {member.name
                    .split(' ')
                    .slice(0, 2)
                    .map((part) => part[0])
                    .join('')}
                </div>
                <strong>{member.name}</strong>
                <span>{member.credentials}</span>
                <p>{member.specialty}</p>
                <small>{member.experience}</small>
                <blockquote>{member.statement}</blockquote>
                <button type="button" className="button button--secondary" onClick={() => setSelectedMember(member)}>
                  Tam Biyografiyi Gör
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page-container">
          <SectionHeading
            eyebrow="Klinik Alanlarımız"
            title="Üst düzey rehabilitasyon deneyimini destekleyen fiziksel ortam"
            description="Bu alanlar, kliniğin yalnızca şık değil aynı zamanda işlevsel ve profesyonel olduğunu gösterir."
          />
          <div className="facility-grid">
            {facilityHighlights.map((item, index) => (
              <Reveal className="facility-card" key={item.title} delay={index * 0.05}>
                <div className="facility-card__visual" aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="page-container three-column-grid">
          <Reveal className="info-panel">
            <div className="info-panel__icon">
              <GraduationCap size={22} />
            </div>
            <h3>Sertifikalar ve kalite yaklaşımı</h3>
            <ul className="icon-list icon-list--plain">
              {awards.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="info-panel" delay={0.05}>
            <div className="info-panel__icon">
              <HeartHandshake size={22} />
            </div>
            <h3>Toplumsal katkı</h3>
            <ul className="icon-list icon-list--plain">
              {communityPrograms.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="info-panel" delay={0.1}>
            <div className="info-panel__icon">
              <BriefcaseBusiness size={22} />
            </div>
            <h3>Kariyer fırsatları</h3>
            <ul className="icon-list icon-list--plain">
              {careerValues.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Modal isOpen={Boolean(selectedMember)} onClose={() => setSelectedMember(null)} title={selectedMember?.name ?? ''}>
        {selectedMember ? (
          <div className="modal-copy">
            <p>
              <strong>{selectedMember.credentials}</strong> · {selectedMember.specialty}
            </p>
            <p>{selectedMember.bio}</p>
            <p>
              <strong>Eğitim:</strong> {selectedMember.education}
            </p>
            <p>
              <strong>Sertifikalar:</strong> {selectedMember.certifications}
            </p>
          </div>
        ) : null}
      </Modal>
    </>
  )
}

export default About
