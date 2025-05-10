import React from 'react';

const DescriptionSection = () => {
  return (
    <section className="p-6 max-w-4xl mx-auto">
      <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
        <h2 className="text-lg font-medium mb-4 border-b pb-2">Description</h2>
        <p className="text-sm text-gray-700 mb-4">
          The Slumber Pedic Mattress combines zonal springs and Cool Gel Memory Foam for excellent support and optimal temperature regulation, ensuring a restful and refreshing sleep every night.
        </p>

        <div className="space-y-4 text-sm text-gray-700">
          <div>
            <h3 className="font-semibold text-gray-900">Breathable Materials</h3>
            <p>With an Air Flo Mesh, enjoy an easy & comforting sleep experience.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Warranty of Quality</h3>
            <p>With a 5-year warranty, rest easy knowing your sleep is protected for years to come.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Designed for you</h3>
            <p>Designed to contour naturally to your body shape, to help reduce pressure points on your body.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Foam Composition</h3>
            <p>Engineered with the HDHR Foam & Visco PUF Foam, the Mattress offers plush comfort with lasting support.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Made with Natural Elements</h3>
            <p>Crafted with Natural Rubberised Jute for added firmness and comfort.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Quilted with Elegance</h3>
            <p>Designed with intricate stitching, adding a touch of luxury to your sleep space.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;
