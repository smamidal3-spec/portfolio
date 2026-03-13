import { motion } from 'motion/react';
import { Lightbulb, Zap, Brain, Rocket } from 'lucide-react';

export default function About() {
  const strengths = [
    { icon: <Zap className="w-5 h-5" />, title: "Fast Learner", desc: "Quick to grasp new concepts and technologies." },
    { icon: <Lightbulb className="w-5 h-5" />, title: "Passion for UI/UX", desc: "Dedicated to creating beautiful, intuitive interfaces." },
    { icon: <Brain className="w-5 h-5" />, title: "Problem Solving", desc: "Approaching challenges with a logical mindset." },
    { icon: <Rocket className="w-5 h-5" />, title: "Curiosity", desc: "Always exploring the latest in web technology." },
  ];

  return (
    <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8">About Me</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
            I’m Ram, the founder of Rise Arts. I’m an aspiring developer focused on building modern websites and digital experiences. While I’m early in my journey, I’m passionate about design, technology, and solving problems through code.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg mt-6">
            Rise Arts represents my growing journey into web design and development, where I experiment, build projects, and refine my skills.
          </p>
        </motion.div>

        {/* Right - Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {strengths.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-6 text-black group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
