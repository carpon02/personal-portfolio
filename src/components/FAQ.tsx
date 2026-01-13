import { motion, AnimatePresence } from 'motion/react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { SectionHeader } from './SectionHeader';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How long does it take to complete a store?',
    answer:
      'Timelines vary by package. The Basic Package takes about 7 days, Advanced takes 10-14 days, and Premium takes 14-21 days. Custom B2B projects depend on complexity.',
  },
  {
    question: 'Do you offer payment plans?',
    answer:
      'Yes! I offer split payment options (e.g., 50% upfront, 50% upon completion) and performance-based milestones for qualified clients. We can discuss a structure that works for you.',
  },
  {
    question: 'What is included in the Free Audit?',
    answer:
      "My free audit includes a detailed review of your current store's design, speed, SEO performance, and conversion killers. You'll get a PDF report with actionable recommendations.",
  },
  {
    question: 'Do you work with existing stores or only new ones?',
    answer:
      "Both! I help new owners launch effectively and existing owners fix low sales. My 'Advanced' and 'Premium' packages are perfect for revamping underperforming stores.",
  },
  {
    question: 'Will I be able to manage the store myself?',
    answer:
      'Absolutely. I provide client education and support after launch to ensure you know how to add products, manage orders, and check your analytics.',
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
