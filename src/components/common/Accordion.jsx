import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import clsx from 'clsx'

const MotionDiv = motion.div

function Accordion({ items, className }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className={clsx('accordion', className)}>
      {items.map((item, index) => {
        const isOpen = index === openIndex
        const panelId = `accordion-panel-${index}`
        const buttonId = `accordion-button-${index}`

        return (
          <div className={clsx('accordion__item', isOpen && 'is-open')} key={item.question}>
            <button
              id={buttonId}
              type="button"
              className="accordion__button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span>{item.question}</span>
              <ChevronDown aria-hidden="true" size={20} />
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <MotionDiv
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="accordion__panel"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
                >
                  <p>{item.answer}</p>
                </MotionDiv>
              ) : null}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
