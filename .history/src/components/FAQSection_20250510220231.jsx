import React from 'react';

const faqs = [
  {
    question: 'Can I try your mattresses in any physical location?',
    answer:
      'We currently operate online only, but we offer a 100-night trial so you can try it risk-free in the comfort of your home.',
  },
  {
    question: 'Can I exchange my mattress?',
    answer:
      'Yes, if you’re not satisfied within the trial period, we offer an easy exchange or return process.',
  },
  {
    question: 'How long will it take to get my mattress?',
    answer:
      'We typically deliver within 5–7 business days, depending on your location.',
  },
  {
    question: 'Should I flip or rotate my mattress?',
    answer:
      'Our mattresses are designed to be used one-sided, but we recommend rotating them every 3 months for even wear.',
  },
  {
    question: 'How do I clean my mattress?',
    answer:
      'Spot clean only with mild detergent and cold water. Avoid soaking or using harsh chemicals.',
  },
  {
    question: 'Is there any free trial available?',
    answer:
      'Yes! We offer a 100-night risk-free trial. If it doesn’t work for you, returns are easy and free.',
  },
];

const FAQSection = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">FAQs</h2>
        <p className="text-gray-600">Have a question? We are here to help.</p>
      </div>
      <section
        className="bg-white p-6 grid gap-6 grid-cols-12"
        aria-labelledby="faq-heading"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        <div className="space-y-6 col-span-12 lg:col-span-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-4"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  id={`faq-${index}`}
                  className="faq-checkbox"
                  aria-labelledby={`faq-label-${index}`}
                />
                <label
                  htmlFor={`faq-${index}`}
                  id={`faq-label-${index}`}
                  className="faq-label flex justify-between items-center w-full text-left font-medium text-gray-900 cursor-pointer px-2 py-1"
                  itemProp="name"
                >
                  <span>{faq.question}</span>
                  <svg
                    className="faq-arrow w-5 h-5 transform transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </label>
                <div
                  className="faq-content mt-2 text-gray-600 pl-2"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p itemProp="text">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .faq-checkbox {
          position: absolute;
          opacity: 0;
          z-index: -1;
        }

        .faq-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.25s ease-in-out;
        }

        .faq-checkbox:checked ~ .faq-content {
          max-height: 1000px;
        }

        .faq-checkbox:checked ~ .faq-label .faq-arrow {
          transform: rotate(180deg);
        }

        .faq-checkbox:focus ~ .faq-label {
          outline: 2px solid #3b82f6;
          border-radius: 0.25rem;
        }
      `}</style>
    </div>
  );
};

export default FAQSection;
