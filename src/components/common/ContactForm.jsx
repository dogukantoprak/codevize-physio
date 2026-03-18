import clsx from 'clsx'
import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { CalendarDays, CheckCircle2, LoaderCircle, ShieldCheck } from 'lucide-react'

const contactSchema = z.object({
  firstName: z.string().trim().min(2, 'Lütfen en az 2 karakter girin.'),
  lastName: z.string().trim().min(2, 'Lütfen en az 2 karakter girin.'),
  email: z.email('Lütfen geçerli bir e-posta adresi girin.'),
  phone: z
    .string()
    .trim()
    .min(10, 'Lütfen en az 10 haneli bir telefon numarası girin.')
    .regex(/^[0-9+()\s-]+$/, 'Lütfen yalnızca rakam ve standart telefon karakterleri kullanın.'),
  service: z.string().trim().min(1, 'Lütfen bir tedavi alanı seçin.'),
  preferredDate: z.string().optional(),
  message: z.string().trim().min(12, 'Lütfen şikâyetinizi veya hedefinizi biraz daha detaylı yazın.'),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Devam etmek için gizlilik metnini kabul etmelisiniz.' }),
  }),
})

function buildFieldValidator(schema, fallback) {
  return (value) => {
    const result = schema.safeParse(value)
    return result.success || fallback
  }
}

function ContactForm({
  compact = false,
  defaultService = '',
  title = 'Bugün Başlayın',
  description = 'Hedeflerinizi paylaşın, ekibimiz size iki iş saati içinde geri dönüş yapsın.',
}) {
  const [submission, setSubmission] = useState(null)

  const serviceValidator = useMemo(
    () => buildFieldValidator(contactSchema.shape.service, 'Lütfen bir tedavi alanı seçin.'),
    [],
  )

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: defaultService,
      preferredDate: '',
      message: '',
      consent: false,
    },
  })

  const onSubmit = async (values) => {
    const result = contactSchema.safeParse(values)

    if (!result.success) {
      return
    }

    await new Promise((resolve) => {
      window.setTimeout(resolve, 900)
    })

    setSubmission(result.data)
    reset({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: defaultService,
      preferredDate: '',
      message: '',
      consent: false,
    })
  }

  if (submission) {
    return (
      <div className={clsx('contact-form', compact && 'contact-form--compact', 'contact-form--success')} role="status" aria-live="polite">
        <div className="contact-form__success-icon" aria-hidden="true">
          <CheckCircle2 size={26} />
        </div>
        <h3>Talebiniz alındı</h3>
        <p>
          Başvurunuzu aldık ve <strong>{submission.email}</strong> adresine bir onay mesajı gönderdik.
        </p>
        <ul className="contact-form__success-list">
          <li>İki iş saati içinde sizinle iletişime geçeriz.</li>
          <li>Şikâyetinizi, hedefinizi ve uygunluğunuzu değerlendiririz.</li>
          <li>Sizi uygun fizyoterapist ve tedavi alanına yönlendiririz.</li>
        </ul>
        <button type="button" className="button button--secondary" onClick={() => setSubmission(null)}>
          Yeni talep gönder
        </button>
      </div>
    )
  }

  return (
    <form className={clsx('contact-form', compact && 'contact-form--compact')} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="contact-form__intro">
        <span className="contact-form__badge">
          <ShieldCheck size={16} />
          Güvenli ön başvuru akışı
        </span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="contact-form__grid">
        <label className="field">
          <span>Ad *</span>
          <input
            type="text"
            placeholder="Zeynep"
            aria-invalid={Boolean(errors.firstName)}
            {...register('firstName', {
              validate: buildFieldValidator(contactSchema.shape.firstName, 'Lütfen en az 2 karakter girin.'),
            })}
          />
          {errors.firstName ? <small>{errors.firstName.message}</small> : null}
        </label>

        <label className="field">
          <span>Soyad *</span>
          <input
            type="text"
            placeholder="Yılmaz"
            aria-invalid={Boolean(errors.lastName)}
            {...register('lastName', {
              validate: buildFieldValidator(contactSchema.shape.lastName, 'Lütfen en az 2 karakter girin.'),
            })}
          />
          {errors.lastName ? <small>{errors.lastName.message}</small> : null}
        </label>

        <label className="field">
          <span>E-posta adresi *</span>
          <input
            type="email"
            placeholder="zeynep@example.com"
            aria-invalid={Boolean(errors.email)}
            {...register('email', {
              validate: buildFieldValidator(contactSchema.shape.email, 'Lütfen geçerli bir e-posta adresi girin.'),
            })}
          />
          {errors.email ? <small>{errors.email.message}</small> : null}
        </label>

        <label className="field">
          <span>Telefon numarası *</span>
          <input
            type="tel"
            placeholder="+90 532 000 00 00"
            aria-invalid={Boolean(errors.phone)}
            {...register('phone', {
              validate: buildFieldValidator(contactSchema.shape.phone, 'Lütfen geçerli bir telefon numarası girin.'),
            })}
          />
          {errors.phone ? <small>{errors.phone.message}</small> : null}
        </label>

        <label className="field">
          <span>Tedavi alanı *</span>
          <select aria-invalid={Boolean(errors.service)} {...register('service', { validate: serviceValidator })}>
            <option value="">Tedavi alanı seçin</option>
            <option value="Ortopedik Rehabilitasyon">Ortopedik Rehabilitasyon</option>
            <option value="Nörolojik Fizik Tedavi">Nörolojik Fizik Tedavi</option>
            <option value="Robotik Rehabilitasyon">Robotik Rehabilitasyon</option>
            <option value="Spor Fizyoterapisi">Spor Fizyoterapisi</option>
            <option value="Geriatrik Fizik Tedavi">Geriatrik Fizik Tedavi</option>
            <option value="Manuel Terapi">Manuel Terapi</option>
          </select>
          {errors.service ? <small>{errors.service.message}</small> : null}
        </label>

        <label className="field">
          <span>Tercih ettiğiniz randevu tarihi</span>
          <div className="field__icon">
            <CalendarDays size={18} />
            <input type="date" {...register('preferredDate')} />
          </div>
        </label>

        <label className="field field--full">
          <span>Şikâyetinizi paylaşın *</span>
          <textarea
            rows={compact ? 4 : 5}
            placeholder="Şikâyetiniz ne zaman başladı, sizi nasıl etkiliyor ve tedaviden beklentiniz nedir?"
            aria-invalid={Boolean(errors.message)}
            {...register('message', {
              validate: buildFieldValidator(
                contactSchema.shape.message,
                'Lütfen şikâyetinizi veya hedefinizi biraz daha detaylı yazın.',
              ),
            })}
          />
          {errors.message ? <small>{errors.message.message}</small> : null}
        </label>
      </div>

      <label className="checkbox-field">
        <input
          type="checkbox"
          aria-invalid={Boolean(errors.consent)}
          {...register('consent', {
            validate: (value) => value || 'Devam etmek için gizlilik metnini kabul etmelisiniz.',
          })}
        />
        <span>Gizlilik politikasını okudum ve bu formun örnek amaçlı olduğunu anladım.</span>
      </label>
      {errors.consent ? <small className="checkbox-field__error">{errors.consent.message}</small> : null}

      <div className="contact-form__footer">
        <button type="submit" className="button button--primary" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <LoaderCircle size={18} className="is-spinning" />
              Gönderiliyor...
            </>
          ) : (
            'Gönder'
          )}
        </button>
        <p>Uygunluk durumuna göre aynı gün değerlendirme imkânı sunulabilir.</p>
      </div>
    </form>
  )
}

export default ContactForm
