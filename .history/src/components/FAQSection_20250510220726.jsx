import React, { useState } from 'react';
import './FAQSection.css';

const faqs = [
  {
    question: 'Can I try your mattresses in any physical location?',
    answer:
      'Currently, we operate online only. But we offer a 100-night trial to let you try it at home risk-free.',
  },
  {
    question: 'Can I exchange my mattress?',
    answer:
      'Yes, exchanges are allowed during the trial period if you are not satisfied.',
  },
  {
    question: 'How long will it take to get my mattress?',
    answer:
      'It typically takes 5–7 business days depending on your location.',
  },
  {
    question: 'Should I flip or rotate my mattress?',
    answer:
      'Flipping is not needed. Just rotate it every 3 months to maintain support.',
  },
  {
    question: 'How do I clean my mattress?',
    answer:
      'Use a mild detergent with a damp cloth. Do not soak or machine wash.',
  },
  {
    question: 'Is there any free trial available?',
    answer:
      'Yes, we offer a 100-night risk-free trial with full refunds.',
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h2>FAQs</h2>
        <p>Have a question? We are here to help.</p>
      </div>
      <section className="faq-grid">
        <div className="faq-content-wrapper">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <svg
                  className={`faq-arrow ${activeIndex === index ? 'rotated' : ''}`}
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 9l-7 7-7-7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                className={`faq-answer ${activeIndex === index ? 'open' : ''}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQSection;
