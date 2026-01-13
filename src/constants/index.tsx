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
  Facebook,
  Home,
  Instagram,
  Mail,
  MessageCircle,
  Phone,
  Search,
  Settings,
  ShoppingCart,
  Smartphone,
  User,
  Zap,
} from 'lucide-react';

export const contactDetails = {
  email: 'abubakarmukhtar2002@gmail.com',
  phone: '+2348133930690',
  whatsapp: 'https://wa.me/2348133930690',
  address: 'Lagos, Nigeria',
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
  {
    imgSrc: '/images/project-ph-1.jpeg',
    title: 'Pixie Stick 25',
    tags: ['Shopify', 'CRO', 'Email Marketing'],
    projectLink: 'https://pixie-stick.com/',
  },
  {
    imgSrc: '/images/project-ph-2.jpeg',
    title: 'Eloare Muse Store',
    tags: ['MERN Stack', 'B2B', 'Inventory'],
    projectLink: 'https://www.eloaremuse.com',
  },
  {
    imgSrc: '/images/project-ph-3.jpeg',
    title: 'Health Haven Store',
    tags: ['Shopify', 'Design', 'SEO'],
    projectLink: 'https://healthhaven-8702.myshopify.com',
  },
  {
    imgSrc: '/images/project-ph-4.jpeg',
    title: 'Fitromax',
    tags: ['MERN Stack', 'B2B', 'Inventory'],
    projectLink: 'https://www.fitromax.com',
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
    label: 'Shopify',
    imgSrc: 'https://cdn.worldvectorlogo.com/logos/shopify.svg',
  },
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
    label: 'Klaviyo',
    imgSrc: 'https://cdn.worldvectorlogo.com/logos/klaviyo.svg',
  },
  {
    label: 'Google SEO',
    imgSrc: 'https://cdn.worldvectorlogo.com/logos/google-icon.svg',
  },
  {
    label: 'Meta Ads',
    imgSrc: 'https://cdn.worldvectorlogo.com/logos/meta-1.svg',
  },
  {
    label: 'Tailwind',
    imgSrc: '/images/tools/tailwindcss.svg',
  },
];

const services: ServiceType[] = [
  {
    title: 'Shopify Store Setup',
    desc: 'High-converting store design and development. From simple setups to complex custom themes.',
    projects: '40+ Stores',
    icon: <ShoppingCart className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'SEO & Performance',
    desc: 'Rank higher on Google and speed up your site. Keyword research, meta tags, and speed optimization.',
    projects: '25+ Audits',
    icon: <Search className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Email Automation',
    desc: 'Set up Klaviyo flows (Welcome, Abandoned Cart) that generate revenue while you sleep.',
    projects: '15+ Setups',
    icon: <Mail className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Mobile App Dev',
    desc: 'Custom mobile applications using React Native and Flutter for iOS and Android.',
    projects: '10+ Apps',
    icon: <Smartphone className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'CRO & Audits',
    desc: 'Detailed analysis of your store to find why visitors are not buying and fix it.',
    projects: 'Ongoing',
    icon: <BarChart className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Custom Integration',
    desc: 'API integrations, custom plugins, and backend systems using MERN stack.',
    projects: '20+ Systems',
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
  services,
  navLinks,
  statsData,
  testimonials,
};
