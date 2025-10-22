import { Star, ArrowRight, ExternalLink } from "lucide-react";
import { trackNavigation } from "@/utils/analytics";

const Reviews = () => {
  const reviews = [
    {
      name: "Ali Mitch",
      location: "",
      rating: 5,
      text: "Fantastic service. efficient and kept in touch throughout. Will definitely use again. highly recommend",
      service: ""
    },
    {
      name: "Sammy Gibson Stead",
      location: "",
      rating: 5,
      text: "I used Chris for a family member today who needed items picked up and delivered to new house . Very professional , queries answered promptly which was much appreciated. Price , time and updates all very clearly communicated before and on the day . Absolutey recommend these services, thankyou.",
      service: ""
    },
    {
      name: "Al Walking Ayrshire",
      location: "",
      rating: 5,
      text: "I contacted Chris at short notice for a job to move a dining table from Lanarkshire to Ayrshire. Chis was friendly, approachable and very good value. The table was picked up and delivered to my home in Ayrshire in perfect condition. I will definitely use Chris again 👍🏻",
      service: ""
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-accent fill-current" : "text-muted-foreground/30"
        }`}
      />
    ));
  };

  const handleGoogleReviewClick = () => {
    trackNavigation('google-reviews');
    window.open('https://g.page/r/CTXFEt51p7p3EBM/review', '_blank');
  };

  // Google Icon Component
  const GoogleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );

  return (
    <section id="reviews" className="py-20 px-4 relative overflow-hidden" style={{ backgroundImage: 'url(/vanimg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent z-0"></div>
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
          <div className="mb-8 lg:mb-0">
            
            {/* Main title */}
            <h2 className="font-display font-bold text-6xl lg:text-7xl text-white mb-4">
              REVIEWS
            </h2>
          </div>
          
          {/* Contact button */}
          <button
            onClick={() => {
              trackNavigation('contact-form');
              document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white border-2 border-black text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            CONTACT US NOW <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-4">
                {renderStars(review.rating)}
              </div>
              
              <blockquote className="text-gray-700 mb-4 leading-relaxed text-sm">
                "{review.text}"
              </blockquote>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 text-base">
                  {review.name}
                </h4>
                {/* Facebook logo placeholder */}
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">f</span>
                  </div>
                  <span className="text-xs text-gray-500">Facebook</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leave a Review Button */}
        <div className="text-center">
          <button
            onClick={handleGoogleReviewClick}
            className="bg-white hover:bg-gray-100 text-gray-900 border-2 border-gray-300 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center gap-2"
          >
            <GoogleIcon />
            LEAVE A REVIEW ON GOOGLE
          </button>
        </div>

      </div>
    </section>
  );
};

export default Reviews;