import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Code, Palette, PenTool, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900/95 backdrop-blur-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-cyan-400">
            Portfolio
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/projects/content" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2">
              <PenTool size={20} />
              Content
            </Link>
            <Link to="/projects/design" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2">
              <Palette size={20} />
              Design
            </Link>
            <Link to="/projects/wordpress" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2">
              <Globe size={20} />
              WordPress
            </Link>
            <Link to="/projects/react" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2">
              <Code size={20} />
              React
            </Link>
            <button className="btn-primary">Contact</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4"
            >
              <div className="flex flex-col gap-4">
                <Link to="/projects/content" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <PenTool size={20} />
                  Content
                </Link>
                <Link to="/projects/design" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <Palette size={20} />
                  Design
                </Link>
                <Link to="/projects/wordpress" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <Globe size={20} />
                  WordPress
                </Link>
                <Link to="/projects/react" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <Code size={20} />
                  React
                </Link>
                <button className="btn-primary w-full">Contact</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;