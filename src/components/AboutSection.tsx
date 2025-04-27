import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Zap, Target, Briefcase, Globe, Code, Palette } from 'lucide-react';
import CountUp from 'react-countup';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: <Users className="w-8 h-8 text-primary" />, value: 200, label: 'Happy Clients', suffix: '+' },
    { icon: <Award className="w-8 h-8 text-primary" />, value: 10, label: 'Years Experience', suffix: '+' },
    { icon: <Zap className="w-8 h-8 text-primary" />, value: 500, label: 'Projects Completed', suffix: '+' },
    { icon: <Target className="w-8 h-8 text-primary" />, value: 98, label: 'Client Satisfaction', suffix: '%' },
  ];

  const services = [
    {
      icon: <Code className="w-12 h-12 text-primary" />,
      title: 'Web Development',
      description: 'From simple websites to complex web applications, we create digital solutions that drive results.',
    },
    {
      icon: <Palette className="w-12 h-12 text-primary" />,
      title: 'Creative Design',
      description: 'Our design team crafts visually stunning experiences that capture your brand essence.',
    },
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: 'Digital Marketing',
      description: 'Strategic digital marketing solutions to expand your reach and grow your business.',
    },
    {
      icon: <Briefcase className="w-12 h-12 text-primary" />,
      title: 'Business Solutions',
      description: 'Comprehensive digital solutions tailored to meet your unique business challenges.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              About <span className="text-primary">SAM CREATIVE</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
              SAM CREATIVE is a forward-thinking digital agency that combines creativity, technology, and strategy 
              to deliver exceptional digital experiences. With over a decade of expertise, we've helped hundreds 
              of businesses transform their digital presence through innovative solutions and strategic thinking.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="flex justify-center mb-4 bg-primary/10 w-16 h-16 rounded-full mx-auto items-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {inView && (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2.5}
                      suffix={stat.suffix}
                    />
                  )}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center gap-6 mb-6">
                  <div className="bg-primary/10 p-4 rounded-xl">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;