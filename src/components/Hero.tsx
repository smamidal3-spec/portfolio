import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col items-start relative">
          {/* Vertical text on the far left (desktop only) */}
          <div 
            className="hidden lg:block absolute -left-10 top-1/2 -translate-y-1/2 text-xs tracking-widest text-gray-400 uppercase"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Aspiring Developer
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex gap-8 mb-12"
          >
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-black">• Passionate about</span>
              <span className="text-sm text-gray-500">UI & Web Design</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-black">• Currently building</span>
              <span className="text-sm text-gray-500">New projects weekly</span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-8xl md:text-[11rem] font-light tracking-tighter mb-6 text-black leading-none"
          >
            Hello
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed mb-8"
          >
            — I'm <span className="text-black font-medium">Ram</span> founder of Rise Arts and an aspiring web developer building modern digital experiences.
            <span className="block mt-4 text-xs font-bold tracking-widest uppercase text-gray-400">Rise Arts Web Design & Development</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gray-500 max-w-md leading-relaxed"
          >
            I focus on creating clean, modern websites and continuously improving my skills through building real projects and experimenting with new technologies.
          </motion.p>

          <motion.a 
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex items-center gap-2 text-sm font-medium text-gray-400 uppercase tracking-widest hover:text-black transition-colors"
          >
            Scroll down <ArrowDown className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Right Column - Image */}
        <div className="lg:col-span-5 relative mt-12 lg:mt-0 flex justify-center lg:justify-end">
          <motion.div
            initial={{ filter: 'blur(20px)', opacity: 0, y: 40 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="relative w-full max-w-md mx-auto lg:mx-0"
          >
            {/* Ambient glow behind the portrait to make it pop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-300 to-transparent rounded-full blur-3xl opacity-40 -z-10 transform scale-90 translate-y-10"></div>
            
            {/* IMPORTANT: Make sure your uploaded image is named exactly "portrait.png" in the public folder */}
            <img 
              src="/portrait.png" 
              alt="Portrait" 
              className="w-full h-auto object-contain drop-shadow-2xl grayscale contrast-125 brightness-110 hover:grayscale-0 transition-all duration-700 scale-110 origin-bottom"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
              }}
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
