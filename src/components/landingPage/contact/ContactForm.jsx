import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, User, Mail, MessageSquare, HelpCircle, Phone } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
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

  const InputWrapper = ({ children }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      {children}
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-xl h-max"
    >
      {/* Background decoration */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-500/10 dark:bg-purple-400/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-3xl" />

      <form 
        onSubmit={handleSubmit} 
        className="relative space-y-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl"
      >
        <div className="space-y-4 mb-8">
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl inline-flex">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
          </motion.div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 
                       dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Send us a Message
          </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            We value your questions, suggestions, and feedback! Send us a message, and we'll get back to you promptly.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputWrapper>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600
                         bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm
                         text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-purple-500 focus:border-purple-500
                         transition-all duration-200"
                placeholder="First name"
              />
            </div>
          </InputWrapper>

          <InputWrapper>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600
                         bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm
                         text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-purple-500 focus:border-purple-500
                         transition-all duration-200"
                placeholder="Last name"
              />
            </div>
          </InputWrapper>
        </div>

        <InputWrapper>
            <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600
                             bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm
                             text-gray-900 dark:text-white
                             focus:ring-2 focus:ring-purple-500 focus:border-purple-500
                             transition-all duration-200"
                    placeholder="Email"
                />
            </div>
        </InputWrapper>

        <InputWrapper>
            <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600
                             bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm
                             text-gray-900 dark:text-white
                             focus:ring-2 focus:ring-purple-500 focus:border-purple-500
                             transition-all duration-200"
                    placeholder="Phone"
                />
            </div>
        </InputWrapper>

        <InputWrapper>
          <div className="relative">
            <HelpCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600
                       bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm
                       text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-purple-500 focus:border-purple-500
                       transition-all duration-200"
              placeholder="Subject"
            />
          </div>
        </InputWrapper>

        <InputWrapper>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600
                     bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm
                     text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-purple-500 focus:border-purple-500
                     transition-all duration-200 resize-none"
            placeholder="Your message..."
          />
        </InputWrapper>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 
                   dark:from-purple-500 dark:to-pink-500 text-white 
                   py-4 px-6 rounded-xl font-medium
                   shadow-lg hover:shadow-xl
                   disabled:opacity-70 disabled:cursor-not-allowed
                   disabled:hover:shadow-none
                   transition-all duration-300
                   flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              <span>Send Message</span>
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center pt-6 border-t border-gray-200 dark:border-gray-700"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400">
            We'll get back to you within 24 hours
          </p>
        </motion.div>
      </form>
    </motion.div>
  );
}