import Script from "next/script";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "InteriorDesigner",
  name: "Urban Saajh by Tej",
  description:
    "Award-winning luxury interior design studio crafting bespoke residential and commercial spaces across India and beyond.",
  url: "https://urbansaajh.com",
  logo: "https://urbansaajh.com/images/hero_interior_1773249348213.png",
  email: "info@urbansaajh.com",
  telephone: "+91-7602016708",
  address: {
    "@type": "PostalAddress",
    streetAddress: "BHOGAL BROTHERS, BAGDOGRA, BIHAR MORE",
    addressLocality: "Bagdogra",
    postalCode: "734014",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.instagram.com/urbansaajh",
    "https://www.pinterest.com/urbansaajh",
    "https://www.linkedin.com/company/urbansaajh",
  ],
  founder: {
    "@type": "Person",
    name: "Tejinder Singh Bhogal",
    jobTitle: "Founder & Creative Director",
    alumniOf: "Central Saint Martins",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Urban Saajh by Tej",
  url: "https://urbansaajh.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://urbansaajh.com/projects?q={search_term_string}",
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
