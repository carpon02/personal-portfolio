import { motion } from 'motion/react';
import { statsData } from '@/constants';
import { fadeUp, staggerContainer } from '@/lib/animations';

export const Stats = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.8, once: true }}
      variants={staggerContainer(0.2)}
      className='grid grid-cols-2 md:grid-cols-4 gap-6 container mx-auto'
      id='stats'
    >
      {statsData.map((stat, i) => {
        return (
          <motion.div
            variants={fadeUp}
            className='rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm p-6 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors group relative overflow-hidden'
            key={i}
          >
            {/* Subtle glow on hover */}
            <div className='absolute inset-0 bg-linear-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

            <p className='text-4xl md:text-5xl font-bold bg-linear-to-b from-white to-white/50 bg-clip-text text-transparent lining-nums relative z-10'>
              {stat.number}
            </p>
            <p className='text-sm font-medium text-neutral-400 tracking-wide uppercase relative z-10'>
              {stat.label}
            </p>
          </motion.div>
        );
      })}
    </motion.section>
  );
};
