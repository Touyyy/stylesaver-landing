import { useState, useEffect } from "react";

export function LandingPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [privacyExpanded, setPrivacyExpanded] = useState(false);
  const [termsExpanded, setTermsExpanded] = useState(false);

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
        )}
      </section>
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
              {" "}
              /month
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
          padding: "72px 20px",
          borderTop: `1px solid ${border}`,
          scrollMarginTop: 80,
        }}
      >
        <h2
          style={{
            fontSize: 24,
            fontWeight: 650,
            letterSpacing: "-0.02em",
            margin: "0 0 22px",
          }}
        >
          Privacy Policy
        </h2>

        <div
          style={{
            fontSize: 14,
            color: gray,
            lineHeight: 1.75,
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
            StyleSaver subscriptions are purchased and managed through Apple’s
            App Store. Apple processes your payment information, and StyleSaver
            does not receive or store your complete payment-card details.
          </p>

          <p>
            <strong style={{ color: dark }}>Retailer links:</strong>{" "}
            StyleSaver helps you discover products and promotions, but purchases
            are completed on third-party retailer websites or apps. Those
            retailers operate independently and have their own terms and privacy
            practices.
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
          padding: "72px 20px",
          borderTop: `1px solid ${border}`,
          scrollMarginTop: 80,
        }}
      >
        <h2
          style={{
            fontSize: 24,
            fontWeight: 650,
            letterSpacing: "-0.02em",
            margin: "0 0 22px",
          }}
        >
          Terms of Service
        </h2>

        <div
          style={{
            fontSize: 14,
            color: gray,
            lineHeight: 1.75,
          }}
        >
          <p>
            These Terms of Service govern your access to and use of StyleSaver.
            By creating an account, starting a trial, or using the app, you agree
            to these terms.
          </p>

          <p>
            <strong style={{ color: dark }}>Using StyleSaver:</strong>{" "}
            StyleSaver is designed to help users discover sale items, organize
            outfits, compare listed prices, and visit retailers to complete
            purchases. You must use the service only for lawful personal
            purposes.
          </p>

          <p>
            <strong style={{ color: dark }}>
              Product and pricing information:
            </strong>{" "}
            We work to keep product details, availability, promotions, and
            pricing accurate, but retailer information may change at any time.
            The price and terms displayed by the retailer at checkout control
            the final purchase.
          </p>

          <p>
            <strong style={{ color: dark }}>
              Retailer transactions:
            </strong>{" "}
            StyleSaver does not sell the products displayed in the app.
            Purchases are completed directly through third-party retailers.
            Product quality, shipping, returns, refunds, warranties, and
            customer service are handled by the applicable retailer.
          </p>

          <p>
            <strong style={{ color: dark }}>
              Free trials and subscriptions:
            </strong>{" "}
            Eligible users may receive a 5-day free trial. Unless canceled
            before the trial ends, the subscription will automatically renew
            using the plan selected through Apple’s App Store. Subscription
            pricing and renewal terms are shown before purchase.
          </p>

          <p>
            <strong style={{ color: dark }}>
              Cancellation:
            </strong>{" "}
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
            StyleSaver’s branding, design, software, content, and original
            materials are owned by StyleSaver or its licensors. Retailer names,
            trademarks, product images, and other third-party materials belong
            to their respective owners.
          </p>

          <p>
            <strong style={{ color: dark }}>
              Service availability:
            </strong>{" "}
            We may update, modify, pause, or discontinue parts of StyleSaver as
            the product evolves. We do not guarantee that every feature,
            retailer, product, or promotion will always be available.
          </p>

          <p>
            <strong style={{ color: dark }}>
              Limitation of liability:
            </strong>{" "}
            To the fullest extent permitted by law, StyleSaver is not
            responsible for losses arising from retailer transactions,
            unavailable products, incorrect third-party information, service
            interruptions, or decisions made using information displayed in the
            app.
          </p>

          <p>
            <strong style={{ color: dark }}>Changes to these terms:</strong>{" "}
            We may update these terms as StyleSaver changes. Continued use of
            the service after revised terms are posted means you accept the
            updated terms.
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