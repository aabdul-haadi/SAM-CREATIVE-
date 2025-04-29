// import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { webDevelopmentCategories, contentWritingCategories, graphicDesignCategories } from '../data/portfolioData';

const ProjectDetail = () => {
  const { id } = useParams();

  const findProject = () => {
    const allProjects = [
      ...webDevelopmentCategories,
      ...contentWritingCategories,
      ...graphicDesignCategories,
    ].flatMap((category) => category.projects);

    return allProjects.find((project) => project.id === id);
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
      {/* Back to Home */}
      <Link to="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8">
        <ArrowLeft size={20} />
        Back to Home
      </Link>

      {/* Project Card */}
      <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
        <div className="relative w-full h-[24rem] overflow-hidden">
          {/* Optimized media loading */}
          {project.image.endsWith('.mp4') ? (
            <video
              src={project.image}
              className="w-full h-full object-cover"
              preload="none"
              controls
              muted
              playsInline
              style={{ backgroundColor: "#111" }} // Prevent white flash
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          )}
        </div>

        {/* Project Details */}
        <div className="p-8">
          <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">{project.description}</p>

          {/* Optional: Add button if needed */}
          {/* {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white rounded-lg transition-all"
            >
              View Live Demo
            </a>
          )} */}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
