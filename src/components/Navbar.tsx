import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-[#f8f8f8]/80 border-b border-black/5"
    >
      <div className="flex items-center gap-2 text-xl font-bold tracking-tighter">
        <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
          <span className="text-white text-xs">RA</span>
        </div>
        <span>Ram Rise Arts</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
        <a href="#about" className="hover:text-black transition-colors">About</a>
        <a href="#services" className="hover:text-black transition-colors">Services</a>
        <a href="#projects" className="hover:text-black transition-colors">Projects</a>
        <a href="#skills" className="hover:text-black transition-colors">Skills</a>
        <a href="#journey" className="hover:text-black transition-colors">Learning Journey</a>
        <a href="#contact" className="hover:text-black transition-colors">Contact</a>
      </div>

      <a href="#contact" className="hidden md:flex items-center gap-2 text-sm font-semibold hover:opacity-70 transition-opacity">
        Let's Talk <ArrowUpRight className="w-4 h-4" />
      </a>
      
      {/* Mobile menu button */}
      <button className="md:hidden flex flex-col gap-1.5">
        <span className="w-6 h-0.5 bg-black block"></span>
        <span className="w-6 h-0.5 bg-black block"></span>
      </button>
    </motion.nav>
  );
}
