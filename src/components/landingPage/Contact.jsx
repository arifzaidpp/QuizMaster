import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Send, Loader2, Phone, Mail, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    content: '+1 (555) 123-4567',
    description: 'Monday to Friday, 9am to 6pm EST',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'support@quizmaster.com',
    description: "We'll respond within 24 hours",
  },
  {
    icon: MapPin,
    title: 'Office',
    content: '123 Quiz Street',
    description: 'Learning City, ED 12345',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    content: 'Mon - Fri, 9:00 - 18:00',
    description: 'Weekend support available for emergencies',
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="pb-16 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-2xl-dark 
                   p-8 hover:shadow-2xl transition-all duration-300"
        >
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <MessageSquare className="w-14 h-14 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
            </motion.div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 
                         bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 
                         dark:to-indigo-400 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>

          {/* Contact Info Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-900 dark:text-gray-100 font-medium">
                    {item.content}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form Section */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-2"
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  whileFocus={{ scale: 1.01 }}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none
                           transition-all duration-200"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-2"
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  whileFocus={{ scale: 1.01 }}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none
                           transition-all duration-200"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-2"
            >
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Subject
              </label>
              <motion.input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="How can we help?"
                whileFocus={{ scale: 1.01 }}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none
                         transition-all duration-200"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-2"
            >
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us more about your project..."
                rows={5}
                whileFocus={{ scale: 1.01 }}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none
                         transition-all duration-200 resize-none"
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 
                       dark:from-blue-500 dark:to-indigo-500 text-white py-4 px-6 
                       rounded-lg font-medium shadow-lg hover:shadow-xl
                       transition-all duration-200
                       disabled:opacity-70 disabled:cursor-not-allowed
                       disabled:hover:shadow-none
                       flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}