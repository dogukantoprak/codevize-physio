import { Award, Clock, TrendingUp, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from '../common/SectionHeading.jsx'
import useCountUp from '../../hooks/useCountUp.js'

const MotionSection = motion.section

const stats = [
  { value: 2500, suffix: '+', label: 'Tedavi Edilen Hasta', icon: Users },
  { value: 98, suffix: '%', label: 'Başarı Oranı', icon: TrendingUp },
  { value: 15, suffix: '+', label: 'Yıllık Deneyim', icon: Award },
  { value: 24, suffix: '/7', label: 'Destek Hattı', icon: Clock },
]

function StatCard({ item, active }) {
  const Icon = item.icon
  const count = useCountUp(item.value, { trigger: active })

  return (
    <div className="pt-stat-card">
      <div className="pt-stat-card__icon">
        <Icon size={22} />
      </div>
      <strong>
        {count}
        {item.suffix}
      </strong>
      <span>{item.label}</span>
    </div>
  )
}

function Stats({ active, onEnter }) {
  return (
    <MotionSection className="section pt-stats" onViewportEnter={onEnter} viewport={{ once: true, amount: 0.3 }}>
      <div className="page-container">
        <SectionHeading
          eyebrow="Rakamlarla Güven"
          title="Klinik güven hissini somutlaştıran göstergeler"
          description="Kurumsal ama soğuk olmayan, güçlü ama abartısız bir istatistik katmanı."
          align="center"
        />
        <div className="pt-stats__grid">
          {stats.map((item) => (
            <StatCard key={item.label} item={item} active={active} />
          ))}
        </div>
      </div>
    </MotionSection>
  )
}

export default Stats
