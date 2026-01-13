import type { ToolsType } from '@/types';

export const ToolCard = ({ tool }: { tool: ToolsType }) => {
  return (
    <div className='group relative flex items-center gap-4 rounded-xl border border-white/10 bg-neutral-900/50 p-4 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:bg-neutral-800/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1'>
      {/* Glow Effect */}
      <div className='absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

      <div className='relative flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-neutral-800/50 border border-white/5 group-hover:border-primary/20 transition-colors duration-300'>
        <img
          src={tool.imgSrc}
          alt={tool.label}
          className='h-6 w-6 opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0'
        />
      </div>

      <span className='font-medium text-neutral-300 transition-colors duration-300 group-hover:text-primary'>
        {tool.label}
      </span>
    </div>
  );
};
