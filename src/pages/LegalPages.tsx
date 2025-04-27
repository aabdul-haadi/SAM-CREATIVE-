import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Shield, Scale, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const LegalPages = () => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>('privacy');
  const [openSection, setOpenSection] = useState<string | null>(null);

  const privacyContent = [
    {
      id: 'collection',
      title: 'Information Collection',
      content: 'We collect information that you provide directly to us, including name, email address, and any other information you choose to provide. We also automatically collect certain information about your device when you use our services.'
    },
    {
      id: 'usage',
      title: 'How We Use Your Information',
      content: 'We use the information we collect to provide, maintain, and improve our services, communicate with you, and comply with legal obligations. We may also use your information to personalize your experience and send you updates about our services.'
    },
    {
      id: 'sharing',
      title: 'Information Sharing',
      content: 'We do not sell your personal information. We may share your information with third-party service providers who assist us in operating our website, conducting our business, or serving our users.'
    },
    {
      id: 'security',
      title: 'Data Security',
      content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
    }
  ];

  const termsContent = [
    {
      id: 'services',
      title: 'Services Overview',
      content: 'We provide web development, content writing, and graphic design services. All services are subject to these terms and any additional agreements made between parties.'
    },
    {
      id: 'intellectual',
      title: 'Intellectual Property',
      content: 'All content, features, and functionality of our services are owned by us and are protected by international copyright, trademark, and other intellectual property laws.'
    },
    {
      id: 'payment',
      title: 'Payment Terms',
      content: 'Payment terms are specified in individual project agreements. We reserve the right to modify our pricing with appropriate notice to clients.'
    },
    {
      id: 'liability',
      title: 'Limitation of Liability',
      content: 'We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.'
    }
  ];

  return (
    <div className="min-h-screen py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Legal Information</h1>
        
        <div className="mb-12 flex justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('privacy')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'privacy'
                ? 'bg-primary text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            <Shield size={20} />
            Privacy Policy
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('terms')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'terms'
                ? 'bg-primary text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            <Scale size={20} />
            Terms of Service
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            {(activeTab === 'privacy' ? privacyContent : termsContent).map((section) => (
              <motion.div
                key={section.id}
                initial={false}
                className="border dark:border-gray-700 rounded-lg overflow-hidden"
              >
                <motion.button
                  className="w-full px-6 py-4 flex items-center justify-between text-left bg-white dark:bg-gray-800"
                  onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
                >
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {section.title}
                  </span>
                  <motion.div
                    animate={{ rotate: openSection === section.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  </motion.div>
                </motion.button>
                <AnimatePresence>
                  {openSection === section.id && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900/50">
                        <p className="text-gray-600 dark:text-gray-400">
                          {section.content}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LegalPages;