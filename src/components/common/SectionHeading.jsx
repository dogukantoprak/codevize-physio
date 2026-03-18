import clsx from 'clsx'

function SectionHeading({ eyebrow, title, description, align = 'left', className }) {
  return (
    <div className={clsx('section-heading', `section-heading--${align}`, className)}>
      {eyebrow ? <p className="section-heading__eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p className="section-heading__description">{description}</p> : null}
    </div>
  )
}

export default SectionHeading
