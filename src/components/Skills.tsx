import { motion } from 'motion/react';

export default function Skills() {
  const categories = [
    {
      title: "DIGITAL DESIGN",
      skills: ["Figma", "Photoshop", "Illustrator", "Framer"]
    },
    {
      title: "FRONTEND",
      skills: ["React", "Angular", "Vue.js", "Flutter"]
    },
    {
      title: "BACKEND",
      skills: ["Python", "Node.js", "Laravel", "PHP"]
    },
    {
      title: "CLOUD / DEVOPS",
      skills: ["AWS", "Firebase", "Google Cloud", "Azure"]
    }
  ];

  return (
    <section id="skills" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-gray-200/60">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-light tracking-tight">Technology Stack</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {categories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <h3 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-6">{category.title}</h3>
            <ul className="space-y-4">
              {category.skills.map((skill, sIdx) => (
                <li key={sIdx} className="text-lg font-medium text-gray-800 hover:text-black transition-colors flex items-center gap-2 group cursor-default">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-black transition-colors"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
