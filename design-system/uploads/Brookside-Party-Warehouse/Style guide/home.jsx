// Brookside Party Warehouse — Pages

const Nav = ({ page, setPage, spookier }) => (
  <nav className="nav">
    <div className="container nav-inner">
      <a onClick={() => setPage("home")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
        <LogoHorizontal height={42} color={spookier ? "var(--bone)" : "var(--ink)"} />
      </a>
      <div className="nav-links">
        <a className={page === "home" ? "active" : ""} onClick={() => setPage("home")}>Home</a>
        <a className={page === "shop" ? "active" : ""} onClick={() => setPage("shop")}>Shop</a>
        <a className={page === "spookier" ? "active" : ""} onClick={() => setPage("spookier")}>Spookier</a>
        <a className={page === "style" ? "active" : ""} onClick={() => setPage("style")}>Style Guide</a>
        <a className={page === "contact" ? "active" : ""} onClick={() => setPage("contact")}>Visit</a>
        <button className="btn btn--primary btn--sm" onClick={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          window.Confetti.pop(r.left + r.width/2, r.top + r.height/2);
        }}>Pop Confetti 🎉</button>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div>
          <LogoHorizontal height={48} />
          <p className="muted" style={{ marginTop: 16, maxWidth: 360 }}>
            The neighborhood party shop. Helium-filled balloons, piñatas, cards & costumes — all under one (very colorful) roof since 1998.
          </p>
        </div>
        <div>
          <h4>Shop</h4>
          <ul>
            <li><a>Balloons</a></li>
            <li><a>Graduation</a></li>
            <li><a>Cards & Wrap</a></li>
            <li><a>Spookier ↑</a></li>
          </ul>
        </div>
        <div>
          <h4>Visit</h4>
          <ul>
            <li><a>2418 Brookside Ave</a></li>
            <li><a>Mon–Sat 9–8</a></li>
            <li><a>Sun 10–6</a></li>
            <li><a>(555) 248-0420</a></li>
          </ul>
        </div>
        <div>
          <h4>Hello</h4>
          <ul>
            <li><a>hello@brooksideparty.com</a></li>
            <li><a>Instagram</a></li>
            <li><a>TikTok</a></li>
            <li><a>Newsletter</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Brookside Party Warehouse · Putting the loud in pa(loud)rty since '98</span>
        <span style={{ fontFamily: "var(--mono)", fontSize: 11 }}>v.fresh-pop · happy / helpful / fun</span>
      </div>
    </div>
  </footer>
);

const HomePage = ({ featured, vibe }) => {
  const featData = {
    graduation: {
      eyebrow: "HAPPENING NOW · MAY–JUNE",
      title: "Throw the grad party they'll actually post.",
      bullets: [
        ["Custom number balloons (any year)", "var(--red)"],
        ["School-color helium bouquets", "var(--blue)"],
        ["Diploma cake toppers & yard signs", "var(--green)"],
        ["Photo-booth backdrops & sashes", "var(--yellow)"],
      ],
      cta: "Plan a grad party",
    },
    halloween: {
      eyebrow: "UPSTAIRS · YEAR ROUND",
      title: "Step into Spookier — costumes & creepies.",
      bullets: [
        ["1,200+ costumes for every age", "var(--red)"],
        ["Wigs, masks & FX makeup", "var(--orange)"],
        ["Animatronics that actually move", "var(--green)"],
        ["Twilight Zone room (you'll see)", "var(--blue)"],
      ],
      cta: "Enter Spookier",
    },
    birthday: {
      eyebrow: "EVERY DAY OF THE WEEK",
      title: "Birthdays bigger than the cake.",
      bullets: [
        ["Themed party packs (50+ themes)", "var(--red)"],
        ["Helium fills while you wait", "var(--blue)"],
        ["Custom piñatas to order", "var(--orange)"],
        ["Loot bags pre-made or DIY", "var(--green)"],
      ],
      cta: "Build a party pack",
    },
  }[featured];

  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="chip"><span className="chip-dot"></span>Open today · 9 to 8 · Helium ready</span>
            <h1 style={{ marginTop: 18 }}>
              Every <span className="pop">party</span><br />
              starts <span style={{ color: "var(--blue)" }}>here.</span>
            </h1>
            <p className="lede">
              Balloons inflated while you wait, piñatas you can pick up by the bunch, cards for every weird occasion,
              and a whole upstairs floor of costumes when October's not enough. Family-owned in Brookside since 1998.
            </p>
            <div className="row" style={{ marginTop: 28 }}>
              <button className="btn btn--primary" onClick={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                window.Confetti.spawnAt(r.left + r.width/2, r.top, 60);
              }}>Shop the floor →</button>
              <button className="btn btn--ghost">Get directions</button>
            </div>
          </div>
          <div style={{ position: "relative", minHeight: 360 }}>
            <div style={{ position: "absolute", top: 20, left: "10%" }} className="drift">
              <BalloonBouquet size={320} />
            </div>
            <div style={{ position: "absolute", top: 80, right: 0 }} className="drift d2">
              <svg width="70" height="70" viewBox="0 0 70 70">
                <Balloon x={35} y={30} color="var(--pink)" tilt={-8} size={1.1} />
              </svg>
            </div>
            <div style={{ position: "absolute", bottom: 30, left: 20 }} className="drift d3">
              <svg width="60" height="60" viewBox="0 0 60 60">
                <Balloon x={30} y={26} color="var(--green)" tilt={10} size={0.9} />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee">
        <div className="marquee-track">
          {Array.from({ length: 2 }).flatMap((_, k) => [
            <span key={`a${k}`}><span className="marquee-dot" style={{background:"var(--red)"}}></span>HELIUM FILLS WHILE-U-WAIT</span>,
            <span key={`b${k}`}><span className="marquee-dot" style={{background:"var(--yellow)"}}></span>CLASS OF 2026 — WE GOTCHU</span>,
            <span key={`c${k}`}><span className="marquee-dot" style={{background:"var(--green)"}}></span>50+ PIÑATAS IN STOCK</span>,
            <span key={`d${k}`}><span className="marquee-dot" style={{background:"var(--blue)"}}></span>SPOOKIER UPSTAIRS · ALL YEAR</span>,
            <span key={`e${k}`}><span className="marquee-dot" style={{background:"var(--orange)"}}></span>CUSTOM ORDERS · 24HR TURN</span>,
            <span key={`f${k}`}><span className="marquee-dot" style={{background:"var(--pink)"}}></span>FREE STREET PARKING</span>,
          ])}
        </div>
      </div>

      {/* Categories */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Aisle by aisle</span>
              <h2>Everything for the<br/>occasion you're already late to.</h2>
            </div>
            <p className="muted" style={{ maxWidth: 380 }}>
              Six departments, one warehouse, zero judgment about how many candles you need.
            </p>
          </div>

          <div className="cat-grid">
            <div className="cat cat--featured" onClick={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              window.Confetti.spawnAt(r.left + r.width/2, r.top + r.height/2, 70);
            }}>
              <span className="num">{featData.eyebrow}</span>
              <h3 style={{ fontSize: 44, lineHeight: 1.05, marginTop: 12, color: "var(--paper)" }}>
                {featData.title}
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 0", display: "grid", gap: 8 }}>
                {featData.bullets.map(([txt, c]) => (
                  <li key={txt} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 15 }}>
                    <span style={{ width: 8, height: 8, borderRadius: 99, background: c, boxShadow: "0 0 0 3px rgba(255,253,247,0.18)" }}></span>
                    {txt}
                  </li>
                ))}
              </ul>
              <div className="row" style={{ marginTop: 24 }}>
                <span className="btn" style={{ background: "var(--paper)", color: "var(--ink)", borderColor: "var(--paper)", boxShadow: "0 3px 0 rgba(0,0,0,0.25)" }}>{featData.cta} →</span>
              </div>
              <div style={{ position: "absolute", right: -30, top: -30, opacity: 0.4 }}>
                <svg width="220" height="220" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(255,253,247,0.3)" strokeWidth="0.6" strokeDasharray="2 2" />
                  <circle cx="50" cy="50" r="32" fill="none" stroke="rgba(255,253,247,0.3)" strokeWidth="0.6" strokeDasharray="2 2" />
                </svg>
              </div>
            </div>

            <div className="cat cat--small" style={{ background: "var(--yellow)" }}>
              <span className="num">02 / BALLOONS</span>
              <h3>Helium fills,<br/>by the bunch.</h3>
              <span className="muted" style={{ fontSize: 14 }}>$1.50 each · bulk discounts</span>
              <div className="arrow">→</div>
              <div style={{ position: "absolute", right: -8, bottom: -10, opacity: 0.9 }}>
                <BalloonBouquet size={140} />
              </div>
            </div>

            <div className="cat cat--med" style={{ background: "var(--blue)", color: "var(--paper)", borderColor: "var(--ink)" }}>
              <span className="num" style={{ color: "rgba(255,253,247,0.7)" }}>03 / PIÑATAS</span>
              <h3 style={{ color: "var(--paper)" }}>Custom piñatas, made-to-bash.</h3>
              <span style={{ fontSize: 14, opacity: 0.85 }}>50+ in stock · custom 24hr</span>
              <div className="arrow" style={{ background: "var(--paper)", color: "var(--ink)" }}>→</div>
            </div>

            <div className="cat cat--med" style={{ background: "var(--green)", color: "var(--paper)", borderColor: "var(--ink)" }}>
              <span className="num" style={{ color: "rgba(255,253,247,0.7)" }}>04 / CARDS & WRAP</span>
              <h3 style={{ color: "var(--paper)" }}>The card aisle that gets it.</h3>
              <span style={{ fontSize: 14, opacity: 0.85 }}>From sweet to slightly unhinged</span>
              <div className="arrow" style={{ background: "var(--paper)", color: "var(--ink)" }}>→</div>
            </div>

            <div className="cat cat--small" style={{ background: "#1B1A1F", color: "var(--bone)", borderColor: "var(--ink)" }}>
              <span className="num" style={{ color: "rgba(237,230,210,0.6)" }}>05 / SPOOKIER ↑</span>
              <h3 style={{ color: "var(--blood)", fontFamily: "Creepster, serif", fontWeight: 400, fontSize: 36 }}>Upstairs.<br/>If you dare.</h3>
              <span style={{ fontSize: 14, opacity: 0.7 }}>Costumes · FX · all year</span>
              <div className="arrow" style={{ background: "var(--blood)", color: "var(--bone)" }}>→</div>
            </div>
          </div>
        </div>
      </section>

      {/* Graduation feature */}
      <section className="section">
        <div className="container">
          <div className="feature">
            <div>
              <span className="eyebrow">⏰ Class of 2026</span>
              <h2 style={{ marginTop: 14 }}>Grad season is loud<br/>this year.</h2>
              <p className="muted" style={{ marginTop: 14, fontSize: 17 }}>
                We've stocked the whole warehouse for graduation: from Pre-K promotion to PhD. Build your party pack online, swing by, and we'll have it boxed and balloon'd before you finish your iced coffee.
              </p>
              <div className="row" style={{ marginTop: 24 }}>
                <button className="btn btn--primary">Build a grad pack</button>
                <button className="btn btn--ghost">View this week's specials →</button>
              </div>
            </div>
            <div>
              <ul>
                <li><span className="bullet" style={{background:"var(--red)"}}></span>Custom "26" number balloons in any school color combo</li>
                <li><span className="bullet" style={{background:"var(--orange)"}}></span>Photo-booth backdrops + props (yes, fake diplomas too)</li>
                <li><span className="bullet" style={{background:"var(--yellow)"}}></span>Cake toppers, sashes, leis, & tassel toss confetti</li>
                <li><span className="bullet" style={{background:"var(--green)"}}></span>Yard signs printed in-store, same day</li>
                <li><span className="bullet" style={{background:"var(--blue)"}}></span>Helium fill discounts on orders 25+</li>
                <li><span className="bullet" style={{background:"var(--pink)"}}></span>Free 'I-helped' button for the parent who paid</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Things people said out loud</span>
              <h2>Folks have feelings<br/>about this place.</h2>
            </div>
          </div>
          <div className="tlist">
            {[
              { q: "I came in for a card and left with sixteen balloons. Zero regrets.", n: "Marisa P.", c: "var(--red)", s: "★★★★★" },
              { q: "They custom-built a Bluey piñata in 26 hours. My kid screamed (good scream).", n: "Devon T.", c: "var(--blue)", s: "★★★★★" },
              { q: "The Halloween floor smells like rubber and joy. I mean that.", n: "Tomás R.", c: "var(--green)", s: "★★★★★" },
            ].map((t, i) => (
              <div className="t" key={i}>
                <div className="t-stars">{t.s}</div>
                <div className="t-quote">"{t.q}"</div>
                <div className="t-meta">
                  <div className="t-avatar" style={{ background: t.c }}>{t.n[0]}</div>
                  <span>{t.n} · Brookside regular</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit */}
      <section className="section">
        <div className="container">
          <div className="visit">
            <div>
              <span className="eyebrow" style={{ color: "rgba(255,253,247,0.55)" }}>Come on in</span>
              <h2 style={{ marginTop: 14 }}>One warehouse,<br/>two whole floors,<br/>infinite confetti.</h2>
              <div className="visit-rows">
                <div className="visit-row"><span className="k">Address</span><span>2418 Brookside Avenue · Suite 100<br/><span style={{opacity:0.6}}>Free street parking after 6pm</span></span></div>
                <div className="visit-row"><span className="k">Hours</span><span>Mon–Sat 9:00 — 8:00<br/>Sunday 10:00 — 6:00</span></div>
                <div className="visit-row"><span className="k">Helium</span><span>Walk-in fills until 7pm · bulk by appt</span></div>
                <div className="visit-row"><span className="k">Phone</span><span>(555) 248-0420</span></div>
              </div>
            </div>
            <div className="map">
              {/* Stylized map placeholder */}
              <svg viewBox="0 0 400 280" width="100%" height="100%" style={{display:"block"}}>
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,253,247,0.06)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="400" height="280" fill="url(#grid)" />
                <path d="M 0 140 L 240 140 L 240 280" stroke="rgba(255,253,247,0.18)" strokeWidth="20" fill="none" />
                <path d="M 100 0 L 100 280" stroke="rgba(255,253,247,0.12)" strokeWidth="14" fill="none" />
                <path d="M 0 60 L 400 60" stroke="rgba(255,253,247,0.10)" strokeWidth="10" fill="none" />
                <text x="20" y="40" fontFamily="var(--mono)" fontSize="10" fill="rgba(255,253,247,0.45)" letterSpacing="2">BROOKSIDE AVE</text>
                <text x="260" y="200" fontFamily="var(--mono)" fontSize="10" fill="rgba(255,253,247,0.45)" letterSpacing="2">FAIRPARK ST</text>
                {/* Pin */}
                <g transform="translate(240 140)">
                  <circle r="32" fill="rgba(230,57,70,0.18)" />
                  <circle r="18" fill="var(--red)" />
                  <circle r="6" fill="var(--paper)" />
                  <text y="-44" textAnchor="middle" fontFamily="var(--display)" fontSize="13" fontWeight="700" fill="var(--paper)">BROOKSIDE PARTY</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Spookier teaser */}
      <section className="section">
        <div className="container">
          <div className="spookier">
            <div className="stripes"></div>
            <span className="eyebrow" style={{ color: "rgba(237,230,210,0.6)" }}>↑ UPSTAIRS · OPEN ALL YEAR</span>
            <h2 className="spookier-flicker" style={{ marginTop: 12 }}>
              SPOOKIER
            </h2>
            <p style={{ maxWidth: 600, marginTop: 18, color: "rgba(237,230,210,0.7)", fontSize: 18 }}>
              Climb the back staircase. Costumes for grown-ups, props for kids,
              animatronics that argue with you, and one room we just call the Twilight Zone.
            </p>
            <div className="row" style={{ marginTop: 28 }}>
              <a className="btn" style={{ background: "var(--blood)", color: "var(--bone)", borderColor: "var(--bone)", boxShadow: "0 3px 0 var(--bone)" }}>Enter the upstairs →</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

Object.assign(window, { Nav, Footer, HomePage });
