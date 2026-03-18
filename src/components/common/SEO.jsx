import { Helmet } from 'react-helmet-async'

const siteUrl = 'https://codevize-studio-pt-demo.vercel.app'
const defaultImage = `${siteUrl}/favicon.svg`

function SEO({
  title,
  description,
  path = '/',
  image = defaultImage,
  type = 'website',
  structuredData = null,
}) {
  const absoluteUrl = `${siteUrl}${path}`
  const fullTitle = `${title} | Codevize Studio Fizik Tedavi & Rehabilitasyon Merkezi`

  return (
    <Helmet prioritizeSeoTags>
      <html lang="tr" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="fizik tedavi İstanbul, robotik rehabilitasyon, spor fizyoterapisi, ortopedik rehabilitasyon, nörolojik fizik tedavi, üst düzey rehabilitasyon kliniği"
      />
      <link rel="canonical" href={absoluteUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={absoluteUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Codevize Studio Fizik Tedavi & Rehabilitasyon Merkezi" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="theme-color" content="#1d4ed8" />
      {structuredData ? (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      ) : null}
    </Helmet>
  )
}

export default SEO
