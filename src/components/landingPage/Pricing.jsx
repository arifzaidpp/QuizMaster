import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: 'Free',
    features: [
      'Up to 5 quizzes',
      'Basic analytics',
      'Email support',
      'Standard templates',
    ],
  },
  {
    name: 'Pro',
    price: '$29',
    features: [
      'Unlimited quizzes',
      'Advanced analytics',
      'Priority support',
      'Custom templates',
      'Team collaboration',
      'Custom branding',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Everything in Pro',
      'Dedicated support',
      'Custom integration',
      'SLA guarantee',
      'Advanced security',
      'Custom features',
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Choose the plan that best fits your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                  {plan.price}
                </span>
                {plan.price !== 'Custom' && <span className="text-gray-600 dark:text-gray-400">/month</span>}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600 dark:text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}