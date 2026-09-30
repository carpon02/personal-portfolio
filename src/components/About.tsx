import { fadeUp, staggerContainer } from '@/lib/animations';
import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { Button } from './ui/button';
import { ArrowRightIcon, CheckCircle2, Code2, ShoppingCart, Rocket, Users } from 'lucide-react';

const processSteps = [
  {
    icon: <Users className='size-6' />,
    title: 'Discovery',
    desc: 'We discuss your goals, target audience, and technical requirements.',
    step: '01',
  },
  {
    icon: <Code2 className='size-6' />,
    title: 'Development',
    desc: 'I build your solution using the best tech stack for your needs.',
    step: '02',
  },
  {
    icon: <ShoppingCart className='size-6' />,
    title: 'Optimization',
    desc: 'SEO, speed optimization, and conversion rate improvements.',
    step: '03',
  },
  {
    icon: <Rocket className='size-6' />,
    title: 'Launch & Scale',
    desc: 'Deploy, monitor, and iterate based on real user data.',
    step: '04',
  },
];

export const About = () => {
  const philosophy = [
    'Focus on measurable results (ROI)',
    'Trust through transparency',
    'Client education & support',
    'Fast turnaround times',
    'Clean, maintainable code',
    'Scalable architecture',
  ];

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.2, once: true }}
      variants={staggerContainer(0)}
      className='py-24 relative'
      id='about'
    >
      <div className='container mx-auto px-4'>
        <SectionHeader
          title='More Than Just Development'
          subtitle='About Me'
        />

        <div className='mt-16 flex flex-col md:flex-row gap-12 items-start'>
          {/* Content Side */}
          <motion.div
            variants={staggerContainer(0.2)}
            className='w-full md:w-1/2 space-y-6'
          >
            <motion.p
              variants={fadeUp}
              className='text-lg text-neutral-300 leading-relaxed'
            >
              I am <strong>Abubakar Mukhtar</strong>, a{' '}
              <span className='text-cyan-400 font-semibold'>
                Full Stack Developer
              </span>{' '}
              and{' '}
              <span className='text-green-400 font-semibold'>
                Shopify Expert
              </span>{' '}
              based in Nigeria. I specialize in building high-performing digital
              products using the MERN stack and Shopify ecosystem.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className='text-lg text-neutral-400 leading-relaxed'
            >
              From charity platforms and art marketplaces to e-commerce stores,
              I build systems that capture leads, convert visitors, and retain
              customers. Whether you need a custom full-stack application or a
              revenue-generating Shopify store, I provide the technical backbone
              you need.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className='grid grid-cols-2 gap-3 pt-2'
            >
              {philosophy.map((item, i) => (
                <div
                  key={i}
                  className='flex items-center gap-2'
                >
                  <CheckCircle2
                    size={14}
                    className='text-green-400 shrink-0'
                  />
                  <span className='text-sm text-neutral-300'>{item}</span>
                </div>
              ))}
            </motion.div>

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

          {/* Process Steps Side */}
          <motion.div
            variants={staggerContainer(0.15)}
            className='w-full md:w-1/2'
          >
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className='relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md group hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300'
                >
                  <span className='absolute top-4 right-4 text-5xl font-black text-white/5 group-hover:text-white/10 transition-colors'>
                    {step.step}
                  </span>
                  <div className='relative z-10'>
                    <div className='size-12 rounded-xl bg-linear-to-br from-green-500/20 to-cyan-500/20 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform'>
                      {step.icon}
                    </div>
                    <h4 className='text-lg font-bold text-white mb-2'>
                      {step.title}
                    </h4>
                    <p className='text-sm text-neutral-400 leading-relaxed'>
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
