import React from 'react'
import { ShoppingCart, Heart, Star, Search, Menu, User, ArrowRight, TrendingUp, Zap, Shield, Truck, Quote, CheckCircle } from 'lucide-react';

function Testemonial() {
     const testimonials = [
    {
      id: 1,
      name: "Ayush Rai",
      role: "Verified Buyer",
      content: "Amazing quality products and super fast delivery! The headphones I bought exceeded my expectations.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b89c8c8c?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Manish Mishra", 
      role: "Premium Customer",
      content: "Best online shopping experience ever. Customer service is outstanding and products are top-notch.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Prerna Chauhan",
      role: "Fashion Enthusiast", 
      content: "Love the curated selection and modern design. Everything arrives perfectly packaged.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    }
  ];
  return (
    <>
    <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle">Real reviews from real customers</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <Quote className="quote-icon" size={24} />
                <p className="testimonial-content">{testimonial.content}</p>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="star-filled" />
                  ))}
                </div>
                <div className="testimonial-author">
                  <img src={testimonial.avatar} alt={testimonial.name} />
                  <div className="author-info">
                    <span className="author-name">{testimonial.name}</span>
                    <span className="author-role">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section></>
  )
}

export default Testemonial