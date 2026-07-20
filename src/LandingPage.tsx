import { ChevronDown, Heart, Zap, TrendingDown, Star } from "lucide-react";
import { useState } from "react";

export function LandingPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "How does StyleSaver find deals?",
      a: "We curate deals from 26+ brands and retailers you already shop at. Our team researches pricing daily to find the best discounts before they're gone.",
    },
    {
      q: "Is there really a free trial?",
      a: "Yes, 7 days completely free. No credit card required to try it out. After day 7, we charge your selected plan ($4.99/month or $29.99/year). Cancel anytime.",
    },
    {
      q: "Can I save my favorite outfits?",
      a: "Yes. Build an outfit, name it, and save it to your closet. Come back anytime to review prices or checkout.",
    },
    {
      q: "Do you work in my country?",
      a: "We currently support US retailers. International support is coming soon.",
    },
    {
      q: "How do I cancel?",
      a: "Cancel anytime through your iOS Settings > Subscriptions. No hassle, no questions.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-md z-40 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SS</span>
            </div>
            <span className="font-bold text-xl text-gray-900">StyleSaver</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm text-gray-600">
            <a href="#features" className="hover:text-primary">
              Features
            </a>
            <a href="#pricing" className="hover:text-primary">
              Pricing
            </a>
            <a href="#faq" className="hover:text-primary">
              FAQ
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Shop Smarter.
              <br />
              Save More.
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover deals from your favorite brands, build outfits, and see exactly how much you're saving in real time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com/app/stylesaver"
                className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition inline-flex items-center justify-center gap-2"
              >
                Download on App Store
              </a>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-900 font-semibold rounded-full hover:border-primary hover:text-primary transition">
                Learn More
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-6">
              7-day free trial. No credit card required.
            </p>
          </div>

          {/* Hero Image Placeholder */}
          <div className="mt-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl aspect-video flex items-center justify-center">
            <p className="text-gray-500">App Preview (Screenshot or Video)</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Why StyleSaver?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Daily Deals
              </h3>
              <p className="text-gray-600">
                We curate the best deals from 26+ brands you already love. New items every day.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Save Outfits
              </h3>
              <p className="text-gray-600">
                Build complete outfits, save them, and come back to checkout whenever you're ready.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <TrendingDown className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Real Savings
              </h3>
              <p className="text-gray-600">
                See exactly how much you're saving on every item and outfit in real time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                num: "1",
                title: "Browse",
                desc: "Scroll through curated deals from your favorite brands",
              },
              {
                num: "2",
                title: "Heart",
                desc: "Save items you love to your favorites",
              },
              {
                num: "3",
                title: "Build",
                desc: "Create outfits and watch your savings grow",
              },
              {
                num: "4",
                title: "Checkout",
                desc: "Shop when you're ready, straight from the app",
              },
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Simple Pricing
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Monthly */}
            <div className="border border-gray-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Monthly</h3>
              <p className="text-gray-600 text-sm mb-6">Perfect for trying it out</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-primary">$4.99</span>
                <span className="text-gray-600 text-sm">/month</span>
              </div>
              <button className="w-full py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary/5 transition">
                Download App
              </button>
              <p className="text-xs text-gray-600 text-center mt-4">
                7 days free, then $4.99/month
              </p>
            </div>

            {/* Annual */}
            <div className="border-2 border-primary rounded-2xl p-8 relative bg-primary/5">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                Best Value
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Annual</h3>
              <p className="text-gray-600 text-sm mb-6">Save 50% with yearly plan</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-primary">$29.99</span>
                <span className="text-gray-600 text-sm">/year</span>
              </div>
              <button className="w-full py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition">
                Download App
              </button>
              <p className="text-xs text-gray-600 text-center mt-4">
                7 days free, then $29.99/year
              </p>
            </div>
          </div>

          <p className="text-center text-gray-600 text-sm mt-12">
            Cancel anytime. No questions asked.
          </p>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">26+</div>
              <p className="text-gray-600">Brands & Retailers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">$1000s</div>
              <p className="text-gray-600">Saved by Users Monthly</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">7</div>
              <p className="text-gray-600">Day Free Trial</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Frequently Asked
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <button
                key={idx}
                onClick={() =>
                  setExpandedFaq(expandedFaq === idx ? null : idx)
                }
                className="w-full text-left p-6 border border-gray-200 rounded-lg hover:border-primary transition"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">{faq.q}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 transition-transform ${
                      expandedFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {expandedFaq === idx && (
                  <p className="text-gray-600 text-sm mt-4">{faq.a}</p>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Saving?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Try StyleSaver free for 7 days. Download now.
          </p>
          <a
            href="https://apps.apple.com/app/stylesaver"
            className="inline-block px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition"
          >
            Download on App Store
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SS</span>
                </div>
                <span className="font-bold text-white">StyleSaver</span>
              </div>
              <p className="text-sm">Shop smarter. Save more.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-primary">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-primary">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-primary">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 StyleSaver. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
