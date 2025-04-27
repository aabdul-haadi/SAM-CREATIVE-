import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface PortfolioSectionProps {
  title: string;
  category: string;
  description: string;
  projects: Project[];
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  title,
  category,
  description,
  projects
}) => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={`${project.image}?auto=format&fit=crop&w=600&q=80`}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <Link
                  to={`/project/${project.id}`}
                  className="text-blue-400 hover:text-blue-300 font-medium"
                >
                  View Project →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to={`/projects/${category}`}
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All {title}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;