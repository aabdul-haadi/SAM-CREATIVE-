import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Code, Palette, PenTool, Home, Bot } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as HeadlessMenu, Transition } from '@headlessui/react';

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
            <img src="/dark.png" alt="SAM CREATIVE" className="h-16 w-auto" />
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

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full text-green-500 hover:text-green-600 transition-colors"
              aria-label="Contact on WhatsApp"
            >
              {/* Professional WhatsApp SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path d="M16.043 2.004C8.641 1.998 2.535 8.098 2.535 15.5c0 2.736.746 5.422 2.16 7.777L2 30l6.89-2.616a13.402 13.402 0 006.945 1.914h.008c7.402 0 13.508-6.098 13.508-13.5 0-7.402-6.098-13.504-13.508-13.504zm0 24.654c-2.344 0-4.637-.617-6.652-1.785l-.477-.285-4.09 1.555 1.551-4.016-.309-.492a11.404 11.404 0 01-1.715-6.07c0-6.324 5.145-11.469 11.473-11.469 3.07 0 5.953 1.203 8.133 3.379a11.434 11.434 0 013.34 8.09c0 6.324-5.145 11.418-11.473 11.418zm6.273-8.68c-.344-.172-2.035-1.004-2.348-1.117-.313-.117-.543-.172-.773.172-.23.34-.887 1.117-1.09 1.348-.199.23-.402.258-.746.086-.344-.172-1.453-.535-2.766-1.711-1.023-.914-1.715-2.039-1.918-2.383-.199-.34-.023-.523.148-.695.152-.152.34-.395.512-.59.172-.195.23-.34.344-.566.117-.227.059-.426-.031-.598-.09-.172-.773-1.867-1.059-2.551-.277-.664-.562-.574-.773-.586-.199-.008-.426-.008-.652-.008-.227 0-.594.086-.906.426-.313.34-1.188 1.16-1.188 2.828s1.215 3.285 1.383 3.516c.172.227 2.383 3.648 5.773 5.113.809.348 1.438.555 1.93.711.813.258 1.555.223 2.141.137.652-.098 2.035-.828 2.32-1.629.285-.805.285-1.496.199-1.617-.09-.121-.328-.195-.672-.367z" />
              </svg>
            </a>
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

                {/* Mobile Dropdowns */}
                {/* Development */}
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

                {/* Writing */}
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

                {/* AI Button */}
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

                {/* WhatsApp Button in Mobile Menu */}
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link flex items-center gap-2 text-green-500 hover:text-green-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                  >
                    <path d="M16.043 2.004C8.641 1.998 2.535 8.098 2.535 15.5c0 2.736.746 5.422 2.16 7.777L2 30l6.89-2.616a13.402 13.402 0 006.945 1.914h.008c7.402 0 13.508-6.098 13.508-13.5 0-7.402-6.098-13.504-13.508-13.504z" />
                  </svg>
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
