import { fadeUp, staggerContainer } from '@/lib/animations';
import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { fullstackServices, shopifyServices } from '@/constants';
import { ServiceCard } from '@/components/ServiceCard';
import { useState } from 'react';
import { Code2, ShoppingCart } from 'lucide-react';

type ServiceTab = 'fullstack' | 'shopify';

export const Services = () => {
  const [activeTab, setActiveTab] = useState<ServiceTab>('fullstack');
  const currentServices =
    activeTab === 'fullstack' ? fullstackServices : shopifyServices;

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.1, once: true }}
      variants={staggerContainer(0)}
      className='py-24 relative overflow-hidden'
      id='services'
    >
      {/* Background decoration */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] -z-10' />

      <div className='container mx-auto px-4'>
        <SectionHeader
          title='Building with purpose & precision'
          subtitle='Our Services'
        />

        {/* Service Tabs */}
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
          className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'
        >
          {currentServices.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              className='h-full'
            >
              <ServiceCard
                service={service}
                accentColor={activeTab === 'fullstack' ? 'cyan' : 'green'}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
