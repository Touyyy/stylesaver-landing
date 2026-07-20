import { useState } from "react";

export function LandingPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    { q: "How does StyleSaver find deals?", a: "We curate deals from 26+ brands and retailers you already shop at. Our team researches pricing daily to find the best discounts before they're gone." },
    { q: "Is there really a free trial?", a: "Yes, 7 days completely free. No credit card required to try it out. After day 7, we charge your selected plan ($4.99/month or $29.99/year). Cancel anytime." },
    { q: "Can I save my favorite outfits?", a: "Yes. Build an outfit, name it, and save it to your closet. Come back anytime to review prices or checkout." },
    { q: "Do you work in my country?", a: "We currently support US retailers. International support is coming soon." },
    { q: "How do I cancel?", a: "Cancel anytime through your iOS Settings > Subscriptions. No hassle, no questions." },
  ];

  const steps = [
    { num: "01", title: "Browse the daily edit", desc: "Curated deals from 26+ brands you already shop." },
    { num: "02", title: "Save what you like", desc: "Build outfits and keep them in your closet." },
    { num: "03", title: "Checkout when ready", desc: "See your savings, then buy straight from the app." },
  ];

  const accent = "#16C47F";
  const dark = "#1a1a1a";
  const gray = "#666";
  const border = "#e5e5e5";

  return (
    <div style={{ background: "#fff", minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", color: dark }}>

      <div style={{ background: "linear-gradient(180deg, rgba(22,196,127,0.14) 0%, rgba(22,196,127,0.05) 70%, #fff 100%)" }}>
        <header style={{ position: "sticky", top: 0, background: "rgba(255,255,255,0.7)", backdropFilter: "blur(8px)", zIndex: 40, borderBottom: `1px solid ${border}` }}>
          <div style={{ maxWidth: 1000, margin: "0 auto", padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontWeight: 600, fontSize: 18 }}>StyleSaver</span>
            <nav style={{ display: "flex", gap: 28, fontSize: 14, color: gray }}>
              <a href="#how" style={{ color: gray, textDecoration: "none" }}>How it works</a>
              <a href="#pricing" style={{ color: gray, textDecoration: "none" }}>Pricing</a>
              <a href="#faq" style={{ color: gray, textDecoration: "none" }}>FAQ</a>
            </nav>
          </div>
        </header>

        <section style={{ maxWidth: 700, margin: "0 auto", padding: "80px 20px 40px", textAlign: "left" }}>
          <p style={{ fontSize: 13, color: accent, fontWeight: 600, marginBottom: 16 }}>Deal-first outfit finder</p>
          <h1 style={{ fontSize: 44, fontWeight: 600, lineHeight: 1.2, margin: "0 0 20px", maxWidth: 520 }}>
            Find your outfit. Watch what it saves you.
          </h1>
          <p style={{ fontSize: 17, color: gray, lineHeight: 1.6, margin: "0 0 32px", maxWidth: 480 }}>
            StyleSaver curates deals from brands you already shop and shows you exactly what you're saving, in real time.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
            <a href="https://apps.apple.com/app/stylesaver" style={{ background: dark, color: "#fff", padding: "12px 24px", borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
              Download on App Store
            </a>
            <span style={{ fontSize: 13, color: "#999" }}>7-day free trial - no card required</span>
          </div>
          <div style={{ marginTop: 48, height: 300, background: "#fafafa", border: `1px solid ${border}`, borderRadius: 12 }} />
        </section>
      </div>

      <section id="how" style={{ maxWidth: 700, margin: "0 auto", padding: "60px 20px", borderTop: `1px solid ${border}` }}>
        <p style={{ fontSize: 13, color: "#999", marginBottom: 32 }}>From link to closet in three steps.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {steps.map((step) => (
            <div key={step.num} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
              <span style={{ fontSize: 22, fontWeight: 600, color: "#ccc", minWidth: 36 }}>{step.num}</span>
              <div>
                <p style={{ fontSize: 16, fontWeight: 600, margin: "0 0 4px" }}>{step.title}</p>
                <p style={{ fontSize: 14, color: gray, margin: 0 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" style={{ maxWidth: 700, margin: "0 auto", padding: "60px 20px", borderTop: `1px solid ${border}` }}>
        <p style={{ fontSize: 13, color: "#999", marginBottom: 24 }}>One price. That's it.</p>
        <div style={{ border: `1px solid ${border}`, borderRadius: 12, padding: 32, maxWidth: 380 }}>
          <p style={{ fontSize: 16, fontWeight: 600, margin: "0 0 8px" }}>StyleSaver</p>
          <p style={{ fontSize: 32, fontWeight: 600, margin: "0 0 8px" }}>$4.99<span style={{ fontSize: 15, color: gray, fontWeight: 400 }}> /month, or $29.99/year</span></p>
          <p style={{ fontSize: 14, color: gray, margin: "0 0 24px" }}>7 days free. Cancel anytime, no questions asked.</p>
          <a href="https://apps.apple.com/app/stylesaver" style={{ display: "inline-block", background: dark, color: "#fff", padding: "10px 20px", borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>Start free trial</a>
        </div>
      </section>

      <section id="faq" style={{ maxWidth: 700, margin: "0 auto", padding: "60px 20px", borderTop: `1px solid ${border}` }}>
        <p style={{ fontSize: 13, color: "#999", marginBottom: 24 }}>Questions, answered straight.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map((faq, idx) => (
            <button key={idx} onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)} style={{ textAlign: "left", padding: "18px 20px", border: `1px solid ${border}`, borderRadius: 10, background: "#fff", cursor: "pointer", fontFamily: "inherit" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: 15, fontWeight: 600 }}>{faq.q}</span>
                <span style={{ fontSize: 14, color: "#999", transform: expandedFaq === idx ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>v</span>
              </div>
              {expandedFaq === idx && (<p style={{ fontSize: 14, color: gray, margin: "12px 0 0", lineHeight: 1.6 }}>{faq.a}</p>)}
            </button>
          ))}
        </div>
      </section>

      <footer style={{ borderTop: `1px solid ${border}`, padding: "32px 20px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 13, color: "#999" }}>(c) 2026 StyleSaver</span>
          <span style={{ fontSize: 13, color: "#999" }}>Privacy - Terms</span>
        </div>
      </footer>
    </div>
  );
}