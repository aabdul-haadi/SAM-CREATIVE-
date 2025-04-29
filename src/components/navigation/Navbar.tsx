import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Code, Palette, PenTool, Home, Bot, MessageCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react'; // ✅ Proper LucideIcon typing
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as HeadlessMenu, Transition } from '@headlessui/react';
// import { useTheme } from '../../context/ThemeContext'; // ❌ Commented theme switching

// Define types
type NavItem = {
  id: string;
  title: string;
};

interface NavDropdownProps {
  title: string;
  icon: LucideIcon;
  items: NavItem[];
}

// NavDropdown Component
const NavDropdown = ({ title, icon: Icon, items }: NavDropdownProps) => (
  <HeadlessMenu as="div" className="relative">
    {({ open }) => (
      <>
        <HeadlessMenu.Button className="text-secondary dark:text-secondary-dark hover:text-primary transition-colors flex items-center gap-2 py-2">
          <Icon size={20} />
          {title}
        </HeadlessMenu.Button>
        <Transition
          show={open}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <HeadlessMenu.Items className="absolute z-50 mt-2 w-56 origin-top-right bg-secondary rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="p-2 space-y-1">
              {items.map((item) => (
                <HeadlessMenu.Item key={item.id}>
                  {({ active }) => (
                    <Link
                      to={`/projects/${item.id}`}
                      className={`${
                        active
                          ? 'bg-secondary/80 text-primary'
                          : 'text-secondary-dark'
                      } group flex items-center rounded-lg px-4 py-3 text-sm transition-colors`}
                    >
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  )}
                </HeadlessMenu.Item>
              ))}
            </div>
          </HeadlessMenu.Items>
        </Transition>
      </>
    )}
  </HeadlessMenu>
);

// Navbar Component
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // const { theme, toggleTheme } = useTheme(); // ❌ Commented theme switching

  const webDevItems: NavItem[] = [
    { id: 'wordpress-ecommerce', title: 'WordPress E-commerce' },
    { id: 'saas-dashboards', title: 'SaaS Solutions' },
    { id: 'react-landing', title: 'React Development' },
  ];

  const contentItems: NavItem[] = [
    { id: 'seo-blog', title: 'SEO Blog Articles' },
    { id: 'product-descriptions', title: 'Product Descriptions' },
    { id: 'email-ad-copy', title: 'Email & Ad Copy' },
  ];

  const designItems: NavItem[] = [
    { id: 'brand-identity', title: 'Brand Identity' },
    { id: 'social-media', title: 'Social Media Design' },
    { id: 'print-design', title: 'Print Design' },
  ];

  const scrollToAISection = () => {
    const aiSection = document.getElementById('ai-section');
    if (aiSection) {
      aiSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-secondary/95 backdrop-blur-sm py-4 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4">
            <img 
              src="/dark.png" 
              alt="SAM CREATIVE" 
              className="h-16 w-auto"
            />
           <span
  className="text-2xl font-bold text-secondary-dark"
  style={{ fontFamily: 'Biger Over, sans-serif' }}
>
  SAM CREATIVE
</span>

          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="nav-link flex items-center gap-2">
              <Home size={20} />
              Home
            </Link>
            <NavDropdown title="Web Development" icon={Code} items={webDevItems} />
            <NavDropdown title="Content Writing" icon={PenTool} items={contentItems} />
            <NavDropdown title="Design" icon={Palette} items={designItems} />
            <button
              onClick={scrollToAISection}
              className="nav-link flex items-center gap-2"
            >
              <Bot size={20} />
              AI Assistant
            </button>
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full text-primary"
                aria-label="Contact on WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary-dark"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 bg-secondary rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-4 space-y-4">
                <Link 
                  to="/" 
                  className="nav-link flex items-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Home size={20} />
                  Home
                </Link>

                {/* Web Development */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-secondary-dark/70">
                    Web Development
                  </p>
                  {webDevItems.map((item) => (
                    <Link
                      key={item.id}
                      to={`/projects/${item.id}`}
                      className="nav-link flex items-center pl-6 py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>

                {/* Content Writing */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-secondary-dark/70">
                    Content Writing
                  </p>
                  {contentItems.map((item) => (
                    <Link
                      key={item.id}
                      to={`/projects/${item.id}`}
                      className="nav-link flex items-center pl-6 py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>

                {/* Design */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-secondary-dark/70">
                    Design
                  </p>
                  {designItems.map((item) => (
                    <Link
                      key={item.id}
                      to={`/projects/${item.id}`}
                      className="nav-link flex items-center pl-6 py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>

                <button
                  onClick={() => {
                    scrollToAISection();
                    setIsOpen(false);
                  }}
                  className="nav-link flex items-center gap-2"
                >
                  <Bot size={20} />
                  AI Assistant
                </button>

                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link flex items-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <MessageCircle size={20} />
                  Contact Us
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
