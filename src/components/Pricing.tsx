import { fadeUp, staggerContainer } from '@/lib/animations';
import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { CheckCircle2, ArrowRight, Code2, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

type PricingTab = 'fullstack' | 'shopify';

const fullstackPackages = [
  {
    name: 'Starter',
    price: 500,
    description: 'Perfect for MVPs, landing pages, and single-page apps.',
    features: [
      'Custom React/Next.js frontend',
      'Responsive design (mobile-first)',
      'Up to 5 pages/routes',
      'Contact form integration',
      'Basic API endpoints',
      'Git repository setup',
      '1-Week Post-Launch Support',
      'Timeline: 7–10 Days',
    ],
    recommended: false,
  },
  {
    name: 'Professional',
    price: 1200,
    description: 'Full-stack applications with backend and database.',
    features: [
      'Full MERN Stack application',
      'REST API with authentication (JWT)',
      'MongoDB database design',
      'Admin dashboard',
      'Payment gateway integration',
      'File upload (Cloudinary)',
      '2-Week Post-Launch Support',
      'Timeline: 14–21 Days',
    ],
    recommended: true,
  },
  {
    name: 'Enterprise',
    price: 2500,
    description: 'Complex systems with multiple roles and integrations.',
    features: [
      'Multi-role user system',
      'Real-time features (WebSockets)',
      'Third-party API integrations',
      'CI/CD pipeline setup',
      'Performance monitoring (Sentry)',
      'Automated testing suite',
      '1-Month Ongoing Support',
      'Timeline: 21–30 Days',
    ],
    recommended: false,
  },
];

const shopifyPackages = [
  {
    name: 'Basic Package',
    price: 250,
    description: 'Perfect for new store launches using standard themes.',
    features: [
      'Custom Shopify store setup (up to 5 pages)',
      'Mobile-friendly responsive design',
      'Sales-boosting features & layout',
      'Basic SEO setup (Meta Tags)',
      '1 Email Marketing Welcome Flow',
      'Social Media Integration',
      '1-Week Post-Launch Support',
      'Timeline: 7 Days',
    ],
    recommended: false,
  },
  {
    name: 'Advanced Package',
    price: 400,
    description: 'For growing businesses needing sales automation.',
    features: [
      'Full Design & Product Setup',
      'Auto Sales Plugins Integration',
      'Advanced SEO (Keywords & On-Page)',
      '3 Email Flows (Welcome, Cart, Upsell)',
      'Social Content Strategy (1-Week)',
      'Basic Email Marketing Campaigns',
      '2 Weeks Support',
      'Timeline: 10-14 Days',
    ],
    recommended: true,
  },
  {
    name: 'Premium Package',
    price: 550,
    description: 'The ultimate scaling solution with full marketing.',
    features: [
      'Premium Custom Design features',
      'Full SEO Optimization + Blog Setup',
      'Website Domain Registration',
      '5+ Email Flows (Klaviyo/Mailchimp)',
      'Ad Setup (TikTok/Facebook/IG)',
      'Full Email Campaign Management',
      '1 Month Ongoing Support',
      'Timeline: 14-21 Days',
    ],
    recommended: false,
  },
];

export const Pricing = () => {
  const [activeTab, setActiveTab] = useState<PricingTab>('fullstack');
  const packages =
    activeTab === 'fullstack' ? fullstackPackages : shopifyPackages;
  const accentFrom =
    activeTab === 'fullstack' ? 'from-cyan-500/20' : 'from-green-500/20';
  const accentTo =
    activeTab === 'fullstack' ? 'to-blue-500/20' : 'to-blue-500/20';
  const accentGradient =
    activeTab === 'fullstack'
      ? 'from-cyan-500 to-blue-600'
      : 'from-green-500 to-emerald-600';
  const accentShadow =
    activeTab === 'fullstack'
      ? 'shadow-cyan-900/20'
      : 'shadow-green-900/20';
  const checkColor =
    activeTab === 'fullstack' ? 'text-cyan-400' : 'text-green-400';

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.1, once: true }}
      variants={staggerContainer(0)}
      className='py-24 relative'
      id='pricing'
    >
      <div className='container mx-auto px-4'>
        <SectionHeader
          title='Invest in your business growth'
          subtitle='Service Packages'
        />

        {/* Pricing Tabs */}
        <motion.div
          variants={fadeUp}
          className='flex justify-center mt-12 mb-4'
        >
          <div className='inline-flex items-center p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md'>
            <button
              onClick={() => setActiveTab('fullstack')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === 'fullstack'
                  ? 'bg-linear-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/20'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Code2 size={18} />
              Full Stack
            </button>
            <button
              onClick={() => setActiveTab('shopify')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === 'shopify'
                  ? 'bg-linear-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/20'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <ShoppingCart size={18} />
              Shopify
            </button>
          </div>
        </motion.div>

        <motion.div
          key={activeTab}
          initial='hidden'
          animate='visible'
          variants={staggerContainer(0.1)}
          className='mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              variants={fadeUp}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`relative rounded-3xl p-1 ${
                pkg.recommended
                  ? `bg-linear-to-b ${accentFrom} ${accentTo}`
                  : 'bg-white/5'
              }`}
            >
              <div className='h-full bg-neutral-900/80 backdrop-blur-xl rounded-[22px] p-8 border border-white/5 hover:border-white/10 transition-colors flex flex-col'>
                {pkg.recommended && (
                  <div
                    className={`absolute -top-4 left-1/2 -translate-x-1/2 bg-linear-to-r ${accentGradient} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg ${accentShadow}`}
                  >
                    Best Value
                  </div>
                )}

                <div className='mb-8'>
                  <h3 className='text-xl font-bold text-white mb-2'>
                    {pkg.name}
                  </h3>
                  <div className='flex items-baseline gap-1'>
                    <span className='text-4xl font-bold text-white'>
                      ${pkg.price}
                    </span>
                    <span className='text-neutral-400'>/one-time</span>
                  </div>
                  <p className='text-neutral-400 text-sm mt-4 leading-relaxed'>
                    {pkg.description}
                  </p>
                </div>

                <ul className='space-y-4 mb-8 flex-1'>
                  {pkg.features.map((feature, i) => (
                    <li
                      key={i}
                      className='flex items-start gap-3 text-sm text-neutral-300'
                    >
                      <CheckCircle2
                        className={`size-5 ${checkColor} shrink-0`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full h-12 rounded-xl font-semibold ${pkg.recommended ? 'bg-white text-black hover:bg-neutral-200' : 'bg-white/10 hover:bg-white/20 text-white'}`}
                  asChild
                >
                  <a
                    href='#contact'
                    className='flex items-center justify-center gap-2'
                  >
                    Get Started <ArrowRight size={16} />
                  </a>
                </Button>
                <p className='text-xs text-center text-neutral-500 mt-4'>
                  Or secure via payment link (Request in chat)
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          className='mt-16 text-center bg-white/5 border border-white/5 rounded-2xl p-8 max-w-3xl mx-auto'
        >
          <h4 className='text-xl font-semibold text-white mb-2'>
            Need a Custom Solution?
          </h4>
          <p className='text-neutral-400 mb-6'>
            I offer specialized custom projects including B2B platforms, SaaS
            applications, and multi-vendor marketplaces. Pricing starts from{' '}
            <span className='text-white'>$300 - $3,000+</span> depending on
            complexity.
          </p>
          <Button
            variant='link'
            className='text-green-400 p-0 h-auto font-medium'
            asChild
          >
            <a href='#contact'>Contact for a Quote &rarr;</a>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};
