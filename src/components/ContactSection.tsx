import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";
import { trackPhoneCall, trackMessenger, trackQuoteRequest } from "@/utils/analytics";
import { useFadeIn } from "@/hooks/use-fade-in";

const ContactSection = () => {
  // Fade-in animations
  const { elementRef: headerRef, isVisible: headerVisible } = useFadeIn({ delay: 200 });
  const { elementRef: buttonsRef, isVisible: buttonsVisible } = useFadeIn({ delay: 400 });

  const handleCallClick = () => {
    trackPhoneCall('contact_section');
    window.location.href = "tel:+447735852822";
  };

  const handleMessengerClick = () => {
    trackMessenger('contact_section');
    window.open("https://wa.me/447735852822", "_blank");
  };

  const handleFacebookClick = () => {
    trackMessenger('contact_section');
    window.open("https://www.facebook.com/cyourmanwithavan/", "_blank");
  };

  const handleQuoteClick = () => {
    trackQuoteRequest('contact_section_button', []);
    window.open("https://wa.me/447735852822", "_blank");
  };

  return (
    <section id="contact-form" className="py-20 px-4 bg-[hsl(var(--muted))]">
      <div className="container mx-auto max-w-4xl">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
            Get Your Free Quote
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Contact Chris for professional van services across Ayrshire. Get your free quote via WhatsApp, call, or Facebook Messenger.
          </p>
        </div>

        <div 
          ref={buttonsRef}
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto transition-all duration-1000 ${
            buttonsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Get Free Quote Button */}
                <Button 
            onClick={handleQuoteClick}
            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-4 rounded-xl"
          >
            Get a Free Quote
                </Button>

          {/* WhatsApp Button */}
                <Button 
                  onClick={handleMessengerClick}
            className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl flex items-center gap-3"
          >
            <MessageSquare className="w-5 h-5" />
            WhatsApp
                </Button>

          {/* Call Button */}
                    <Button
            onClick={handleCallClick}
            className="w-full sm:w-auto bg-white hover:bg-white/90 text-black font-semibold px-8 py-4 rounded-xl flex items-center gap-3"
          >
            <Phone className="w-5 h-5" />
            Call: 07735 852822
                    </Button>
              </div>

        {/* Facebook Link */}
        <div className="text-center mt-8">
          <Button 
            onClick={handleFacebookClick}
            variant="ghost"
            className="text-white/80 hover:text-white hover:bg-white/10"
          >
            Or visit us on Facebook
              </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;