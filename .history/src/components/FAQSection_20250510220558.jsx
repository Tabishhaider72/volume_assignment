import React, { useState } from 'react';

const faqs = [
  {
    question: 'Can I try your mattresses in any physical location?',
    answer:
      'We operate online only, but our 100-night home trial lets you test it risk-free.',
  },
  {
    question: 'Can I exchange my mattress?',
    answer:
      'Yes. Within the trial period, you can request an exchange or full refund.',
  },
  {
    question: 'How long will it take to get my mattress?',
    answer: 'Delivery typically takes 5–7 business days, depending on location.',
  },
  {
    question: 'Should I flip or rotate my mattress?',
    answer:
      'You don’t need to flip it, but rotating every 3 months helps maintain shape.',
  },
  {
    question: 'How do I clean my mattress?',
    answer:
      'Spot clean with mild detergent and cold water. Avoid soaking or machine washing.',
  },
  {
    question: 'Is there any free trial available?',
    answer:
      'Yes, we offer a 100-night free trial with free returns if you’re not satisfied.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto my-10 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">FAQs</h2>
        <p className="text-gray-600">Have a question? We are here to help.</p>
      </div>

      <section className="bg-white grid gap-4 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200 pb-4"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left font-medium text-gray-900 cursor-pointer px-2 py-1 focus:outline-none"
              aria-expanded={openIndex === index}
            >
              <span itemProp="name">{faq.question}</span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div
                className="mt-2 text-gray-600 pl-2"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p itemProp="text">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default FAQSection;
