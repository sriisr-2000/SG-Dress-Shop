import { useState } from "react";

// Shows a beige gradient if an image fails to load, so the layout never breaks.
export default function SafeImg({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div className={`img-fallback ${className}`} role="img" aria-label={alt} />;
  return <img src={src} alt={alt} className={className} loading="lazy" onError={() => setFailed(true)} />;
}
