import { motion } from 'motion/react';

export default function Journey() {
  const journey = [
    {
      date: "Present",
      title: "Practicing UI design and frontend architecture",
      desc: "Diving deep into design systems, component architecture, and creating pixel-perfect user interfaces.",
      tags: ["UI/UX", "Frontend", "Architecture"]
    },
    {
      date: "Recent",
      title: "Exploring modern frameworks",
      desc: "Transitioned from vanilla JS to React and modern tools. Built several interactive web applications.",
      tags: ["React", "Frameworks", "JavaScript"]
    },
    {
      date: "Earlier",
      title: "Built my first responsive website",
      desc: "Applied HTML, CSS, and basic JS to build fully responsive, mobile-first websites from scratch.",
      tags: ["HTML", "CSS", "Responsive Design"]
    },
    {
      date: "Start",
      title: "Started learning web development",
      desc: "Began my journey into coding, understanding the fundamentals of the web and programming logic.",
      tags: ["Fundamentals", "Logic", "Web"]
    }
  ];

  return (
    <section id="journey" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-gray-200/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <div className="lg:col-span-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sticky top-32"
          >
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
              Timeline
            </div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">Explore My Learning Journey</h2>
            <p className="text-gray-500 mb-8">
              A timeline of my progress, from writing my first line of code to building modern web applications.
            </p>
            <button className="text-sm font-semibold border-b border-black pb-1 hover:opacity-70 transition-opacity">
              Download Resume
            </button>
          </motion.div>
        </div>

        <div className="lg:col-span-8">
          <div className="space-y-12">
            {journey.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col md:flex-row gap-4 md:gap-8 group"
              >
                <div className="md:w-1/4 shrink-0 pt-1">
                  <span className="text-sm text-gray-400 font-medium">{item.date}</span>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-600 transition-colors">{item.title}</h3>
                  <p className="text-gray-500 mb-4 leading-relaxed">{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
