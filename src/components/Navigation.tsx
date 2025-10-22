import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import LazyImage from "@/components/LazyImage";
import { trackPhoneCall, trackNavigation, trackQuoteRequest } from "@/utils/analytics";
import { useScrollDetection } from "@/hooks/use-scroll-detection";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrollDetection(100); // Detect scroll past 100px

  const handleCallClick = () => {
    trackPhoneCall('navigation');
    window.location.href = "tel:+447735852822";
  };

  const scrollToSection = (sectionId: string) => {
    trackNavigation(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleQuoteClick = () => {
    trackQuoteRequest('navigation_button', []);
    scrollToSection("contact-form");
  };

  const navItems = [
    { label: "Home", onClick: () => scrollToSection("hero") },
    { label: "Projects", onClick: () => scrollToSection("project-showcase") },
    { label: "Services", onClick: () => scrollToSection("services") },
    { label: "Reviews", onClick: () => scrollToSection("reviews") },
    { label: "FAQ", onClick: () => scrollToSection("faq") },
    { label: "Contact", onClick: () => scrollToSection("contact-form") },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-sm border-b border-gray-800' 
        : 'bg-transparent backdrop-blur-none border-b border-transparent'
    }`}>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-20 h-20">
              <LazyImage
                src="/vanlogo.png"
                alt="Chris, Your Man with a Van logo"
                className="w-full h-full object-contain"
                fallbackSrc="/vanlogo.png"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.onClick}
                className={`transition-colors duration-300 font-medium ${
                  isScrolled 
                    ? 'text-white hover:text-white/80' 
                    : 'text-primary-foreground hover:text-primary-foreground/80'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={handleCallClick}
              variant="ghost"
              className={`flex items-center gap-2 transition-colors duration-300 ${
                isScrolled 
                  ? 'text-white/80 hover:text-white' 
                  : 'text-primary-foreground/80 hover:text-primary-foreground'
              }`}
            >
              <Phone className="w-4 h-4" />
              07735 852822
            </Button>
            <Button
              onClick={handleQuoteClick}
              className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
                isScrolled 
                  ? 'bg-green-600 hover:bg-green-700 text-white' 
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
            >
              Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 transition-colors duration-300 ${
                isScrolled ? 'text-white' : 'text-primary-foreground'
              }`} />
            ) : (
              <Menu className={`w-6 h-6 transition-colors duration-300 ${
                isScrolled ? 'text-white' : 'text-primary-foreground'
              }`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden border-t transition-all duration-300 ${
            isScrolled 
              ? 'bg-black/95 border-gray-800' 
              : 'bg-primary border-primary-foreground/20'
          }`}>
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className={`block w-full text-left px-4 py-2 transition-colors duration-300 ${
                    isScrolled 
                      ? 'text-white hover:text-white/80 hover:bg-white/10' 
                      : 'text-primary-foreground hover:text-primary-foreground/80 hover:bg-primary-foreground/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-4 border-t border-primary-foreground/20 space-y-3">
                <Button
                  onClick={handleCallClick}
                  variant="ghost"
                  className="w-full justify-start flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80"
                >
                  <Phone className="w-4 h-4" />
                  Call: 07735 852822
                </Button>
                <Button
                  onClick={handleQuoteClick}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  Get Free Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;