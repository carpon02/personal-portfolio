import { motion } from 'motion/react';
import { staggerContainer } from '@/lib/animations';
import { projectsData } from '@/constants';
import { SectionHeader } from '@/components/SectionHeader';
import { ProjectCard } from '@/components/ProjectCard';

export const Projects = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.1, once: true }}
      variants={staggerContainer(0)}
      className='py-24 scroll-mt-10 relative'
      id='projects'
    >
      {/* Decoration */}
      <div className='absolute top-40 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10' />

      <div className='container mx-auto px-4'>
        <SectionHeader
          title='My Featured Projects'
          subtitle='Portfolio'
        />

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ amount: 0.1, once: true }}
          variants={staggerContainer(0.2)}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16'
        >
          {projectsData.map((project, i) => (
            <ProjectCard
              key={i}
              imgSrc={project.imgSrc}
              projectLink={project.projectLink}
              tags={project.tags}
              title={project.title}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
