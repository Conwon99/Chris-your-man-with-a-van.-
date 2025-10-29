import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Package, Trash2, ShoppingCart, Home, Wrench, Phone, MessageSquare } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { trackServiceClick, trackPhoneCall, trackMessenger } from "@/utils/analytics";

// WhatsApp Logo Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <img 
    src="/whatsapp-svgrepo-com.svg" 
    alt="WhatsApp" 
    className={className}
  />
);

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Small Removals & House Moves",
      slug: "small-removals",
      description: "Professional small removal services in Cumnock and surrounding Ayrshire areas. Whether you're moving house, relocating your office, or just need furniture moved, I provide a friendly, reliable service.",
      features: [
        "House moves across Ayrshire",
        "Office relocations",
        "Furniture transport",
        "Personal service with care",
        "Competitive pricing",
        "Free quotes via WhatsApp"
      ],
      image: "/1.png",
      fallbackImage: "/1.png",
      icon: Truck,
      color: "primary-orange",
      details: "Moving house or office doesn't have to be stressful. I handle small to medium removals with care and attention to detail. All items are wrapped and protected during transport. Whether it's a single room or a full property, I'll work with you to make the move as smooth as possible."
    },
    {
      title: "Courier Services & Delivery",
      slug: "courier",
      description: "Reliable courier and delivery services across Ayrshire and throughout the UK. Same-day service available for urgent deliveries.",
      features: [
        "Same-day delivery available",
        "Package collection and delivery",
        "Secure transport",
        "UK-wide courier services",
        "Friendly, professional service",
        "Free quotes"
      ],
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      icon: Package,
      color: "primary-orange",
      details: "Need something delivered quickly? I offer fast, reliable courier services across Ayrshire and throughout the UK. Whether it's documents, parcels, or larger items, your package is handled with care and delivered on time. Same-day service is available for urgent deliveries."
    },
    {
      title: "Tip Runs & Waste Removal",
      slug: "waste-removal",
      description: "SEPA registered waste removal and tip run services. Professional disposal of household waste, garden waste, and unwanted items.",
      features: [
        "SEPA registered",
        "Bin bag collection",
        "Garage clearances",
        "Shed clearances",
        "Garden waste removal",
        "Eco-friendly disposal"
      ],
      image: "https://images.unsplash.com/photo-1581578731548-c6a0c3f2f2c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1581578731548-c6a0c3f2f2c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      icon: Trash2,
      color: "primary-orange",
      details: "As a SEPA registered waste carrier, I provide professional waste removal services. From regular bin bag collections to full garage or shed clearances, I'll dispose of your unwanted items responsibly. All waste is taken to licensed disposal facilities, ensuring eco-friendly and legal disposal."
    },
    {
      title: "In-Store Collection & Delivery",
      slug: "collection-and-delivery",
      description: "Collection from furniture stores, online purchases, and delivery straight to your door. No need to worry about transport - I'll handle it for you.",
      features: [
        "Collection from furniture stores",
        "Online purchase delivery",
        "Same-day service available",
        "Careful handling guaranteed",
        "White glove service",
        "Delivery and placement"
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      icon: ShoppingCart,
      color: "primary-orange",
      details: "Bought furniture but can't collect it? I'll collect from stores or warehouses and deliver to your home. All items are handled with care, and I can even help with placement in your home. Save time and avoid the hassle - let me collect and deliver your purchases safely."
    },
    {
      title: "End-of-Tenancy Clearance",
      slug: "end-of-tenancy",
      description: "Complete property clearance for tenants and landlords. Fast, thorough service to get properties ready for the next tenant.",
      features: [
        "Full property clearance",
        "Furniture removal",
        "Deep clean preparation",
        "Fast turnaround",
        "Tenant and landlord friendly",
        "Property ready for handover"
      ],
      image: "/2.png",
      fallbackImage: "/2.png",
      icon: Home,
      color: "primary-orange",
      details: "Moving out and need to clear the property? I provide comprehensive end-of-tenancy clearance services. From removing old furniture to clearing out all belongings, I'll ensure the property is ready for inspection. Fast, reliable service that helps tenants and landlords alike."
    },
    {
      title: "Flat Pack Assembly",
      slug: "flat-pack-assembly",
      description: "Professional flat pack furniture assembly service. Save time and frustration - I'll assemble your furniture correctly the first time.",
      features: [
        "IKEA furniture assembly",
        "All major brands",
        "Tools provided",
        "Expert assembly",
        "Same-day service",
        "Quality guarantee"
      ],
      image: "/2.png",
      fallbackImage: "/2.png",
      icon: Wrench,
      color: "primary-orange",
      details: "Struggling with flat pack furniture instructions? I've assembled hundreds of items from IKEA and other major brands. I bring all necessary tools and have the experience to assemble your furniture quickly and correctly. Same-day service available, so you can enjoy your new furniture without the frustration."
    }
  ];

  const handleQuoteClick = (serviceTitle: string) => {
    trackServiceClick(serviceTitle, 'services_page');
    const defaultMessage = `Hi Chris! I'd like to request a quote for ${serviceTitle}. Could you please get back to me?`;
    try {
      const phone = "447735852822";
      const encoded = encodeURIComponent(defaultMessage);
      const waUrl = `https://wa.me/${phone}?text=${encoded}`;
      window.open(waUrl, "_blank");
    } catch {}
  };

  const handleCallClick = () => {
    trackPhoneCall('services_page');
    window.location.href = "tel:+447735852822";
  };

  const handleWhatsAppClick = () => {
    trackMessenger('services_page');
    const defaultMessage = "Hi Chris! I'd like to request a quote via WhatsApp. Could you please get back to me?";
    try {
      const phone = "447735852822";
      const encoded = encodeURIComponent(defaultMessage);
      const waUrl = `https://wa.me/${phone}?text=${encoded}`;
      window.open(waUrl, "_blank");
    } catch {}
  };

  return (
    <>
      <Helmet>
        <title>Van Services Ayrshire | Small Removals, Courier & Waste Removal | Chris, Your Man with a Van</title>
        <meta name="description" content="Professional van services in Ayrshire: small removals, courier services, house removals, furniture removals, waste removal, delivery service, in-store collection, flat pack assembly. SEPA registered. Free quotes via WhatsApp." />
        <meta name="keywords" content="van services ayrshire, small removals ayrshire, courier services ayrshire, house removals ayrshire, furniture removals ayrshire, waste removal ayrshire, delivery service ayrshire, in store collection and delivery ayrshire, flat pack assembly ayrshire, whatsapp quote van services, free quote man with a van, collection and delivery service ayrshire" />
        <link rel="canonical" href="https://chrisyourmanwithavan.netlify.app/services" />
        <meta property="og:title" content="Our Services | Chris, Your Man with a Van" />
        <meta property="og:description" content="Professional van services in Cumnock & Ayrshire: small removals, courier services, tip runs, waste removal, flat-pack assembly, in-store collection & delivery." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chrisyourmanwithavan.netlify.app/services" />
      </Helmet>

      <main className="min-h-screen">
        <Navigation />
        
        {/* Services Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden min-h-[60vh] flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <LazyImage
              src="/vanfront.jpg"
              alt="Chris, Your Man with a Van services"
              className="w-full h-full object-cover object-center"
              fallbackSrc="/vanfront.jpg"
              loading="eager"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/50"></div>
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-6">
                Our Services
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                Professional van services across Cumnock and Ayrshire. Small removals, courier services, tip runs, waste removal, flat-pack assembly, and in-store collection & delivery. SEPA registered, 5-star service, all jobs done personally.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Services Section */}
        <section className="py-20 px-4 bg-[hsl(var(--background))]">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Comprehensive van services across Ayrshire. Each service is completed personally by Chris with attention to detail and care.
              </p>
            </div>

            <div className="space-y-16">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <LazyImage
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[400px] object-cover"
                        fallbackSrc={service.fallbackImage}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 bg-[hsl(var(--${service.color}))] rounded-full flex items-center justify-center shadow-lg`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-display text-3xl lg:text-4xl font-bold text-white">
                        {service.title}
                      </h3>
                    </div>
                    
                    <p className="text-lg text-white/90 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <p className="text-base text-white/80 leading-relaxed">
                      {service.details}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3 text-white/90">
                          <div className="w-2 h-2 bg-[hsl(var(--primary-orange))] rounded-full mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link to={`/services/${service.slug}`} onClick={() => trackServiceClick(service.title, 'services_page_read_more')}>
                        <Button
                          variant="outline"
                          className="border-2 border-[hsl(var(--primary-orange))] text-[hsl(var(--primary-orange))] hover:bg-[hsl(var(--primary-orange))] hover:text-white font-semibold px-8 py-6 rounded-full group"
                        >
                          Read More
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                      <Button
                        onClick={() => handleQuoteClick(service.title)}
                        className="bg-[hsl(var(--primary-orange))] hover:bg-[hsl(var(--dark-orange))] text-white font-semibold px-8 py-6 rounded-full group"
                      >
                        Get Quote
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 bg-[hsl(var(--muted))]">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
                Why Choose Chris?
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Personal service, professional standards, and competitive prices
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-[hsl(var(--card))] rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-[hsl(var(--primary-orange))] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-4">
                  Personal Service
                </h3>
                <p className="text-white/80">
                  All jobs are completed personally by Chris with care and attention to detail. No subcontractors, no surprises.
                </p>
              </div>

              <div className="text-center p-8 bg-[hsl(var(--card))] rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-[hsl(var(--primary-orange))] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-4">
                  SEPA Registered
                </h3>
                <p className="text-white/80">
                  Fully licensed and SEPA registered for waste removal. All waste is disposed of legally and responsibly.
                </p>
              </div>

              <div className="text-center p-8 bg-[hsl(var(--card))] rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-[hsl(var(--primary-orange))] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-4">
                  Free Quotes
                </h3>
                <p className="text-white/80">
                  Get a free, no-obligation quote via WhatsApp, phone, or Facebook Messenger. Quick responses guaranteed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
        
        <Footer />
      </main>
    </>
  );
};

export default Services;

