import React from 'react';
import { motion } from 'framer-motion';
import { Check, ExternalLink, ShoppingCart } from 'lucide-react';

interface PackageProps {
  title: string;
  features: string[];
  isPopular?: boolean;
}

const PackageCard: React.FC<PackageProps> = ({ title, features, isPopular }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`relative p-6 rounded-2xl shadow-xl ${
        isPopular 
          ? 'bg-gradient-to-br from-primary to-cyan-400 text-white' 
          : 'bg-white dark:bg-gray-800'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-8">
        <h3 className={`text-2xl font-bold mb-2 ${
          isPopular ? 'text-white' : 'text-gray-900 dark:text-white'
        }`}>
          {title}
        </h3>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check className={`w-5 h-5 ${
              isPopular ? 'text-white' : 'text-primary'
            }`} />
            <span className={`${
              isPopular ? 'text-white' : 'text-gray-700 dark:text-gray-300'
            }`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <div className="space-y-3">
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full py-3 px-6 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
            isPopular
              ? 'bg-white text-primary hover:bg-gray-100'
              : 'bg-primary text-white hover:bg-primary/90'
          }`}
        >
          <ShoppingCart size={20} />
          Order Directly
        </a>
        <a
          href="https://fiverr.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full py-3 px-6 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
            isPopular
              ? 'bg-gray-900 text-white hover:bg-gray-800'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          <ExternalLink size={20} />
          Order on Fiverr
        </a>
      </div>
    </motion.div>
  );
};

export default PackageCard;