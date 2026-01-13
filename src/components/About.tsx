import { fadeUp, staggerContainer } from '@/lib/animations';
import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { Button } from './ui/button';
import { ArrowRightIcon, CheckCircle2 } from 'lucide-react';

export const About = () => {
  const philosophy = [
    'Focus on measurable results (ROI)',
    'Trust through transparency',
    'Client education & support',
    'Fast turnaround times',
  ];

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.3, once: true }}
      variants={staggerContainer(0)}
      className='py-24 relative'
      id='about'
    >
      <div className='container mx-auto px-4'>
        <SectionHeader
          title='More Than Just Development'
          subtitle='About Me'
        />

        <div className='mt-16 flex flex-col md:flex-row gap-12 items-center'>
          {/* Visual/Image Side */}
          <motion.div
            variants={fadeUp}
            className='w-full md:w-1/2'
          >
            <div className='relative aspect-square md:aspect-4/3 rounded-3xl overflow-hidden bg-neutral-900 border border-white/5'>
              <div className='absolute inset-0 bg-linear-to-br from-green-500/20 to-blue-500/20' />
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='w-3/4 h-auto bg-neutral-950/50 backdrop-blur-xl rounded-2xl border border-white/10 p-8 flex flex-col justify-center'>
                  <h3 className='text-xl font-bold bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent mb-4'>
                    Software Engineer & E-commerce Expert
                  </h3>
                  <p className='text-neutral-400 text-sm mb-4'>
                    I bridge the gap between complex technical solutions and
                    profitable business strategies.
                  </p>
                  <div className='space-y-2'>
                    {philosophy.map((item, i) => (
                      <div
                        key={i}
                        className='flex items-center gap-2'
                      >
                        <CheckCircle2
                          size={14}
                          className='text-green-400 shrink-0'
                        />
                        <span className='text-xs text-neutral-300'>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            variants={staggerContainer(0.2)}
            className='w-full md:w-1/2 space-y-6'
          >
            <motion.p
              variants={fadeUp}
              className='text-lg text-neutral-300 leading-relaxed'
            >
              I am <strong>Abubakar Mukhtar</strong>, a specialist in building
              high-performing digital products. With expertise in the MERN Stack
              and Shopify ecosystem, I help businesses stop guessing and start
              growing.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className='text-lg text-neutral-400 leading-relaxed'
            >
              My approach is data-driven. I don't just design extensive
              websites; I build systems that capture leads, convert visitors,
              and retain customers. Whether you are launching a new store or
              scaling an existing one, I provide the technical backbone you
              need.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className='pt-4'
            >
              <Button
                className='rounded-full px-8 h-12 text-base'
                asChild
              >
                <a
                  href='#contact'
                  className='flex items-center gap-2'
                >
                  Discuss Your Project <ArrowRightIcon size={18} />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
