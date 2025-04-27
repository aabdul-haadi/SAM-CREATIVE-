import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ServicesOverview from '../components/ServicesOverview';
import CategorySection from '../components/CategorySection';
import AboutSection from '../components/AboutSection';
import WhyChooseUs from '../components/WhyChooseUs';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import AIChatbotSection from '../components/AIChatbotSection';

import { webDevelopmentCategories, contentWritingCategories, graphicDesignCategories } from '../data/portfolioData';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      
      <motion.div {...fadeInUp}>
        <ServicesOverview />
      </motion.div>

      <motion.div {...fadeInUp}>
        <AIChatbotSection />
      </motion.div>

      <motion.div {...fadeInUp}>
        <CategorySection 
          title="Graphic Design"
          description="Visual designs that capture attention and communicate your brand message effectively"
          categories={graphicDesignCategories}
        />
      </motion.div>

      <motion.div {...fadeInUp}>
        <CategorySection 
          title="Content Writing"
          description="Engaging content that connects with your audience and drives conversions"
          categories={contentWritingCategories}
        />
      </motion.div>

      <motion.div {...fadeInUp}>
        <CategorySection 
          title="Web Development"
          description="Custom web solutions built with modern technologies for optimal performance"
          categories={webDevelopmentCategories}
        />
      </motion.div>

      <motion.div {...fadeInUp}>
        <AboutSection />
      </motion.div>

      <motion.div {...fadeInUp}>
        <WhyChooseUs />
      </motion.div>

      <motion.div {...fadeInUp}>
        <TestimonialsSection />
      </motion.div>

      <motion.div {...fadeInUp}>
        <ContactSection />
      </motion.div>
    </motion.div>
  );
};

export default Home;