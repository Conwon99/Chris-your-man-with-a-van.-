import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, ArrowRight, MessageSquare, Check } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { trackWhatsAppClick, trackFacebookMessengerClick, trackNavigation } from "@/utils/analytics";

// WhatsApp Logo Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <img 
    src="/whatsapp-svgrepo-com.svg" 
    alt="WhatsApp" 
    className={className}
  />
);

const LocationDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Location data with expanded local content
  const locationData: Record<string, {
    name: string;
    fullName: string;
    nearbyAreas: string[];
    description: string;
    localContent: {
      about: string;
      services: string;
      commonRequests: string[];
      localAreas: { name: string; description: string }[];
      whyLocation: string;
      movingTips: string;
    };
  }> = {
    cumnock: {
      name: "Cumnock",
      fullName: "Cumnock, Ayrshire",
      nearbyAreas: ["New Cumnock", "Auchinleck", "Ochiltree", "Catrine", "Dumfries House Estate"],
      description: "Cumnock is my home base and where I've been serving the local community for years. I know the area inside out and provide fast, reliable van services throughout Cumnock and the surrounding Ayrshire towns.",
      localContent: {
        about: "Cumnock is a historic market town in East Ayrshire, known for its rich mining heritage and close-knit community. Situated in the heart of Ayrshire, Cumnock serves as an important hub connecting the region. The town has seen significant residential growth in recent years, with many families moving to the area for its affordable housing, good schools, and rural charm while maintaining easy access to major towns. Whether you're moving into one of Cumnock's residential areas, relocating from the surrounding villages, or need assistance with deliveries around the town centre, I understand the local geography perfectly. From the historic town centre to newer developments, I've helped countless Cumnock residents with their moving and delivery needs.",
        services: `Van services in Cumnock cover everything from small house moves across the town's various housing estates, to courier runs between Cumnock and nearby Kilmarnock or Ayr. One of the most common requests in Cumnock is help with tip runs - whether it's clearing out a garage in one of the traditional stone-built properties, or assisting with garden waste from the many family homes with gardens. I also frequently help Cumnock residents with furniture deliveries, particularly those who've purchased items online and need them collected from delivery points or larger stores in Ayr or Kilmarnock. The SEPA registered waste removal service is particularly valuable for Cumnock residents, as it provides a legal and convenient way to dispose of unwanted items without the hassle of trips to recycling centres.`,
        commonRequests: [
          "House moves within Cumnock's housing estates",
          "Tip runs from residential properties",
          "Furniture delivery from Ayr and Kilmarnock stores",
          "Garage and shed clearances",
          "End-of-tenancy clearances for rental properties",
          "Courier services connecting Cumnock to surrounding towns"
        ],
        localAreas: [
          { name: "Cumnock Town Centre", description: "Serving the historic town centre with its shops, residential properties, and commercial premises. Quick access for deliveries and collections." },
          { name: "New Cumnock", description: "Covering New Cumnock and the surrounding rural area, including farmhouse moves and deliveries to properties in the countryside." },
          { name: "Auchinleck", description: "Regular service to Auchinleck, just a short drive from Cumnock, for house moves, deliveries, and waste removal." },
          { name: "Ochiltree", description: "Serving Ochiltree village and the surrounding area, including properties in the countryside between Cumnock and Ayr." },
          { name: "Catrine", description: "Covering Catrine village and the River Ayr area, popular for residential moves and property clearances." },
          { name: "Dumfries House Estate", description: "Serving properties near the historic Dumfries House Estate, including collection and delivery services." }
        ],
        whyLocation: "Cumnock's central location in East Ayrshire makes it an ideal base for serving the wider region. The town's excellent road connections mean I can quickly reach anywhere in Ayrshire. Many residents appreciate having a local van service operator who understands the area's unique challenges - from narrow residential streets to properties in more rural locations. Being based in Cumnock means I can often provide same-day service when needed, especially important for urgent courier deliveries or last-minute moving assistance. The community-focused approach works well in Cumnock, where word-of-mouth recommendations are powerful and personal service matters.",
        movingTips: "When moving in Cumnock, consider that some residential streets can be narrow, so planning ahead helps. Many properties have gardens or outbuildings that may need clearing. Parking can be limited in the town centre, so coordinating with neighbours helps. For properties in surrounding villages like Auchinleck or New Cumnock, allow extra time for rural road access. I know all the best routes around Cumnock and can advise on parking and access when you book."
      }
    },
    ayr: {
      name: "Ayr",
      fullName: "Ayr, Ayrshire",
      nearbyAreas: ["Alloway", "Prestwick", "Troon", "Doonfoot", "Heads of Ayr", "Ayr Town Centre"],
      description: "Serving Ayr and the surrounding coastal areas with professional van services. From house moves to courier deliveries, I provide reliable service throughout Ayr and nearby communities.",
      localContent: {
        about: "Ayr is Ayrshire's largest town and a bustling coastal hub with a population of around 47,000. As the county town of South Ayrshire, Ayr combines a rich historical heritage with modern amenities, making it a popular destination for both residents and businesses. The town centre features excellent shopping, restaurants, and services, while the seafront area and nearby coastal villages like Alloway attract many families. Ayr benefits from excellent transport links including the main train line and proximity to Prestwick Airport, making it an important logistics hub. The town's mix of Victorian terraces, modern housing developments, and coastal properties means there's always demand for removals, deliveries, and waste removal services. From student moves near the university to family relocations in Doonfoot or Heads of Ayr, I cover all of Ayr comprehensively.",
        services: `Van services in Ayr are diverse due to the town's size and variety of property types. House moves are particularly common, with families moving between Ayr's different residential areas, or relocating to and from the town. The proximity to large retail stores means I frequently help Ayr residents with furniture collection and delivery - whether from Ayr's own retail parks or online purchases needing delivery. Tip runs are very popular in Ayr, especially from properties with gardens or those undergoing renovations. The coastal location means many properties have outdoor spaces that need clearing, and the tourist season can mean end-of-tenancy clearances for holiday lets. Courier services in Ayr are fast-growing, connecting the town with Prestwick Airport businesses, local companies needing same-day delivery, and residents ordering items for next-day collection.`,
        commonRequests: [
          "House moves between Ayr residential areas",
          "Furniture delivery from Ayr retail stores",
          "Tip runs from properties with gardens",
          "Courier services to Prestwick Airport businesses",
          "End-of-tenancy clearances for rental properties and holiday lets",
          "Waste removal from property renovations",
          "Collection from Ayr retail parks and delivery to homes"
        ],
        localAreas: [
          { name: "Ayr Town Centre", description: "Covering the busy town centre with its shops, restaurants, and residential properties. Excellent for same-day courier services and collections." },
          { name: "Alloway", description: "Serving Alloway, home of Burns Cottage and a desirable residential area. Popular for house moves and property clearances." },
          { name: "Doonfoot", description: "Covering the Doonfoot area with its beach and residential properties. Regular service for removals and deliveries." },
          { name: "Heads of Ayr", description: "Serving the Heads of Ayr area, popular for coastal properties and tourist accommodations. Waste removal and tip runs common." },
          { name: "Ayr Seafront", description: "Covering properties along Ayr's seafront, including both residential and commercial premises." }
        ],
        whyLocation: "Ayr's size and central location make it perfect for van services. The town's excellent road connections mean I can quickly reach all areas, and the mix of urban and coastal properties provides diverse service opportunities. Being close to major routes like the A77 means I can efficiently serve Ayr while also covering nearby towns like Prestwick and Troon. Many Ayr residents appreciate having a reliable local service that understands the town's unique characteristics - from busy town centre collections to coastal property access. The year-round demand ensures regular service, while tourist seasons can create additional opportunities for holiday let clearances and deliveries.",
        movingTips: "Ayr's town centre can be busy, so for removals, early morning starts work best. Parking varies by area - the town centre has restrictions while residential areas may have permit parking. Many properties in Ayr have gardens or outdoor spaces, so factor in clearance time. Coastal properties may have access considerations, especially during tourist seasons. For properties in Alloway or Heads of Ayr, allow time for the rural-coastal approach roads. I know Ayr's parking restrictions and can advise on best access times."
      }
    },
    kilmarnock: {
      name: "Kilmarnock",
      fullName: "Kilmarnock, Ayrshire",
      nearbyAreas: ["Dundonald", "Town Centre", "Hurlford", "Crosshouse", "Stewarton", "Darvel"],
      description: "Professional van services throughout Kilmarnock and surrounding areas. I cover all of Kilmarnock including the town centre and surrounding villages with reliable removals and delivery services.",
      localContent: {
        about: "Kilmarnock is the largest town in East Ayrshire with a population of over 46,000, making it one of Scotland's key urban centres. Historically famous for carpet manufacturing and whisky blending, modern Kilmarnock is a thriving commercial hub with excellent shopping, entertainment, and transport links. The town centre features a mix of historic buildings and modern developments, while the surrounding areas include everything from Victorian terraces to new-build estates. Kilmarnock's location on the M77 motorway corridor makes it highly accessible, and many residents commute to Glasgow while enjoying Ayrshire's quality of life. The town has seen significant residential growth, with new housing developments attracting families, young professionals, and downsizers. From student accommodation near the college to family homes in residential estates, Kilmarnock offers diverse property types that keep van services in constant demand.",
        services: `Van services in Kilmarnock are particularly busy due to the town's size and population. House moves are frequent, with residents relocating within Kilmarnock's various districts or moving to and from the town. The proximity to Glasgow (just 20 minutes by car) means many Kilmarnock residents work there, creating demand for courier services connecting the town with the city. Tip runs and waste removal are very popular in Kilmarnock, especially from properties undergoing renovation or those with gardens needing clearing. The town's retail parks and shopping areas mean furniture collection and delivery is a regular service - whether from Kilmarnock's own stores or collecting items purchased online. End-of-tenancy clearances are common due to Kilmarnock's rental market, particularly around the town centre and near educational institutions. The town's commercial activity also creates demand for business-to-business courier services.`,
        commonRequests: [
          "House moves within Kilmarnock's residential areas",
          "Courier services to Glasgow and surrounding areas",
          "Furniture collection from Kilmarnock retail stores",
          "Tip runs from residential properties",
          "End-of-tenancy clearances for rental properties",
          "Waste removal from property renovations",
          "Garage and shed clearances"
        ],
        localAreas: [
          { name: "Kilmarnock Town Centre", description: "Serving the busy town centre with shops, offices, and residential properties. Excellent for commercial deliveries and collections." },
          { name: "Hurlford", description: "Covering Hurlford village and surrounding area, popular for residential moves and deliveries." },
          { name: "Crosshouse", description: "Serving Crosshouse area near the hospital, convenient for medical professionals and families." },
          { name: "Dundonald", description: "Covering Dundonald village and nearby residential areas, regular service for removals." },
          { name: "Stewarton", description: "Serving Stewarton, a popular residential area just outside Kilmarnock, frequent moves and deliveries." }
        ],
        whyLocation: "Kilmarnock's size and commercial importance make it a key location for van services. The town's excellent transport links mean I can efficiently serve both Kilmarnock itself and nearby areas. The mix of urban residential areas, commercial premises, and nearby villages creates diverse service opportunities. Many Kilmarnock residents appreciate having a reliable local service for everything from small deliveries to full house moves. The town's position on major routes means I can often provide very competitive pricing while maintaining high service standards. Regular service in Kilmarnock means I understand the area's unique characteristics - from busy town centre parking to residential estate layouts.",
        movingTips: "Kilmarnock's town centre has parking restrictions, so plan removals outside peak hours when possible. Many residential areas have on-street parking, but some estates have designated spaces. The town's size means moving within Kilmarnock is often straightforward, but allow time for navigating different residential areas. Properties in surrounding villages like Hurlford or Stewarton may have different access considerations. For town centre removals, early morning starts can help avoid traffic. I know Kilmarnock's parking regulations and can advise on the best approach for your specific property."
      }
    },
    irvine: {
      name: "Irvine",
      fullName: "Irvine, Ayrshire",
      nearbyAreas: ["Kilwinning", "Troon", "Ayr", "Dreghorn", "Irvine Town Centre", "Seaside"],
      description: "Serving Irvine and the surrounding North Ayrshire area with professional van services. Whether you need removals, courier services, or waste removal, I'm here to help in Irvine.",
      localContent: {
        about: "Irvine is North Ayrshire's largest town with a population of around 33,000, located on the Ayrshire coast. The town has a rich history as a Royal Burgh and was Scotland's fifth largest town in the 18th century. Modern Irvine combines its historic character with new developments, including the award-winning Magnum Leisure Centre and extensive shopping facilities. The town's coastal location and excellent amenities make it popular with families, while good transport links provide easy access to Glasgow and surrounding areas. Irvine benefits from a diverse property mix including traditional sandstone buildings, modern housing estates, and coastal properties. The town centre regeneration has created new residential opportunities, and nearby areas like Dreghorn offer popular family housing. Irvine's position between Kilwinning, Troon, and Ayr makes it a convenient hub for regional services.",
        services: `Van services in Irvine are diverse and frequent. House moves are very common, with residents relocating within Irvine's various districts or moving to and from the town. The proximity to retail parks and shopping centres means furniture collection and delivery is a regular service - whether collecting from Irvine's own stores or transporting items purchased online. Tip runs are popular in Irvine, especially from properties with gardens or those undergoing renovation. The town's mix of traditional and modern properties means there's regular demand for waste removal services. Courier services in Irvine connect the town with surrounding areas like Kilwinning, Troon, and Ayr, as well as providing same-day delivery for local businesses. End-of-tenancy clearances are common, particularly for rental properties near the town centre or student accommodation. The coastal location also means some properties are holiday lets requiring seasonal clearances.`,
        commonRequests: [
          "House moves within Irvine's residential areas",
          "Furniture delivery from Irvine retail stores",
          "Tip runs from properties with gardens",
          "Courier services connecting Irvine to nearby towns",
          "End-of-tenancy clearances for rental properties",
          "Waste removal from property renovations",
          "Collection from Irvine retail parks"
        ],
        localAreas: [
          { name: "Irvine Town Centre", description: "Covering the historic town centre with shops, services, and residential properties. Convenient for collections and deliveries." },
          { name: "Dreghorn", description: "Serving Dreghorn, a popular residential area just outside Irvine, frequent moves and deliveries." },
          { name: "Irvine Seaside", description: "Covering coastal properties along Irvine's seafront, including residential and holiday accommodation." },
          { name: "Kilwinning", description: "Regular service to Kilwinning, connecting Irvine with nearby areas for moves and deliveries." }
        ],
        whyLocation: "Irvine's size and coastal location make it ideal for van services. The town's good transport links mean efficient service across the area, and the mix of residential and commercial properties provides diverse opportunities. Many Irvine residents appreciate having a local service that understands the town's unique layout - from the historic town centre to newer developments. The proximity to other North Ayrshire towns means I can often bundle services, providing value while covering the region. Irvine's position between major towns creates good opportunities for inter-town courier services. Regular service in Irvine means I know the area's parking, access routes, and property characteristics.",
        movingTips: "Irvine's town centre has some parking restrictions, but most residential areas have good parking. For town centre removals, early starts work well. Properties near the seafront may have seasonal traffic considerations. The town's mix of traditional and modern properties means access can vary - some older areas have narrower streets. For moves involving Dreghorn or other nearby areas, factor in travel time. I know Irvine's layout and can advise on the best access for your specific property type."
      }
    },
    troon: {
      name: "Troon",
      fullName: "Troon, Ayrshire",
      nearbyAreas: ["Prestwick", "Ayr", "Irvine", "Barassie", "Fullarton", "Troon Harbour"],
      description: "Covering Troon and the surrounding coastal area with reliable van services. From Troon harbour to Barassie, I provide professional removals, courier, and waste removal services.",
      localContent: {
        about: "Troon is a picturesque coastal town in South Ayrshire with a population of around 15,000, famous for its championship golf courses including Royal Troon Golf Club which hosted The Open Championship. The town combines coastal charm with excellent amenities, making it highly desirable for residents. Troon's harbour area features restaurants and shops, while the town centre offers good shopping and services. The town is particularly popular with retirees, families seeking coastal living, and golf enthusiasts. Property in Troon ranges from traditional sandstone villas to modern developments, with many homes offering sea views or proximity to the beaches. The town's railway station provides good connections to Glasgow, while road links make it accessible yet tranquil. Troon's reputation for quality of life means it attracts residents from across Scotland and beyond, creating steady demand for removals and related services.",
        services: `Van services in Troon reflect the town's distinctive characteristics. House moves are frequent, with people relocating to Troon for its coastal lifestyle or moving between the town's various residential areas. Furniture delivery is popular, especially for new residents furnishing coastal properties or those purchasing items from larger stores in Ayr or Prestwick. Tip runs are common in Troon, particularly from properties with gardens, sheds, or those undergoing renovation to capitalize on the coastal location. Courier services in Troon often involve connecting the town with Prestwick Airport, local businesses, or transporting items from online purchases. End-of-tenancy clearances are common for rental properties, particularly holiday lets near the harbour or beach areas. Waste removal services are valuable for Troon's many properties with outdoor spaces, and the town's demographic mix means there's regular demand for clearance services.`,
        commonRequests: [
          "House moves within Troon's residential areas",
          "Furniture delivery to coastal properties",
          "Tip runs from properties with gardens or sheds",
          "Courier services to Prestwick Airport",
          "End-of-tenancy clearances for rental properties and holiday lets",
          "Waste removal from property renovations",
          "Delivery of items purchased from Ayr or Prestwick stores"
        ],
        localAreas: [
          { name: "Troon Town Centre", description: "Serving the charming town centre with shops, restaurants, and residential properties. Convenient for collections and deliveries." },
          { name: "Troon Harbour", description: "Covering the harbour area with its mix of residential, commercial, and leisure properties. Popular for holiday let clearances." },
          { name: "Barassie", description: "Serving Barassie, a desirable residential area south of Troon, frequent moves and deliveries." },
          { name: "Fullarton", description: "Covering Fullarton area of Troon, popular for family homes and regular removals." },
          { name: "Troon Beach Area", description: "Serving properties near Troon's beaches, including coastal homes requiring careful access." }
        ],
        whyLocation: "Troon's coastal location and desirable status make it perfect for van services. The town attracts residents seeking quality of life, creating steady demand for moving services. The proximity to Prestwick Airport and Ayr means efficient connections for courier services. Many Troon residents appreciate having a local service that understands coastal property access and seasonal considerations. The town's mix of traditional and modern properties provides diverse service opportunities. Regular service in Troon means I know the area's unique characteristics - from harbour access to residential street layouts. The town's reputation means residents often have higher expectations for service quality, which I'm committed to meeting.",
        movingTips: "Troon's residential streets are generally well-suited for removals, but some older areas have narrow access. Properties near the harbour may have parking considerations, especially during peak seasons. Coastal properties may require careful handling due to their location and value. For beach area properties, allow time for access and consider seasonal traffic. Many Troon properties have gardens or outdoor spaces that may need clearing. I know Troon's layout and can advise on the best approach for your specific property, including any seasonal considerations."
      }
    },
    prestwick: {
      name: "Prestwick",
      fullName: "Prestwick, Ayrshire",
      nearbyAreas: ["Ayr", "Troon", "Monkton", "Prestwick Airport", "Prestwick Town Centre", "Bellevue"],
      description: "Serving Prestwick including the airport area and town centre. I provide fast, reliable van services for Prestwick residents with quick response times for removals and deliveries.",
      localContent: {
        about: "Prestwick is a thriving coastal town in South Ayrshire with a population of around 15,000, best known for Prestwick Airport which has long been Scotland's main transatlantic gateway. The town combines coastal living with excellent transport links, making it highly accessible. Prestwick has a charming town centre with independent shops and restaurants, while the area near the airport has developed commercial and residential properties. The town is popular with professionals working at the airport, commuters to Glasgow, and those seeking coastal living close to amenities. Property in Prestwick ranges from Victorian villas to modern developments, with many homes offering views of the Firth of Clyde or easy access to the beach. The town's railway station provides excellent connections, while the airport proximity creates unique logistics opportunities. Prestwick's mix of residential, commercial, and airport-related activity means diverse demand for van services.",
        services: `Van services in Prestwick are particularly dynamic due to the airport and the town's commercial activity. House moves are frequent, with people relocating to Prestwick for its coastal location and transport links, or moving within the town's various residential areas. Courier services are very popular in Prestwick, especially airport-related deliveries, business-to-business services, and same-day deliveries for local companies. Furniture delivery is common, particularly for new residents or those purchasing items from stores in Ayr or Troon. Tip runs are regular in Prestwick, especially from properties with gardens or those undergoing renovation. End-of-tenancy clearances are common for rental properties, particularly near the airport for business travellers or holiday lets. Waste removal services are valuable for Prestwick's mix of residential and commercial properties. The airport proximity also creates opportunities for luggage delivery, business equipment transport, and time-sensitive courier services.`,
        commonRequests: [
          "House moves within Prestwick's residential areas",
          "Airport-related courier services",
          "Furniture delivery from Ayr or Troon stores",
          "Tip runs from residential properties",
          "End-of-tenancy clearances for rental properties and holiday lets",
          "Business-to-business courier services",
          "Waste removal from property renovations"
        ],
        localAreas: [
          { name: "Prestwick Town Centre", description: "Serving the charming town centre with shops, restaurants, and residential properties. Excellent for same-day collections and deliveries." },
          { name: "Prestwick Airport Area", description: "Covering the airport area with commercial premises, hotels, and residential properties. Popular for courier and business services." },
          { name: "Monkton", description: "Serving Monkton village near Prestwick Airport, convenient for airport employees and families." },
          { name: "Bellevue", description: "Covering Bellevue area of Prestwick, popular for residential moves and deliveries." },
          { name: "Prestwick Beach Area", description: "Serving coastal properties along Prestwick's beach, including residential and holiday accommodation." }
        ],
        whyLocation: "Prestwick's airport proximity and coastal location create unique opportunities for van services. The town's commercial activity means regular demand for courier services, while residential areas provide steady removals business. Many Prestwick residents and businesses appreciate having a local service that understands airport-related logistics and can provide fast response times. The proximity to Ayr and Troon means efficient inter-town services. Regular service in Prestwick means I know the area's characteristics - from airport access routes to residential street layouts. The town's mix of business and residential demands means I can provide diverse services efficiently.",
        movingTips: "Prestwick's town centre parking can be limited, but most residential areas have good parking. For airport area properties, be aware of traffic patterns around flight times. Properties near the beach may have seasonal access considerations. The town's mix of traditional and modern properties means access varies - some older streets are narrower. For airport-related services, understanding timing around flight schedules helps. I know Prestwick's layout, including airport access routes, and can advise on the best approach for your specific needs."
      }
    }
  };

  const location = locationData[slug || ''] || locationData.cumnock;

  const services = [
    {
      title: "Small Removals & House Moves",
      slug: "small-removals",
      description: `Professional removal services in ${location.name}. Whether you're moving house, relocating your office, or just need furniture moved, I provide a friendly, reliable service.`
    },
    {
      title: "Courier Services & Delivery",
      slug: "courier",
      description: `Fast, reliable courier and delivery services throughout ${location.name} and surrounding areas. Same-day service available for urgent deliveries.`
    },
    {
      title: "Tip Runs & Waste Removal",
      slug: "waste-removal",
      description: `SEPA registered waste removal and tip run services in ${location.name}. Professional disposal of household waste, garden waste, and unwanted items.`
    },
    {
      title: "In-Store Collection & Delivery",
      slug: "collection-and-delivery",
      description: `Collection from furniture stores, online purchases, and delivery straight to your door in ${location.name}. No need to worry about transport - I'll handle it for you.`
    },
    {
      title: "End-of-Tenancy Clearance",
      slug: "end-of-tenancy",
      description: `Complete property clearance for tenants and landlords in ${location.name}. Fast, thorough service to get properties ready for the next tenant.`
    },
    {
      title: "Flat Pack Assembly",
      slug: "flat-pack-assembly",
      description: `Professional flat pack furniture assembly service in ${location.name}. Save time and frustration - I'll assemble your furniture correctly the first time.`
    }
  ];

  const whyChoose = [
    {
      title: "Local Expertise",
      description: `I know ${location.name}'s streets, neighborhoods, and the best routes around town`
    },
    {
      title: "Fast Response",
      description: `Serving ${location.name} means I can respond quickly to your van service needs`
    },
    {
      title: "Fair Pricing",
      description: "Transparent quotes with no hidden fees. Free quotes via WhatsApp"
    },
    {
      title: "Personal Service",
      description: "All jobs are completed personally by me with care and attention to detail"
    },
    {
      title: "SEPA Registered",
      description: "Fully licensed and SEPA registered for waste removal services"
    },
    {
      title: "5-Star Service",
      description: "Committed to providing excellent service on every job, no matter the size"
    }
  ];

  const handleWhatsAppClick = () => {
    trackWhatsAppClick(`location_${slug}`);
    const defaultMessage = `Hi Chris! I'd like to request a quote for van services in ${location.name}. Could you please get back to me?`;
    try {
      const phone = "447735852822";
      const encoded = encodeURIComponent(defaultMessage);
      const waUrl = `https://wa.me/${phone}?text=${encoded}`;
      window.open(waUrl, "_blank");
    } catch {}
  };

  const handleFacebookMessengerClick = () => {
    trackFacebookMessengerClick(`location_${slug}`);
    const messengerUrl = "https://m.me/chrisyourmanwithavankilmarnock";
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = messengerUrl;
    } else {
      window.open(messengerUrl, "_blank");
    }
  };

  return (
    <>
      <Helmet>
        <title>Man with a Van {location.name} | Removals & Courier Services {location.fullName}</title>
        <meta name="description" content={`Professional van services in ${location.fullName}. Man with a van ${location.name}, removals ${location.name}, courier ${location.name}, house move ${location.name}, furniture delivery ${location.name}. SEPA registered, free quotes via WhatsApp.`} />
        <meta name="keywords" content={`man with a van ${location.name}, removals ${location.name}, courier ${location.name}, house move ${location.name}, furniture delivery ${location.name}, small removals ${location.name}, tip runs ${location.name}, waste removal ${location.name}, van services ${location.name}`} />
        <link rel="canonical" href={`https://chrisyourmanwithavan.netlify.app/locations/${slug}`} />
        <meta property="og:title" content={`Van Services in ${location.fullName} | Chris, Your Man with a Van`} />
        <meta property="og:description" content={`Professional van services in ${location.fullName}. Small removals, courier services, waste removal, and more.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://chrisyourmanwithavan.netlify.app/locations/${slug}`} />
        <meta property="og:image" content="https://chrisyourmanwithavan.netlify.app/vanlogo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://chrisyourmanwithavan.netlify.app/vanlogo.png" />
      </Helmet>

      <main className="min-h-screen">
        <Navigation />
        
        {/* Location Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden min-h-[60vh] flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <LazyImage
              src="/vanfront.jpg"
              alt={`Chris, Your Man with a Van services in ${location.name}`}
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
                Van Services in {location.name}
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-8">
                Professional Van Services in {location.fullName}
              </p>
              <Button
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 sm:px-8 py-5 sm:py-6 rounded-xl flex items-center justify-center gap-3 text-base sm:text-lg mx-auto"
              >
                <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                Get Free Quote via WhatsApp
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-[hsl(var(--background))]">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
                Services We Provide in {location.name}
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                When you need van services in {location.name}, you need fast, reliable help. Chris provides professional van services and removals throughout {location.name} and surrounding areas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={`/services/${service.slug}`}
                  onClick={() => trackNavigation(`location_service_${service.slug}`)}
                  className="card-service hover:border-[hsl(var(--primary-orange))]/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-2 h-2 bg-[hsl(var(--primary-orange))] rounded-full mt-2 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-[hsl(var(--primary-orange))] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex items-center text-[hsl(var(--primary-orange))] font-semibold text-sm mt-3 group-hover:gap-2 transition-all">
                        Learn more about {service.title.toLowerCase()}
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <p className="text-white/80 mb-6">
                <strong className="text-[hsl(var(--primary-orange))]">Response time:</strong> Fast response - contact for current availability
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 px-4 bg-[hsl(var(--muted))]">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
                Why Choose Chris in {location.name}?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChoose.map((item, index) => (
                <div key={index} className="card-service">
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-[hsl(var(--primary-orange))] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Areas Detail Section */}
        <section className="py-20 px-4 bg-[hsl(var(--muted))]">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
                Serving All of {location.name} and Nearby Areas
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                We provide comprehensive van services throughout the {location.name} area, including detailed coverage of these key locations:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {location.localContent.localAreas.map((area, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-[hsl(var(--card))] border border-white/10 hover:border-[hsl(var(--primary-orange))]/30 transition-colors"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="w-6 h-6 text-[hsl(var(--primary-orange))] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display text-xl font-bold text-white mb-2">
                        {area.name}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
              {location.nearbyAreas.map((area, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-[hsl(var(--card))] border border-white/10 hover:border-[hsl(var(--primary-orange))]/30 transition-colors"
                >
                  <MapPin className="w-5 h-5 text-[hsl(var(--primary-orange))] flex-shrink-0" />
                  <span className="text-white font-medium">{area}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-white/80 mb-6">
                Don't see your area listed? <strong className="text-[hsl(var(--primary-orange))]">Contact me to confirm coverage</strong> - I may be able to help!
              </p>
            </div>
          </div>
        </section>

        {/* Moving Tips Section */}
        <section className="py-20 px-4 bg-[hsl(var(--muted))]">
          <div className="container mx-auto max-w-7xl">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-8">
                Moving Tips for {location.name}
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-white/90 leading-relaxed">
                  {location.localContent.movingTips}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-[hsl(var(--muted))]">
          <div className="container mx-auto max-w-7xl">
            <div className="bg-gradient-to-r from-[hsl(var(--primary-orange))]/20 to-[hsl(var(--sunshine-yellow))]/20 rounded-2xl p-8 border-2 border-[hsl(var(--primary-orange))]/30 text-center">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
                Get Your Free Quote for {location.name}
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Don't let moving or delivery needs in {location.name} cause you stress. Contact Chris now for immediate assistance.
              </p>
              <p className="text-lg text-white/80 mb-8">
                <strong>Available Day & Night</strong>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
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

              <p className="text-sm text-white/70">
                I'll respond quickly to help with your van service needs in {location.name}
              </p>
            </div>
          </div>
        </section>

        {/* Services Quick Links */}
        <section className="py-20 px-4 bg-[hsl(var(--background))]">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h3 className="font-display text-3xl font-bold text-white mb-4">
                Mobile Services
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <Link
                to="/services/small-removals"
                onClick={() => trackNavigation('location_to_service_small_removals')}
                className="card-service text-center p-6 hover:border-[hsl(var(--primary-orange))]/50 transition-all duration-300 group"
              >
                <p className="text-white/90 group-hover:text-[hsl(var(--primary-orange))] transition-colors">Small Removals & House Moves</p>
                <ArrowRight className="w-4 h-4 text-white/50 mx-auto mt-2 group-hover:text-[hsl(var(--primary-orange))] group-hover:translate-x-1 transition-all" />
              </Link>
              <Link
                to="/services/courier"
                onClick={() => trackNavigation('location_to_service_courier')}
                className="card-service text-center p-6 hover:border-[hsl(var(--primary-orange))]/50 transition-all duration-300 group"
              >
                <p className="text-white/90 group-hover:text-[hsl(var(--primary-orange))] transition-colors">Courier Services & Delivery</p>
                <ArrowRight className="w-4 h-4 text-white/50 mx-auto mt-2 group-hover:text-[hsl(var(--primary-orange))] group-hover:translate-x-1 transition-all" />
              </Link>
              <Link
                to="/services/waste-removal"
                onClick={() => trackNavigation('location_to_service_waste_removal')}
                className="card-service text-center p-6 hover:border-[hsl(var(--primary-orange))]/50 transition-all duration-300 group"
              >
                <p className="text-white/90 group-hover:text-[hsl(var(--primary-orange))] transition-colors">Tip Runs & Waste Removal</p>
                <ArrowRight className="w-4 h-4 text-white/50 mx-auto mt-2 group-hover:text-[hsl(var(--primary-orange))] group-hover:translate-x-1 transition-all" />
              </Link>
              <Link
                to="/services/collection-and-delivery"
                onClick={() => trackNavigation('location_to_service_collection_delivery')}
                className="card-service text-center p-6 hover:border-[hsl(var(--primary-orange))]/50 transition-all duration-300 group"
              >
                <p className="text-white/90 group-hover:text-[hsl(var(--primary-orange))] transition-colors">In-Store Collection & Delivery</p>
                <ArrowRight className="w-4 h-4 text-white/50 mx-auto mt-2 group-hover:text-[hsl(var(--primary-orange))] group-hover:translate-x-1 transition-all" />
              </Link>
              <Link
                to="/services/end-of-tenancy"
                onClick={() => trackNavigation('location_to_service_end_tenancy')}
                className="card-service text-center p-6 hover:border-[hsl(var(--primary-orange))]/50 transition-all duration-300 group"
              >
                <p className="text-white/90 group-hover:text-[hsl(var(--primary-orange))] transition-colors">End-of-Tenancy Clearance</p>
                <ArrowRight className="w-4 h-4 text-white/50 mx-auto mt-2 group-hover:text-[hsl(var(--primary-orange))] group-hover:translate-x-1 transition-all" />
              </Link>
              <Link
                to="/services/flat-pack-assembly"
                onClick={() => trackNavigation('location_to_service_flat_pack')}
                className="card-service text-center p-6 hover:border-[hsl(var(--primary-orange))]/50 transition-all duration-300 group"
              >
                <p className="text-white/90 group-hover:text-[hsl(var(--primary-orange))] transition-colors">Flat Pack Assembly</p>
                <ArrowRight className="w-4 h-4 text-white/50 mx-auto mt-2 group-hover:text-[hsl(var(--primary-orange))] group-hover:translate-x-1 transition-all" />
              </Link>
            </div>

            <div className="text-center mt-12">
              <Link
                to="/services"
                onClick={() => trackNavigation('view_all_services_from_location')}
                className="inline-flex items-center gap-2 text-[hsl(var(--primary-orange))] hover:text-[hsl(var(--dark-orange))] font-semibold text-lg transition-colors"
              >
                View All Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Nearby Locations Section */}
        <section className="py-20 px-4 bg-[hsl(var(--background))]">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
                Also Serving Nearby Areas
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                I also provide van services in these nearby Ayrshire locations. Click to learn more about services in each area.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {[
                { name: "Cumnock", slug: "cumnock" },
                { name: "Ayr", slug: "ayr" },
                { name: "Kilmarnock", slug: "kilmarnock" },
                { name: "Irvine", slug: "irvine" },
                { name: "Troon", slug: "troon" },
                { name: "Prestwick", slug: "prestwick" },
              ].filter(loc => loc.slug !== slug).map((nearbyLocation) => (
                <Link
                  key={nearbyLocation.slug}
                  to={`/locations/${nearbyLocation.slug}`}
                  onClick={() => trackNavigation(`location_to_location_${nearbyLocation.slug}`)}
                  className="flex items-center gap-3 p-4 rounded-lg bg-[hsl(var(--card))] border border-white/10 hover:border-[hsl(var(--primary-orange))]/50 transition-all duration-300 group"
                >
                  <MapPin className="w-5 h-5 text-[hsl(var(--primary-orange))] flex-shrink-0" />
                  <span className="text-white font-medium group-hover:text-[hsl(var(--primary-orange))] transition-colors flex-1">{nearbyLocation.name}</span>
                  <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-[hsl(var(--primary-orange))] group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/locations"
                onClick={() => trackNavigation('view_all_locations_from_location')}
                className="inline-flex items-center gap-2 text-[hsl(var(--primary-orange))] hover:text-[hsl(var(--dark-orange))] font-semibold text-lg transition-colors"
              >
                View All Service Locations
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default LocationDetail;

