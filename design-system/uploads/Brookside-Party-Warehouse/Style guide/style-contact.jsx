// Brookside — Style Guide & Contact pages

const StyleGuidePage = () => (
  <main>
    <div className="page-head">
      <div className="container">
        <span className="eyebrow">Brand · Style & Voice Guide</span>
        <h1 style={{ fontSize: "clamp(56px, 7vw, 96px)" }}>The <span style={{ color: "var(--red)" }}>brand</span> in a binder.</h1>
        <p className="lede" style={{ marginTop: 18 }}>
          Refined logo set, color tokens, type scale, and how Brookside should sound on the page. Built so the warehouse feels the same in print, on a balloon, or on a phone.
        </p>
      </div>
    </div>

    {/* Logo set */}
    <section className="section" style={{ borderTop: 0, paddingTop: 56 }}>
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">01 · Logo set</span>
            <h2>Five lockups,<br />one balloon bouquet.</h2>
          </div>
          <p className="muted" style={{ maxWidth: 380 }}>
            The original is preserved — same five balloons, same circular wordmark — just cleaner shapes, even spacing, and a refined type pairing.
          </p>
        </div>

        <div className="logo-grid">
          <div className="logo-tile cream">
            <LogoCircular size={240} />
          </div>
          <div className="logo-tile">
            <LogoCircular size={240} />
          </div>
          <div className="logo-tile dark">
            <LogoCircular size={240} color="var(--cream)" />
          </div>
        </div>

        <div className="logo-grid" style={{ marginTop: 18 }}>
          <div className="logo-tile cream" style={{ minHeight: 180 }}>
            <LogoHorizontal height={56} />
          </div>
          <div className="logo-tile" style={{ minHeight: 180 }}>
            <LogoWordmark size={260} />
          </div>
          <div className="logo-tile red" style={{ minHeight: 180 }}>
            <LogoBadge size={140} />
          </div>
        </div>

        <p className="muted" style={{ marginTop: 22, fontSize: 13, fontFamily: "var(--mono)", letterSpacing: "0.1em" }}>
          MIN SIZE: 28px height (digital) · 0.5in (print) · CLEAR SPACE: 0.5× balloon-bouquet width on all sides
        </p>
      </div>
    </section>

    {/* Colors */}
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">02 · Color system</span>
            <h2>A warm cream base.<br/>The rainbow rides on top.</h2>
          </div>
          <p className="muted" style={{ maxWidth: 380 }}>
            UI is calm and warm. Color comes in via balloons, confetti, and one accent at a time. Never a purple background, always a warm one.
          </p>
        </div>

        <h4 style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.18em", color: "var(--ink-mute)", textTransform: "uppercase", marginBottom: 14 }}>FOUNDATIONS</h4>
        <div className="sg-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)", marginBottom: 32 }}>
          <div className="swatch" style={{ background: "#FFF8EC" }}>Cream<br />#FFF8EC</div>
          <div className="swatch" style={{ background: "#FDEFD2" }}>Cream Deep<br />#FDEFD2</div>
          <div className="swatch swatch--dark" style={{ background: "#1B1A1F" }}>Ink<br />#1B1A1F</div>
          <div className="swatch swatch--dark" style={{ background: "#3B3A40" }}>Ink Soft<br />#3B3A40</div>
        </div>

        <h4 style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.18em", color: "var(--ink-mute)", textTransform: "uppercase", marginBottom: 14 }}>RAINBOW · ACCENTS ONLY</h4>
        <div className="sg-grid">
          <div className="swatch swatch--dark" style={{ background: "#E63946" }}>Red<br />#E63946</div>
          <div className="swatch" style={{ background: "#F4862A" }}>Orange<br />#F4862A</div>
          <div className="swatch" style={{ background: "#F6C443" }}>Yellow<br />#F6C443</div>
          <div className="swatch swatch--dark" style={{ background: "#4FB477" }}>Green<br />#4FB477</div>
          <div className="swatch swatch--dark" style={{ background: "#3A86E0" }}>Blue<br />#3A86E0</div>
          <div className="swatch swatch--dark" style={{ background: "#E86A92" }}>Pink<br />#E86A92</div>
        </div>

        <h4 style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.18em", color: "var(--ink-mute)", textTransform: "uppercase", margin: "32px 0 14px" }}>SPOOKIER PALETTE · UPSTAIRS ONLY</h4>
        <div className="sg-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
          <div className="swatch swatch--dark" style={{ background: "#07070A" }}>Void<br />#07070A</div>
          <div className="swatch swatch--dark" style={{ background: "#C8102E" }}>Blood<br />#C8102E</div>
          <div className="swatch" style={{ background: "#EDE6D2" }}>Bone<br />#EDE6D2</div>
          <div className="swatch" style={{ background: "#B6FF3D" }}>Acid<br />#B6FF3D</div>
        </div>
      </div>
    </section>

    {/* Type */}
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">03 · Type system</span>
            <h2>Bricolage Grotesque<br/>+ DM Sans.</h2>
          </div>
          <p className="muted" style={{ maxWidth: 380 }}>
            One distinctive display face for headlines, one neutral for body, one mono for labels. Loud only when it earns it.
          </p>
        </div>

        <div>
          <div className="type-row">
            <span className="label">H1 · DISPLAY</span>
            <div>
              <div style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: 72, letterSpacing: "-0.035em", lineHeight: 0.95 }}>Every party<br/>starts here.</div>
              <div className="muted" style={{ marginTop: 6, fontFamily: "var(--mono)", fontSize: 11 }}>Bricolage Grotesque · 800 · 72/96 · -0.035em</div>
            </div>
          </div>
          <div className="type-row">
            <span className="label">H2 · DISPLAY</span>
            <div>
              <div style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 48, letterSpacing: "-0.025em" }}>Aisle by aisle.</div>
              <div className="muted" style={{ marginTop: 6, fontFamily: "var(--mono)", fontSize: 11 }}>Bricolage Grotesque · 700 · 48/56</div>
            </div>
          </div>
          <div className="type-row">
            <span className="label">H3 · DISPLAY</span>
            <div>
              <div style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 28 }}>The card aisle that gets it.</div>
              <div className="muted" style={{ marginTop: 6, fontFamily: "var(--mono)", fontSize: 11 }}>Bricolage Grotesque · 700 · 28/34</div>
            </div>
          </div>
          <div className="type-row">
            <span className="label">LEDE · BODY</span>
            <div>
              <div style={{ fontFamily: "var(--body)", fontSize: 19, color: "var(--ink-soft)", lineHeight: 1.5, maxWidth: 560 }}>Balloons inflated while you wait, piñatas you can pick up by the bunch, cards for every weird occasion.</div>
              <div className="muted" style={{ marginTop: 6, fontFamily: "var(--mono)", fontSize: 11 }}>DM Sans · 400 · 19/29</div>
            </div>
          </div>
          <div className="type-row">
            <span className="label">BODY</span>
            <div>
              <div style={{ fontFamily: "var(--body)", fontSize: 16, lineHeight: 1.55, maxWidth: 560 }}>Family-owned in Brookside since 1998, we keep two floors stocked so your party isn't the one with the sad bag of streamers from a gas station.</div>
              <div className="muted" style={{ marginTop: 6, fontFamily: "var(--mono)", fontSize: 11 }}>DM Sans · 400 · 16/25</div>
            </div>
          </div>
          <div className="type-row" style={{ borderBottom: 0 }}>
            <span className="label">EYEBROW · MONO</span>
            <div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ink-mute)" }}>HAPPENING NOW · MAY–JUNE</div>
              <div className="muted" style={{ marginTop: 6, fontFamily: "var(--mono)", fontSize: 11 }}>JetBrains Mono · 500 · 12 · 0.18em</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Voice */}
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">04 · Voice</span>
            <h2>Happy. Helpful. Fun.</h2>
          </div>
          <p className="muted" style={{ maxWidth: 380 }}>
            Brookside sounds like the cousin who's always in a good mood and knows where everything is. Warm, plainspoken, never corporate, sometimes a little cheeky.
          </p>
        </div>

        <div className="voice-grid">
          <div className="voice we">
            <h4>We sound like</h4>
            <ul>
              <li>"We've got 50 piñatas in stock — yes, even the unicorn one."</li>
              <li>"Helium fills run til 7. Bring 'em already tied if you can."</li>
              <li>"Class of 2026, we gotchu."</li>
              <li>"Custom orders welcome, weird requests doubly welcome."</li>
            </ul>
          </div>
          <div className="voice dont">
            <h4>We don't sound like</h4>
            <ul>
              <li>"Synergize your celebration ecosystem."</li>
              <li>"Please be advised that helium services conclude at 7:00pm."</li>
              <li>"Dear valued customer…"</li>
              <li>"Spooky szn is HEEERE 👻🎃💀✨"</li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }} className="vp-grid">
          <style>{`@media(max-width:900px){.vp-grid{grid-template-columns:1fr!important}}`}</style>
          {[
            ["Happy", "Default to delight. Lean into the small joys: a tied bow, a fresh helium hiss, a perfectly bad joke on a card.", "var(--yellow)"],
            ["Helpful", "Tell people the real thing. Hours, prices, what's in stock, how long the custom takes. Specifics over fluff.", "var(--green)"],
            ["Fun", "It's a party shop. We're allowed to wink. We're not allowed to be smug.", "var(--red)"],
          ].map(([w, d, c]) => (
            <div key={w} className="card">
              <div style={{ width: 14, height: 14, borderRadius: 99, background: c, marginBottom: 14 }}></div>
              <h3 style={{ fontSize: 26 }}>{w}</h3>
              <p className="muted" style={{ marginTop: 10, fontSize: 14 }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* UI atoms */}
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">05 · UI atoms</span>
            <h2>Buttons, chips,<br/>everyday parts.</h2>
          </div>
        </div>

        <div className="card">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
            <button className="btn btn--primary">Shop the floor →</button>
            <button className="btn">Get directions</button>
            <button className="btn btn--yellow">Build a grad pack</button>
            <button className="btn btn--ghost">View specials →</button>
            <span className="chip"><span className="chip-dot"></span>Open today · 9 to 8</span>
            <span className="chip"><span className="chip-dot" style={{ background: "var(--green)", boxShadow: "0 0 0 3px rgba(79,180,119,0.18)" }}></span>Helium ready</span>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </main>
);

const ContactPage = () => (
  <main>
    <div className="page-head">
      <div className="container">
        <span className="eyebrow">Visit · Hello · Helium</span>
        <h1 style={{ fontSize: "clamp(56px, 7vw, 96px)" }}>Come <span style={{ color: "var(--green)" }}>say hi</span>.<br/>Bring a list.</h1>
        <p className="lede" style={{ marginTop: 18 }}>
          We're easier to find in person, but here's everything you need first.
        </p>
      </div>
    </div>

    <section className="section" style={{ borderTop: 0, paddingTop: 48 }}>
      <div className="container">
        <div className="contact-grid">
          <div className="card" style={{ padding: 36 }}>
            <span className="eyebrow">The store</span>
            <h2 style={{ marginTop: 12, fontSize: 40 }}>2418 Brookside Avenue<br/>Suite 100</h2>
            <div className="hr"></div>

            <div style={{ display: "grid", gap: 18 }}>
              <div>
                <span className="label" style={{ marginTop: 0 }}>Hours</span>
                <div style={{ marginTop: 8 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px dashed var(--rule)" }}><span>Mon–Sat</span><span>9:00 — 8:00</span></div>
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px dashed var(--rule)" }}><span>Sunday</span><span>10:00 — 6:00</span></div>
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 0" }}><span>Helium fills</span><span>Until 7pm daily</span></div>
                </div>
              </div>
              <div>
                <span className="label" style={{ marginTop: 0 }}>Reach us</span>
                <div style={{ marginTop: 8, display: "grid", gap: 6 }}>
                  <div>📞 <strong>(555) 248-0420</strong></div>
                  <div>✉ hello@brooksideparty.com</div>
                  <div>🎈 customs@brooksideparty.com (custom orders)</div>
                </div>
              </div>
              <div>
                <span className="label" style={{ marginTop: 0 }}>Parking</span>
                <p style={{ marginTop: 8 }} className="muted">Free street parking after 6pm. Lot in back of building (enter via Fairpark).</p>
              </div>
            </div>
          </div>

          <div className="card" style={{ padding: 36, background: "var(--cream-deep)" }}>
            <span className="eyebrow">Tell us about it</span>
            <h2 style={{ marginTop: 12, fontSize: 40 }}>Custom order?<br/>Big party?<br/>Weird idea?</h2>
            <p className="muted" style={{ marginTop: 12 }}>We answer messages within a business day. For rush orders, just call.</p>

            <form onSubmit={(e) => {
              e.preventDefault();
              const r = e.currentTarget.getBoundingClientRect();
              window.Confetti.burst();
              alert("Thanks! We'll be in touch within a business day. 🎈");
            }}>
              <label className="label">Your name</label>
              <input className="input" placeholder="Marisa Park" />
              <label className="label">Email or phone</label>
              <input className="input" placeholder="marisa@example.com" />
              <label className="label">What's the occasion?</label>
              <select className="input">
                <option>Graduation</option>
                <option>Birthday</option>
                <option>Custom piñata</option>
                <option>Halloween / costume help</option>
                <option>Corporate / branded order</option>
                <option>Something weirder</option>
              </select>
              <label className="label">Tell us the details</label>
              <textarea className="input" placeholder="50 helium balloons in red & gold for Saturday at 2pm. School is West Brookside HS." />
              <button className="btn btn--primary" style={{ marginTop: 18 }} type="submit">Send it our way →</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </main>
);

Object.assign(window, { StyleGuidePage, ContactPage });
