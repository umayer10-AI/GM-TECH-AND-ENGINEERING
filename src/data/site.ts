export type ContactItem = {
  label: string;
  value: string;
  href?: string;
  note?: string;
};

export const site = {
  name: "GM TECH & ENGINEERING",
  tagline: "Professional swimming pool, spa, water feature and pond engineering solutions.",
  url: "https://example.com",
  email: "Add email address",
  phone: "Add phone number",
  whatsapp: "Add WhatsApp number",
  address: "Add business address",
  hours: "Add business hours",
  social: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
};

export const contactItems: ContactItem[] = [
  { label: "Phone", value: site.phone, note: "Replace with your primary contact number" },
  { label: "WhatsApp", value: site.whatsapp, note: "Replace with your WhatsApp number" },
  { label: "Email", value: site.email, note: "Replace with your email address" },
  { label: "Address", value: site.address, note: "Replace with your business location" },
  { label: "Business Hours", value: site.hours, note: "Replace with service hours" },
];

export const imageLibrary = {
  hero: "/images/pool-hero-background.png",
  about: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1400&q=85",
  cta: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1800&q=85",
  construction: "https://images.unsplash.com/photo-1774519677410-9073d1f2d9f5?auto=format&fit=crop&w=1400&q=85",
  renovation: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=85",
  maintenance: "https://images.unsplash.com/photo-1774109556498-652c0458d4af?auto=format&fit=crop&w=1200&q=85",
  wellness: "https://images.unsplash.com/photo-1786809623614-8d397afdb0d0?auto=format&fit=crop&w=1200&q=85",
  feature: "https://images.unsplash.com/photo-1630386519709-c33c5041b948?auto=format&fit=crop&w=1200&q=85",
  pond: "https://www.garden.eco/img/image3_fountain-garden-ideas_add-life-with-water-features-with-plants.jpg",
};
