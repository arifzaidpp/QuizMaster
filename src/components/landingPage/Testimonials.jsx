import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'University Professor',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    content: 'QuizMaster has transformed how I assess my students. The real-time monitoring and analytics are invaluable for tracking progress.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Corporate Trainer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    content: "The platform's security features and ease of use make it perfect for our corporate training needs. It's been a game-changer for our team.",
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'High School Teacher',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
    content: "My students love taking quizzes on QuizMaster. It's made learning more engaging and interactive. The gamification features are brilliant!",
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="container mx-auto px-4" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
            What Our Users Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Join thousands of satisfied educators and trainers
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12">
              <Quote className="w-24 h-24 text-blue-600/10 dark:text-blue-400/10" />
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-lg opacity-30" />
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-32 h-32 rounded-full object-cover relative"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 italic">
                    "{testimonials[currentIndex].content}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-xl text-gray-900 dark:text-white">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-blue-600 dark:text-blue-400">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-600 dark:bg-blue-400 w-6'
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
              disabled={isAnimating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}