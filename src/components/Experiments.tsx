import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Experiments() {
  const experiments = [
    { image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop", title: "Abstract 3D Shapes" },
    { image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop", title: "Minimal UI Kit" },
    { image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop", title: "Glassmorphism Test" },
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-white rounded-3xl my-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
          Portfolio
        </div>
        <h2 className="text-4xl md:text-5xl font-light tracking-tight">Latest Experiments</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {experiments.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative overflow-hidden rounded-2xl aspect-square bg-gray-100 cursor-pointer"
          >
            <img 
              src={exp.image} 
              alt={exp.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <ArrowUpRight className="w-5 h-5 text-black" />
                </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <button className="text-sm font-semibold border-b border-black pb-1 hover:opacity-70 transition-opacity">
          Check out More → View More
        </button>
      </div>
    </section>
  );
}
