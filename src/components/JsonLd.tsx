export function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Skyland AI',
    description: 'Skyland AI helps businesses automate tasks, improve efficiency, and grow faster with cutting-edge AI solutions.',
    url: 'https://skylandai.com',
    logo: 'https://skylandai.com/logo.png',
    sameAs: [
      'https://twitter.com/skylandai',
      'https://linkedin.com/company/skylandai',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-XXX-XXX-XXXX',
      contactType: 'customer service',
      areaServed: 'Worldwide',
      availableLanguage: ['English'],
    },
    offers: {
      '@type': 'Offer',
      name: 'AI Automation Solutions',
      description: 'Transform your business with AI-powered automation solutions.',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
} 