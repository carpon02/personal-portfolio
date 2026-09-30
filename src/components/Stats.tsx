import { motion, useInView } from 'motion/react';
import { statsData } from '@/constants';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { useEffect, useRef, useState } from 'react';

const AnimatedNumber = ({ value }: { value: string }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric part and suffix
    const match = value.match(/^([\$]?)([\d.]+)([\+kK%]?)$/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const prefix = match[1];
    const target = parseFloat(match[2]);
    const suffix = match[3];
    const isDecimal = value.includes('.');
    const duration = 1500;
    const steps = 40;
    const stepTime = duration / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += target / steps;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setDisplay(
        `${prefix}${isDecimal ? current.toFixed(1) : Math.floor(current)}${suffix}`,
      );
    }, stepTime);

    return () => clearInterval(interval);
  }, [isInView, value]);

  return (
    <p
      ref={ref}
      className='text-4xl md:text-5xl font-bold bg-linear-to-b from-white to-white/50 bg-clip-text text-transparent lining-nums relative z-10'
    >
      {display}
    </p>
  );
};

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

            <AnimatedNumber value={stat.number} />
            <p className='text-sm font-medium text-neutral-400 tracking-wide uppercase relative z-10'>
              {stat.label}
            </p>
          </motion.div>
        );
      })}
    </motion.section>
  );
};
