import React, { useState } from 'react';

const images = [
  '/assets/mattress1.webp',
  '/assets/mattress2.webp',
  '/assets/mattress3.webp',
  '/assets/mattress4.webp',
];

const ProductSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span>Home</span>
        <span className="separator">/</span>
        <span>Back Support</span>
        <span className="separator">/</span>
        <span>Slumber Pedic Mattress</span>
      </div>

      {/* Main Slider */}
      <div className="slider-container" onClick={openModal}>
        <img src={images[current]} alt="Mattress" className="slider-image" />
        <div className="zoom-icon">🔍</div>
        <button className="slider-btn left" onClick={(e) => { e.stopPropagation(); prevSlide(); }}>‹</button>
        <button className="slider-btn right" onClick={(e) => { e.stopPropagation(); nextSlide(); }}>›</button>
      </div>

      {/* Thumbnails */}
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

      {/* Image Popup Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            <img src={images[current]} alt="Zoomed" className="modal-image" />
          </div>
        </div>
      )}

      <style>{`
        .breadcrumb {
          font-size: 14px;
          margin-bottom: 20px;
          font-family: 'Poppins', sans-serif;
          color: #777;
          display: flex;
          gap: 4px;
          flex-wrap: wrap;
        }

        .separator {
          margin: 0 4px;
        }

        .slider-container {
          position: relative;
          width: 100%;
          max-width: 100%;
          margin-bottom: 20px;
          overflow: hidden;
          border-radius: 12px;
          cursor: zoom-in;
        }

        .slider-image {
          width: 100%;
          height: 700px;
          object-fit: contain;
          border-radius: 12px;
          display: block;
        }

        .slider-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          font-size: 2.5rem;
          background: rgba(0,0,0,0.5);
          color: white;
          border: none;
          padding: 10px 14px;
          cursor: pointer;
          z-index: 10;
        }

        .slider-btn.left {
          left: 10px;
        }

        .slider-btn.right {
          right: 10px;
        }

        .zoom-icon {
          position: absolute;
          bottom: 15px;
          right: 20px;
          background: rgba(0, 0, 0, 0.5);
          color: #fff;
          padding: 6px 10px;
          border-radius: 50%;
          font-size: 1.2rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .slider-container:hover .zoom-icon {
          opacity: 1;
        }

        .thumbnail-container {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-top: 15px;
          flex-wrap: wrap;
        }

        .thumbnail {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border: 2px solid transparent;
          cursor: pointer;
          transition: border 0.3s, transform 0.3s;
        }

        .thumbnail:hover {
          transform: scale(1.05);
        }

        .thumbnail.active {
          border: 3px solid #000;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 100;
        }

        .modal-content {
          position: relative;
          max-width: 90%;
          max-height: 90%;
        }

        .modal-image {
          width: 100%;
          height: auto;
          max-height: 90vh;
          border-radius: 10px;
        }

        .close-btn {
          position: absolute;
          top: -30px;
          right: 0;
          font-size: 2rem;
          background: transparent;
          color: white;
          border: none;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .slider-image {
            height: 400px;
          }
          .modal-image {
            max-height: 70vh;
          }
        }

        @media (max-width: 480px) {
          .slider-image {
            height: 260px;
          }
          .thumbnail {
            width: 60px;
            height: 60px;
          }
        }
      `}</style>
    </>
  );
};

export default ProductSlider;
