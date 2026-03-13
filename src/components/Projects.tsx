import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "AI SaaS Dashboard Concept",
      desc: "A modern dashboard UI concept exploring data visualization and clean interface design.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Modern Dental Clinic Website",
      desc: "A responsive healthcare website concept focused on clean design, accessibility, and easy appointment booking.",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Startup Landing Page",
      desc: "A modern startup landing page built to practice conversion-focused layout and responsive design.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
      >
        <div>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">Projects & Experiments</h2>
          <p className="text-gray-500 max-w-lg">A collection of my recent practice builds and conceptual designs as I grow my skills.</p>
        </div>
        <button className="text-sm font-semibold border-b border-black pb-1 hover:opacity-70 transition-opacity self-start md:self-auto">
          View All Projects
        </button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group cursor-pointer flex flex-col h-full"
          >
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6 bg-gray-100 shadow-sm group-hover:shadow-xl transition-all duration-500">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <ArrowUpRight className="w-5 h-5 text-black" />
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-600 transition-colors">{project.title}</h3>
            <p className="text-sm text-gray-500 line-clamp-2">{project.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
