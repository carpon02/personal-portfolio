import { fadeUp, staggerContainer } from '@/lib/animations';
import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { services } from '@/constants';
import { ServiceCard } from '@/components/ServiceCard';

export const Services = () => {
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

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ amount: 0.1, once: true }}
          variants={staggerContainer(0.2)}
          className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              className='h-full'
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
