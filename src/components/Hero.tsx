import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.5 },
    },
  };

  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="h-[110vh] flex items-center justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
        >
          <motion.h1 
            variants={titleVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 leading-tight"
          >
           <motion.span 
  className="inline-block w-full"
  variants={titleVariants}
>
  Crafting{' '}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary whitespace-nowrap">
    Digital
  </span>
</motion.span>
{" "}
            <motion.span 
              className="inline-block"
              variants={titleVariants}
            >
              Excellence
            </motion.span>
          </motion.h1>
          
          <motion.p 
            variants={descriptionVariants}
            className="text-xl md:text-2xl text-secondary/80 dark:text-secondary-dark/80 mb-12 leading-relaxed"
          >
            Transform your brand's digital presence with our expert team of designers,
            developers, and content creators. We craft exceptional experiences that
            elevate your business to new heights.
          </motion.p>

          <motion.a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
          >
            Start Your Project
            <ChevronRight size={24} />
          </motion.a>
        </motion.div>
      </div>
      
      <motion.div
        variants={backgroundVariants}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          variants={circleVariants}
          className="absolute top-20 -left-64 w-96 h-96 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full filter blur-3xl"
        />
        <motion.div
          variants={circleVariants}
          className="absolute bottom-20 -right-64 w-96 h-96 bg-gradient-to-l from-primary/20 to-primary/10 rounded-full filter blur-3xl"
        />
        <motion.div
          variants={circleVariants}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/5 to-transparent rounded-full filter blur-3xl"
        />
      </motion.div>

      {/* Adding a blur effect at the bottom of the section */}
      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-dark-500 to-transparent filter blur-3xl" />
    </motion.section>
  );
};

export default Hero;
