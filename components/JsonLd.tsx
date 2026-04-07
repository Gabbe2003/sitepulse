export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://sitepulse.se/#organization",
        name: "Sitepulse Marketing",
        url: "https://sitepulse.se",
        logo: {
          "@type": "ImageObject",
          url: "https://sitepulse.se/app-icon-light-512.png",
          width: 512,
          height: 512,
        },
        contactPoint: {
          "@type": "ContactPoint",
          email: "info@sitepulse.se",
          contactType: "customer service",
          availableLanguage: "Swedish",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Tomtebogatan 37",
          addressLocality: "Stockholm",
          postalCode: "113 38",
          addressCountry: "SE",
        },
        areaServed: "SE",
        sameAs: [],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://sitepulse.se/#localbusiness",
        name: "Sitepulse Marketing",
        description:
          "Vi hjälper företag att lyckas online med modern webbdesign, kraftfull SEO, hosting och digital marknadsföring som ger verkliga resultat. Baserade i Stockholm.",
        url: "https://sitepulse.se",
        telephone: "",
        email: "info@sitepulse.se",
        image: "https://sitepulse.se/og-image-light-1200x630.png",
        logo: "https://sitepulse.se/app-icon-light-512.png",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Tomtebogatan 37",
          addressLocality: "Stockholm",
          postalCode: "113 38",
          addressCountry: "SE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 59.337,
          longitude: 18.059,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "17:00",
        },
        serviceArea: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: 59.337,
            longitude: 18.059,
          },
          geoRadius: "50000",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Digitala tjänster",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Webbdesign",
                description: "Modern och responsiv webbdesign anpassad för konvertering.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "SEO – Sökmotoroptimering",
                description: "Kraftfull SEO som ökar din synlighet i Google.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Digital Marknadsföring",
                description: "Målgruppsanpassad digital marknadsföring som ger mätbara resultat.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Hosting",
                description: "Snabb och säker hosting för din webbplats.",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://sitepulse.se/#website",
        url: "https://sitepulse.se",
        name: "Sitepulse Marketing",
        description:
          "Webbdesign, SEO & Digital Marknadsföring i Stockholm",
        publisher: {
          "@id": "https://sitepulse.se/#organization",
        },
        inLanguage: "sv-SE",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
    />
  );
}
