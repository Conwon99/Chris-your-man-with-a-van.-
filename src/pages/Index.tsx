import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import AboutUs from "@/components/AboutUs";
import ProjectShowcase from "@/components/ProjectShowcase";
import ServicesGrid from "@/components/ServicesGrid";
import ServiceAreas from "@/components/ServiceAreas";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Chris, Your Man with a Van | Van Services Ayrshire | Reliable Man with a Van Cumnock</title>
        <meta name="description" content="Chris, Your Man with a Van - Professional van services across Ayrshire. Small removals, courier services, waste removal, flat-pack assembly. SEPA registered, 5-star service, affordable removals. Free quotes via WhatsApp." />
        <meta name="keywords" content="chris your man with a van, van services ayrshire, man with a van cumnock, removals ayrshire, courier services ayrshire, reliable man with a van ayrshire, sepa registered waste removal ayrshire, affordable removals ayrshire, small removals ayrshire, house moves ayrshire" />
        <link rel="canonical" href="https://chrisyourmanwithavan.netlify.app/" />
        <meta property="og:title" content="Chris, Your Man with a Van | Van Services Ayrshire" />
        <meta property="og:description" content="Professional van services across Ayrshire. Small removals, courier services, waste removal, flat-pack assembly. SEPA registered, 5-star service." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chrisyourmanwithavan.netlify.app/" />
      </Helmet>
      <main className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustBar />
      <AboutUs />
      <ProjectShowcase />
      <ServicesGrid />
      <ServiceAreas />
      <Reviews />
      <FAQ />
      <ContactSection />
      <Footer />
    </main>
    </>
  );
};

export default Index;
