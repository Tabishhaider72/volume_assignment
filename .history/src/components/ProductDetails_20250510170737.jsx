import React, { useState } from 'react';

const ProductDetails = () => {
  const [category, setCategory] = useState('Single');
  const [size, setSize] = useState('72x30');
  const [thickness, setThickness] = useState('8');
  const [quantity, setQuantity] = useState(1);

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
            <option value="Single">Single</option>
            <option value="Double">Double</option>
            <option value="Queen">Queen</option>
            <option value="King">King</option>
          </select>
        </label>

        <label>
          Size:
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="72x30">72x30</option>
            <option value="75x36">75x36</option>
            <option value="78x60">78x60</option>
          </select>
        </label>

        <label>
          Thickness:
          <select value={thickness} onChange={(e) => setThickness(e.target.value)}>
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="10">10</option>
          </select>
        </label>

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

      <style>{`
        .details-container {
          max-width: 400px;
          margin: auto;
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
      `}</style>
    </>
  );
};

export default ProductDetails;
