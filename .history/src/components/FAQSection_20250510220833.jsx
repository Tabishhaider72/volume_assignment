import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

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

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>FAQs</h2>
        <p style={styles.subtitle}>Have a question? We are here to help.</p>
      </div>
      <section style={styles.section}>
        {faqs.map((faq, index) => (
          <div key={index} style={styles.item}>
            <div
              style={styles.question}
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <svg
                style={{
                  ...styles.arrow,
                  transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
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
              style={{
                ...styles.answer,
                maxHeight: activeIndex === index ? '200px' : '0px',
                opacity: activeIndex === index ? 1 : 0,
              }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

// Internal styles
const styles = {
  container: {
    maxWidth: '800px',
    margin: '50px auto',
    padding: '0 20px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  title: {
    fontSize: '28px',
    marginBottom: '8px',
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#555',
  },
  section: {
    background: 'white',
    padding: '24px',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '20px',
  },
  item: {
    borderBottom: '1px solid #ddd',
    paddingBottom: '12px',
  },
  question: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: '500',
    fontSize: '16px',
    cursor: 'pointer',
    color: '#222',
  },
  arrow: {
    width: '20px',
    height: '20px',
    transition: 'transform 0.3s ease',
  },
  answer: {
    overflow: 'hidden',
    transition: 'max-height 0.3s ease, opacity 0.3s ease',
    paddingLeft: '4px',
  },
};

export default FAQSection;

