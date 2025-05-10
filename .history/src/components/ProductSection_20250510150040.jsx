import React, { useState } from 'react';
import product1 from '../assets/mattress1.jpg';
import product2 from '../assets/mattress2.jpg';
import product3 from '../assets/mattress3.jpg';

const ProductSection = () => {
  const images = [product1, product2, product3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="product-section">
        {/* LEFT - SLIDER */}
        <div className="product-slider">
          <img src={images[currentIndex]} alt="Mattress" className="slider-image" />
          <div className="slider-controls">
            <button onClick={prevImage}>⟨</button>
            <button onClick={nextImage}>⟩</button>
          </div>
        </div>

        {/* RIGHT - FORM UI Placeholder */}
        <div className="product-info">
          <h2>Slumber Pedic Mattress</h2>
          <p className="price">Rs. 36,920.00</p>
          <p className="desc">8/10” Thickness, Available in 26 sizes + Customisation available</p>

          <div className="selectors">
            <label>Category:</label>
            <select>
              <option>Single</option>
              <option>Double</option>
            </select>

            <label>Size:</label>
            <select>
              <option>72x30</option>
              <option>75x36</option>
            </select>

            <label>Thickness:</label>
            <select>
              <option>8</option>
              <option>10</option>
            </select>
          </div>

          <div className="quantity-control">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>

          <div className="action-buttons">
            <button className="add-cart">Add to Cart</button>
            <button className="buy-now">Buy Now</button>
          </div>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        .product-section {
          display: flex;
          padding: 40px 20px;
          gap: 50px;
          flex-wrap: wrap;
          background-color: #f9f9f9;
        }

        .product-slider {
          flex: 1;
          position: relative;
          max-width: 500px;
        }

        .slider-image {
          width: 100%;
          height: auto;
          border-radius: 8px;
        }

        .slider-controls {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-between;
          transform: translateY(-50%);
          padding: 0 10px;
        }

        .slider-controls button {
          background: rgba(255,255,255,0.7);
          border: none;
          font-size: 24px;
          cursor: pointer;
        }

        .product-info {
          flex: 1;
          max-width: 400px;
        }

        .product-info h2 {
          font-size: 24px;
          margin-bottom: 10px;
        }

        .price {
          font-weight: bold;
          margin-bottom: 10px;
        }

        .desc {
          margin-bottom: 20px;
        }

        .selectors label {
          display: block;
          margin-top: 10px;
          font-weight: 500;
        }

        .selectors select {
          width: 100%;
          padding: 8px;
          margin-top: 5px;
        }

        .quantity-control {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-top: 20px;
        }

        .quantity-control button {
          width: 30px;
          height: 30px;
          font-size: 20px;
          cursor: pointer;
        }

        .action-buttons {
          display: flex;
          gap: 20px;
          margin-top: 30px;
        }

        .add-cart, .buy-now {
          padding: 10px 20px;
          border: none;
          cursor: pointer;
        }

        .add-cart {
          background-color: #f0f0f0;
        }

        .buy-now {
          background-color: #007bff;
          color: white;
        }

        @media (max-width: 768px) {
          .product-section {
            flex-direction: column;
            align-items: center;
          }

          .product-info {
            width: 100%;
            padding-top: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default ProductSection;
