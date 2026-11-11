import { Link } from "react-router-dom";

const Icon = ({ d, label }) => (
  <a href="#!" aria-label={label} className="social" onClick={(e) => e.preventDefault()}>
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d={d} /></svg>
  </a>
);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" className="brand light">SG<span> DRESS SHOP</span></Link>
          <p className="footer-text">Premium fashion for the whole family. Discover your style and define your fashion with SG Dress Shop.</p>
          <div className="socials">
            <Icon label="Facebook" d="M13.5 22v-8.2h2.8l.5-3.3h-3.3V8.4c0-.9.4-1.7 1.8-1.7h1.6V3.9c-.3 0-1.3-.1-2.4-.1-2.5 0-4.1 1.5-4.1 4.2v2.5H7.6v3.3h2.8V22h3.1z" />
            <Icon label="Instagram" d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A4.5 4.5 0 1112 16.5 4.5 4.5 0 0112 7.5zm0 2A2.5 2.5 0 1012 14.5 2.5 2.5 0 0012 9.5zM17.2 6a1 1 0 110 2 1 1 0 010-2z" />
            <Icon label="X (Twitter)" d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.3L5.3 21H2.2l7.2-8.3L1.9 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.3 4.7H5.5l11.2 14.5z" />
            <Icon label="YouTube" d="M21.6 7.2a2.5 2.5 0 00-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 002.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 001.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 001.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3L10 15z" />
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4>Shop</h4>
          <ul>
            <li><a href="/#categories">Men</a></li>
            <li><a href="/#categories">Women</a></li>
            <li><a href="/#categories">Kids</a></li>
            <li><a href="/#trending">Trending</a></li>
          </ul>
        </div>
        <div>
          <h4>Visit Us</h4>
          <ul className="plain">
            <li>SG Dress Shop, Salem, Tamil Nadu</li>
            <li>hello@sgdressshop.com</li>
            <li>Mon – Sat · 10 AM – 9 PM</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} SG DRESS SHOP. All rights reserved.</div>
    </footer>
  );
}
