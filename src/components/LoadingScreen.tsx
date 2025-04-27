import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Check if the theme is dark or light
  useEffect(() => {
    const currentTheme = localStorage.getItem('theme'); // Assuming theme is saved in localStorage
    if (currentTheme === 'dark') {
      setIsDarkTheme(true);
    } else {
      setIsDarkTheme(false);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex items-center justify-center"
      >
        {/* Set the logo image based on the theme */}
        <img
          src={isDarkTheme ? "/dark.png" : "/white.png"} // Dynamic logo change
          alt="SAM CREATIVE"
          className="w-24 h-24 md:w-32 md:h-32 object-contain"
        />
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
