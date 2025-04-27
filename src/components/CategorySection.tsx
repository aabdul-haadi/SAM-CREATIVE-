import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, ArrowRight, ChevronRight } from 'lucide-react';
import PackageCard from './PackageCard';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface Category {
  id: string;
  title: string;
  description: string;
  projects: Project[];
}

interface CategorySectionProps {
  title: string;
  description: string;
  categories: Category[];
}

const CategorySection: React.FC<CategorySectionProps> = ({
  title,
  description,
  categories
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const packages = {
    basic: {
      title: 'Basic',
      price: '$499',
      features: [
        'Custom Design',
        'Responsive Layout',
        '3 Revision Rounds',
        '5 Pages',
        'Basic SEO',
      ],
    },
    premium: {
      title: 'Premium',
      price: '$999',
      features: [
        'Advanced Custom Design',
        'Responsive Layout',
        'Unlimited Revisions',
        '10 Pages',
        'Advanced SEO',
        'Performance Optimization',
        'Social Media Integration',
      ],
      isPopular: true,
    },
    enterprise: {
      title: 'Enterprise',
      price: '$1999',
      features: [
        'Premium Custom Design',
        'Responsive Layout',
        'Unlimited Revisions',
        'Unlimited Pages',
        'Advanced SEO',
        'Performance Optimization',
        'Social Media Integration',
        'Custom Features',
        'Priority Support',
      ],
    },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      }
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      }
    }
  };

  const overlayVariants = {
    initial: { opacity: 0 },
    hover: { 
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="py-20 px-4" aria-labelledby={`section-${title.toLowerCase()}`}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 
            id={`section-${title.toLowerCase()}`}
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            {title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true, margin: "-50px" }}
              className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <motion.div 
                variants={overlayVariants}
                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl"
              />
              
              <div className="relative z-10">
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-primary/10 dark:bg-primary/20 text-primary rounded-full text-sm font-semibold">
                    {category.title}
                  </span>
                </div>
                
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-8 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                  {category.description}
                </p>
                
                <div className="flex gap-4">
                  <motion.button
                    onClick={() => setSelectedCategory(category.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-secondary flex-1 flex items-center justify-center gap-2"
                  >
                    View Packages
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                  <Link
                    to={`/projects/${category.id}`}
                    className="btn-primary flex-1 inline-flex items-center justify-center gap-2"
                  >
                    View Work
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCategory(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-6 max-w-6xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Choose Your Package
                </h3>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <PackageCard {...packages.basic} />
                <PackageCard {...packages.premium} />
                <PackageCard {...packages.enterprise} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CategorySection;