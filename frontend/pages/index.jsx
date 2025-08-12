import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Features from '../components/Features';
import About from '../components/About';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Transportation Service - Professional Employee Transportation Services</title>
        <meta 
          name="description" 
          content="Reliable employee transportation solutions including shuttles, corporate cars, airport transfers, and event transportation. Trusted by 500+ companies nationwide." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://Transportation Service.com/" />
        <meta property="og:title" content="Transportation Service - Professional Employee Transportation Services" />
        <meta property="og:description" content="Reliable employee transportation solutions including shuttles, corporate cars, airport transfers, and event transportation. Trusted by 500+ companies nationwide." />
        <meta property="og:image" content="/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://Transportation Service.com/" />
        <meta property="twitter:title" content="Transportation Service - Professional Employee Transportation Services" />
        <meta property="twitter:description" content="Reliable employee transportation solutions including shuttles, corporate cars, airport transfers, and event transportation. Trusted by 500+ companies nationwide." />
        <meta property="twitter:image" content="/twitter-image.jpg" />
        
        {/* Additional meta tags */}
        <meta name="keywords" content="employee transportation, corporate shuttle, airport transfer, business transport, company car service" />
        <meta name="author" content="Transportation Service" />
        <meta name="robots" content="index, follow" />
        
        {/* Schema.org structured data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Transportation Service",
              "url": "https://Transportation Service.com",
              "logo": "https://Transportation Service.com/logo.png",
              "description": "Professional employee transportation services for businesses",
              "serviceType": "Transportation Service",
              "areaServed": "United States",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-800-123-TRANS",
                "contactType": "customer service"
              }
            })
          }}
        />
      </Head>
      
      <main className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Services />
        <Features />
        <About />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}