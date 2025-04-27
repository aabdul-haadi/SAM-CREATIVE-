import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram } from 'lucide-react';

const ContactForm = () => {
  const iconVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const containerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={containerVariants}
      className="fixed bottom-4 right-4 z-40"
    >
      <div className="flex flex-col gap-4">
        <motion.a
          href="mailto:ahaadi1001@gmail.com"
          variants={iconVariants}
          whileHover="hover"
          className="bg-white dark:bg-gray-800 p-3 rounded-full text-primary hover:text-primary/80 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Mail size={24} />
        </motion.a>
        <motion.a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          whileHover="hover"
          className="bg-white dark:bg-gray-800 p-3 rounded-full text-primary hover:text-primary/80 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Instagram size={24} />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ContactForm;