import React from 'react';
import Navbar from './components/Navbar';
import ProductSlider from './components/ProductSlider';
import ProductDetails from './components/ProductDetails';

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

      <style>{`
        .product-section {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
          padding: 20px;
        }

        .left-section {
          flex: 1.3;
          min-width: 450px;
          max-width: 800px;
        }

        .right-section {
          flex: 1;
          min-width: 300px;
          max-width: 400px;
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
