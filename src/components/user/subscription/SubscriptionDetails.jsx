import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Calendar, AlertCircle, Download, Crown, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function SubscriptionDetails() {
  const navigate = useNavigate();
  // Mock subscription data
  const subscription = {
    plan: 'Silver',
    status: 'active',
    nextBilling: '2024-04-01',
    amount: '$29.99',
    paymentMethod: {
      type: 'credit_card',
      last4: '4242',
      expiry: '12/24',
      brand: 'Visa',
    },
    invoices: [
      {
        id: 'INV-001',
        date: '2024-03-01',
        amount: '$29.99',
        status: 'paid',
      },
      {
        id: 'INV-002',
        date: '2024-02-01',
        amount: '$29.99',
        status: 'paid',
      },
    ],
  };

  const goldPlanFeatures = [
    'Everything in Silver plan',
    'Dedicated support',
    'Custom integration',
    'SLA guarantee',
    'Advanced security',
    'Custom features',
  ];

  return (
    <div className="space-y-8">
      {/* Upgrade Banner - Show only for non-Gold plans */}
      {subscription.plan !== 'Gold' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-yellow-500 to-amber-500 dark:from-yellow-600 dark:to-amber-600 rounded-xl shadow-md p-6 text-white"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/20 rounded-lg">
              <Crown className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">
                Upgrade to Gold Plan
              </h3>
              <p className="mb-4 text-white/90">
                Unlock premium features and take your quiz experience to the next level
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {goldPlanFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-white" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/dashboard/pricing')}
                className="px-6 py-2 bg-white text-amber-600 rounded-lg font-medium hover:bg-white/90 transition-colors"
              >
                Upgrade Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Current Plan */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
      >
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Current Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              Plan
            </div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white">
              {subscription.plan}
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              Status
            </div>
            <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
              Active
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              Next Billing
            </div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white">
              {subscription.amount} on {subscription.nextBilling}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Payment Method */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Payment Method
          </h2>
          <button className="text-blue-600 dark:text-blue-400 hover:underline">
            Update
          </button>
        </div>
        <div className="flex items-center gap-4">
          <CreditCard className="w-8 h-8 text-gray-400" />
          <div>
            <div className="font-medium text-gray-900 dark:text-white">
              {subscription.paymentMethod.brand} ending in {subscription.paymentMethod.last4}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Expires {subscription.paymentMethod.expiry}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Billing History */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
      >
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Billing History
        </h2>
        <div className="space-y-4">
          {subscription.invoices.map((invoice) => (
            <div
              key={invoice.id}
              className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700 last:border-0"
            >
              <div>
                <div className="font-medium text-gray-900 dark:text-white">
                  {invoice.amount}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {invoice.date}
                </div>
              </div>
              <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline">
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Cancel Subscription */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
      >
        <div className="flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Cancel Subscription
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Your subscription will continue until the end of the current billing period.
              After that, your account will be downgraded to the free plan.
            </p>
            <button className="text-red-600 hover:text-red-700 font-medium">
              Cancel subscription
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}