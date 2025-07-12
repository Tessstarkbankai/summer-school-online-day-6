
import '../styles/ecommerce.css';
import Product from './Product';
import About from './About';
import Testemonial from './Testemonial';
import Faq from './Faq';
import Hero from './Hero';
import NewsLetter from './NewsLetter';
import Features from './Features';
import Header from './Header';

const Index = () => {
  

  return (
    <div className="ecommerce-container">
      <Header/>

    <Hero/>

      <Features/>
      <Product/>


      <About/>
      

      <Testemonial/>
      

      <Faq/>

      <NewsLetter/>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <span className="logo-text text-white">AYUSH STORE</span>
                <span className="logo-dot">●</span>
              </div>
              <p className="footer-description">
                Elevating your lifestyle with premium products and exceptional service.
              </p>
            </div>
            <div className="footer-section">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#categories">Categories</a></li>
                <li><a href="#about">About Us</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3 className="footer-title">Customer Service</h3>
              <ul className="footer-links">
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#shipping">Shipping Info</a></li>
                <li><a href="#returns">Returns</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3 className="footer-title">Connect</h3>
              <ul className="footer-links">
                <li><a href="#instagram">Instagram</a></li>
                <li><a href="#facebook">Facebook</a></li>
                <li><a href="#twitter">Twitter</a></li>
                <li><a href="#youtube">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 AYUSH STORE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
