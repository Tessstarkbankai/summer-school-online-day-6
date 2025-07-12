import React from 'react'
import { ShoppingCart, Heart, Star, Search, Menu, User, ArrowRight, TrendingUp, Zap, Shield, Truck, Quote, CheckCircle } from 'lucide-react';

function Hero() {
  return (
    <>      <section className="hero-section" id="home">
        <div className="hero-background">
          <div className="hero-gradient"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="hero-title-line">Discover</span>
              <span className="hero-title-line highlight">Premium</span>
              <span className="hero-title-line">Collections</span>
            </h1>
            <p className="hero-description">
              Elevate your lifestyle with our curated selection of premium products. 
              From cutting-edge electronics to timeless fashion pieces.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">
                Shop Now
                <ArrowRight size={20} />
              </button>
              <button className="btn-secondary">View Collection</button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">50K+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
              <div className="stat">
                <span className="stat-number">99%</span>
                <span className="stat-label">Satisfaction Rate</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="floating-card card-1">
              <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop" alt="Product 1" />
            </div>
            <div className="floating-card card-2">
              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop" alt="Product 2" />
            </div>
            <div className="floating-card card-3">
              <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop" alt="Product 3" />
            </div>
          </div>
        </div>
      </section></>
  )
}

export default Hero