import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    content: '+1 (555) 123-4567',
    description: 'Monday to Friday, 9am to 6pm EST',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'support@quizmaster.com',
    description: "We'll respond within 24 hours",
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: MapPin,
    title: 'Office',
    content: '123 Quiz Street',
    description: 'Learning City, ED 12345',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    content: 'Mon - Fri, 9:00 - 18:00',
    description: 'Weekend support available for emergencies',
    gradient: 'from-green-500 to-emerald-500',
  },
];

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-xl"
    >
      {/* Background decoration */}
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-500/10 dark:bg-purple-400/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative space-y-10 p-6 sm:p-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl">
        <div className="space-y-4">
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-xl inline-flex">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
          </motion.div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 
                       dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid gap-5">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 
                           dark:from-blue-400/20 dark:to-indigo-400/20 rounded-xl opacity-0 
                           group-hover:opacity-100 transition-opacity blur-xl" />
              
              <div className="relative flex items-start space-x-4 p-4 rounded-xl 
                           bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm
                           transition-transform duration-300 hover:-translate-y-1">
                <div className="flex-shrink-0">
                  <div className={`p-3 bg-gradient-to-br ${item.gradient} rounded-xl 
                                transform transition-transform group-hover:scale-110`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white 
                               group-hover:text-blue-600 dark:group-hover:text-blue-400 
                               transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-900 dark:text-gray-100 font-medium mt-1">
                    {item.content}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social proof or additional info can be added here */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center pt-6 border-t border-gray-200 dark:border-gray-700"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Join thousands of satisfied users worldwide
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}