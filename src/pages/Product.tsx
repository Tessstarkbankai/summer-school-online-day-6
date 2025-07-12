
import React, { useEffect, useState } from 'react';
import { ShoppingCart, Heart, Star, Search, Menu, User, ArrowRight, TrendingUp, Zap, Shield, Truck, Quote, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../styles/ecommerce.css';
import Header from './Header';




function Product() {
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

    const categories = [
        { id: 'all', name: 'All Products', count: 156 },
        { id: 'electronics', name: 'Electronics', count: 45 },
        { id: 'fashion', name: 'Fashion', count: 67 },
        { id: 'beauty', name: 'Beauty', count: 34 },
        { id: 'home', name: 'Home & Garden', count: 23 }
    ];
    const featuredProducts = [
        {
            id: 1,
            name: "Premium Wireless Headphones",
            price: 299,
            originalPrice: 399,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
            rating: 4.8,
            reviews: 124,
            category: "electronics",
            badge: "Best Seller"
        },
        {
            id: 2,
            name: "Smart Fitness Watch",
            price: 199,
            originalPrice: 249,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
            rating: 4.6,
            reviews: 89,
            category: "electronics",
            badge: "New"
        },
        {
            id: 3,
            name: "Designer Leather Bag",
            price: 149,
            originalPrice: 199,
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
            rating: 4.9,
            reviews: 156,
            category: "fashion",
            badge: "Limited"
        },
        {
            id: 4,
            name: "Professional Camera",
            price: 899,
            originalPrice: 1099,
            image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=500&fit=crop",
            rating: 4.7,
            reviews: 67,
            category: "electronics",
            badge: "Pro"
        },
        {
            id: 5,
            name: "Minimalist Sneakers",
            price: 129,
            originalPrice: 159,
            image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop",
            rating: 4.5,
            reviews: 203,
            category: "fashion",
            badge: "Trending"
        },
        {
            id: 6,
            name: "Organic Skincare Set",
            price: 79,
            originalPrice: 99,
            image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=500&fit=crop",
            rating: 4.8,
            reviews: 134,
            category: "beauty",
            badge: "Organic"
        }
    ];

    const filteredProducts = activeCategory === 'all'
        ? featuredProducts
        : featuredProducts.filter(product => product.category === activeCategory);

    const handleProductClick = (productId: number) => {
        navigate(`/product/${productId}`);
    };


    return (
        <>
        <Header/>
            <section className="categories-section mt-20" id="categories">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Shop by Category</h2>
                        <p className="section-subtitle">Discover our premium collections</p>
                    </div>
                    <div className="category-filters">
                        {categories.map(category => (
                            <button
                                key={category.id}
                                className={`category-filter ${activeCategory === category.id ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category.id)}
                            >
                                {category.name}
                                <span className="category-count">{category.count}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="products-section" id="products">
                <div className="container">
                    <div className="products-grid">
                        {filteredProducts.map((product, index) => (
                            <div
                                key={product.id}
                                className="product-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                                onClick={() => handleProductClick(product.id)}
                            >
                                <div className="product-image">
                                    <img src={product.image} alt={product.name} />
                                    <div className="product-badge">{product.badge}</div>
                                    <div className="product-actions">
                                        <button className="action-button" onClick={(e) => e.stopPropagation()}>
                                            <Heart size={18} />
                                        </button>
                                        <button className="action-button" onClick={(e) => e.stopPropagation()}>
                                            <Search size={18} />
                                        </button>
                                    </div>
                                    <div className="product-overlay">
                                        <button className="add-to-cart" onClick={(e) => e.stopPropagation()}>
                                            <ShoppingCart size={18} />
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <h3 className="product-name">{product.name}</h3>
                                    <div className="product-rating">
                                        <div className="stars">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={14}
                                                    className={i < Math.floor(product.rating) ? 'star-filled' : 'star-empty'}
                                                />
                                            ))}
                                        </div>
                                        <span className="rating-text">({product.reviews})</span>
                                    </div>
                                    <div className="product-price">
                                        <span className="current-price">Rs.{product.price}</span>
                                        <span className="original-price">Rs.{product.originalPrice}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product