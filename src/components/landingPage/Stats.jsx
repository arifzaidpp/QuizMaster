import { motion } from 'framer-motion';
import { Users, Award, Clock, School } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '50K+',
    label: 'Active Users',
  },
  {
    icon: Award,
    value: '1M+',
    label: 'Quizzes Created',
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Support',
  },
  {
    icon: School,
    value: '100+',
    label: 'Institutions',
  },
];

export function Stats() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}