import { fadeUp } from '@/lib/animations';
import { SparkleIcon } from 'lucide-react';
import { motion } from 'motion/react';

export const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className='flex flex-col items-center text-center'>
      <motion.div
        variants={fadeUp}
        className='flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6'
      >
        <SparkleIcon
          size={14}
          className='text-yellow-400'
        />
        <span className='text-sm font-medium bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent'>
          {subtitle}
        </span>
      </motion.div>

      <motion.h2
        variants={fadeUp}
        className='text-4xl md:text-5xl lg:text-6xl font-bold capitalize mt-2 max-w-3xl bg-linear-to-br from-white via-white/90 to-white/50 bg-clip-text text-transparent'
      >
        {title}
      </motion.h2>
    </div>
  );
};
