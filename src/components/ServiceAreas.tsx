import { MapPin } from "lucide-react";

const ServiceAreas = () => {
  const serviceAreas = [
    "Cumnock",
    "Ayr",
    "Kilmarnock",
    "Irvine",
    "Troon",
    "Prestwick"
  ];

  return (
    <section id="service-areas" className="py-20 px-4 bg-gradient-to-b from-background to-[hsl(var(--muted))]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-left mb-16">
          <div className="flex items-center mb-4">
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mr-6">
              <span className="text-primary">SERVICE</span> AREAS
            </h2>
            <div className="flex-1 h-px bg-[hsl(var(--asphalt-grey))]"></div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl">
            We proudly serve Cumnock and surrounding areas across Ayrshire. <strong className="text-primary">Courier services are available across the UK.</strong> Contact us to confirm coverage for your specific location.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Google Maps */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-4 border-2 border-primary/20">
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
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
              <div className="mt-4 text-center">
                <h3 className="font-display font-bold text-xl text-primary mb-2">
                  Ayrshire Coverage Area
                </h3>
                <p className="text-muted-foreground text-sm">
                  Serving Cumnock and surrounding areas
                </p>
              </div>
            </div>
          </div>

          {/* Service areas list */}
          <div className="space-y-8">

            <div className="grid grid-cols-2 gap-4">
              {serviceAreas.map((area, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border hover:border-primary/30 transition-colors group"
                >
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                    {area}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
              <h4 className="font-display font-bold text-xl text-foreground mb-3">
                Need Service Outside These Areas?
              </h4>
              <p className="text-muted-foreground mb-4">
                We may be able to help with services outside our main coverage area. <strong className="text-primary">Courier services are available across the UK</strong> - contact us to discuss your specific needs and we'll do our best to accommodate you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+447735852822"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors"
                >
                  Call 07735 852822
                </a>
                <a
                  href="https://wa.me/447735852822"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-colors"
                >
                  WhatsApp Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
