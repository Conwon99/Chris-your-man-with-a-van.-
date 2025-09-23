import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useFadeIn } from "@/hooks/use-fade-in";
import { Phone, MessageSquare, Mail, Clock, MapPin } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import { trackPhoneCall, trackMessenger, trackQuoteRequest, trackFormInteraction } from "@/utils/analytics";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();
  
  // Fade-in animations
  const { elementRef: titleRef, isVisible: titleVisible } = useFadeIn({ delay: 200 });
  const { elementRef: descriptionRef, isVisible: descriptionVisible } = useFadeIn({ delay: 400 });
  const { elementRef: buttonsRef, isVisible: buttonsVisible } = useFadeIn({ delay: 600 });
  const { elementRef: formRef, isVisible: formVisible } = useFadeIn({ delay: 800 });

  const serviceOptions = [
    'Small Removals',
    'Courier Services', 
    'Tip Runs / Waste Removal',
    'Flat-Pack Assembly',
    'In-Store Collection & Delivery',
    'Garage & Shed Clearances',
    'End-of-Tenancy Clearance',
    'General Waste Removal'
  ];


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/xzzjbzgl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
          _subject: 'Free Quote Request from Website'
        }),
      });

      if (response.ok) {
        // Track successful form submission
        trackQuoteRequest('contact_form', [formData.service]);
        trackFormInteraction('quote_form', 'submit_success');
        
        toast({
          title: "Quote request sent!",
          description: "Thank you for your request. We'll respond within 24 hours.",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      trackFormInteraction('quote_form', 'submit_error');
      toast({
        title: "Error sending request",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  const handleCallClick = () => {
    trackPhoneCall('hero_section');
    window.location.href = "tel:+447735852822";
  };

  const handleMessengerClick = () => {
    trackMessenger('hero_section');
    window.open("https://wa.me/447735852822", "_blank");
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
                className="flex items-center gap-3 bg-white hover:bg-white/90 text-black rounded-xl px-8 py-5 justify-start text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-6 h-6" />
                Call: 07735 852822
              </Button>
              <Button 
                onClick={handleMessengerClick}
                className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white rounded-xl px-8 py-5 justify-start text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <MessageSquare className="w-6 h-6" />
                WhatsApp
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-white font-semibold">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                    className="mt-2 rounded-xl border-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-white font-semibold">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    required
                    className="mt-2 rounded-xl border-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-white font-semibold">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                  className="mt-2 rounded-xl border-2"
                />
              </div>


              <div>
                <Label htmlFor="message" className="text-white font-semibold">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Tell us about your van service needs..."
                  className="mt-2 rounded-xl border-2 min-h-[100px]"
                />
              </div>

              <div className="text-center">
                <p className="text-white/80 text-sm mb-4">
                  This message will be sent to my email
                </p>
              </div>

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-4 px-8 rounded-xl">
                SEND
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;