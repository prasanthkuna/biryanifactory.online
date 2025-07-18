import { useEffect } from 'react'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
}

export function SEO({ 
  title = "Biryani Factory Hyderabad - Best Authentic Biryani | Order Online",
  description = "Experience the best authentic Hyderabadi Biryani in town! Order online from @biryani.factory.hyderabad. Fresh ingredients, secret spices, 30-min delivery. Get 20% OFF on first order!",
  keywords = "biryani, hyderabad biryani, biryani delivery, authentic biryani, biryani factory, online food order, hyderabad food, indian cuisine, biryani near me",
  image = "/biryani-og.jpg",
  url = "https://biryanifactory.com"
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title

    // Update meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
      { name: 'instagram:handle', content: '@biryani.factory.hyderabad' }
    ]

    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`
      let element = document.querySelector(selector)
      
      if (!element) {
        element = document.createElement('meta')
        if (name) element.setAttribute('name', name)
        if (property) element.setAttribute('property', property)
        document.head.appendChild(element)
      }
      
      element.setAttribute('content', content)
    })

    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)

    // Add structured data for local business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "Biryani Factory Hyderabad",
      "image": image,
      "url": url,
      "@id": url,
      "telephone": "+919876543210",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Hyderabad",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 17.385044,
        "longitude": 78.486671
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "10:00",
        "closes": "22:00"
      },
      "sameAs": [
        "https://instagram.com/biryani.factory.hyderabad"
      ],
      "servesCuisine": "Indian",
      "menu": url + "#menu"
    }

    let script = document.querySelector('script[type="application/ld+json"]')
    if (!script) {
      script = document.createElement('script')
      script.setAttribute('type', 'application/ld+json')
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(structuredData)

  }, [title, description, keywords, image, url])

  return null
}
