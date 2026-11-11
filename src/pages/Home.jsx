import SafeImg from "../components/SafeImg.jsx";
import { images, categories, featured, trending, reasons, formatPrice } from "../data.js";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(10,10,10,.82) 25%, rgba(10,10,10,.25)), url(${images.hero})` }}>
        <div className="container hero-content">
          <span className="eyebrow">New Season · 2026</span>
          <h1>Discover Your Style. <em>Define Your Fashion.</em></h1>
          <p>SG DRESS SHOP brings you elegant, contemporary clothing for men, women and kids — crafted with quality fabrics and finished with timeless detail.</p>
          <div className="hero-actions">
            <a href="#featured" className="btn btn-beige">Shop Now</a>
            <a href="#categories" className="btn btn-ghost">Browse Categories</a>
          </div>
          <ul className="hero-stats">
            <li><strong>5K+</strong><span>Happy customers</span></li>
            <li><strong>500+</strong><span>Styles</span></li>
            <li><strong>7 Days</strong><span>Easy returns</span></li>
          </ul>
        </div>
      </section>

      {/* FEATURED */}
      <section id="featured" className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow dark">Handpicked</span>
            <h2>Featured Collection</h2>
            <p>Signature pieces our customers love — refined cuts, rich textures, effortless style.</p>
          </div>
          <div className="grid grid-4">
            {featured.map((p) => (
              <article className="card" key={p.name}>
                <div className="card-img">
                  <SafeImg src={p.img} alt={p.name} />
                  <span className="badge">Sale</span>
                  <a href="#featured" className="quick">Add to Cart</a>
                </div>
                <h3>{p.name}</h3>
                <p className="price">{formatPrice(p.price)} <s>{formatPrice(p.old)}</s></p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="section beige">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow dark">Shop By</span>
            <h2>Categories for Everyone</h2>
            <p>Find the perfect look for every member of the family.</p>
          </div>
          <div className="grid grid-3">
            {categories.map((c) => (
              <a href="#featured" className="cat-card" key={c.name}>
                <SafeImg src={c.img} alt={c.name} />
                <div className="cat-overlay">
                  <small>{c.tag}</small>
                  <h3>{c.name}</h3>
                  <span>Explore →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TRENDING */}
      <section id="trending" className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow dark">What's Hot</span>
            <h2>Trending Fashion</h2>
            <p>The styles everyone is wearing this season.</p>
          </div>
          <div className="grid grid-4">
            {trending.map((p) => (
              <article className="card" key={p.name}>
                <div className="card-img">
                  <SafeImg src={p.img} alt={p.name} />
                  <span className="badge dark">{p.badge}</span>
                  <a href="#trending" className="quick">Add to Cart</a>
                </div>
                <h3>{p.name}</h3>
                <p className="price">{formatPrice(p.price)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROMO BANNER */}
      <section className="promo" style={{ backgroundImage: `linear-gradient(rgba(10,10,10,.7), rgba(10,10,10,.7)), url(${images.promo})` }}>
        <div className="container promo-inner">
          <span className="eyebrow">Limited Time Offer</span>
          <h2>Flat 30% Off on the New Season Collection</h2>
          <p>Use code <strong>SG30</strong> at checkout. Offer valid while stocks last.</p>
          <a href="#featured" className="btn btn-beige">Grab the Deal</a>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow dark">Our Promise</span>
            <h2>Why Choose SG Dress Shop</h2>
            <p>Fashion that feels as good as it looks — with service you can trust.</p>
          </div>
          <div className="grid grid-4">
            {reasons.map((r) => (
              <div className="why" key={r.title}>
                <div className="why-icon">{r.icon}</div>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
