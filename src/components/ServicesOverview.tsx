import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Palette, Globe, Code, Bot } from 'lucide-react';

const services = [
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: 'AI Chatbot Assistant',
    description: 'Custom AI solutions to enhance your customer service and engagement.'
  },
  {
    icon: <PenTool className="w-8 h-8 text-primary" />,
    title: 'SEO Content Writing',
    description: 'Engaging content that ranks and drives organic traffic to your website.'
  },
  {
    icon: <Palette className="w-8 h-8 text-primary" />,
    title: 'Graphic Design',
    description: 'Eye-catching visuals that communicate your brand message effectively.'
  },
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: 'WordPress Development',
    description: 'Custom WordPress solutions tailored to your business needs.'
  },
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: 'React Development',
    description: 'Modern web applications built with the latest React technologies.'
  },
  // Added the 3D Video Animation service
  {
    icon: <motion.div className="w-8 h-8 text-primary">3D</motion.div>,  // You can replace this with a custom 3D icon
    title: '3D Video Animation',
    description: 'Creative and immersive 3D animations to bring your ideas to life.'
  }
];

const ServicesOverview = () => {
  const cardVariants = {
    initial: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
    hover: {
      y: -12,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const iconVariants = {
    initial: {
      scale: 1,
      rotate: 0
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
        type: "spring",
        stiffness: 200
      },
    },
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="section-title text-center mb-16">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              initial="initial"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary/10 dark:border-primary/20 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <motion.div 
                className="relative mb-6 bg-primary/5 dark:bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center"
                variants={iconVariants}
              >
                {service.icon}
              </motion.div>
              
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 relative z-10 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
