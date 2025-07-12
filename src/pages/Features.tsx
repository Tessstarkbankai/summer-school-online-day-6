import React from 'react'
import { ShoppingCart, Heart, Star, Search, Menu, User, ArrowRight, TrendingUp, Zap, Shield, Truck, Quote, CheckCircle } from 'lucide-react';
function Features() {
  return (
    <div><section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Truck size={24} />
              </div>
              <h3>Free Shipping</h3>
              <p>Free shipping on orders over $100</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Shield size={24} />
              </div>
              <h3>Secure Payment</h3>
              <p>100% secure payment processing</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Zap size={24} />
              </div>
              <h3>Fast Delivery</h3>
              <p>Express delivery in 24-48 hours</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <TrendingUp size={24} />
              </div>
              <h3>Quality Guarantee</h3>
              <p>Premium quality products only</p>
            </div>
          </div>
        </div>
      </section>
</div>
  )
}

export default Features