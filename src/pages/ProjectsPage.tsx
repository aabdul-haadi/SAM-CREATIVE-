import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { graphicDesignCategories, webDevelopmentCategories, contentWritingCategories } from '../data/portfolioData';

const ProjectsPage = () => {
  const { category } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isZoomActive, setIsZoomActive] = useState(false);

  // Memoized projects based on category
  const projects = useMemo(() => {
    const allCategories = [
      ...webDevelopmentCategories,
      ...contentWritingCategories,
      ...graphicDesignCategories,
    ];

    const categoryData = allCategories.find((cat) => cat.id === category);

    if (category === 'graphic-design') {
      return graphicDesignCategories.find((cat) => cat.id === category)?.projects || [];
    }

    return categoryData?.projects || [];
  }, [category]);

  // Memoized category title
  const categoryTitle = useMemo(() => {
    return projects.length > 0
      ? [
          ...webDevelopmentCategories,
          ...contentWritingCategories,
          ...graphicDesignCategories,
        ].find((cat) => cat.id === category)?.title
      : 'Projects';
  }, [projects, category]);

  const openModal = (media: string) => {
    setSelectedMedia(media);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMedia(null);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-32"
    >
      {/* Back to Home */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8"
      >
        <ArrowLeft size={20} />
        Back to Home
      </Link>

      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white mb-8">
        {categoryTitle ?? 'Projects'}
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
        Explore our portfolio of {categoryTitle?.toLowerCase() ?? 'projects'}
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => openModal(project.image)}
          >
            <div className="relative h-64 overflow-hidden rounded-xl">
              {/* Image or Video */}
              {project.image.endsWith('.mp4') ? (
                <video
                  src={project.image}
                  preload="none"
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transform transition-transform duration-500"
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform transition-transform duration-500"
                />
              )}
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex justify-center items-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">{project.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for Selected Media */}
      {isModalOpen && selectedMedia && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 overflow-y-auto p-6">
          <motion.div
            className="relative w-full max-w-6xl flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div
              className="relative overflow-hidden rounded-2xl bg-white p-4 max-h-[90vh]"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsZoomActive(true)}
              onMouseLeave={() => setIsZoomActive(false)}
            >
              {/* Render video or zoomable image */}
              {selectedMedia.endsWith('.mp4') ? (
                <video
                  src={selectedMedia}
                  className="w-full max-h-[80vh] object-contain rounded-lg"
                  controls
                  autoPlay
                  loop
                  preload="none"
                />
              ) : (
                <div className="relative overflow-hidden group">
                  <img
                    src={selectedMedia}
                    alt="Selected Project"
                    className={`w-full max-h-[80vh] object-contain transition-transform duration-500 ${
                      isZoomActive ? 'scale-125' : ''
                    }`}
                    style={{
                      transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                    }}
                    loading="lazy"
                  />
                </div>
              )}

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors z-10"
              >
                X
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectsPage;
