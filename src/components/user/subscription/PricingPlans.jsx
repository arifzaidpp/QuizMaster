import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const plans = {
  monthly: [
    {
      name: 'Bronze (Free)',
      price: '$0',
      features: [
        'Up to 10 quizzes',
        'Basic analytics',
        'Email support',
        'Standard templates',
      ],
      limitations: [
        'No custom branding',
        'No API access',
      ],
    },
    {
      name: 'Silver',
      price: '$29.99',
      popular: true,
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
      name: 'Gold',
      price: '$99.99',
      features: [
        'Everything in Pro',
        'Dedicated support',
        'Custom integration',
        'SLA guarantee',
        'Advanced security',
        'Custom features',
      ],
    },
  ],
  yearly: [
    {
      name: 'Bronze (Free)',
      price: '$0',
      features: [
        'Up to 10 quizzes',
        'Basic analytics',
        'Email support',
        'Standard templates',
      ],
      limitations: [
        'No custom branding',
        'No API access',
      ],
    },
    {
      name: 'Silver',
      price: '$299.99',
      popular: true,
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
      name: 'Gold',
      price: '$999.99',
      features: [
        'Everything in Pro',
        'Dedicated support',
        'Custom integration',
        'SLA guarantee',
        'Advanced security',
        'Custom features',
      ],
    },
  ],
};

export function PricingPlans() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <div className="space-y-8">
      {/* Billing Toggle */}
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={() => setBillingCycle('monthly')}
          className={`px-4 py-2 rounded-lg ${
            billingCycle === 'monthly'
              ? 'bg-blue-600 text-white'
              : 'text-gray-600 dark:text-gray-300'
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBillingCycle('yearly')}
          className={`px-4 py-2 rounded-lg ${
            billingCycle === 'yearly'
              ? 'bg-blue-600 text-white'
              : 'text-gray-600 dark:text-gray-300'
          }`}
        >
          Yearly
          <span className="ml-2 text-sm text-green-500">Save 15%</span>
        </button>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans[billingCycle].map((plan) => (
          <motion.div
            key={plan.name}
            whileHover={{ y: -5 }}
            className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden ${
              plan.popular ? 'ring-2 ring-blue-600 dark:ring-blue-400' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm">
                Popular
              </div>
            )}
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                  {plan.price}
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                </span>
              </div>

              <div className="space-y-4 mb-6">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}
                {plan.limitations?.map((limitation) => (
                  <div key={limitation} className="flex items-center gap-2">
                    <X className="w-5 h-5 text-red-500" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {limitation}
                    </span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Choose {plan.name}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}