import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { trackExternalLink, trackNavigation } from "@/utils/analytics";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative text-white py-16 px-4" style={{ backgroundImage: 'url(/footer2.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-2xl font-bold text-[hsl(var(--sunshine-yellow))] mb-4">
                Chris, Your Man with a Van
              </h3>
              <p className="text-white leading-relaxed">
                Friendly, reliable van services across Cumnock and surrounding Ayrshire areas. 
                Professional small removals, courier services, tip runs, waste removal, flat-pack assembly & in-store collection & delivery with a personal touch.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[hsl(var(--sunshine-yellow))]" />
                <span className="text-white">+44 7735 852822</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[hsl(var(--sunshine-yellow))]" />
                <a href="mailto:chris@chrisyourmanwithavan.com" className="text-white hover:text-[hsl(var(--sunshine-yellow))] transition-colors">
                  chris@chrisyourmanwithavan.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[hsl(var(--sunshine-yellow))]" />
                <span className="text-white">WhatsApp: 07735 852822</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[hsl(var(--sunshine-yellow))]" />
                <span className="text-white">Cumnock & Ayrshire, Scotland</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xl font-bold text-[hsl(var(--sunshine-yellow))] mb-6">
              Our Services
            </h4>
            <ul className="space-y-3 text-white">
              <li>
                <Link to="/services" onClick={() => trackNavigation('services')} className="hover:text-[hsl(var(--sunshine-yellow))] transition-colors">
                  • Small Removals & House Moves
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={() => trackNavigation('services')} className="hover:text-[hsl(var(--sunshine-yellow))] transition-colors">
                  • Courier Services & Delivery
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={() => trackNavigation('services')} className="hover:text-[hsl(var(--sunshine-yellow))] transition-colors">
                  • Tip Runs & Waste Removal
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={() => trackNavigation('services')} className="hover:text-[hsl(var(--sunshine-yellow))] transition-colors">
                  • Flat-Pack Assembly
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={() => trackNavigation('services')} className="hover:text-[hsl(var(--sunshine-yellow))] transition-colors">
                  • In-Store Collection & Delivery
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={() => trackNavigation('services')} className="hover:text-[hsl(var(--sunshine-yellow))] transition-colors">
                  • End-of-Tenancy Clearance
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-display text-xl font-bold text-[hsl(var(--sunshine-yellow))] mb-6">
              Service Areas
            </h4>
            <ul className="space-y-3 text-white">
              <li>
                <Link to="/locations" onClick={() => trackNavigation('locations')} className="hover:text-[hsl(var(--sunshine-yellow))] transition-colors">
                  • Van Services in Ayrshire
                </Link>
              </li>
              <li>
                <Link to="/locations" onClick={() => trackNavigation('locations')} className="hover:text-[hsl(var(--sunshine-yellow))] transition-colors">
                  • Removals in Ayrshire
                </Link>
              </li>
              <li>
                <Link to="/locations" onClick={() => trackNavigation('locations')} className="hover:text-[hsl(var(--sunshine-yellow))] transition-colors">
                  • Courier Services across the UK
                </Link>
              </li>
              <li>
                <Link to="/locations" onClick={() => trackNavigation('locations')} className="hover:text-[hsl(var(--sunshine-yellow))] transition-colors">
                  • Waste Removal in Ayrshire
                </Link>
              </li>
              <li>
                <Link to="/locations" onClick={() => trackNavigation('locations')} className="hover:text-[hsl(var(--sunshine-yellow))] transition-colors">
                  • Delivery Services in Ayrshire
                </Link>
              </li>
              <li>
                <Link to="/locations" onClick={() => trackNavigation('locations')} className="hover:text-[hsl(var(--sunshine-yellow))] transition-colors">
                  • View All Locations
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-display text-xl font-bold text-[hsl(var(--sunshine-yellow))] mb-6">
              Follow Us
            </h4>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.facebook.com/chrisyourmanwithavankilmarnock" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackExternalLink('https://www.facebook.com/chrisyourmanwithavankilmarnock', 'Facebook')}
                className="flex items-center gap-2 text-[hsl(var(--sunshine-yellow))] hover:text-[hsl(var(--donut-pink))] transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span>Follow us on Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[hsl(var(--sunshine-yellow))] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[hsl(var(--sunshine-yellow))] text-sm">
              © {currentYear} Chris, Your Man with a Van. All rights reserved.
            </div>
                    <div className="text-[hsl(var(--sunshine-yellow))] text-sm text-center">
                      Website designed by <a href="https://codapixel.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline">CodaPixel</a>
                    </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;