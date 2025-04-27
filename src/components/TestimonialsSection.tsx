import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    content: 'NovaTech transformed our online presence completely. Their attention to detail and innovative solutions helped us achieve our digital goals.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director, GrowthCo',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    content: 'Working with NovaTech was a game-changer for our business. Their team\'s expertise and dedication delivered exceptional results.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder, ArtisanCraft',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    content: 'The team at NovaTech went above and beyond our expectations. Their creative solutions and technical expertise are unmatched.',
    rating: 5,
  },
  {
    name: 'David Wilson',
    role: 'CTO, InnovateTech',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    content: 'Exceptional service and outstanding results. NovaTech helped us modernize our digital infrastructure and improve our user experience significantly.',
    rating: 5,
  },
  {
    name: 'Lisa Thompson',
    role: 'Creative Director, DesignHub',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    content: 'The creativity and professionalism of the NovaTech team is remarkable. They turned our vision into reality with stunning precision.',
    rating: 5,
  }
];

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
      },
    }),
  };

  const paginate = async (newDirection: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setDirection(newDirection);
    
    let nextIndex = currentIndex + newDirection;
    if (nextIndex < 0) nextIndex = testimonials.length - 1;
    if (nextIndex >= testimonials.length) nextIndex = 0;
    
    setCurrentIndex(nextIndex);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, isAnimating]);

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50 overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -top-8 -left-8 text-6xl text-primary/20 dark:text-cyan-400/20">
            <Quote />
          </div>
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl relative z-10"
            >
              <div className="grid md:grid-cols-[auto,1fr] gap-8 items-center">
                <div className="relative">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-primary/20 dark:ring-cyan-400/20">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-primary dark:bg-cyan-400 rounded-full p-2">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-600 dark:text-gray-300 text-lg md:text-xl italic mb-6">
                    "{testimonials[currentIndex].content}"
                  </blockquote>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-3 rounded-full bg-white dark:bg-gray-700 shadow-lg text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-cyan-400 transition-colors disabled:opacity-50"
            disabled={isAnimating}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-3 rounded-full bg-white dark:bg-gray-700 shadow-lg text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-cyan-400 transition-colors disabled:opacity-50"
            disabled={isAnimating}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isAnimating) return;
                  const direction = index > currentIndex ? 1 : -1;
                  setDirection(direction);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary dark:bg-cyan-400 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                disabled={isAnimating}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;