import MD_IMAGE from "../assets/MD.jpg";

export const CONTACT = {
  address: "Vaishnav Nivas, Dawkharmala Shiroli Trfe ale, Tal- Junnar, Dist-Pune 412411",
  phone: "+91 9112072424",
  email: "info@shrimahalaxmiconstruction.com",
  hours: "Mon - Sat: 9:00 AM - 7:00 PM",
};

export const HERO_SLIDES = [
  {
    subtitle: "Building the Future",
    title: "Civil & Earthwork\nSpecialists",
    text: "Established in 2024, we deliver road construction, infrastructure, civil and earthwork projects with dedication and care.",
    cta: { label: "Discover More", to: "/services" },
    image: "https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?crop=entropy&cs=srgb&fm=jpg&q=85",
  },
  {
    subtitle: "Infrastructure Excellence",
    title: "Roads, Bridges &\nStructures",
    text: "Supporting specialised infrastructure works including culverts, retaining walls, side drains and road construction.",
    cta: { label: "Our Projects", to: "/projects" },
    image: "https://images.unsplash.com/photo-1633363961301-4f100a78e92d?crop=entropy&cs=srgb&fm=jpg&q=85",
  },
  {
    subtitle: "Engineering the Future",
    title: "Strong Foundations\nFor Every Project",
    text: "A capable team, skilled workforce and owned equipment fleet for civil construction and infrastructure work.",
    cta: { label: "Get a Quote", to: "/contact" },
    image: "https://images.unsplash.com/photo-1579847188804-ecba0e2ea330?crop=entropy&cs=srgb&fm=jpg&q=85",
  },
];

export const SERVICES = [
  { title: "Roads & Highways", desc: "PWD approved road construction, resurfacing and highway expansion for state and national projects.", image: "https://images.unsplash.com/photo-1587582423116-ec07293f0395?crop=entropy&cs=srgb&fm=jpg&q=85" },
  { title: "Bridges & Flyovers", desc: "RCC and pre-stressed concrete bridge construction with modern engineering and safety compliance.", image: "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?crop=entropy&cs=srgb&fm=jpg&q=85" },
  { title: "Public Buildings", desc: "Government offices, schools, hospitals and municipal facilities built to specification.", image: "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?crop=entropy&cs=srgb&fm=jpg&q=85" },
  { title: "Water Works & Drainage", desc: "Municipal water supply lines, storm drainage, sewage treatment plant civil works.", image: "https://images.unsplash.com/photo-1559843788-693858bf7338?crop=entropy&cs=srgb&fm=jpg&q=85" },
  { title: "Earthworks & Excavation", desc: "Site preparation, heavy excavation, embankment and land development for infrastructure.", image: "https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?crop=entropy&cs=srgb&fm=jpg&q=85" },
  { title: "Industrial Construction", desc: "Warehouses, factories and MIDC industrial civil work with structural steel and RCC.", image: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?crop=entropy&cs=srgb&fm=jpg&q=85" },
];

export const PROJECTS = [
  { cat: "Roads & Highways", title: "Pune-Solapur Highway Expansion", location: "Maharashtra", year: "2024", image: "https://images.unsplash.com/photo-1587582423116-ec07293f0395?crop=entropy&cs=srgb&fm=jpg&q=85" },
  { cat: "Bridges", title: "Krishna River RCC Bridge", location: "Sangli, MH", year: "2023", image: "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?crop=entropy&cs=srgb&fm=jpg&q=85" },
  { cat: "Public Buildings", title: "District Hospital, Satara", location: "Satara, MH", year: "2023", image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=srgb&fm=jpg&q=85" },
  { cat: "Water Works", title: "MIDC Water Pipeline Grid", location: "Pune, MH", year: "2022", image: "https://images.unsplash.com/photo-1559843788-693858bf7338?crop=entropy&cs=srgb&fm=jpg&q=85" },
  { cat: "Industrial", title: "Chakan Industrial Warehouse", location: "Chakan, MH", year: "2024", image: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?crop=entropy&cs=srgb&fm=jpg&q=85" },
  { cat: "Bridges", title: "Nashik Flyover Project", location: "Nashik, MH", year: "2022", image: "https://images.unsplash.com/photo-1633363961301-4f100a78e92d?crop=entropy&cs=srgb&fm=jpg&q=85" },
];

export const PROJECT_CATS = ["All", "Roads & Highways", "Bridges", "Public Buildings", "Water Works", "Industrial"] as const;

export const WHY_US = [
  { title: "Infrastructure Focus", desc: "Specialised civil and infrastructure work for roads, culverts, bridges, retaining walls and drainage." },
  { title: "Capable Workforce", desc: "Qualified engineering and mechanical staff supported by skilled and unskilled labour teams." },
  { title: "Owned Equipment", desc: "An in-house fleet that supports excavation, earthwork, transport and on-site operations." },
  { title: "Dedicated Team", desc: "A director-led company focused on dependable execution and steady growth." },
];

export const TEAM_ROLES = [
  {
    title: "Board of Directors",
    summary: "Leadership and business direction.",
    members: [
      { name: "Mr. Prathamesh Jadhav", role: "Director", image: MD_IMAGE },
      { name: "Mr. Gunjal Sanjay", role: "Director" },
      { name: "Mr. Fulmali Rajendra", role: "Director" },
      { name: "Mr. Gunjal Prasad", role: "Director" },
    ],
  },
] as const;

export const STATS = [
  { value: "2024", label: "Established" },
  { value: "4", label: "Board Members" },
  { value: "50", label: "Skilled Labourers" },
  { value: "100", label: "Unskilled Labourers" },
];

export const WORKFORCE = [
  { role: "Engineering Staff", count: "4" },
  { role: "Mechanical Staff", count: "10" },
  { role: "Skilled Labourers", count: "50" },
  { role: "Unskilled Labourers", count: "100" },
] as const;

export const EQUIPMENT = [
  "Hydraulic Excavators — 2",
  "Tipper Hyvas — 4",
  "Blasting Unit — 1",
  "JCBs — 2",
  "Pickups — 2",
  "Breakers — 2",
  "Water Pumps — 2",
  "Tractors — 5",
  "Air Compressors — 2",
  "Weighbridge — 1",
] as const;

export const BLOG = [
  { cat: "Infrastructure", date: "Jun 12, 2025", author: "Admin", title: "The Future of Highway Construction in India", desc: "How new materials and smart engineering are reshaping our national road network.", image: "https://images.unsplash.com/photo-1587582423116-ec07293f0395?crop=entropy&cs=srgb&fm=jpg&q=85" },
  { cat: "Safety", date: "May 24, 2025", author: "Anil Patil", title: "Safety Standards on Large Bridge Projects", desc: "A look inside how we maintain zero-accident records on complex bridge sites.", image: "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?crop=entropy&cs=srgb&fm=jpg&q=85" },
  { cat: "Sustainability", date: "Apr 08, 2025", author: "Admin", title: "Sustainable Concrete in Public Works", desc: "Our shift to greener concrete mixes for government building projects.", image: "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?crop=entropy&cs=srgb&fm=jpg&q=85" },
];
