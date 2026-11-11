const U = (id, w = 800) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  hero: U("photo-1483985988355-763728e1935b", 1400),
  promo: U("photo-1441986300917-64674bd600d8", 1400),
  notFound: U("photo-1523381210434-271e8be1f52b", 1400),
};

export const categories = [
  { name: "Men's Collection", tag: "Tailored & Timeless", img: U("photo-1507679799987-c73779587ccf") },
  { name: "Women's Collection", tag: "Graceful & Bold", img: U("photo-1469334031218-e382a71b716b") },
  { name: "Kids' Collection", tag: "Playful & Comfy", img: U("photo-1503944583220-79d8926ad5e2") },
];

export const featured = [
  { name: "Ivory Satin Evening Dress", price: 4999, old: 6499, img: U("photo-1496747611176-843222e1e57c") },
  { name: "Classic Beige Trench Coat", price: 6299, old: 7999, img: U("photo-1490481651871-ab68de25d43d") },
  { name: "Noir Slim-Fit Blazer", price: 5499, old: 6999, img: U("photo-1617137968427-85924c800a22") },
  { name: "Silk Blend Midi Dress", price: 3899, old: 4999, img: U("photo-1515886657613-9f3515b0c78f") },
];

export const trending = [
  { name: "Linen Summer Co-ord Set", price: 2799, badge: "Hot", img: U("photo-1445205170230-053b83016050") },
  { name: "Pleated Wrap Dress", price: 3299, badge: "New", img: U("photo-1512436991641-6745cdb1723f") },
  { name: "Everyday Cotton Kurta", price: 1599, badge: "Bestseller", img: U("photo-1558769132-cb1aea458c5e") },
  { name: "Minimal Black Jumpsuit", price: 3599, badge: "Trending", img: U("photo-1469334031218-e382a71b716b") },
];

export const reasons = [
  { icon: "✦", title: "Premium Quality", text: "Carefully chosen fabrics and finishing that look refined and last season after season." },
  { icon: "⇄", title: "Easy Returns", text: "Not the perfect fit? Exchange or return within 7 days, hassle-free." },
  { icon: "☖", title: "Fast Delivery", text: "Quick, tracked shipping so your new outfit arrives right on time." },
  { icon: "♡", title: "Style for Everyone", text: "Men's, women's and kids' fashion — all under one roof, at honest prices." },
];

export const formatPrice = (n) => "₹" + n.toLocaleString("en-IN");
