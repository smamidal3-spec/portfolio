import { motion } from 'motion/react';

export default function Blog() {
  const posts = [
    {
      tag: "DEVELOPMENT",
      time: "5 min read",
      title: "What I learned building my first website",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
    },
    {
      tag: "DESIGN",
      time: "4 min read",
      title: "Why UI design matters in modern websites",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop"
    },
    {
      tag: "PERSONAL",
      time: "6 min read",
      title: "My journey learning web development",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="blog" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
          Blogs
        </div>
        <h2 className="text-4xl md:text-5xl font-light tracking-tight">Design Insights & Learning</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="overflow-hidden rounded-2xl aspect-[4/3] mb-6 bg-gray-100">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex items-center gap-3 mb-3">
              <span className="px-2 py-1 bg-black text-white text-[10px] font-bold tracking-wider uppercase rounded-sm">
                {post.tag}
              </span>
              <span className="text-xs text-gray-500 font-medium">{post.time}</span>
            </div>
            <h3 className="text-xl font-semibold group-hover:text-gray-600 transition-colors leading-snug">
              {post.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
