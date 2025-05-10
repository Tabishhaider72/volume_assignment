import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Section */}
        <div className="footer-column">
          <h3>Get in touch</h3>
          <p>T: +91 93115 56868</p>
          <p>E: support@symphonieslife.com</p>
          <p>88-3,<br />
            Sri Aurobindo Marg,<br />
            Adchini, Adhchini Village,<br />
            New Delhi, Delhi- 110017</p>
        </div>

        {/* Information Section */}
        <div className="footer-column">
          <h3>INFORMATION</h3>
          <p>Know Us</p>
          <p>100 Sleep Test</p>
          <p>Upto 10 Years Guarantee</p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-column">
          <h3>QUICK LINKS</h3>
          <p>My Account</p>
          <p>Exchange Policy</p>
          <p>100 Days Trial</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          With our expertise refined by 45 years of crafting sleep innovations, begin a new journey of restful comfort.
        </p>
      </div>

      <style jsx>{`
        .footer {
          background-color: #000;
          color: #fff;
          padding: 40px 20px 20px;
          font-family: 'Arial', sans-serif;
        }

        .footer-container {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-column {
          flex: 1 1 250px;
          margin: 20px;
        }

        .footer-column h3 {
          font-size: 18px;
          margin-bottom: 12px;
        }

        .footer-column p {
          font-size: 15px;
          line-height: 1.6;
          margin: 6px 0;
        }

        .footer-bottom {
          text-align: center;
          border-top: 1px solid #444;
          margin-top: 30px;
          padding-top: 20px;
        }

        .footer-bottom p {
          font-size: 14px;
          color: #ccc;
        }

        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            align-items: center;
          }

          .footer-column {
            margin: 10px 0;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
