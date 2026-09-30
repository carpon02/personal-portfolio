import { motion } from 'motion/react';
import { staggerContainer, fadeUp } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { SparkleIcon, ArrowRightIcon, Code2, ShoppingCart } from 'lucide-react';
import { useState, useEffect } from 'react';

const roles = [
  'Full Stack Developer',
  'MERN Stack Engineer',
  'Shopify Expert',
  'E-commerce Specialist',
];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const speed = isDeleting ? 40 : 80;
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1),
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

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
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] -z-10' />

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
          className='text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-5xl'
        >
          Building Digital
          <br />
          <span className='bg-linear-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent'>
            Experiences
          </span>{' '}
          That Scale
        </motion.h1>

        {/* Typing Effect */}
        <motion.div
          variants={fadeUp}
          className='h-10 flex items-center justify-center mb-6'
        >
          <span className='text-xl md:text-2xl font-semibold text-neutral-300'>
            {displayText}
          </span>
          <span className='inline-block w-[3px] h-7 bg-green-400 ml-1 animate-pulse' />
        </motion.div>

        <motion.p
          variants={fadeUp}
          className='text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed'
        >
          I build{' '}
          <span className='text-white font-semibold'>
            full-stack web applications
          </span>{' '}
          and help Shopify store owners scale to{' '}
          <span className='text-white font-semibold'>$5K+ monthly revenue</span>{' '}
          through expert development, SEO, and conversion optimization.
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
              href='#projects'
              className='flex items-center gap-2'
            >
              View My Work <Code2 size={18} />
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
              Shopify Packages <ShoppingCart size={18} />
            </a>
          </Button>
        </motion.div>

        {/* Floating tech badges */}
        <motion.div
          variants={fadeUp}
          className='flex flex-wrap justify-center gap-3 mt-12'
        >
          {[
            'React',
            'Node.js',
            'MongoDB',
            'Shopify',
            'TypeScript',
            'Next.js',
          ].map((tech) => (
            <span
              key={tech}
              className='px-3 py-1.5 text-xs font-medium text-neutral-400 bg-white/5 border border-white/10 rounded-full backdrop-blur-md hover:bg-white/10 hover:text-white transition-all cursor-default'
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
