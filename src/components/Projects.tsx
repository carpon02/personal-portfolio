import { motion } from 'motion/react';
import { staggerContainer, fadeUp } from '@/lib/animations';
import { projectsData } from '@/constants';
import { SectionHeader } from '@/components/SectionHeader';
import { ProjectCard } from '@/components/ProjectCard';
import { useState } from 'react';

type ProjectFilter = 'all' | 'fullstack' | 'shopify';

const filters: { label: string; value: ProjectFilter }[] = [
  { label: 'All Projects', value: 'all' },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'Shopify', value: 'shopify' },
];

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

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
      <div className='absolute bottom-20 left-0 w-72 h-72 bg-green-500/10 rounded-full blur-[100px] -z-10' />

      <div className='container mx-auto px-4'>
        <SectionHeader
          title='My Featured Projects'
          subtitle='Portfolio'
        />

        {/* Filter Tabs */}
        <motion.div
          variants={fadeUp}
          className='flex justify-center mt-12 mb-4'
        >
          <div className='inline-flex items-center gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md'>
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.value
                    ? 'bg-white text-black shadow-lg'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          key={activeFilter}
          initial='hidden'
          animate='visible'
          variants={staggerContainer(0.1)}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'
        >
          {filteredProjects.map((project, i) => (
            <ProjectCard
              key={i}
              imgSrc={project.imgSrc}
              projectLink={project.projectLink}
              tags={project.tags}
              title={project.title}
              category={project.category}
              description={project.description}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
