export default function Footer() {
  return (
    <footer className="bg-[#111] text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-gray-400">
          <span className="text-white font-medium mr-4">Ram Rise Arts</span>
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About Me</a>
          <a href="#projects" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#blog" className="hover:text-white transition-colors">Blog</a>
        </div>

        <a href="mailto:contact@risearts.com" className="text-lg font-medium hover:text-gray-300 transition-colors">
          contact@risearts.com
        </a>

      </div>
    </footer>
  );
}
