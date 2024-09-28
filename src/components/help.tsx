// pages/help.tsx

import React from 'react';

const Help: React.FC = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Help Center</h1>
      <p className="mb-6">
        Welcome to the Help Center. If you have questions about our grocery store, browse through our FAQs or contact our support team.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="font-bold">How do I place an order?</h3>
          <p>To place an order, browse our catalog, add items to your cart, and proceed to checkout.</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md mt-4">
          <h3 className="font-bold">What are the available payment methods?</h3>
          <p>We accept credit cards, debit cards, and cash on delivery.</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Contact Support</h2>
        <div className="bg-white p-4 rounded-md shadow-md">
          <p>If you need further assistance, please contact us at:</p>
          <p>
            <strong>Email:</strong> support@grocerystore.com
          </p>
          <p>
            <strong>Phone:</strong> +1 123 456 7890
          </p>
        </div>
      </section>
    </div>
  );
};

export default Help;
