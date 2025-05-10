import React, { useState } from 'react';

const images = [
  '/assets/mattress1.webp',
  '/assets/mattress2.webp',
  '/assets/mattress3.webp',
  '/assets/mattress4.webp',
];

const ProductSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="slider-container">
        <button className="slider-btn left" onClick={prevSlide}>‹</button>
        <img src={images[current]} alt="Mattress" className="slider-image" />
        <button className="slider-btn right" onClick={nextSlide}>›</button>
      </div>

      <div className="thumbnail-container">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

      <style>{`
        .slider-container {
          position: relative;
          width: 100%;
          max-width: 800px;
          margin: 40px auto 15px;
          overflow: hidden;
        }

        .slider-image {
          width: 100%;
          height: 500px;
          object-fit: contain;
          border-radius: 12px;
          display: block;
        }

        .slider-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          font-size: 2.5rem;
          background: rgba(0,0,0,0.4);
          color: white;
          border: none;
          padding: 12px;
          cursor: pointer;
          z-index: 10;
          border-radius: 50%;
        }

        .slider-btn.left {
          left: 10px;
        }

        .slider-btn.right {
          right: 10px;
        }

        .thumbnail-container {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-bottom: 25px;
          flex-wrap: wrap;
        }

        .thumbnail {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border: 2px solid transparent;
          border-radius: 8px;
          cursor: pointer;
          transition: border 0.3s, transform 0.3s;
        }

        .thumbnail:hover {
          transform: scale(1.05);
        }

        .thumbnail.active {
          border: 3px solid #007bff;
        }

        @media (max-width: 768px) {
          .slider-image {
            height: 320px;
          }

          .thumbnail {
            width: 60px;
            height: 60px;
          }
        }

        @media (max-width: 480px) {
          .slider-image {
            height: 220px;
          }

          .thumbnail {
            width: 50px;
            height: 50px;
          }
        }
      `}</style>
    </>
  );
};

export default ProductSlider;
