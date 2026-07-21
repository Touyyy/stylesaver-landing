import React, { useState, useEffect } from "react";
import homepageImg from "./images/homepage.png";
import buildImg from "./images/build.png";
import savedFavImg from "./images/saved-fav.png";
import savedOutfitsImg from "./images/saved-outfits.png";
import ssLogo from "./images/ss.png";

export function LandingPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [privacyExpanded, setPrivacyExpanded] = useState(false);
  const [termsExpanded, setTermsExpanded] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const heroImages = [homepageImg, buildImg, savedOutfitsImg, savedFavImg];

  const goToImage = (idx: number) => {
    setActiveImage((idx + heroImages.length) % heroImages.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 40) {
      if (diff > 0) goToImage(activeImage + 1);
      else goToImage(activeImage - 1);
    }
    setTouchStart(null);
  };

  useEffect(() => {
    try {
      const p = localStorage.getItem("privacyExpanded");
      if (p !== null) setPrivacyExpanded(p === "true");
      const t = localStorage.getItem("termsExpanded");
      if (t !== null) setTermsExpanded(t === "true");
    } catch (e) {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("privacyExpanded", String(privacyExpanded));
    } catch (e) {}
  }, [privacyExpanded]);

  useEffect(() => {
    try {
      localStorage.setItem("termsExpanded", String(termsExpanded));
    } catch (e) {}
  }, [termsExpanded]);

  const faqs = [
    {
      q: "How does StyleSaver find deals?",
      a: "We bring together sale items and promotions from 20+ brands and retailers you already know and love. Our small team regularly reviews pricing and promotions so you can spend less time searching and more time finding what you actually want.",
    },
    {
      q: "How does the free trial work?",
      a: "Your first 5 days are free. After the trial, your subscription automatically renews using the plan you selected: $4.99 per month or $29.99 per year. You can cancel anytime through your Apple subscription settings.",
    },
    {
      q: "Can I save my favorite outfits?",
      a: "Yes. Add items from different brands to an outfit, see the total price and savings, then save it to your closet for later.",
    },
    {
      q: "Where can I shop with StyleSaver?",
      a: "StyleSaver currently features retailers available to shoppers in the United States. Support for additional countries may be added in the future.",
    },
    {
      q: "How do I cancel my subscription?",
      a: "Open Settings on your iPhone, tap your name, select Subscriptions, and choose StyleSaver. You can cancel anytime before your next renewal.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Discover what’s on sale",
      desc: "Browse a curated selection of deals from the brands and stores you already shop.",
    },
    {
      num: "02",
      title: "Build your outfit",
      desc: "Mix and match sale items across different brands and save your favorites.",
    },
    {
      num: "03",
      title: "Shop when you’re ready",
      desc: "See the full price, your total savings, and buy directly from the retailer.",
    },
  ];

  const accent = "#16C47F";
  const dark = "#1a1a1a";
  const gray = "#666";
  const lightGray = "#999";
  const border = "#e5e5e5";

  const appStoreUrl = "https://apps.apple.com/app/stylesaver";

  return (
    <div
      style={{
        background: "#fff",
        minHeight: "100vh",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        color: dark,
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(22,196,127,0.14) 0%, rgba(22,196,127,0.05) 70%, #fff 100%)",
        }}
      >
        <header
          style={{
            position: "sticky",
            top: 0,
            background: "rgba(255,255,255,0.78)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            zIndex: 40,
            borderBottom: `1px solid ${border}`,
          }}
        >
          <div
            style={{
              maxWidth: 1000,
              margin: "0 auto",
              padding: "16px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 24,
            }}
          >
            <a
              href="#top"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                color: dark,
                fontWeight: 700,
                fontSize: 24,
                textDecoration: "none",
                letterSpacing: "-0.02em",
              }}
            >
              <img src={ssLogo} alt="StyleSaver logo" style={{ height: 36, width: "auto" }} />
              StyleSaver
            </a>

            <nav
              style={{
                display: "flex",
                gap: 24,
                fontSize: 14,
                color: gray,
              }}
            >
              <a
                href="#how"
                style={{ color: gray, textDecoration: "none" }}
              >
                How it works
              </a>

              <a
                href="#pricing"
                style={{ color: gray, textDecoration: "none" }}
              >
                Pricing
              </a>

              <a
                href="#faq"
                style={{ color: gray, textDecoration: "none" }}
              >
                FAQ
              </a>
            </nav>
          </div>
        </header>

        <main id="top">
          <section
            style={{
              maxWidth: 1000,
              margin: "0 auto",
              padding: "80px 20px 40px",
              display: "flex",
              alignItems: "center",
              gap: 48,
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: "1 1 460px", minWidth: 300, textAlign: "left" }}>
              <p
                style={{
                  fontSize: 13,
                  color: accent,
                  fontWeight: 700,
                  margin: "0 0 16px",
                  letterSpacing: "0.01em",
                }}
              >
                All your favorite brands. One place.
              </p>

              <h1
                style={{
                  fontSize: "clamp(38px, 7vw, 56px)",
                  fontWeight: 650,
                  lineHeight: 1.08,
                  letterSpacing: "-0.04em",
                  margin: "0 0 22px",
                }}
              >
                Find the deals. Build the outfit. Save the difference.
              </h1>

              <p
                style={{
                  fontSize: 17,
                  color: gray,
                  lineHeight: 1.65,
                  margin: "0 0 32px",
                  maxWidth: 480,
                }}
              >
                StyleSaver brings together sale items from the brands you already
                shop, so you can discover what’s worth buying without opening ten
                different apps.
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  flexWrap: "wrap",
                }}
              >
                <a
                  href={appStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background: dark,
                    color: "#fff",
                    padding: "13px 24px",
                    borderRadius: 9,
                    fontSize: 14,
                    fontWeight: 650,
                    textDecoration: "none",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                  }}
                >
                  Download on the App Store
                </a>

                <span style={{ fontSize: 13, color: lightGray }}>
                  Try it free for 5 days
                </span>
              </div>
            </div>

            <div style={{ flex: "1 1 300px", minWidth: 260, maxWidth: 340, margin: "0 auto" }}>
              <div
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                style={{
                  position: "relative",
                  borderRadius: 20,
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                  border: `1px solid ${border}`,
                }}
                onMouseEnter={(e) => {
                  const arrows = e.currentTarget.querySelectorAll(".hero-arrow");
                  arrows.forEach((a) => ((a as HTMLElement).style.opacity = "1"));
                }}
                onMouseLeave={(e) => {
                  const arrows = e.currentTarget.querySelectorAll(".hero-arrow");
                  arrows.forEach((a) => ((a as HTMLElement).style.opacity = "0"));
                }}
              >
                <img
                  src={heroImages[activeImage]}
                  alt="StyleSaver app screenshot"
                  style={{ width: "100%", display: "block" }}
                />

                <button
                  className="hero-arrow"
                  onClick={() => goToImage(activeImage - 1)}
                  aria-label="Previous image"
                  style={{
                    position: "absolute",
                    left: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    border: "none",
                    background: "rgba(0,0,0,0.55)",
                    color: "#fff",
                    fontSize: 16,
                    cursor: "pointer",
                    opacity: 0,
                    transition: "opacity 0.2s ease",
                  }}
                >
                  &#8249;
                </button>

                <button
                  className="hero-arrow"
                  onClick={() => goToImage(activeImage + 1)}
                  aria-label="Next image"
                  style={{
                    position: "absolute",
                    right: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    border: "none",
                    background: "rgba(0,0,0,0.55)",
                    color: "#fff",
                    fontSize: 16,
                    cursor: "pointer",
                    opacity: 0,
                    transition: "opacity 0.2s ease",
                  }}
                >
                  &#8250;
                </button>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 8,
                  marginTop: 16,
                }}
              >
                {heroImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    aria-label={`Show image ${idx + 1}`}
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      background: activeImage === idx ? accent : "#ddd",
                      transition: "background 0.2s ease",
                    }}
                  />
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>

      <section
        id="how"
        style={{
          maxWidth: 700,
          margin: "0 auto",
          padding: "72px 20px",
          borderTop: `1px solid ${border}`,
          scrollMarginTop: 80,
        }}
      >
        <p
          style={{
            fontSize: 13,
            color: lightGray,
            margin: "0 0 32px",
          }}
        >
          Your shopping starting point.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 32,
          }}
        >
          {steps.map((step) => (
            <div
              key={step.num}
              style={{
                display: "flex",
                gap: 22,
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  fontSize: 22,
                  fontWeight: 650,
                  color: "#ccc",
                  minWidth: 40,
                  lineHeight: 1.2,
                }}
              >
                {step.num}
              </span>

              <div>
                <p
                  style={{
                    fontSize: 17,
                    fontWeight: 650,
                    margin: "0 0 6px",
                  }}
                >
                  {step.title}
                </p>

                <p
                  style={{
                    fontSize: 14,
                    color: gray,
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="pricing"
        style={{
          maxWidth: 700,
          margin: "0 auto",
          padding: "72px 20px",
          borderTop: `1px solid ${border}`,
          scrollMarginTop: 80,
        }}
      >
        <p
          style={{
            fontSize: 13,
            color: lightGray,
            margin: "0 0 24px",
          }}
        >
          Simple pricing. Better shopping.
        </p>

        <div
          style={{
            border: `1px solid ${border}`,
            borderRadius: 16,
            padding: 32,
            maxWidth: 410,
            boxShadow: "0 16px 45px rgba(0,0,0,0.045)",
          }}
        >
          <p
            style={{
              fontSize: 17,
              fontWeight: 650,
              margin: "0 0 10px",
            }}
          >
            StyleSaver
          </p>

          <p
            style={{
              fontSize: 34,
              fontWeight: 650,
              letterSpacing: "-0.03em",
              margin: "0 0 10px",
            }}
          >
            $4.99
            <span
              style={{
                fontSize: 15,
                color: gray,
                fontWeight: 400,
                letterSpacing: 0,
              }}
            >
              {" "}/month
            </span>
          </p>

          <p
            style={{
              fontSize: 14,
              color: gray,
              lineHeight: 1.6,
              margin: "0 0 8px",
            }}
          >
            Or save with the annual plan for $29.99 per year.
          </p>

          <p
            style={{
              fontSize: 14,
              color: gray,
              lineHeight: 1.6,
              margin: "0 0 26px",
            }}
          >
            Try everything free for 5 days. Cancel anytime through the App
            Store.
          </p>

          <a
            href={appStoreUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              background: dark,
              color: "#fff",
              padding: "12px 21px",
              borderRadius: 9,
              fontSize: 14,
              fontWeight: 650,
              textDecoration: "none",
            }}
          >
            Start your free trial
          </a>
        </div>
      </section>

      <section
        id="faq"
        style={{
          maxWidth: 700,
          margin: "0 auto",
          padding: "72px 20px",
          borderTop: `1px solid ${border}`,
          scrollMarginTop: 80,
        }}
      >
        <p
          style={{
            fontSize: 13,
            color: lightGray,
            margin: "0 0 24px",
          }}
        >
          The things you might be wondering.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {faqs.map((faq, idx) => {
            const isExpanded = expandedFaq === idx;

            return (
              <button
                key={faq.q}
                type="button"
                aria-expanded={isExpanded}
                onClick={() =>
                  setExpandedFaq(isExpanded ? null : idx)
                }
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "19px 20px",
                  border: `1px solid ${border}`,
                  borderRadius: 12,
                  background: "#fff",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 20,
                  }}
                >
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 650,
                      color: dark,
                    }}
                  >
                    {faq.q}
                  </span>

                  <span
                    aria-hidden="true"
                    style={{
                      fontSize: 18,
                      color: lightGray,
                      transform: isExpanded
                        ? "rotate(45deg)"
                        : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                      lineHeight: 1,
                    }}
                  >
                    +
                  </span>
                </div>

                {isExpanded && (
                  <p
                    style={{
                      fontSize: 14,
                      color: gray,
                      margin: "13px 0 0",
                      lineHeight: 1.65,
                      maxWidth: 610,
                    }}
                  >
                    {faq.a}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </section>

      <section
        id="privacy"
        style={{
          maxWidth: 700,
          margin: "0 auto",
          padding: "24px 20px",
          borderTop: `1px solid ${border}`,
          scrollMarginTop: 80,
        }}
      >
        <button
          type="button"
          aria-expanded={privacyExpanded}
          onClick={() => setPrivacyExpanded(!privacyExpanded)}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
            padding: "20px 0",
            border: "none",
            background: "transparent",
            cursor: "pointer",
            textAlign: "left",
            fontFamily: "inherit",
            color: dark,
          }}
        >
          <div>
            <h2
              style={{
                fontSize: 22,
                fontWeight: 650,
                letterSpacing: "-0.02em",
                margin: "0 0 5px",
              }}
            >
              Privacy Policy
            </h2>

            <p
              style={{
                fontSize: 13,
                color: lightGray,
                margin: 0,
              }}
            >
              See how StyleSaver collects and uses your information.
            </p>
          </div>

          <span
            aria-hidden="true"
            style={{
              fontSize: 22,
              color: lightGray,
              lineHeight: 1,
              transform: privacyExpanded
                ? "rotate(45deg)"
                : "rotate(0deg)",
              transition: "transform 0.2s ease",
            }}
          >
            +
          </span>
        </button>

        <div
          aria-hidden={!privacyExpanded}
          style={{
            fontSize: 14,
            color: gray,
            lineHeight: 1.75,
            maxHeight: privacyExpanded ? 1200 : 0,
            overflow: "hidden",
            transition: "max-height 300ms ease, opacity 200ms ease, padding 300ms ease",
            opacity: privacyExpanded ? 1 : 0,
            paddingTop: privacyExpanded ? 12 : 0,
            paddingBottom: privacyExpanded ? 40 : 0,
          }}
        >
          <p>
            StyleSaver respects your privacy. This policy explains what
            information we collect, why we collect it, and the choices available
            to you.
          </p>

          <p>
            <strong style={{ color: dark }}>
              Information we collect:
            </strong>{" "}
            We may collect your email address, account information, saved items,
            outfits, preferences, and basic information about how you use
            StyleSaver. This information helps us operate the app, improve its
            features, and provide a more useful shopping experience.
          </p>

          <p>
            <strong style={{ color: dark }}>
              How we use your information:
            </strong>{" "}
            We use your information to maintain your account, save your
            activity, improve StyleSaver, provide customer support, and
            understand how people use the app. We do not sell your personal
            information.
          </p>

          <p>
            <strong style={{ color: dark }}>
              Subscriptions and payments:
            </strong>{" "}
            StyleSaver subscriptions are purchased and managed through Apple’s App
            Store. Apple processes your payment information, and StyleSaver does not
            receive or store your complete payment-card details.
          </p>

          <p>
            <strong style={{ color: dark }}>Retailer links:</strong>{" "}
            StyleSaver helps you discover products and promotions, but purchases
            are completed on third-party retailer websites or apps. Those retailers
            operate independently and have their own terms and privacy practices.
          </p>

          <p>
            <strong style={{ color: dark }}>
              Analytics and service providers:
            </strong>{" "}
            We may use trusted service providers to support app functionality,
            analytics, account management, and customer service. These providers
            may only use information as necessary to perform services on our
            behalf.
          </p>

          <p>
            <strong style={{ color: dark }}>Your choices:</strong>{" "}
            You may request access to or deletion of your StyleSaver account and
            associated personal information by contacting{" "}
            <a
              href="mailto:support@stylesaverapp.com"
              style={{ color: dark }}
            >
              support@stylesaverapp.com
            </a>
            . Deleting the app does not automatically cancel an active
            subscription.
          </p>

          <p>
            <strong style={{ color: dark }}>Policy updates:</strong>{" "}
            We may update this policy as StyleSaver evolves. Any changes will be
            posted here with an updated effective date.
          </p>
        </div>
      </section>

      <section
        id="terms"
        style={{
          maxWidth: 700,
          margin: "0 auto",
          padding: "24px 20px",
          borderTop: `1px solid ${border}`,
          scrollMarginTop: 80,
        }}
      >
        <button
          type="button"
          aria-expanded={termsExpanded}
          onClick={() => setTermsExpanded(!termsExpanded)}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
            padding: "20px 0",
            border: "none",
            background: "transparent",
            cursor: "pointer",
            textAlign: "left",
            fontFamily: "inherit",
            color: dark,
          }}
        >
          <div>
            <h2
              style={{
                fontSize: 22,
                fontWeight: 650,
                letterSpacing: "-0.02em",
                margin: "0 0 5px",
              }}
            >
              Terms of Service
            </h2>

            <p
              style={{
                fontSize: 13,
                color: lightGray,
                margin: 0,
              }}
            >
              Review the terms for using StyleSaver.
            </p>
          </div>

          <span
            aria-hidden="true"
            style={{
              fontSize: 22,
              color: lightGray,
              lineHeight: 1,
              transform: termsExpanded
                ? "rotate(45deg)"
                : "rotate(0deg)",
              transition: "transform 0.2s ease",
            }}
          >
            +
          </span>
        </button>

        <div
          aria-hidden={!termsExpanded}
          style={{
            fontSize: 14,
            color: gray,
            lineHeight: 1.75,
            maxHeight: termsExpanded ? 1400 : 0,
            overflow: "hidden",
            transition: "max-height 300ms ease, opacity 200ms ease, padding 300ms ease",
            opacity: termsExpanded ? 1 : 0,
            paddingTop: termsExpanded ? 12 : 0,
            paddingBottom: termsExpanded ? 40 : 0,
          }}
        >
          <p>
            These Terms of Service govern your access to and use of StyleSaver. By
            creating an account, starting a trial, or using the app, you agree to
            these terms.
          </p>

          <p>
            <strong style={{ color: dark }}>Using StyleSaver:</strong>{" "}
            StyleSaver is designed to help users discover sale items, organize
            outfits, compare listed prices, and visit retailers to complete
            purchases. You must use the service only for lawful personal purposes.
          </p>

          <p>
            <strong style={{ color: dark }}>
              Product and pricing information:
            </strong>{" "}
            We work to keep product details, availability, promotions, and pricing
            accurate, but retailer information may change at any time. The price and
            terms displayed by the retailer at checkout control the final purchase.
          </p>

          <p>
            <strong style={{ color: dark }}>
              Retailer transactions:
            </strong>{" "}
            StyleSaver does not sell the products displayed in the app. Purchases
            are completed directly through third-party retailers. Product quality,
            shipping, returns, refunds, warranties, and customer service are handled
            by the applicable retailer.
          </p>

          <p>
            <strong style={{ color: dark }}>
              Free trials and subscriptions:
            </strong>{" "}
            Eligible users may receive a 5-day free trial. Unless canceled before
            the trial ends, the subscription will automatically renew using the plan
            selected through Apple’s App Store. Subscription pricing and renewal
            terms are shown before purchase.
          </p>

          <p>
            <strong style={{ color: dark }}>Cancellation:</strong>{" "}
            You can manage or cancel your subscription through your Apple ID
            subscription settings. Deleting your StyleSaver account or removing
            the app from your device does not automatically cancel your
            subscription.
          </p>

          <p>
            <strong style={{ color: dark }}>Accounts:</strong>{" "}
            You are responsible for keeping your login information secure and
            for activity completed through your account. Contact us if you
            believe your account has been accessed without permission.
          </p>

          <p>
            <strong style={{ color: dark }}>
              Intellectual property:
            </strong>{" "}
            StyleSaver’s branding, design, software, content, and original materials
            are owned by StyleSaver or its licensors. Retailer names, trademarks,
            product images, and other third-party materials belong to their
            respective owners.
          </p>

          <p>
            <strong style={{ color: dark }}>
              Service availability:
            </strong>{" "}
            We may update, modify, pause, or discontinue parts of StyleSaver as the
            product evolves. We do not guarantee that every feature, retailer,
            product, or promotion will always be available.
          </p>

          <p>
            <strong style={{ color: dark }}>
              Limitation of liability:
            </strong>{" "}
            To the fullest extent permitted by law, StyleSaver is not responsible
            for losses arising from retailer transactions, unavailable products,
            incorrect third-party information, service interruptions, or decisions
            made using information displayed in the app.
          </p>

          <p>
            <strong style={{ color: dark }}>Changes to these terms:</strong>{" "}
            We may update these terms as StyleSaver changes. Continued use of the
            service after revised terms are posted means you accept the updated
            terms.
          </p>

          <p>
            <strong style={{ color: dark }}>Contact:</strong>{" "}
            Questions about these terms can be sent to{" "}
            <a
              href="mailto:support@stylesaverapp.com"
              style={{ color: dark }}
            >
              support@stylesaverapp.com
            </a>
            .
          </p>
        </div>
      </section>

      <footer
        style={{
          borderTop: `1px solid ${border}`,
          padding: "30px 20px",
        }}
      >
        <div
          style={{
            maxWidth: 700,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontSize: 13,
              color: lightGray,
            }}
          >
            © {new Date().getFullYear()} StyleSaver. All rights reserved.
          </span>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              fontSize: 13,
            }}
          >
            <a
              href="#privacy"
              style={{
                color: gray,
                textDecoration: "none",
              }}
            >
              Privacy
            </a>

            <a
              href="#terms"
              style={{
                color: gray,
                textDecoration: "none",
              }}
            >
              Terms
            </a>

            <a
              href="mailto:support@stylesaverapp.com"
              style={{
                color: gray,
                textDecoration: "none",
              }}
            >
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
