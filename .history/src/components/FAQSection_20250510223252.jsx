import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
  {
    question: 'Can I try your mattresses in any physical location?',
    answer:
      'At the moment, we are a fully online-first brand and do not have any physical retail stores. However, to give you complete peace of mind, we offer a 100-night risk-free trial. This means you can try the mattress in the comfort of your home and if you’re not satisfied, we’ll arrange for a return and full refund—no questions asked.',
  },
  {
    question: 'Can I exchange my mattress?',
    answer:
      'Absolutely! If you’re not completely satisfied with your mattress during the 100-night trial period, you can request an exchange. We’ll help you select a more suitable model or size, and handle the logistics to ensure a smooth and convenient exchange process at no extra cost.',
  },
  {
    question: 'How long will it take to get my mattress?',
    answer:
      'We typically process and ship all mattress orders within 24–48 hours. Depending on your delivery location, it generally takes 5 to 7 business days for the mattress to arrive. You’ll receive real-time tracking updates and delivery notifications once your order is dispatched.',
  },
  {
    question: 'Should I flip or rotate my mattress?',
    answer:
      'Our mattresses are designed to be one-sided, so flipping is not necessary. However, we do recommend rotating the mattress 180 degrees every 2 to 3 months. This helps to evenly distribute wear and prolong the life of your mattress by preventing sagging and body impressions.',
  },
  {
    question: 'How do I clean my mattress?',
    answer:
      'Cleaning your mattress is simple. For minor stains or spills, use a soft cloth or sponge with a mild detergent and gently blot the area—avoid soaking the surface. For regular maintenance, vacuuming the mattress surface once a month helps keep it fresh and dust-free. Avoid using harsh chemicals or machine washing the mattress.',
  },
  {
    question: 'Is there any free trial available?',
    answer:
      'Yes! We offer a generous 100-night free trial so you can experience the comfort and quality of our mattress firsthand. If at any point during this period you’re not completely satisfied, you can return it for a full refund. We’ll even arrange for free pickup—your satisfaction is our priority.',
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
    borderBottom: '1px solid #c3c9c9',
    paddingBottom: '12px',
  },
  question: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: '500',
    fontSize: '16px',
    cursor: 'pointer',
    color: '#c3c9c9',
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

