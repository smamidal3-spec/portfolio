import { motion } from 'motion/react';
import { LayoutTemplate, MonitorSmartphone, Palette, Briefcase } from 'lucide-react';

export default function Services() {
  const services = [
    { icon: <MonitorSmartphone className="w-6 h-6" />, title: "Website Design", desc: "Custom, responsive websites built for modern browsers and devices." },
    { icon: <LayoutTemplate className="w-6 h-6" />, title: "Landing Pages", desc: "High-converting landing pages designed to capture leads and drive sales." },
    { icon: <Palette className="w-6 h-6" />, title: "UI/UX Design", desc: "Intuitive and beautiful user interfaces focused on user experience." },
    { icon: <Briefcase className="w-6 h-6" />, title: "Business Websites", desc: "Professional digital storefronts to establish your brand online." },
  ];

  return (
    <section id="services" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-gray-200/60">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">Services</h2>
        <p className="text-gray-500 max-w-lg">How I can help bring your ideas to life.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-black group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
