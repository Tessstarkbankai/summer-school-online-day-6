import React from 'react'
import { ShoppingCart, Heart, Star, Search, Menu, User, ArrowRight, TrendingUp, Zap, Shield, Truck, Quote, CheckCircle } from 'lucide-react';
function Faq() {
    const faqs = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all items in original condition. Free return shipping is included for orders over $100."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days. Express shipping (1-2 days) is available for an additional fee."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship worldwide. International shipping times vary by location, typically 7-14 business days."
    },
    {
      question: "Are your products authentic?",
      answer: "Absolutely! We source all products directly from authorized distributors and manufacturers."
    }
  ];
  return (
    <><section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Everything you need to know</p>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3 className="faq-question">
                  <CheckCircle size={20} />
                  {faq.question}
                </h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section></>
  )
}

export default Faq