import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact Us", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={close}>
          SG<span> DRESS SHOP</span>
        </Link>

        <button className={`burger ${open ? "open" : ""}`} aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>

        <nav className={`nav-links ${open ? "show" : ""}`}>
          <ul>
            {links.map((l) => (
              <li key={l.label}>
                <NavLink to={l.to} end onClick={close} className={({ isActive }) => (isActive ? "active" : "")}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="nav-auth">
            <Link to="/login" className="btn btn-outline-sm" onClick={close}>Login</Link>
            <Link to="/register" className="btn btn-dark-sm" onClick={close}>Register</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
