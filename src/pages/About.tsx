import { Headset } from 'lucide-react'
import React from 'react'
import Header from './Header'

function About() {
  return (
    <>
    <Header/>
    <section className="about-section mt-44" id="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">About AYUSH STORE</h2>
              <p className="about-description">
                Founded in 2020, AYUSH STORE has been dedicated to bringing you the finest selection of premium products 
                from around the world. Our mission is to elevate your lifestyle through carefully curated items 
                that combine exceptional quality, innovative design, and unmatched value.
              </p>
              <div className="about-stats">
                <div className="about-stat">
                  <span className="stat-number">50K+</span>
                  <span className="stat-label">Happy Customers</span>
                </div>
                <div className="about-stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Premium Products</span>
                </div>
                <div className="about-stat">
                  <span className="stat-number">4.9★</span>
                  <span className="stat-label">Average Rating</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop" alt="About AYUSH STORE" />
            </div>
          </div>
        </div>
      </section></>
  )
}

export default About