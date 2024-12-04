import { motion } from 'framer-motion';
import { CheckCircle2, Users, Brain, Trophy } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'Smart Learning',
    description: 'Adaptive quiz technology that grows with your students',
  },
  {
    icon: Users,
    title: 'Collaborative',
    description: 'Foster team learning and knowledge sharing',
  },
  {
    icon: Trophy,
    title: 'Gamification',
    description: 'Engage students with rewards and achievements',
  },
  {
    icon: CheckCircle2,
    title: 'Progress Tracking',
    description: 'Monitor and analyze learning outcomes',
  },
];

export function About() {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-3xl transform rotate-3 blur-2xl" />
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Team collaboration"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-3xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
                About QuizMaster
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-8" />
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                QuizMaster was founded with a simple mission: to make learning engaging,
                fun, and accessible to everyone. Our platform combines cutting-edge
                technology with proven educational methods to create an immersive
                learning experience.
              </p>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Whether you're a student preparing for exams, a professional keeping
                your skills sharp, or someone who loves to learn, QuizMaster has
                something for you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}