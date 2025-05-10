import React from 'react';
import Navbar from './components/Navbar';
import ProductSlider from './components/ProductSlider';
import ProductDetails from './components/ProductDetails';
import DescriptionSection from './components/DescriptionSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
      <Navbar />

      <div className="product-section">
        <div className="left-section">
          <ProductSlider />
        </div>
        <div className="right-section">
          <ProductDetails />
        </div>
      </div>

      <DescriptionSection />
      <FAQSection />
      <Footer />


      <style>{`
        .product-section {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 30px;
          padding: 30px;
          margin: 20px;
        }

        .left-section {
          flex: 1; /* Adjusting for better balance */
          min-width: 450px;
          max-width: 900px;
        }

        .right-section {
          flex: 1;
          min-width: 300px;
          max-width: 500px;
        }

        @media (max-width: 768px) {
          .product-section {
            flex-direction: column;
            padding: 15px;
          }

          .left-section,
          .right-section {
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default App;
