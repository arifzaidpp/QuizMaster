import React, { useState } from 'react';
import { PricingPlans } from './PricingPlans';
import { SubscriptionDetails } from './SubscriptionDetails';

export function SubscriptionPage(page) {
  // In a real app, this would come from your backend/auth state
  const [hasActiveSubscription] = useState(true);
  console.log(page);
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          {hasActiveSubscription && page.page === 'subscription' ? 'Subscription Details' : 'Upgrade your plan'}
        </h1>
        
        {hasActiveSubscription && page.page === 'subscription' ? <SubscriptionDetails /> : <PricingPlans />}
      </div>
    </div>
  );
}