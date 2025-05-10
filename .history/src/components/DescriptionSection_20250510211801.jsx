import React from 'react';

const DescriptionSection = () => {
  return (
    <div className="description-section">
      <h2 className="main-heading">Description</h2>
      <p className="intro">
        The Slumber Pedic Mattress combines zonal springs and Cool Gel Memory Foam for excellent support and optimal temperature regulation, ensuring a restful and refreshing sleep every night.
      </p>

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
        <p>Designed to contour naturally to your body shape, to help reduce pressure points on your body.</p>
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

      <style jsx>{`
        .description-section {
          padding: 20px;
          font-family: 'Darker Grotesque', sans-serif;
          color: #333;
          line-height: 1.5;
        }

        .main-heading {
          font-size: 30px;
          font-weight: bold;
          margin-bottom: 16px;
        }

        .intro {
          font-size: 18px;
          margin-bottom: 20px;
        }

        .feature {
          margin-bottom: 18px;
        }

        .feature h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 6px;
          color: #222;
        }

        .feature p {
          font-size: 18px;
          color: #555;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default DescriptionSection;
