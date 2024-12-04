import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Brain, Mail, MapPin, Phone } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Features', href: '#features' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms of Service', href: '#' },
  { name: 'Cookie Policy', href: '#' },
  { name: 'Help Center', href: '#' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-2">
                <Brain className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  QuizMaster
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Empowering educators with secure and engaging quiz solutions.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-4">
                Contact Us
              </h3>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
                <span className="text-gray-600 dark:text-gray-300">
                  support@quizmaster.com
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
                <span className="text-gray-600 dark:text-gray-300">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
                <span className="text-gray-600 dark:text-gray-300">
                  123 Quiz Street, Learning City, ED 12345
                </span>
              </div>
            </motion.div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>© {currentYear} QuizMaster. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}