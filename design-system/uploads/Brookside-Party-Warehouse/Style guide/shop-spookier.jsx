// Brookside — Shop, Spookier, Style Guide, Contact pages

const ShopPage = () => {
  const cats = [
    { n: "01", t: "Balloons", c: "var(--red)", desc: "Latex, foil, mylar, jumbo. Any color. Filled in store.", count: "240+ SKUs" },
    { n: "02", t: "Helium Fills", c: "var(--orange)", desc: "$1.50 each. Bulk discount on 25+. While-u-wait.", count: "WALK-IN" },
    { n: "03", t: "Graduation", c: "var(--yellow)", desc: "Class of 2026 specials. Custom number balloons.", count: "FEATURED" },
    { n: "04", t: "Cards & Wrap", c: "var(--green)", desc: "Sweet, weird, sentimental, slightly cursed.", count: "1,800+ designs" },
    { n: "05", t: "Piñatas", c: "var(--blue)", desc: "50+ in stock. Custom orders in 24 hours.", count: "Custom available" },
    { n: "06", t: "Party Gifts & Favors", c: "var(--pink)", desc: "Pre-built loot bags or DIY by the bin.", count: "$0.25 — $25" },
    { n: "07", t: "Tableware", c: "var(--red)", desc: "Plates, cups, napkins. 80+ themes.", count: "80 themes" },
    { n: "08", t: "Costumes (Spookier ↑)", c: "#1B1A1F", desc: "Upstairs floor. All ages, all year.", count: "1,200+ costumes" },
  ];
  return (
    <main>
      <div className="page-head">
        <div className="container">
          <span className="eyebrow">Shop · the whole warehouse</span>
          <h1 style={{ fontSize: "clamp(56px, 7vw, 96px)" }}>
            Eight aisles.<br />
            <span style={{ color: "var(--blue)" }}>One bag</span> on the way out.
          </h1>
          <p className="lede" style={{ marginTop: 18 }}>
            Browse every department. We don't run a real e-comm checkout (yet) — pick what you want, we'll have it ready at the counter.
          </p>
        </div>
      </div>

      <section className="section" style={{ borderTop: 0, paddingTop: 56 }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }} className="shop-grid">
            <style>{`
              @media (max-width: 1100px) { .shop-grid { grid-template-columns: repeat(2, 1fr) !important; } }
              @media (max-width: 600px) { .shop-grid { grid-template-columns: 1fr !important; } }
            `}</style>
            {cats.map((c) => (
              <div key={c.n} className="card" style={{ padding: 24, minHeight: 240, position: "relative", overflow: "hidden", cursor: "pointer" }}
                onClick={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  window.Confetti.spawnAt(r.left + r.width/2, r.top + 20, 30);
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="num" style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.18em", color: "var(--ink-mute)" }}>{c.n}</span>
                  <span style={{ width: 12, height: 12, borderRadius: 99, background: c.c }}></span>
                </div>
                <h3 style={{ marginTop: 16, fontSize: 26 }}>{c.t}</h3>
                <p className="muted" style={{ marginTop: 10, fontSize: 14 }}>{c.desc}</p>
                <div style={{ position: "absolute", bottom: 22, left: 24, right: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.14em", color: "var(--ink-mute)" }}>{c.count}</span>
                  <span style={{ fontSize: 18 }}>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom orders strip */}
      <section className="section">
        <div className="container">
          <div className="feature" style={{ background: "var(--blue)", color: "var(--paper)", borderColor: "var(--ink)" }}>
            <div>
              <span className="eyebrow" style={{ color: "rgba(255,253,247,0.7)" }}>Bring us a hard thing</span>
              <h2 style={{ color: "var(--paper)", marginTop: 14 }}>Custom orders.<br/>Weird requests welcome.</h2>
              <p style={{ marginTop: 16, opacity: 0.9, fontSize: 17 }}>
                Hot-air-balloon-themed first birthday? Piñata of your boss's face? A 16ft balloon arch in your driveway by 5pm? We've done weirder.
              </p>
            </div>
            <div className="stack">
              {[
                ["Custom piñatas", "24-hour turnaround"],
                ["Balloon arches & garlands", "Delivery available"],
                ["Branded corporate orders", "Bulk discounts"],
                ["Themed party packs", "30+ themes built-to-order"],
              ].map(([t, s], i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "16px 0", borderBottom: "1px dashed rgba(255,253,247,0.25)" }}>
                  <strong>{t}</strong>
                  <span style={{ opacity: 0.8 }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

const SpookierPage = () => (
  <div className="spookier-page">
    <div className="tz-band">↟  Y O U  H A V E  E N T E R E D  T H E  T W I L I G H T  Z O N E  ↟</div>
    <div className="page-head" style={{ borderBottomColor: "#1F1F26" }}>
      <div className="container">
        <span className="eyebrow" style={{ color: "rgba(237,230,210,0.55)" }}>Upstairs · Brookside Party Warehouse</span>
        <h1 className="spookier-flicker" style={{
          fontFamily: "Creepster, serif", fontWeight: 400, color: "var(--blood)",
          fontSize: "clamp(80px, 12vw, 180px)", letterSpacing: "0.04em",
          textShadow: "0 0 30px rgba(200,16,46,0.6), 4px 4px 0 #000",
          marginTop: 16,
        }}>SPOOKIER</h1>
        <p className="lede" style={{ color: "rgba(237,230,210,0.7)", maxWidth: 620 }}>
          Twelve hundred costumes. Twenty animatronics. One Twilight Zone room you should
          probably not enter alone. The whole upstairs floor — open all year, not just October.
        </p>
        <div className="row" style={{ marginTop: 20 }}>
          <span className="chip" style={{ background: "#11111A", borderColor: "#2A2A33", color: "var(--bone)" }}>
            <span className="chip-dot" style={{ background: "var(--blood)", boxShadow: "0 0 0 3px rgba(200,16,46,0.25)" }}></span>
            Floor 2 · Take the back stairs
          </span>
        </div>
      </div>
    </div>

    {/* Three vibe options */}
    <section className="section" style={{ borderTopColor: "#1F1F26" }}>
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow" style={{ color: "rgba(237,230,210,0.5)" }}>03 vibes for the upstairs floor</span>
            <h2 style={{ color: "var(--bone)" }}>Pick a flavor of dread.</h2>
          </div>
          <p style={{ color: "rgba(237,230,210,0.6)", maxWidth: 380 }}>
            Three creative directions for the Spookier section. Tell us which one — or mash 'em up.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 22 }} className="vibe-grid">
          <style>{`@media (max-width: 1000px) { .vibe-grid { grid-template-columns: 1fr !important; } }`}</style>

          {/* Option 1 — Twilight Zone */}
          <div className="option-card tz" style={{ minHeight: 480 }}>
            <span className="eyebrow" style={{ color: "rgba(237,230,210,0.5)" }}>Option 01</span>
            <h3 style={{ fontFamily: "Creepster, serif", fontWeight: 400, color: "var(--bone)", fontSize: 42, marginTop: 10, letterSpacing: "0.03em" }}>TWILIGHT ZONE</h3>
            <p style={{ color: "rgba(237,230,210,0.65)", marginTop: 10, fontSize: 14 }}>Black & white, blood-red accents. Rod-Serling-monologue energy. Suburban-uncanny.</p>
            <div style={{ marginTop: 22, padding: 22, border: "2px solid var(--bone)", textAlign: "center", background: "linear-gradient(180deg, #000 0%, #0A0A0A 100%)" }}>
              <div style={{ fontFamily: "Creepster, serif", color: "var(--bone)", fontSize: 32, letterSpacing: "0.06em" }}>SUBMITTED</div>
              <div style={{ fontFamily: "Creepster, serif", color: "var(--bone)", fontSize: 32, letterSpacing: "0.06em" }}>FOR YOUR</div>
              <div style={{ fontFamily: "Creepster, serif", color: "var(--blood)", fontSize: 48, letterSpacing: "0.06em", textShadow: "0 0 12px rgba(200,16,46,0.6)" }}>APPROVAL</div>
              <div style={{ height: 1, background: "var(--bone)", margin: "16px 0" }}></div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "rgba(237,230,210,0.5)", letterSpacing: "0.2em" }}>BROOKSIDE · DIMENSION 5</div>
            </div>
            <p style={{ color: "rgba(237,230,210,0.55)", marginTop: 18, fontSize: 13, lineHeight: 1.5 }}>
              Best for: customers who like a wink, not a scream. Reads as smart-spooky.
            </p>
          </div>

          {/* Option 2 — VHS Slasher */}
          <div className="option-card vhs" style={{ minHeight: 480, position: "relative" }}>
            <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(0deg, transparent 0 2px, rgba(255,255,255,0.04) 2px 3px)", pointerEvents: "none" }}></div>
            <span className="eyebrow" style={{ color: "rgba(237,230,210,0.5)" }}>Option 02</span>
            <h3 style={{ color: "#FF2DD6", fontSize: 38, marginTop: 10, fontFamily: "var(--display)", textShadow: "3px 3px 0 #4A1A4F, 6px 6px 0 #000" }}>VHS NIGHTMARE</h3>
            <p style={{ color: "rgba(237,230,210,0.65)", marginTop: 10, fontSize: 14 }}>80s slasher poster. Magenta & cyan over deep purple-black. Chucky-coded chaos.</p>
            <div style={{ marginTop: 22, padding: 22, background: "#000", border: "1px solid #4A1A4F", position: "relative", overflow: "hidden" }}>
              <div style={{ fontFamily: "var(--display)", fontSize: 36, fontWeight: 800, color: "#FF2DD6", textShadow: "2px 2px 0 #00E5FF", lineHeight: 1, letterSpacing: "-0.02em" }}>BROOKSIDE</div>
              <div style={{ fontFamily: "var(--display)", fontSize: 22, fontWeight: 800, color: "#00E5FF", lineHeight: 1, marginTop: 4 }}>: AFTER HOURS</div>
              <div style={{ height: 8, background: "linear-gradient(90deg, #FF2DD6, #00E5FF, #B6FF3D)", marginTop: 12 }}></div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "#FF2DD6", marginTop: 12, letterSpacing: "0.2em" }}>★ ★ ★ ★ ★   PLAY · REW · FF</div>
            </div>
            <p style={{ color: "rgba(237,230,210,0.55)", marginTop: 18, fontSize: 13, lineHeight: 1.5 }}>
              Best for: teens, costume browsers, the Chucky-and-friends crowd.
            </p>
          </div>

          {/* Option 3 — Haunted Carnival */}
          <div className="option-card haunted" style={{ minHeight: 480, position: "relative" }}>
            {/* Blood drips */}
            <div className="blood-drip" style={{ left: "12%", height: 24 }}></div>
            <div className="blood-drip" style={{ left: "44%", height: 38 }}></div>
            <div className="blood-drip" style={{ left: "78%", height: 18 }}></div>

            <span className="eyebrow" style={{ color: "rgba(237,230,210,0.5)" }}>Option 03</span>
            <h3 style={{ color: "var(--blood)", fontSize: 38, marginTop: 10, fontFamily: "Creepster, serif", fontWeight: 400, letterSpacing: "0.04em" }}>HAUNTED CARNIVAL</h3>
            <p style={{ color: "rgba(237,230,210,0.65)", marginTop: 10, fontSize: 14 }}>Same balloon DNA, drained of color. Brand carries upstairs — but cursed.</p>
            <div style={{ marginTop: 22, padding: 22, background: "#0A050C", border: "1px solid #3A1A2A", textAlign: "center" }}>
              <LogoSpookier size={180} />
            </div>
            <p style={{ color: "rgba(237,230,210,0.55)", marginTop: 18, fontSize: 13, lineHeight: 1.5 }}>
              Best for: keeping brand cohesion. Same warehouse, drained of joy.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* What's upstairs */}
    <section className="section" style={{ borderTopColor: "#1F1F26" }}>
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow" style={{ color: "rgba(237,230,210,0.5)" }}>What's actually up there</span>
            <h2 style={{ color: "var(--bone)" }}>The departments<br/>of the damned.</h2>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }} className="dept-grid">
          <style>{`@media (max-width:1000px){.dept-grid{grid-template-columns:repeat(2,1fr)!important}}@media (max-width:600px){.dept-grid{grid-template-columns:1fr!important}}`}</style>
          {[
            ["Costumes", "1,200+", "Sizes 2T to 4XL · all year round"],
            ["Wigs & Makeup", "300+", "FX latex, blood, prosthetics"],
            ["Animatronics", "20+", "Witches, butlers, killer clowns"],
            ["The Twilight Zone Room", "1", "Don't ask. Just go."],
          ].map(([t, n, d]) => (
            <div key={t} style={{ background: "#11111A", border: "1px solid #25252F", borderRadius: 22, padding: 26, minHeight: 200 }}>
              <div style={{ fontFamily: "var(--display)", fontSize: 56, color: "var(--blood)", lineHeight: 1, fontWeight: 800 }}>{n}</div>
              <h3 style={{ color: "var(--bone)", marginTop: 8, fontSize: 22 }}>{t}</h3>
              <p style={{ color: "rgba(237,230,210,0.55)", marginTop: 8, fontSize: 14 }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <div className="tz-band red">↟  E X I T  ←  D O W N S T A I R S  ↟</div>

    <footer style={{ background: "#000", color: "rgba(237,230,210,0.6)", padding: "40px 0", fontSize: 13, textAlign: "center", fontFamily: "var(--mono)", letterSpacing: "0.18em" }}>
      <div className="container">© 2026 BROOKSIDE PARTY WAREHOUSE · UPSTAIRS DIVISION · KEEP THE LIGHTS ON</div>
    </footer>
  </div>
);

Object.assign(window, { ShopPage, SpookierPage });
