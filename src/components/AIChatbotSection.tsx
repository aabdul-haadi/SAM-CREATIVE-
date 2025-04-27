import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Zap, Brain, Users, Shield, ExternalLink } from 'lucide-react';
import Chatbot from './Chatbot'; // Assuming the Chatbot component is imported here

const AIChatbotSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Advanced AI',
      description: 'Custom-trained AI models for your specific business needs',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Instant Responses',
      description: '24/7 automated customer support with human-like interactions',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Multi-Channel Support',
      description: 'Seamless integration with your website, WhatsApp, and social media',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure & Private',
      description: 'Enterprise-grade security with data encryption and privacy controls',
    },
  ];

  return (
    <section id="ai-section" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Custom <span className="text-primary">AI Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Transform your customer service with our intelligent AI chatbot solutions. 
              Get a custom-trained AI assistant that understands your business and serves 
              your customers 24/7.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-cyan-500/20 blur-3xl" />
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <Bot className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    AI Assistant Demo
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-start">
                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-2xl max-w-[80%]">
                      <p className="text-gray-900 dark:text-white">
                        Hi! I'm your AI assistant. How can I help you today?
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-primary text-white p-4 rounded-2xl max-w-[80%]">
                      <p>I need help with creating a custom AI chatbot.</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-2xl max-w-[80%]">
                      <p className="text-gray-900 dark:text-white">
                        I can help you with that! Our AI solutions are tailored to your business needs. Would you like to discuss the features?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-16 text-center space-y-4"
          >
            <a
              href="https://wa.me/1234567890?text=Hi,%20I'm%20interested%20in%20creating%20a%20custom%20AI%20assistant%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
            >
              Create Your AI Assistant
              <ExternalLink className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Add Chatbot here */}
          <Chatbot />
        </motion.div>
      </div>
    </section>
  );
};

export default AIChatbotSection;
