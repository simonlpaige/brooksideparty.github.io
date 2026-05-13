// Brookside Party Warehouse — real business info + shared bits

const BROOKSIDE = {
  name: "Brookside Party Warehouse",
  address1: "103 W 63rd St",
  address2: "Kansas City, MO 64113",
  phone: "(816) 333-2332",
  phoneTel: "+18163332332",
  email: "bkspartywarehouse@gmail.com",
  facebook: "https://www.facebook.com/brooksidepartywarehouse",
  instagram: "https://www.instagram.com/brooksidepartywarehouse/",
  hours: [
    ["Mon – Wed", "9:00 — 7:00"],
    ["Thu – Fri", "9:00 — 8:00"],
    ["Saturday",  "9:00 — 6:00"],
    ["Sunday",    "11:00 — 3:00"],
  ],
  parkingNote: "Convenient on-street parking + lot behind the store (entrance on the south side of 63rd Street next to Chase Bank).",
  founded: 1998, // legacy as Paper Warehouse, then Brookside Party Warehouse
};

// Build a mailto link with subject + body prefill
function mailtoLink({ subject = "Hello from brooksideparty.com", body = "" } = {}) {
  return `mailto:${BROOKSIDE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// Inline social SVGs (so we don't depend on icon fonts)
const SocialIcon = ({ kind, size = 18, color = "currentColor" }) => {
  if (kind === "facebook") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.02H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.78-3.91 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.45 2.91h-2.33V22c4.78-.75 8.43-4.91 8.43-9.93z"/>
      </svg>
    );
  }
  if (kind === "instagram") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1.1" fill={color} stroke="none"/>
      </svg>
    );
  }
  return null;
};

const SocialRow = ({ size = 18, gap = 12, color = "currentColor" }) => (
  <div className="row" style={{ gap }}>
    <a href={BROOKSIDE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Brookside on Facebook" style={{ display: "inline-flex", alignItems: "center", gap: 6, color }}>
      <SocialIcon kind="facebook" size={size} color={color} /> <span style={{ fontSize: 13 }}>Facebook</span>
    </a>
    <a href={BROOKSIDE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Brookside on Instagram" style={{ display: "inline-flex", alignItems: "center", gap: 6, color }}>
      <SocialIcon kind="instagram" size={size} color={color} /> <span style={{ fontSize: 13 }}>Instagram</span>
    </a>
  </div>
);

Object.assign(window, { BROOKSIDE, mailtoLink, SocialIcon, SocialRow });
