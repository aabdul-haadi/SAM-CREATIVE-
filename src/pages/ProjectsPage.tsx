import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

// Import categories from portfolioData.ts (with the assets already imported)
import { graphicDesignCategories, webDevelopmentCategories, contentWritingCategories } from '../data/portfolioData';

const ProjectsPage = () => {
  const { category } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null); // To store either image or video

  const getCategoryProjects = () => {
    const allCategories = [
      ...webDevelopmentCategories,
      ...contentWritingCategories,
      ...graphicDesignCategories
    ];
    return allCategories.find(cat => cat.id === category)?.projects || [];
  };

  const projects = getCategoryProjects();
  const categoryTitle = projects.length > 0 ? 
    [
      ...webDevelopmentCategories,
      ...contentWritingCategories,
      ...graphicDesignCategories
    ].find(cat => cat.id === category)?.title : 
    'Projects';

  const openModal = (media: string) => {
    setSelectedMedia(media);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMedia(null);
  };

  // Redirect to the specific URL based on the clicked project
  const redirectToProject = (projectId: string) => {
    switch (projectId) {
      case 'fashion-store':
        window.location.href = 'https://fashionflare.pk/';
        break;
      case 'artisan-marketplace':
        window.location.href = 'https://dmarket.pk/?srsltid=AfmBOoo-TjS3bB4u5NYn6yXH5x0pDZJsPTxT-IBx3AVCy9Vh-Ar0vjvo';
        break;
      case 'organic-food':
        window.location.href = 'https://www.carrefour.pk/mafpak/en/n/c/clp_FPAK1700000?srsltid=AfmBOopbb-ELVy9q3-MV6LrqzhFr3SarMeJqnkyXwFmo8p2Ch8T2dpGX';
        break;
      case 'electronics-shop':
        window.location.href = 'https://www.naheed.pk/home-lifestyle/electronic-accessories?srsltid=AfmBOooL4EOY3nzvkZ5hjVXA22j-RiPGeCUh4e7VtgfOkyRQcFG7s2K6';
        break;
      default:
        break;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-32"
    >
      <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
        <ArrowLeft size={20} />
        Back to Home
      </Link>
      
      <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white mb-8">
        {categoryTitle ?? 'Projects'}
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
        Explore our portfolio of {categoryTitle?.toLowerCase() ?? 'projects'}
      </p>
      
      {/* Updated grid with responsive layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => redirectToProject(project.id)} // Redirect on click
          >
            <div className="relative h-64 overflow-hidden rounded-xl">
              {/* Check if media is a video or an image */}
              {project.image.endsWith('.mp4') ? (
                <video
                  src={project.image}
                  className="w-full h-full object-cover transform transition-transform duration-500"
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-500"
                />
              )}
            </div>
            <div className="absolute inset-0 flex justify-center items-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">{project.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for smooth image/video view */}
      {isModalOpen && selectedMedia && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
          <motion.div
            className="bg-transparent p-0 w-full max-w-3xl flex justify-center items-center relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="relative">
              {/* Check if selected media is a video or an image */}
              {selectedMedia.endsWith('.mp4') ? (
                <video
                  src={selectedMedia}
                  className="w-full max-h-[80vh] object-contain rounded-lg"
                  controls
                  autoPlay
                  loop
                />
              ) : (
                <img
                  src={selectedMedia}
                  alt="Selected Project"
                  className="w-full max-h-[80vh] object-contain rounded-lg"
                />
              )}
              {/* Close button integrated with the image/video */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
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
