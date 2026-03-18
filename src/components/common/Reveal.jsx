import { motion } from 'framer-motion'

const MotionDiv = motion.div

function Reveal({ children, className, delay = 0, y = 32, amount = 0.2 }) {
  return (
    <MotionDiv
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </MotionDiv>
  )
}

export default Reveal
