import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useFadeIn } from "@/hooks/use-fade-in";
import { Phone, MessageSquare, Mail, Clock, MapPin } from "lucide-react";

// WhatsApp Logo Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <img 
    src="/whatsapp-svgrepo-com.svg" 
    alt="WhatsApp" 
    className={className}
  />
);
import LazyImage from "@/components/LazyImage";
import { trackPhoneCall, trackMessenger, trackQuoteRequest, trackFormInteraction } from "@/utils/analytics";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();
  
  // Fade-in animations
  const { elementRef: titleRef, isVisible: titleVisible } = useFadeIn({ delay: 200 });
  const { elementRef: descriptionRef, isVisible: descriptionVisible } = useFadeIn({ delay: 400 });
  const { elementRef: buttonsRef, isVisible: buttonsVisible } = useFadeIn({ delay: 600 });
  const { elementRef: formRef, isVisible: formVisible } = useFadeIn({ delay: 800 });



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

    const messengerUrl = "https://m.me/cyourmanwithavan";
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


  const handleCallClick = () => {
    trackPhoneCall('hero_quick_call');
    window.location.href = "tel:+447735852822";
  };

  const handleMessengerClick = () => {
    trackMessenger('hero_section');
    const message = `Hi Chris! I'd like to request a quote for your van services.\n\nName: ${formData.name || ''}\nEmail: ${formData.email || ''}\nPhone: ${formData.phone || ''}\nMessage: ${formData.message || ''}\n\nPlease get back to me with a quote. Thanks!`;
    openWhatsApp(message);
  };

  return (
    <section id="hero" className="relative bg-black min-h-screen py-20 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <LazyImage
          src="/back1.jpg"
          alt="Chris, Your Man with a Van background"
          className="w-full h-full object-cover object-[40%_center] md:object-center"
          fallbackSrc="/back1.jpg"
          loading="eager"
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
                ref={titleRef}
                className={`font-display font-bold text-4xl lg:text-5xl text-white leading-tight drop-shadow-lg transition-all duration-1000 ${
                  titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="relative inline-block">
                  {/* Arrow SVG - positioned behind text */}
                  <div className="absolute -top-20 -left-6 -right-42 -bottom-32 md:-left-8 md:-right-40 flex items-center justify-center">
                    <LazyImage
                      src="/PNG NOBACK.svg"
                      alt="Arrow decoration"
                      className="w-full h-full object-contain"
                      fallbackSrc="/PNG NOBACK.svg"
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
                ref={descriptionRef}
                className={`text-lg text-white/90 font-medium max-w-lg leading-relaxed drop-shadow-md transition-all duration-1000 ${
                  descriptionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Professional van services across Ayrshire & beyond - courier services across the UK. Small removals, courier services, tip runs, waste removal, flat-pack assembly, and in-store collection & delivery. SEPA registered, 5-star service, all jobs done personally. Free quotes via WhatsApp.
              </p>
              
              {/* Mobile-only image after subtext */}
              <div className="md:hidden mt-6">
                <LazyImage
                  src="/back1.jpg"
                  alt="Chris, Your Man with a Van mobile image"
                  className="w-full h-auto rounded-lg shadow-lg"
                  fallbackSrc="/back1.jpg"
                />
              </div>
            </div>



            {/* Quick Contact */}
            <div 
              ref={buttonsRef}
              className={`flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/20 transition-all duration-1000 ${
                buttonsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <Button 
                onClick={handleCallClick}
                className="flex items-center gap-8 bg-transparent hover:bg-transparent p-0 h-auto text-white shadow-none hover:shadow-none transition-all duration-300 hover:scale-105"
              >
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg ring-4 ring-blue-500">
                  <Phone className="w-12 h-12 text-blue-700" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-white text-lg font-semibold uppercase tracking-wide">Call for a free quote</span>
                  <span className="text-black sm:text-blue-500 text-3xl font-extrabold">07735 852822</span>
                </div>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            ref={formRef}
            className={`card-service transition-all duration-1000 ${
              formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
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
                    trackMessenger('hero_cta_whatsapp');
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
                    trackMessenger('hero_cta_facebook_messenger');
                    const msg = `Hi Chris! I'd like to request a quote for your van services.`;
                    openMessenger(msg);
                  }}
                  className="w-full sm:w-1/2 bg-gradient-to-r from-[#8C9CFF] to-[#4781FF] hover:from-[#7B8BF0] hover:to-[#3C6FE6] text-white font-bold text-lg h-20 rounded-xl flex items-center justify-center gap-3"
                >
                  <img src="/Facebook_Messenger_logo_2020.svg" alt="Facebook Messenger" className="w-6 h-6" />
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