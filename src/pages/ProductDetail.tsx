
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, ShoppingCart, Star, Truck, Shield, RotateCcw, HeartHandshake, Plus, Minus } from 'lucide-react';
import '../styles/product-detail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data - in real app, this would come from API
  const product = {
    id: parseInt(id || '1'),
    name: "Premium Wireless Headphones",
    price: 299,
    originalPrice: 399,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&h=800&fit=crop"
    ],
    rating: 4.8,
    reviews: 124,
    description: "Experience premium sound quality with our latest wireless headphones. Featuring advanced noise cancellation, 30-hour battery life, and crystal-clear audio reproduction.",
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Premium leather ear cups",
      "Bluetooth 5.0 connectivity",
      "Quick charge: 5 min = 3 hours playback",
      "Premium carrying case included"
    ],
    specifications: {
      "Weight": "290g",
      "Driver Size": "40mm",
      "Frequency Response": "20Hz - 20kHz",
      "Impedance": "32 ohms",
      "Connectivity": "Bluetooth 5.0, 3.5mm jack",
      "Battery": "Li-ion 1000mAh"
    },
    inStock: true,
    stockCount: 15
  };

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= product.stockCount) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="product-detail-container">
      {/* Navigation */}
      <div className="product-nav">
        <button onClick={() => navigate(-1)} className="back-button">
          <ArrowLeft size={20} />
          Back to Products
        </button>
      </div>

      <div className="product-detail-content">
        {/* Product Images */}
        <div className="product-images-section">
          <div className="main-image">
            <img src={product.images[selectedImage]} alt={product.name} />
            <div className="image-actions">
              <button className="image-action-btn">
                <Heart size={20} />
              </button>
              <button className="image-action-btn">
                <Share2 size={20} />
              </button>
            </div>
          </div>
          <div className="image-thumbnails">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} ${index + 1}`}
                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="product-info-section">
          <div className="product-header">
            <h1 className="product-title">{product.name}</h1>
            <div className="product-rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(product.rating) ? 'star-filled' : 'star-empty'}
                  />
                ))}
              </div>
              <span className="rating-text">({product.reviews} reviews)</span>
            </div>
          </div>

          <div className="product-pricing">
            <span className="current-price">${product.price}</span>
            <span className="original-price">${product.originalPrice}</span>
            <span className="discount">Save ${product.originalPrice - product.price}</span>
          </div>

          <p className="product-description">{product.description}</p>

          {/* Quantity & Add to Cart */}
          <div className="purchase-section">
            <div className="quantity-selector">
              <label>Quantity:</label>
              <div className="quantity-controls">
                <button onClick={() => handleQuantityChange(-1)}>
                  <Minus size={16} />
                </button>
                <span className="quantity-display">{quantity}</span>
                <button onClick={() => handleQuantityChange(1)}>
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <div className="purchase-buttons">
              <button className="add-to-cart-btn">
                <ShoppingCart size={20} />
                Add to Cart
              </button>
              <button className="buy-now-btn">
                Buy Now
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="product-features">
            <h3>Key Features:</h3>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Guarantees */}
          <div className="product-guarantees">
            <div className="guarantee-item">
              <Truck size={20} />
              <span>Free shipping on orders over $100</span>
            </div>
            <div className="guarantee-item">
              <Shield size={20} />
              <span>2-year warranty included</span>
            </div>
            <div className="guarantee-item">
              <RotateCcw size={20} />
              <span>30-day return policy</span>
            </div>
            <div className="guarantee-item">
              <HeartHandshake size={20} />
              <span>24/7 customer support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="product-specifications">
        <h2>Specifications</h2>
        <div className="specs-grid">
          {Object.entries(product.specifications).map(([key, value]) => (
            <div key={key} className="spec-item">
              <span className="spec-label">{key}:</span>
              <span className="spec-value">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
