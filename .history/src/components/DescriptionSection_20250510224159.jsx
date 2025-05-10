import React from 'react';

const DescriptionSection = () => {
  return (
    <>
      <div className="description-wrapper">
        <div className="description-container">
          <h2 className="main-heading">Description</h2>
          <p className="intro">
            The Slumber Pedic Mattress combines zonal springs and Cool Gel Memory Foam for excellent support and optimal temperature regulation, ensuring a restful and refreshing sleep every night.
          </p>

          <div className="feature-container">
            <div className="feature">
              <h3>Breathable Materials</h3>
              <p>With an Air Flo Mesh, enjoy an easy & comforting sleep experience.</p>
            </div>

            <div className="feature">
              <h3>Warranty of Quality</h3>
              <p>With a 5-year warranty, rest easy knowing your sleep is protected for years to come.</p>
            </div>

            <div className="feature">
              <h3>Designed for You</h3>
              <p>Designed to contour naturally to your body shape, helping reduce pressure points on your body.</p>
            </div>

            <div className="feature">
              <h3>Foam Composition</h3>
              <p>Engineered with HDHR Foam & Visco PUF Foam, offering plush comfort with lasting support.</p>
            </div>

            <div className="feature">
              <h3>Made with Natural Elements</h3>
              <p>Crafted with Natural Rubberised Jute for added firmness and comfort.</p>
            </div>

            <div className="feature">
              <h3>Quilted with Elegance</h3>
              <p>Designed with intricate stitching, adding a touch of luxury to your sleep space.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="banner-container">
        <video
          className="banner-video"
          autoPlay
          loop
          muted
          playsInline
          src="/assets/banner.mp4"
        />
        <div className="banner-text">
          <h2>Sink into Serenity</h2>
          <p>Feel the soft embrace as you sleep deeply.</p>
        </div>
      </div>

      <style jsx>{`
        .description-wrapper {
          display: flex;
          justify-content: ;
          padding: 40px 20px;
          background-color: #f9f9f9;
        }

        .description-container {
          max-width: 800px;
          text-align: center;
          font-family: 'Darker Grotesque', sans-serif;
          color: #333;
          padding: 20px;
          border-radius: 8px;
          margin: 20px;
        }

        .main-heading {
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 20px;
          color: #222;
        }

        .intro {
          font-size: 18px;
          margin-bottom: 30px;
          color: #555;
        }

        .feature-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 20px;
        }

        .feature {
          background-color: #f5f5f5;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .feature h3 {
          font-size: 20px;
          font-weight: 600;
          color: #333;
          margin-bottom: 8px;
        }

        .feature p {
          font-size: 16px;
          color: #555;
          margin: 0;
        }

        .banner-container {
          position: relative;
          width: 100vw;
          height: 400px;
          overflow: hidden;
        }

        .banner-video {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        .banner-text {
          position: absolute;
          top: 50%;
          left: 50px;
          transform: translateY(-50%);
          color: white;
          font-family: 'Darker Grotesque', sans-serif;
          text-align: left;
        }

        .banner-text h2 {
          font-size: 48px;
          font-weight: bold;
          margin: 0;
        }

        .banner-text p {
          font-size: 22px;
          margin-top: 10px;
        }

        @media (max-width: 768px) {
          .banner-container {
            height: 300px;
          }

          .banner-text {
            top: 20px;
            left: 20px;
            transform: none;
          }

          .banner-text h2 {
            font-size: 28px;
          }

          .banner-text p {
            font-size: 16px;
          }

          .feature-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default DescriptionSection;
