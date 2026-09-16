export const business = {
  name: "Underdog Home Improvements Ltd",
  shortName: "Underdog",
  phone: "07940 246031",
  phoneHref: "tel:+447940246031",
  whatsapp: "https://wa.me/447940246031?text=Hi%20Underdog%2C%20I%27d%20like%20to%20discuss%20a%20project.",
  email: "udoghomeimprovements@gmail.com",
  location: "Colchester & Ipswich",
  region: "Essex & Suffolk",
  origin: process.env.SITE_URL || "https://underdog-home-improvements.rocky-chord-8457.chatgpt.site",
  tagline: "No job too small, because every home is a big deal!",
  social: {
    Facebook: "https://www.facebook.com/people/Underdog-Home-Improvements/61572984301833/",
    Instagram: "https://www.instagram.com/underdoghomeimprovements",
    "Google Business Profile": "https://share.google/1UVJgywRiqSsQZ4iy",
  },
};
export const services = [
  { name: "Carpentry & Joinery", slug: "carpentry-joinery", icon: "hammer" },
  { name: "Extensions & Renovations", slug: "extensions-renovations", icon: "house" },
  { name: "Kitchens & Bathrooms", slug: "kitchens-bathrooms", icon: "kitchen" },
  { name: "Wall & Floor Tiling", slug: "wall-floor-tiling", icon: "tiles" },
  { name: "Painting & Decorating", slug: "painting-decorating", icon: "paint" },
  { name: "Fencing & Decking", slug: "fencing-decking", icon: "fence" },
  { name: "Roofing & Guttering", slug: "roofing-guttering", icon: "roof" },
  { name: "Bespoke Wall Panelling", slug: "wall-panelling", icon: "tiles" },
];
export const areas = [
  { name: "Colchester", slug: "colchester", county: "Essex", local: ["Stanway", "Lexden", "Highwoods", "Mile End", "Greenstead", "St John's", "Prettygate", "Berechurch", "Layer-de-la-Haye", "Abberton", "Langenhoe", "Rowhedge", "West Bergholt", "Great Horkesley", "Boxted", "Eight Ash Green", "Copford", "Marks Tey", "Tiptree", "Kelvedon", "Feering", "West Mersea", "East Mersea", "Great Bentley", "Alresford"] },
  { name: "Ipswich", slug: "ipswich", county: "Suffolk", local: ["Kesgrave", "Rushmere St Andrew", "Martlesham", "Martlesham Heath", "Bramford", "Claydon", "Great Blakenham", "Barham", "Westerfield", "Witnesham", "Stowmarket", "Needham Market", "Tuddenham St Martin", "Pinewood", "Sproughton", "Belstead", "Copdock", "Washbrook", "Hintlesham", "Holbrook", "Shotley", "Chelmondiston", "Capel St Mary", "Bentley", "Felixstowe", "Trimley St Mary", "Trimley St Martin"] },
  { name: "Wivenhoe", slug: "wivenhoe", county: "Essex", local: ["Elmstead Market", "Frating", "Thorrington", "Brightlingsea", "Great Bromley", "Little Bromley"] },
  { name: "Manningtree", slug: "manningtree", county: "Essex", local: ["Lawford", "Mistley", "Dedham", "East Bergholt", "Brantham", "Ardleigh", "Stratford St Mary", "Bradfield", "Wrabness", "Harwich", "Dovercourt"] },
  { name: "Hadleigh", slug: "hadleigh", county: "Suffolk", local: ["Raydon", "Layham", "Kersey", "Polstead", "Boxford", "Nayland", "Stoke-by-Nayland", "Bildeston", "Sudbury", "Lavenham"] },
  { name: "Woodbridge", slug: "woodbridge", county: "Suffolk", local: ["Melton", "Ufford", "Wickham Market", "Hasketon", "Grundisburgh", "Rendlesham", "Sutton", "Waldringfield", "Newbourne", "Nacton"] },
];
export const routes = [
  {name: "Home", path: "/", type: "Core"},
  {name: "Services", path: "/services", type: "Core"},
  {name: "About Us", path: "/about", type: "Core"},
  {name: "Contact", path: "/contact", type: "Core"},
  ...services.map(s => ({name: s.name, path: "/services/" + s.slug, type: "Service"})),
  ...areas.map(a => ({name: a.name, path: "/areas/" + a.slug, type: "Area"})),
];

