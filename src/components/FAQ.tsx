import { motion, AnimatePresence } from 'motion/react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { SectionHeader } from './SectionHeader';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What types of projects do you build?',
    answer:
      'I offer two core services: Full Stack Development (MERN stack web apps, dashboards, marketplaces, APIs) and Shopify Development (store setup, theme customization, SEO, email automation). Whether you need a charity platform, art marketplace, or a high-converting Shopify store — I\'ve got you covered.',
  },
  {
    question: 'How long does it take to complete a project?',
    answer:
      'Timelines vary by project type and complexity. Full Stack projects typically take 7–30 days depending on the package. Shopify stores range from 7–21 days. Custom B2B or enterprise projects depend on scope — we\'ll agree on milestones before starting.',
  },
  {
    question: 'Do you offer payment plans?',
    answer:
      'Yes! I offer split payment options (e.g., 50% upfront, 50% upon completion) and performance-based milestones for qualified clients. We can discuss a structure that works for you.',
  },
  {
    question: 'What is included in the Free Audit?',
    answer:
      "My free audit includes a detailed review of your current store's design, speed, SEO performance, and conversion killers. You'll get a PDF report with actionable recommendations — whether it's a Shopify store or a full-stack web app.",
  },
  {
    question: 'What tech stack do you use for full-stack projects?',
    answer:
      'My primary stack is MERN — MongoDB, Express.js, React (with Next.js for SSR), and Node.js. I also use TypeScript, Redux Toolkit, TailwindCSS, Framer Motion, Paystack/Stripe for payments, Cloudinary for media, and GitHub Actions for CI/CD.',
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer:
      'Absolutely. Every package includes post-launch support (1 week to 1 month depending on the tier). I also offer monthly retainer plans for ongoing maintenance, feature updates, and performance monitoring.',
  },
  {
    question: 'Will I be able to manage the project myself after delivery?',
    answer:
      'Yes. For Shopify stores, I provide training so you can manage products and orders. For full-stack apps, I deliver clean, documented code with a README, and can provide a walkthrough session to help your team maintain it.',
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.1, once: true }}
      variants={staggerContainer(0)}
      className='py-24 relative'
      id='faq'
    >
      <div className='container mx-auto px-4 max-w-4xl'>
        <SectionHeader
          title='Common questions'
          subtitle='FAQ'
        />

        <div className='mt-16 space-y-4'>
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className='border border-white/5 rounded-2xl bg-white/5 overflow-hidden'
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className='w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors'
              >
                <span className='font-medium text-lg text-white pr-8'>
                  {faq.question}
                </span>
                <span className='shrink-0 text-green-400'>
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className='px-6 pb-6 text-neutral-400 leading-relaxed'>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
