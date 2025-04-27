import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { webDevelopmentCategories, contentWritingCategories, graphicDesignCategories } from '../data/portfolioData';

const ProjectDetail = () => {
  const { id } = useParams();

  const findProject = () => {
    const allProjects = [
      ...webDevelopmentCategories,
      ...contentWritingCategories,
      ...graphicDesignCategories
    ].flatMap(category => category.projects);
    
    return allProjects.find(project => project.id === id);
  };

  const project = findProject();

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-32">
        <h1 className="text-4xl font-bold text-white mb-8">Project not found</h1>
        <Link to="/" className="btn-secondary">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-32"
    >
      <Link to="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8">
        <ArrowLeft size={20} />
        Back to Home
      </Link>
      <div className="bg-gray-800 rounded-xl overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-96 object-cover"
        />
        <div className="p-8">
          <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
          <p className="text-gray-400 text-lg mb-8">{project.description}</p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            View Live Demo
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;