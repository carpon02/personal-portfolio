/**
 * @copyright 2025 Mukhtar Digital Services
 * @license Apache-2.0
 */

/**
 * Types
 */
import type {
  ExperienceType,
  LinksType,
  ProjectType,
  ServiceType,
  StatsType,
  TestimonialsType,
  ToolsType,
} from '@/types';

/**
 * Assets
 */
import {
  BarChart,
  Briefcase,
  Code2,
  Database,
  Facebook,
  Home,
  Instagram,
  Layers,
  Mail,
  MessageCircle,
  Phone,
  Search,
  Server,
  Settings,
  ShoppingCart,
  Smartphone,
  User,
  Zap,
} from 'lucide-react';

export const contactDetails = {
  email: 'abubakarmukhtar2002@gmail.com / mukhtardigitalservices@gmail.com',
  phone: '+2348133930690',
  whatsapp: 'https://wa.me/2349054213940',
  address: 'Ibadan, Nigeria',
  siteName: 'Mukhtar Digital Services',
};

const navLinks: LinksType[] = [
  { label: 'Home', link: '#hero', icon: Home },
  { label: 'Services', link: '#services', icon: Settings },
  { label: 'Portfolio', link: '#projects', icon: Briefcase },
  { label: 'Process', link: '#about', icon: User },
  { label: 'Packages', link: '#pricing', icon: ShoppingCart },
  { label: 'Reviews', link: '#testimonials', icon: MessageCircle },
  { label: 'Contact', link: '#contact', icon: Mail },
];

const socialLinks: LinksType[] = [
  {
    icon: Facebook,
    label: 'Facebook',
    link: '#',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    link: '#',
  },
  {
    icon: Phone,
    label: 'WhatsApp',
    link: contactDetails.whatsapp,
  },
  {
    icon: Mail,
    label: 'Email',
    link: `mailto:${contactDetails.email}`,
  },
];

const projectsData: ProjectType[] = [
  // ─── Full Stack Projects ──────────────────────────────────────
  {
    imgSrc: '/images/project-sabo-charity.jpg',
    title: 'Sabo Charity Foundation',
    tags: ['MERN Stack', 'Paystack', 'JWT Auth', 'Cloudinary'],
    projectLink: 'https://github.com/carpon02/sabocharityfoundation',
    category: 'fullstack',
    description:
      'Full-stack MERN platform for managing donations, events, and volunteers. Features Paystack payments, Google OAuth, admin dashboard, and CI/CD with GitHub Actions.',
  },
  {
    imgSrc: '/images/project-artnaija.jpg',
    title: 'ArtNaija Marketplace',
    tags: ['MERN Stack', 'E-commerce', 'Admin Panel'],
    projectLink: 'https://github.com/carpon02/Artnaija',
    category: 'fullstack',
    description:
      'Digital marketplace showcasing Nigerian art and culture. Artists upload artworks, admins approve listings, buyers browse and purchase securely.',
  },
  {
    imgSrc: '/images/project-animenexa.jpg',
    title: 'AnimeNexa',
    tags: ['React', 'Vite', 'API Integration'],
    projectLink: 'https://github.com/carpon02/AnimeNexa_WebApp',
    category: 'fullstack',
    description:
      'Anime discovery and streaming web app built with React and Vite. Features trending sections, episode lists, and search functionality.',
  },
  {
    imgSrc: '/images/project-carrentals.jpg',
    title: 'Car Rentals',
    tags: ['HTML', 'CSS', 'JavaScript', 'Landing Page'],
    projectLink: 'https://github.com/carpon02/carRentals',
    category: 'fullstack',
    description:
      'Luxury car rental landing page with booking interface, fleet showcase, and responsive modern design.',
  },
  // ─── Shopify Projects ─────────────────────────────────────────
  {
    imgSrc: '/images/project-ph-1.jpeg',
    title: 'Pixie Stick 25',
    tags: ['Shopify', 'CRO', 'Email Marketing'],
    projectLink: 'https://pixie-stick.com/',
    category: 'shopify',
    description:
      'High-converting Shopify store with optimized product pages, email flows, and conversion rate optimization.',
  },
  {
    imgSrc: '/images/project-ph-2.jpeg',
    title: 'Eloare Muse Store',
    tags: ['MERN Stack', 'B2B', 'Inventory'],
    projectLink: 'https://www.eloaremuse.com',
    category: 'shopify',
    description:
      'Full-featured B2B e-commerce store with inventory management and wholesale pricing.',
  },
  {
    imgSrc: '/images/project-ph-3.jpeg',
    title: 'Health Haven Store',
    tags: ['Shopify', 'Design', 'SEO'],
    projectLink: 'https://healthhaven-8702.myshopify.com',
    category: 'shopify',
    description:
      'Health and wellness Shopify store with premium theme design and advanced SEO optimization.',
  },
  {
    imgSrc: '/images/project-ph-4.jpeg',
    title: 'Fitromax',
    tags: ['MERN Stack', 'B2B', 'Inventory'],
    projectLink: 'https://www.fitromax.com',
    category: 'shopify',
    description:
      'Fitness e-commerce platform with B2B features, inventory tracking, and performance optimization.',
  },
];

const education: ExperienceType[] = [
  {
    year: '2019 – 2023',
    title: 'B.Sc. Software Engineering',
    institute: 'University Degree',
    desc: 'Specialized in Software Engineering, Database Management, and Web Technologies.',
  },
  {
    year: '2023',
    title: 'Certified Shopify Expert',
    institute: 'Shopify Partners Academy',
    desc: 'Mastered theme development, Liquid programming, and store optimization techniques.',
  },
  {
    year: '2024',
    title: 'Advanced SEO & Marketing',
    institute: 'Google Digital Garage',
    desc: 'Completed comprehensive training in search engine optimization and digital marketing strategies.',
  },
];

const experience: ExperienceType[] = [
  {
    year: 'June 2023 – Dec 2023',
    title: 'Frontend Development Intern (SIWES Internship)',
    institute: 'Trez-Tech | Remote / Hybrid',
    desc: 'Developed and optimized React.js and Node.js features for client applications, improving performance by 30%. Integrated REST APIs with secure state management (Redux), implemented responsive UI with Tailwind CSS, and collaborated in an Agile/Scrum workflow using Git.',
  },
  {
    year: '2021 – 2022',
    title: 'Software Development Trainee (Certificate Program)',
    institute: 'Aptech',
    desc: 'Completed full-stack training covering HTML, CSS, JavaScript, Node.js, and MongoDB. Built and presented end-to-end prototypes, including authentication and database integration.',
  },
  {
    year: '2024',
    title: 'AI Safety Contributor (AI Prompt Engineering Challenge)',
    institute: 'Adversarial Nibbler | Remote',
    desc: 'Designed creative and adversarial prompts to identify vulnerabilities and safety limitations in AI image generation systems (e.g., DALL·E). Contributed to bias detection, adversarial testing, and safe AI model development.',
  },
];


const tools: ToolsType[] = [
  {
    label: 'React',
    imgSrc: '/images/tools/react.svg',
  },
  {
    label: 'Node.js',
    imgSrc: '/images/tools/nodejs.svg',
  },
  {
    label: 'MongoDB',
    imgSrc: '/images/tools/mongodb.svg',
  },
  {
    label: 'Express',
    imgSrc: 'https://cdn.worldvectorlogo.com/logos/express-109.svg',
  },
  {
    label: 'TypeScript',
    imgSrc: 'https://cdn.worldvectorlogo.com/logos/typescript.svg',
  },
  {
    label: 'Tailwind',
    imgSrc: '/images/tools/tailwindcss.svg',
  },
  {
    label: 'Shopify',
    imgSrc: 'https://cdn.worldvectorlogo.com/logos/shopify.svg',
  },
  {
    label: 'Next.js',
    imgSrc: 'https://cdn.worldvectorlogo.com/logos/next-js.svg',
  },
  {
    label: 'Redux',
    imgSrc: 'https://cdn.worldvectorlogo.com/logos/redux.svg',
  },
  {
    label: 'Git',
    imgSrc: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg',
  },
  {
    label: 'Klaviyo',
    imgSrc: 'https://cdn.worldvectorlogo.com/logos/klaviyo.svg',
  },
  {
    label: 'Google SEO',
    imgSrc: 'https://cdn.worldvectorlogo.com/logos/google-icon.svg',
  },
];

// ─── Full Stack Services ────────────────────────────────────────
const fullstackServices: ServiceType[] = [
  {
    title: 'Custom Web Applications',
    desc: 'End-to-end MERN stack applications with React frontends, Node.js APIs, and MongoDB databases. From dashboards to marketplaces.',
    projects: '15+ Apps',
    icon: <Code2 className='h-6 w-6 text-cyan-400' />,
  },
  {
    title: 'REST API Development',
    desc: 'Scalable, secure backend APIs with Express.js, JWT authentication, and payment integrations like Paystack.',
    projects: '20+ APIs',
    icon: <Server className='h-6 w-6 text-cyan-400' />,
  },
  {
    title: 'Database Architecture',
    desc: 'MongoDB schema design, data modeling, aggregation pipelines, and cloud deployment with Atlas.',
    projects: '25+ DBs',
    icon: <Database className='h-6 w-6 text-cyan-400' />,
  },
  {
    title: 'Frontend Development',
    desc: 'Modern React/Next.js interfaces with Redux state management, Framer Motion animations, and responsive Tailwind CSS.',
    projects: '30+ UIs',
    icon: <Layers className='h-6 w-6 text-cyan-400' />,
  },
  {
    title: 'Mobile App Dev',
    desc: 'Custom mobile applications using React Native for iOS and Android with shared codebase.',
    projects: '10+ Apps',
    icon: <Smartphone className='h-6 w-6 text-cyan-400' />,
  },
  {
    title: 'Custom Integration',
    desc: 'Third-party API integrations, OAuth flows, payment gateways, and cloud services (Cloudinary, Sentry, etc.).',
    projects: '20+ Systems',
    icon: <Zap className='h-6 w-6 text-cyan-400' />,
  },
];

// ─── Shopify Services ───────────────────────────────────────────
const shopifyServices: ServiceType[] = [
  {
    title: 'Shopify Store Setup',
    desc: 'High-converting store design and development. From simple setups to complex custom themes with Liquid.',
    projects: '40+ Stores',
    icon: <ShoppingCart className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'SEO & Performance',
    desc: 'Rank higher on Google and speed up your site. Keyword research, meta tags, and Core Web Vitals optimization.',
    projects: '25+ Audits',
    icon: <Search className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Email Automation',
    desc: 'Set up Klaviyo flows (Welcome, Abandoned Cart, Post-Purchase) that generate revenue while you sleep.',
    projects: '15+ Setups',
    icon: <Mail className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'CRO & Audits',
    desc: 'Detailed analysis of your store to find why visitors are not buying and fix it. A/B testing and heatmap analysis.',
    projects: 'Ongoing',
    icon: <BarChart className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Theme Customization',
    desc: 'Custom Shopify theme development with Liquid, advanced sections, and brand-perfect design systems.',
    projects: '35+ Themes',
    icon: <Layers className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'App Integration',
    desc: 'Connect and configure Shopify apps for reviews, upsells, subscriptions, and inventory management.',
    projects: '50+ Apps',
    icon: <Zap className='h-6 w-6 text-green-400' />,
  },
];

const statsData: StatsType[] = [
  {
    number: '30+',
    label: 'Happy Clients',
  },
  {
    number: '$5k+',
    label: 'Monthly Client Rev',
  },
  {
    number: '50+',
    label: 'Projects Delivered',
  },
  {
    number: '4.9',
    label: 'Client Rating',
  },
];

const testimonials: TestimonialsType[] = [
  {
    name: 'Sarah Jenkins',
    role: 'Owner, Glow Beauty',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'Mukhtar transformed our Shopify store. We went from $0 to $3k in monthly sales within the first 60 days. His SEO strategy was a game changer.',
    link: '#',
  },
  {
    name: 'David Okafor',
    role: 'CEO, TechTrends Nigeria',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'I hired him for a custom MERN stack inventory system. Professional, fast, and the code quality is top-notch. Highly recommended for complex projects.',
    link: '#',
  },
  {
    name: 'Emily Chen',
    role: 'Dropshipper',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: 'The Advanced Package was worth every penny. The email flows he set up are generating 20% of my revenue automatically. Thank you!',
    link: '#',
  },
];

export {
  socialLinks,
  projectsData,
  education,
  experience,
  tools,
  fullstackServices,
  shopifyServices,
  navLinks,
  statsData,
  testimonials,
};
