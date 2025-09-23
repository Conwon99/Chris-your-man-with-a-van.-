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

  const handleFacebookReviewClick = () => {
    trackNavigation('facebook-reviews');
    window.open('https://www.facebook.com/cyourmanwithavan/reviews', '_blank');
  };

  // Facebook Icon Component
  const FacebookIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
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
            onClick={handleFacebookReviewClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center gap-2"
          >
            <FacebookIcon />
            LEAVE A REVIEW ON FACEBOOK
          </button>
        </div>

      </div>
    </section>
  );
};

export default Reviews;