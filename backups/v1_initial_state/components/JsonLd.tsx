import Script from "next/script";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "InteriorDesigner",
  name: "Urban Saaj",
  description:
    "Award-winning luxury interior design studio crafting bespoke residential and commercial spaces across India and beyond.",
  url: "https://urbansaaj.com",
  logo: "https://urbansaaj.com/images/hero_interior_1773249348213.png",
  email: "hello@urbansaaj.com",
  telephone: "+44-20-7946-0958",
  address: {
    "@type": "PostalAddress",
    streetAddress: "142 Design Avenue, Suite 300",
    addressLocality: "London",
    postalCode: "EC1A 1BB",
    addressCountry: "GB",
  },
  sameAs: [
    "https://www.instagram.com/urbansaaj",
    "https://www.pinterest.com/urbansaaj",
    "https://www.linkedin.com/company/urbansaaj",
  ],
  founder: {
    "@type": "Person",
    name: "Priya Saaj",
    jobTitle: "Founder & Creative Director",
    alumniOf: "Central Saint Martins",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Urban Saaj",
  url: "https://urbansaaj.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://urbansaaj.com/projects?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function JsonLd() {
  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        strategy="afterInteractive"
      />
    </>
  );
}
