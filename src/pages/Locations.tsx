import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, MessageSquare } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { trackMessenger, trackNavigation } from "@/utils/analytics";

// WhatsApp Logo Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <img 
    src="/whatsapp-svgrepo-com.svg" 
    alt="WhatsApp" 
    className={className}
  />
);

const Locations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Ayrshire towns and areas served
  const locations = [
    {
      name: "Cumnock",
      slug: "cumnock",
      nearbyAreas: ["New Cumnock", "Auchinleck", "Ochiltree", "Catrine"]
    },
    {
      name: "Ayr",
      slug: "ayr",
      nearbyAreas: ["Alloway", "Prestwick", "Troon", "Doonfoot", "Heads of Ayr"]
    },
    {
      name: "Kilmarnock",
      slug: "kilmarnock",
      nearbyAreas: ["Dundonald", "Town Centre", "Hurlford", "Crosshouse", "Stewarton"]
    },
    {
      name: "Irvine",
      slug: "irvine",
      nearbyAreas: ["Kilwinning", "Troon", "Ayr", "Dreghorn"]
    },
    {
      name: "Troon",
      slug: "troon",
      nearbyAreas: ["Prestwick", "Ayr", "Irvine", "Barassie"]
    },
    {
      name: "Prestwick",
      slug: "prestwick",
      nearbyAreas: ["Ayr", "Troon", "Monkton", "Prestwick Airport"]
    },
    {
      name: "Maybole",
      slug: "maybole",
      nearbyAreas: ["Ayr", "Girvan", "Crosshill", "Dailly"]
    },
    {
      name: "Girvan",
      slug: "girvan",
      nearbyAreas: ["Ayr", "Maybole", "Turnberry", "Ballantrae"]
    },
    {
      name: "Stewarton",
      slug: "stewarton",
      nearbyAreas: ["Kilmarnock", "Irvine", "Dreghorn"]
    },
    {
      name: "Dalrymple",
      slug: "dalrymple",
      nearbyAreas: ["Ayr", "Mauchline", "Cumnock"]
    },
    {
      name: "Mauchline",
      slug: "mauchline",
      nearbyAreas: ["Kilmarnock", "Cumnock", "Ayr"]
    },
    {
      name: "Dalmellington",
      slug: "dalmellington",
      nearbyAreas: ["Ayr", "Cumnock", "Patna"]
    },
    {
      name: "Patna",
      slug: "patna",
      nearbyAreas: ["Ayr", "Dalmellington", "Cumnock"]
    },
    {
      name: "Auchinleck",
      slug: "auchinleck",
      nearbyAreas: ["Cumnock", "Mauchline", "Kilmarnock"]
    },
    {
      name: "Dreghorn",
      slug: "dreghorn",
      nearbyAreas: ["Irvine", "Kilmarnock", "Troon"]
    },
    {
      name: "Kilwinning",
      slug: "kilwinning",
      nearbyAreas: ["Irvine", "Ayr", "Beith"]
    },
    {
      name: "Beith",
      slug: "beith",
      nearbyAreas: ["Irvine", "Kilmarnock", "Kilwinning"]
    },
    {
      name: "Dalry",
      slug: "dalry",
      nearbyAreas: ["Irvine", "Kilwinning", "Beith"]
    },
    {
      name: "Largs",
      slug: "largs",
      nearbyAreas: ["Irvine", "West Kilbride", "Fairlie"]
    },
    {
      name: "Saltcoats",
      slug: "saltcoats",
      nearbyAreas: ["Ardrossan", "Irvine", "Kilwinning"]
    },
    {
      name: "Ardrossan",
      slug: "ardrossan",
      nearbyAreas: ["Saltcoats", "Irvine", "West Kilbride"]
    },
    {
      name: "Darvel",
      slug: "darvel",
      nearbyAreas: ["Kilmarnock", "Newmilns", "Galston"]
    },
    {
      name: "Newmilns",
      slug: "newmilns",
      nearbyAreas: ["Darvel", "Kilmarnock", "Galston"]
    },
    {
      name: "Galston",
      slug: "galston",
      nearbyAreas: ["Kilmarnock", "Darvel", "Newmilns"]
    }
  ];

  const handleWhatsAppClick = () => {
    trackMessenger('locations_page_whatsapp');
    const defaultMessage = "Hi Chris! I'd like to request a quote via WhatsApp. Could you please get back to me?";
    try {
      const phone = "447735852822";
      const encoded = encodeURIComponent(defaultMessage);
      const waUrl = `https://wa.me/${phone}?text=${encoded}`;
      window.open(waUrl, "_blank");
    } catch {}
  };

  const handleFacebookMessengerClick = () => {
    trackMessenger('locations_page_messenger');
    const messengerUrl = "https://m.me/cyourmanwithavan";
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = messengerUrl;
    } else {
      window.open(messengerUrl, "_blank");
    }
  };

  const handleLocationClick = (locationName: string) => {
    trackNavigation(`location_${locationName.toLowerCase()}`);
  };

  return (
    <>
      <Helmet>
        <title>Van Services Ayrshire | Service Locations | Removals & Courier Services</title>
        <meta name="description" content="Van services, removals, and courier services across Ayrshire. Serving Cumnock, Ayr, Kilmarnock, Irvine, Troon, Prestwick. Professional man with a van, local mover, and moving van services." />
        <meta name="keywords" content="van services ayrshire, removals ayrshire, courier services ayrshire, man with a van ayrshire, local mover ayrshire, moving van ayrshire, removals cumnock, removals ayr, removals kilmarnock, removals irvine, removals troon, removals prestwick" />
        <link rel="canonical" href="https://chrisyourmanwithavan.netlify.app/locations" />
        <meta property="og:title" content="Service Locations | Chris, Your Man with a Van" />
        <meta property="og:description" content="Van services across Ayrshire. Serving Cumnock, Ayr, Kilmarnock, Irvine, Troon, Prestwick and surrounding areas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chrisyourmanwithavan.netlify.app/locations" />
      </Helmet>

      <main className="min-h-screen">
        <Navigation />
        
        {/* Locations Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden min-h-[50vh] flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <LazyImage
              src="/vanfront.jpg"
              alt="Chris, Your Man with a Van service locations"
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
                Service Locations
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-4">
                Mobile Van Services Across Cumnock & Ayrshire Metro Areas
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Chris provides comprehensive mobile van services throughout Ayrshire. Our strategically positioned service ensures rapid response times for removals, courier services, waste removal, and on-site assistance.
              </p>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-20 px-4 bg-[hsl(var(--background))]">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
                Ayrshire
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                We proudly serve towns and villages across Ayrshire. <strong className="text-[hsl(var(--primary-orange))]">Courier services are available across the UK.</strong>
              </p>
            </div>

            {/* Locations Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {locations.map((location, index) => (
                <Link
                  key={index}
                  to={`/locations/${location.slug}`}
                  onClick={() => handleLocationClick(location.name)}
                  className="group"
                >
                  <div className="card-service h-full flex flex-col hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[hsl(var(--primary-orange))] rounded-full flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-display text-xl font-bold text-white group-hover:text-[hsl(var(--primary-orange))] transition-colors">
                            {location.name}
                          </h3>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-white/60 group-hover:text-[hsl(var(--primary-orange))] group-hover:translate-x-1 transition-all" />
                    </div>
                    
                    {location.nearbyAreas && location.nearbyAreas.length > 0 && (
                      <div className="mt-auto pt-4 border-t border-white/10">
                        <p className="text-xs text-white/60 mb-2">Service Areas:</p>
                        <p className="text-sm text-white/80 leading-relaxed">
                          {location.nearbyAreas.slice(0, 3).join(", ")}
                          {location.nearbyAreas.length > 3 && " and more"}
                        </p>
                      </div>
                    )}
                    
                    <div className="mt-4 text-right">
                      <span className="text-xs text-[hsl(var(--primary-orange))] font-semibold">
                        View Details →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage Stats Section */}
        <section className="py-20 px-4 bg-[hsl(var(--muted))]">
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-8 bg-[hsl(var(--card))] rounded-2xl shadow-lg">
                <div className="text-5xl font-bold text-[hsl(var(--primary-orange))] mb-2">
                  45 min
                </div>
                <div className="text-white/80 text-lg">
                  Average Response Time
                </div>
              </div>
              
              <div className="p-8 bg-[hsl(var(--card))] rounded-2xl shadow-lg">
                <div className="text-5xl font-bold text-[hsl(var(--primary-orange))] mb-2">
                  24/7
                </div>
                <div className="text-white/80 text-lg">
                  Available Service
                </div>
              </div>
              
              <div className="p-8 bg-[hsl(var(--card))] rounded-2xl shadow-lg">
                <div className="text-5xl font-bold text-[hsl(var(--primary-orange))] mb-2">
                  {locations.length}+
                </div>
                <div className="text-white/80 text-lg">
                  Towns Covered
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full Coverage Area Section */}
        <section className="py-20 px-4 bg-[hsl(var(--background))]">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
                Full Coverage Area
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                We cover all of Ayrshire and beyond. Courier services are available across the UK.
              </p>
            </div>

            {/* Map */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12">
              <div className="bg-gradient-to-br from-[hsl(var(--primary-orange))]/10 to-[hsl(var(--primary-orange))]/5 rounded-2xl p-4 border-2 border-[hsl(var(--primary-orange))]/20">
                <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2258.5!2d-4.5!3d55.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488f8b8b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sAyrshire%2C%20UK!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Chris Van Services - Ayrshire Coverage Area"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-[hsl(var(--primary-orange))]/20 to-[hsl(var(--sunshine-yellow))]/20 rounded-2xl p-8 border-2 border-[hsl(var(--primary-orange))]/30 text-center">
              <h3 className="font-display text-3xl font-bold text-white mb-4">
                Get Your Free Quote
              </h3>
              <p className="text-xl text-white/90 mb-6">
                Available Day & Night
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleWhatsAppClick}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-6 rounded-xl flex items-center gap-3 text-lg"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  WhatsApp Me
                </Button>
                <Button
                  onClick={handleFacebookMessengerClick}
                  className="bg-gradient-to-r from-[#8C9CFF] to-[#4781FF] hover:from-[#7B8BF0] hover:to-[#3C6FE6] text-white font-bold px-8 py-6 rounded-xl flex items-center gap-3 text-lg"
                >
                  <MessageSquare className="w-5 h-5" />
                  Facebook Messenger
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Locations;

