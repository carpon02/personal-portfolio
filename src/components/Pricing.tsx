import { fadeUp, staggerContainer } from '@/lib/animations';
import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export const Pricing = () => {
  const packages = [
    {
      name: 'Basic Package',
      price: 250,
      description: 'Perfect for new store launches using standard themes.',
      features: [
        'Custom Shopify store setup (up to 5 pages)',
        'Mobile-friendly responsive design',
        'Sales-boosting features & layout',
        'Basic SEO setup (Thinking Tags)',
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

        <div className='mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              variants={fadeUp}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`relative rounded-3xl p-1 ${
                pkg.recommended
                  ? 'bg-linear-to-b from-green-500/20 to-blue-500/20'
                  : 'bg-white/5'
              }`}
            >
              <div className='h-full bg-neutral-900/80 backdrop-blur-xl rounded-[22px] p-8 border border-white/5 hover:border-white/10 transition-colors flex flex-col'>
                {pkg.recommended && (
                  <div className='absolute -top-4 left-1/2 -translate-x-1/2 bg-linear-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-green-900/20'>
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
                      <CheckCircle2 className='size-5 text-green-400 shrink-0' />
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
        </div>

        <motion.div
          variants={fadeUp}
          className='mt-16 text-center bg-white/5 border border-white/5 rounded-2xl p-8 max-w-3xl mx-auto'
        >
          <h4 className='text-xl font-semibold text-white mb-2'>
            Need a Custom B2B Solution?
          </h4>
          <p className='text-neutral-400 mb-6'>
            I offer specialized B2B optimization, wholesale pricing systems, and
            multi-language support ranging from{' '}
            <span className='text-white'>$300 - $750</span>.
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
