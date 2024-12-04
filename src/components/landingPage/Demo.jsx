import { motion } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const demoSlides = [
  {
    title: 'Create Custom Quizzes',
    description: 'Design engaging quizzes with our intuitive interface',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Real-time Monitoring',
    description: 'Track participant progress as they take the quiz',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Instant Results',
    description: 'Get detailed analytics and insights immediately',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
  },
];

export function Demo() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % demoSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + demoSlides.length) % demoSlides.length);
  };

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
      >
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6">
          See It in Action
        </h2>
        <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300">
          Watch how easy it is to create and manage quizzes
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-video"
            >
              <img
                src={demoSlides[currentSlide].image}
                alt={demoSlides[currentSlide].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/20 backdrop-blur-sm p-4 lg:p-6 rounded-full hover:bg-white/30 transition-colors"
                >
                  <Play className="w-8 h-8 lg:w-12 lg:h-12 text-white" />
                </motion.button>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-4 lg:p-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 lg:mb-4">
                  {demoSlides[currentSlide].title}
                </h3>
                <p className="text-base lg:text-xl text-white/90">
                  {demoSlides[currentSlide].description}
                </p>
              </div>
            </motion.div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 lg:p-4 rounded-full text-white hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 lg:p-4 rounded-full text-white hover:bg-white/30 transition-colors"
          >
            <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8" />
          </button>
        </div>

        <div className="flex justify-center mt-4 lg:mt-8 gap-2 lg:gap-3">
          {demoSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-colors ${
                index === currentSlide
                  ? 'bg-blue-600 dark:bg-blue-400'
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}