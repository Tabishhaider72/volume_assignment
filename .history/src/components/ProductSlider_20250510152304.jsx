import React, { useState, useEffect, useRef } from 'react';

const images = [
  '/assets/mattress1.webp',
  '/assets/mattress2.webp',
  '/assets/mattress3.webp',
  '/assets/mattress4.webp',
];

const ProductSlider = () => {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);
  const touchStartX = useRef(0);

  // Autoplay every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) setCurrent((prev) => (prev + 1) % images.length); // Swipe Left
    if (diff < -50) setCurrent((prev) => (prev - 1 + images.length) % images.length); // Swipe Right
  };

  return (
    <>
      <div
        className="slider-container"
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button className="slider-btn left" onClick={() => setCurrent((prev) => (prev - 1 + images.length) % images.length)}>‹</button>
        <img src={images[current]} alt="Mattress" className="slider-image" />
        <button className="slider-btn right" onClick={() => setCurrent((prev) => (prev + 1) % images.length)}>›</button>
      </div>

      <style>{`
        .slider-container {
          position: relative;
          width: 100%;
          max-width: 600px;
          margin: 30px auto;
          overflow: hidden;
        }

        .slider-image {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 10px;
        }

        .slider-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          font-size: 2rem;
          background: rgba(0,0,0,0.4);
          color: white;
          border: none;
          padding: 10px;
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
      `}</style>
    </>
  );
};

export default ProductSlider;
