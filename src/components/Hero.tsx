import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { MapPin } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import { trackWhatsAppClick, trackFacebookMessengerClick, trackQuoteRequest, trackFormInteraction } from "@/utils/analytics";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();



  const openWhatsApp = (text: string): void => {
    try {
      const phone = "447735852822"; // international format, no +
      const encoded = encodeURIComponent(text);
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      const waUrl = `https://wa.me/${phone}?text=${encoded}`;
      if (isMobile) {
        window.location.href = waUrl;
      } else {
        window.open(waUrl, "_blank");
      }
    } catch {}
  };

  const openMessenger = async (text: string): Promise<void> => {
    try {
      if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        try { document.execCommand('copy'); } catch {}
        document.body.removeChild(ta);
      }
    } catch {}

    const messengerUrl = "https://m.me/chrisyourmanwithavankilmarnock";
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = messengerUrl;
    } else {
      window.open(messengerUrl, "_blank");
    }
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Create WhatsApp message with form data
      const whatsappMessage = `Hi Chris! I'd like to request a quote for your van services.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}

Please get back to me with a quote. Thanks!`;

      // Open WhatsApp with pre-filled message (mobile uses app, desktop uses web)
      openWhatsApp(whatsappMessage);

        // Track successful form submission
      trackQuoteRequest('contact_form', []);
        trackFormInteraction('quote_form', 'submit_success');
        
        toast({
        title: "Redirecting to WhatsApp!",
        description: "You'll be taken to WhatsApp to send your quote request.",
        });
        
      // Already opened via openWhatsApp above
      
      // Reset form after opening WhatsApp
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      }, 100);
      
    } catch (error) {
      trackFormInteraction('quote_form', 'submit_error');
      toast({
        title: "Error preparing request",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="hero" className="relative bg-black min-h-screen py-20 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <LazyImage
          src="/back1.webp"
          alt="Chris, Your Man with a Van background"
          className="w-full h-full object-cover object-[40%_center] md:object-center"
          fallbackSrc="/back1.jpg"
          loading="eager"
          fetchPriority="high"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent md:bg-gradient-to-r md:from-black/80 md:via-black/40 md:to-transparent"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-end">
          {/* Text Content */}
          <div className="text-left space-y-8 pb-8">
            <div className="space-y-6">
              
              <h1 
                className="font-display font-bold text-4xl lg:text-5xl text-white leading-tight drop-shadow-lg"
              >
                <div className="relative inline-block">
                  {/* Arrow SVG - positioned behind text */}
                  <div className="absolute -top-20 -left-6 -right-42 -bottom-32 md:-left-8 md:-right-40 flex items-center justify-center">
                    <LazyImage
                      src="/PNG NOBACK.svg"
                      alt="Arrow decoration"
                      className="w-full h-full object-contain"
                      fallbackSrc="/PNG NOBACK.svg"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-blue-600 italic text-6xl lg:text-7xl relative z-10">Chris</span>
                  <span className="text-blue-600 relative z-10">,</span>
                </div>
                <br />YOUR MAN WITH A VAN
              </h1>
              
              {/* Location Subtext */}
              <div className="flex items-center gap-3 mt-4">
                <MapPin className="w-6 h-6 text-blue-600" />
                <span className="text-xl lg:text-2xl font-semibold text-white drop-shadow-md">
                  Ayrshire & Beyond
                </span>
              </div>
              
              <p 
                className="text-lg text-white/90 font-medium max-w-lg leading-relaxed drop-shadow-md"
              >
                Professional van services across Ayrshire & beyond - courier services across the UK. Small removals, courier services, tip runs, waste removal, flat-pack assembly, and in-store collection & delivery. SEPA registered, 5-star service, all jobs done personally. Free quotes via WhatsApp.
              </p>
              
              {/* Special Offer Banner */}
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3">
                {/* Badge */}
                <div className="relative bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full shadow-lg border-2 border-green-400 transform hover:scale-105 transition-transform duration-200 self-center sm:self-auto">
                  <div className="text-center">
                    <div className="text-xl font-black">
                      £20 OFF
                    </div>
                  </div>
                  {/* Badge shine effect */}
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-full"></div>
                </div>
                
                {/* Description text */}
                <div className="flex-1 text-center sm:text-left">
                  <span className="text-sm font-semibold text-white drop-shadow-md">
                    For every full house removal booked in before the end of October.
                  </span>
                </div>
              </div>
              
              {/* Mobile-only image after subtext */}
              <div className="md:hidden mt-6">
                <LazyImage
                  src="/back1.webp"
                  alt="Chris, Your Man with a Van mobile image"
                  className="w-full h-auto rounded-lg shadow-lg"
                  fallbackSrc="/back1.jpg"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className="card-service"
            id="contact-form"
          >
            <div className="text-center mb-6">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-2">
                GET A FREE QUOTE.
              </h2>
            </div>
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-white/80 text-sm mb-2">
                  Choose how you’d like to get your free quote instantly:
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => {
                    trackWhatsAppClick('hero_cta');
                    const msg = `Hi Chris! I'd like to request a quote for your van services.`;
                    openWhatsApp(msg);
                  }}
                  className="w-full sm:w-1/2 bg-green-600 hover:bg-green-700 text-white font-bold text-lg h-20 rounded-xl flex items-center justify-center gap-3"
                >
                  <img src="/whatsapp-svgrepo-com.svg" alt="WhatsApp" className="w-6 h-6" />
                  WhatsApp Me
                </Button>
                <Button 
                  onClick={() => {
                    trackFacebookMessengerClick('hero_cta');
                    const msg = `Hi Chris! I'd like to request a quote for your van services.`;
                    openMessenger(msg);
                  }}
                  className="w-full sm:w-1/2 bg-gradient-to-r from-[#8C9CFF] to-[#4781FF] hover:from-[#7B8BF0] hover:to-[#3C6FE6] text-white font-bold text-lg h-20 rounded-xl flex items-center justify-center gap-3"
                >
                  <img src="/Facebook_Messenger_logo_2020.svg" alt="" className="w-6 h-6" />
                  Facebook Messenger
              </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;