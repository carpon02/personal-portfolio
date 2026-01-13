import type { ServiceType } from '@/types';

export const ServiceCard = ({ service }: { service: ServiceType }) => {
  return (
    <div className='relative p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 group hover:border-primary/50 hover:bg-neutral-900/80 overflow-hidden h-full flex flex-col justify-between'>
      {/* Gradient Glow Effect */}
      <div className='absolute -right-10 -top-10 w-24 h-24 sm:w-32 sm:h-32 bg-primary/20 blur-3xl rounded-full group-hover:bg-primary/30 transition-colors' />
      <div className='absolute -left-10 -bottom-10 w-24 h-24 sm:w-32 sm:h-32 bg-primary/10 blur-3xl rounded-full group-hover:bg-primary/20 transition-colors' />

      <div className='relative z-10 flex items-center justify-between mb-6 sm:mb-8'>
        <div className='text-primary w-12 h-12 sm:w-14 sm:h-14 grid place-content-center bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] transition-all duration-300'>
          {service.icon}
        </div>

        <span className='text-3xl sm:text-4xl font-black bg-gradient-to-b from-white/20 to-white/5 bg-clip-text text-transparent group-hover:from-white/40 group-hover:to-white/10 transition-all'>
          {service.projects}
        </span>
      </div>

      <div>
        <h3 className='relative z-10 text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:pl-2 transition-all duration-300'>
          {service.title}
        </h3>
        <p className='relative z-10 text-neutral-400 text-sm leading-relaxed tracking-wide group-hover:text-neutral-300 transition-colors'>
          {service.desc}
        </p>
      </div>

      {/* Decorative Line */}
      <div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out' />
    </div>
  );
};
