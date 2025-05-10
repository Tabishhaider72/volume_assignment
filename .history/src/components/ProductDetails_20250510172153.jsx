import React, { useState } from 'react';

const ProductDetails = () => {
  const [category, setCategory] = useState('Single');
  const [size, setSize] = useState('72x30');
  const [thickness, setThickness] = useState('8');
  const [quantity, setQuantity] = useState(1);
  const [showGuide, setShowGuide] = useState(false);

  const increaseQty = () => setQuantity(quantity + 1);
  const decreaseQty = () => quantity > 1 && setQuantity(quantity - 1);

  return (
    <>
      <div className="details-container">
        <h2>Slumber Pedic Mattress</h2>
        <p className="price">Rs. 36,920.00</p>
        <p className="desc">8/10” Thickness, Available in 26 sizes + Customisation available</p>

        <label>
          Category:
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option>Single</option>
            <option>Double</option>
            <option>Queen</option>
            <option>King</option>
          </select>
        </label>

        <label>
          Size:
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            <option>72x30</option>
            <option>75x36</option>
            <option>78x60</option>
          </select>
        </label>

        <label>
          Thickness:
          <select value={thickness} onChange={(e) => setThickness(e.target.value)}>
            <option>6</option>
            <option>8</option>
            <option>10</option>
          </select>
        </label>

        <div className="size-guide" onClick={() => setShowGuide(true)}>
          <img src="https://cdn-icons-png.flaticon.com/128/545/545705.png" alt="Size" />
          <span>Size Guide</span>
        </div>

        <div className="quantity">
          <span onClick={decreaseQty}>−</span>
          <input type="text" readOnly value={quantity} />
          <span onClick={increaseQty}>+</span>
        </div>

        <div className="buttons">
          <button className="buy">Buy Now</button>
          <button className="cart">Add to Cart</button>
        </div>
      </div>

      {showGuide && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={() => setShowGuide(false)}>×</span>
            <h3>Size Guide</h3>
            <p>
              If you need assistance choosing the ideal mattress size, don't hesitate to contact us. All sizes shown in this chart are approximate.
            </p>

            <video width="100%" autoPlay loop muted>
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <table>
              <thead>
                <tr>
                  <th>Our Size</th>
                  <th>Length</th>
                  <th>Width</th>
                  <th>Thickness</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Single</td><td>72"</td><td>30"</td><td>6" - 10"</td></tr>
                <tr><td>Double</td><td>72"</td><td>30"</td><td>6" - 10"</td></tr>
                <tr><td>King</td><td>72"</td><td>72"</td><td>6" - 10"</td></tr>
                <tr><td>Queen</td><td>72"</td><td>60"</td><td>6" - 10"</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      <style>{`
        * {
          font-family: 'Segoe UI', sans-serif;
        }

        .details-container {
          max-width: 400px;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 10px;
        }

        h2 {
          font-size: 24px;
          margin-bottom: 10px;
        }

        .price {
          color: #d32f2f;
          font-weight: bold;
          font-size: 20px;
          margin-bottom: 5px;
        }

        .desc {
          font-size: 14px;
          margin-bottom: 15px;
        }

        label {
          display: block;
          margin-bottom: 15px;
        }

        select {
          width: 100%;
          padding: 8px;
          margin-top: 5px;
          border-radius: 6px;
          border: 1px solid #ccc;
        }

        .quantity {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 15px 0;
        }

        .quantity span {
          font-size: 20px;
          cursor: pointer;
          padding: 4px 10px;
          border: 1px solid #888;
          border-radius: 4px;
        }

        .quantity input {
          width: 40px;
          text-align: center;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .buttons {
          display: flex;
          gap: 10px;
        }

        .buttons button {
          flex: 1;
          padding: 10px;
          font-size: 16px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        .buy {
          background-color: #007bff;
          color: white;
        }

        .cart {
          background-color: #28a745;
          color: white;
        }

        .size-guide {
          font-size: 12px;
          margin: 10px 0;
          display: flex;
          align-items: center;
          gap: 5px;
          color: #555;
          cursor: pointer;
          text-decoration: underline;
        }

        .size-guide img {
          width: 14px;
          height: 14px;
        }

        .popup {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
        }

        .popup-content {
          background: white;
          padding: 20px;
          border-radius: 10px;
          max-width: 600px;
          width: 90%;
          position: relative;
        }

        .popup-content .close {
          position: absolute;
          top: 10px;
          right: 15px;
          font-size: 24px;
          cursor: pointer;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 15px;
        }

        table th, table td {
          padding: 10px;
          border: 1px solid #ccc;
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default ProductDetails;
