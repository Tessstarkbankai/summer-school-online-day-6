
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, Star, Search, Menu, User, ArrowRight, TrendingUp, Zap, Shield, Truck, Quote, CheckCircle } from 'lucide-react';
function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };
  return (
    <div>
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          <div className="logo">
            <span className="logo-text">AYUSH STORE</span>
            <span className="logo-dot">●</span>
          </div>
          
          <nav className="nav-menu">
            <Link to='/Home'>Home</Link>
            <Link to='/product'>Products</Link>
            <a href="#categories" className="nav-link">Categories</a>
            <Link to='/about'>About</Link>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          <div className="header-actions">
            <div className="search-container">
              <Search className="search-icon" size={20} />
              <input type="text" placeholder="Search products..." className="search-input" />
            </div>
            <button className="icon-button">
              <User size={20} />
            </button>
            <button className="icon-button">
              <Heart size={20} />
              <span className="badge">2</span>
            </button>
            <button className="icon-button cart-button">
              <ShoppingCart size={20} />
              <span className="badge">3</span>
            </button>
            <button className="mobile-menu">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header></div>
  )
}

export default Header