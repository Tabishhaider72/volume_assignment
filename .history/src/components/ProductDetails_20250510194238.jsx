import React, { useState } from 'react';

const ProductDetails = () => {
  const [category, setCategory] = useState('Single');
  const [size, setSize] = useState('72x30');
  const [thickness, setThickness] = useState('8');
  const [quantity, setQuantity] = useState(1);
  const [isAccordionOpen, setAccordionOpen] = useState({
    truck: false,
    care: false,
    size: false,
  });
  const [showGuide, setShowGuide] = useState(false);  // State for showing the care guide

  const toggleAccordion = (section) => {
    setAccordionOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const increaseQty = () => setQuantity(quantity + 1);
  const decreaseQty = () => quantity > 1 && setQuantity(quantity - 1);

  const handleShowGuide = () => {
    setShowGuide(!showGuide);  // Toggle showGuide state
  };

  return (
    <>
      <div className="details-container">
        <h1 className="product-title">Slumber Pedic Mattress</h1>
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

        <div className="size-guide" onClick={handleShowGuide}>
          <img src="https://cdn-icons-png.flaticon.com/128/545/545705.png" alt="Size" />
          <span>Size Guide</span>
        </div>

        {/* Conditionally render the Care Guide if showGuide is true */}
        {showGuide && (
          <div className="care-guide">
            <h3>Care Guide</h3>
            <ul>
              <li>Rotate Regularly</li>
              <li>Use a Mattress Protector</li>
              <li>Temperature Control</li>
              <li>Gentle Cleaning</li>
              <li>Avoid Direct Sunlight</li>
              <li>Maintain Support</li>
            </ul>
            <button onClick={handleShowGuide}>Close Guide</button>
          </div>
        )}

        <div className="quantity">
          <span onClick={decreaseQty}>−</span>
          <input type="text" readOnly value={quantity} />
          <span onClick={increaseQty}>+</span>
        </div>

        <div className="buttons">
          <button className="buy">Buy Now</button>
          <button className="cart">Add to Cart</button>
        </div>

        {/* Accordion Section */}
        <div className="accordion">
          <div className="accordion-item">
            <div className="accordion-header" onClick={() => toggleAccordion('truck')}>
              <img src="/assets/truck-icon.svg" alt="Truck Icon" className="icon" />
              <span>Vendor: Symphonies Life</span>
            </div>
            {isAccordionOpen.truck && (
              <div className="accordion-content">
                <ul>
                  <li>No EU import duties.</li>
                  <li>Ships within 1-2 business days.</li>
                  <li>Ships in our fully recyclable and biodegradable signature boxes.</li>
                </ul>
              </div>
            )}
          </div>

          <div className="accordion-item">
            <div className="accordion-header" onClick={() => toggleAccordion('care')}>
              <img src="/assets/care-icon.svg" alt="Care Icon" className="icon" />
              <span>Care Guide</span>
            </div>
            {isAccordionOpen.care && (
              <div className="accordion-content">
                <ul>
                  <li>Rotate Regularly</li>
                  <li>Use a Mattress Protector</li>
                  <li>Temperature Control</li>
                  <li>Gentle Cleaning</li>
                  <li>Avoid Direct Sunlight</li>
                  <li>Maintain Support</li>
                </ul>
              </div>
            )}
          </div>

          <div className="accordion-item">
            <div className="accordion-header" onClick={() => toggleAccordion('size')}>
              <img src="/assets/size-icon.svg" alt="Size Icon" className="icon" />
              <span>Size Guide</span>
            </div>
            {isAccordionOpen.size && (
              <div className="accordion-content">
                <p>
                  If you need assistance choosing the ideal mattress size, don't hesitate to contact us.
                  All sizes shown in this chart are approximate. Please shop carefully and refer to our size chart to ensure the best fit for your sleep needs.
                </p>
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

                <video width="100%" autoPlay loop muted>
                  <source src="/assets/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        * {
          font-family: 'Darker Grotesque', sans-serif;
        }

        .details-container {
          max-width: 400px;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 10px;
        }

        h1.product-title {
          font-size: 34px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .price {
          color: #d32f2f;
          font-size: 24px;
          font-weight: normal;
          margin-bottom: 5px;
        }

        .desc {
          font-size: 16px;
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
          border: none;
          border-bottom: 2px solid #ccc;
          background-color: transparent;
          font-size: 16px;
        }

        select:focus {
          outline: none;
          border-bottom: 2px solid #888;
        }

        .accordion {
          margin-top: 30px;
        }

        .accordion-item {
          margin-bottom: 15px;
        }

        .accordion-header {
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .accordion-header img {
          width: 20px;
          height: 20px;
          margin-right: 10px;
        }

        .accordion-content {
          padding: 10px;
          background: #f5f5f5;
          border-radius: 5px;
        }

        .accordion-content ul {
          margin: 0;
          padding: 0;
        }

        .accordion-content table {
          width: 100%;
          margin-top: 15px;
          border-collapse: collapse;
        }

        .accordion-content th, .accordion-content td {
          padding: 10px;
          border: 1px solid #ccc;
          text-align: center;
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
