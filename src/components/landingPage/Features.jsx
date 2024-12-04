import { motion } from 'framer-motion';
import { Shield, Users, Maximize2, Mail } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Authentication',
    description: 'Email-based authentication system ensuring secure access to the platform',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    title: 'User Management',
    description: 'Comprehensive user management with participant restrictions',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Maximize2,
    title: 'Fullscreen Mode',
    description: 'Enforced fullscreen participation for distraction-free quiz taking',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Mail,
    title: 'Real-time Updates',
    description: 'Instant notifications and real-time quiz management capabilities',
    gradient: 'from-green-500 to-emerald-500',
  },
];

export function Features() {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
          Platform Features
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8" />
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Everything you need to create and manage engaging quizzes
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-600/20 dark:to-purple-600/20 rounded-xl blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className={`bg-gradient-to-r ${feature.gradient} p-3 rounded-lg inline-block mb-4`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}