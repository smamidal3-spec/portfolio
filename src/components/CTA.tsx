import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="py-40 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-[3rem] p-12 md:p-24 text-center shadow-sm border border-gray-100"
      >
        <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
          Have a project idea?
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10">
          Let’s build something great together.
        </p>
        <button className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors">
          Contact Rise Arts <ArrowUpRight className="w-4 h-4" />
        </button>
      </motion.div>
    </section>
  );
}
