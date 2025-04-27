import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Clock, Sparkles, HeartHandshake, Rocket, Gem } from 'lucide-react';

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const reasons = [
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: 'Proven Expertise',
      description: 'Over a decade of experience delivering exceptional digital solutions.',
    },
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: 'Timely Delivery',
      description: 'We respect deadlines and ensure projects are delivered on time.',
    },
    {
      icon: <Sparkles className="w-12 h-12 text-primary" />,
      title: 'Innovation First',
      description: 'Cutting-edge solutions using the latest technologies and best practices.',
    },
    {
      icon: <HeartHandshake className="w-12 h-12 text-primary" />,
      title: 'Client-Centric',
      description: 'Your success is our priority. We work closely to achieve your goals.',
    },
    {
      icon: <Rocket className="w-12 h-12 text-primary" />,
      title: 'Scalable Solutions',
      description: 'Future-proof solutions that grow with your business.',
    },
    {
      icon: <Gem className="w-12 h-12 text-primary" />,
      title: 'Quality Assured',
      description: 'Rigorous testing and quality control for flawless delivery.',
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Why Choose <span className="text-primary">Us</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We combine expertise, innovation, and dedication to deliver exceptional results that exceed expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;