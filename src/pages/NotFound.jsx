import { Link } from "react-router-dom";
import { images } from "../data.js";

export default function NotFound() {
  return (
    <section className="nf" style={{ backgroundImage: `linear-gradient(rgba(10,10,10,.82), rgba(10,10,10,.9)), url(${images.notFound})` }}>
      <div className="nf-inner">
        <svg className="hanger" viewBox="0 0 120 80" aria-hidden="true">
          <path d="M60 18a8 8 0 10-8-8" fill="none" stroke="#d8c3a5" strokeWidth="4" strokeLinecap="round" />
          <path d="M60 18v10L8 62a6 6 0 004 10h96a6 6 0 004-10L60 28" fill="none" stroke="#d8c3a5" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
        <h1 className="nf-code">
          4<span className="nf-zero">
            <svg viewBox="0 0 100 130" aria-hidden="true">
              <path d="M50 8c-9 0-14 6-14 14h8c0-4 2-6 6-6s6 2 6 6-3 6-6 8v8" fill="none" stroke="#d8c3a5" strokeWidth="5" strokeLinecap="round" />
              <path d="M44 38C30 52 18 78 14 120h72C82 78 70 52 56 38z" fill="#d8c3a5" />
              <path d="M44 38h12" stroke="#d8c3a5" strokeWidth="5" strokeLinecap="round" />
            </svg>
          </span>4
        </h1>
        <h2>Oops! Page Not Found</h2>
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <Link to="/" className="btn btn-beige">Back to Home</Link>
      </div>
    </section>
  );
}
