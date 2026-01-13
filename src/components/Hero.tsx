import { motion } from 'motion/react';
import { staggerContainer, fadeUp } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { SparkleIcon, ArrowRightIcon, BarChart } from 'lucide-react';

export const Hero = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.3, once: true }}
      variants={staggerContainer(0)}
      className='pt-32 pb-16 relative'
      id='hero'
    >
      {/* Background decorations */}
      <div className='absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-[100px] -z-10' />
      <div className='absolute bottom-10 right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px] -z-10' />

      <div className='flex flex-col items-center text-center'>
        <motion.div
          variants={fadeUp}
          className='flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-default'
        >
          <SparkleIcon
            size={16}
            className='text-yellow-400'
          />
          <span className='text-sm font-medium bg-linear-to-r from-white to-neutral-400 bg-clip-text text-transparent'>
            Mukhtar Digital Services
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className='text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-5xl capitalize'
        >
          Turn Traffic Into <br />
          <span className='bg-linear-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent'>
            Revenue
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className='text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed'
        >
          I help Shopify store owners and businesses scale to{' '}
          <span className='text-white font-semibold'>$5K+ monthly revenue</span>{' '}
          through expert design, SEO, and conversion optimization.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className='flex flex-wrap justify-center gap-4'
        >
          <Button
            size='lg'
            className='rounded-full px-8 bg-white text-black hover:bg-neutral-200 h-12 text-base font-medium'
            asChild
          >
            <a
              href='#contact'
              className='flex items-center gap-2'
            >
              Get Free Audit <ArrowRightIcon size={18} />
            </a>
          </Button>

          <Button
            variant={'outline'}
            size='lg'
            className='rounded-full px-8 h-12 text-base font-medium border-neutral-700 hover:bg-neutral-800 hover:text-white'
            asChild
          >
            <a
              href='#pricing'
              className='flex items-center gap-2'
            >
              View Packages <BarChart size={18} />
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};
