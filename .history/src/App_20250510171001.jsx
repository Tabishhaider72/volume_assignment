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
          gap: 20px;
          padding: 30px;
        }

        .left-section {
          flex: 1;
          min-width: 300px;
          max-width: 600px;
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
        }
      `}</style>
    </>
  );
};

export default App;
