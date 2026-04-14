import styles from '../styles/footer.module.css'

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__wrapper">

          <div className="footer__block-list empty:hidden">

            {/* NEWSLETTER */}
            <div className="footer__block footer__block--newsletter">
              <div className="v-stack gap-6">

                <p className="h3">
                  Sign up for 10% off your first order.
                </p>

                <form
                  method="post"
                  action="/contact#footer-newsletter"
                  id="footer-newsletter"
                  acceptCharset="UTF-8"
                  className="footer__newsletter-form form"
                >
                  <input type="hidden" name="form_type" value="customer" />
                  <input type="hidden" name="utf8" value="✓" />
                  <input type="hidden" name="contact[tags]" value="newsletter" />

                  <div className="form-control">
                    <input
                      id="footer-email"
                      className="input is-floating"
                      type="email"
                      dir="ltr"
                      name="contact[email]"
                      placeholder=" "
                      autoComplete="email"
                      enterKeyHint="send"
                      required
                    />

                    <label
                      htmlFor="footer-email"
                      className="floating-label"
                    >
                      E-mail
                    </label>

                    <div className="self-submit-button">
                      <button type="submit" className="circle-chevron hover:colors">
                        <span className="sr-only">Subscribe</span>

                        <svg
                          role="presentation"
                          focusable="false"
                          width="5"
                          height="8"
                          className="icon icon-chevron-right-small reverse-icon"
                          viewBox="0 0 5 8"
                        >
                          <path
                            d="m.75 7 3-3-3-3"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </form>

              </div>
            </div>

            {/* SHOP MENU */}
            <div className="footer__block footer__block--menu">
              <p className="bold">SHOP</p>
              <ul className="v-stack gap-3" role="list">
                <li><a href="/" className="inline-block link-faded break-all">Search</a></li>
                <li><a href="/" className="inline-block link-faded break-all">Track Your Order</a></li>
                <li><a href="/" className="inline-block link-faded break-all">Contact Us</a></li>
              </ul>
            </div>

            {/* CUSTOMER INFO */}
            <div className="footer__block footer__block--menu">
              <p className="bold">Customer Info</p>
              <ul className="v-stack gap-3" role="list">
                <li><a href="/pages/shipping-information" className="inline-block link-faded break-all">Return Policy</a></li>
                <li><a href="/pages/privacy-policy" className="inline-block link-faded break-all">Privacy Policy</a></li>
                <li><a href="/pages/terms-and-conditions" className="inline-block link-faded break-all">Terms of Service</a></li>
                <li><a href="/pages/disclaimer-permit-conditions" className="inline-block link-faded break-all">Disclaimer and Permit Conditions</a></li>
              </ul>
            </div>

            {/* ABOUT */}
            <div className="footer__block footer__block--text">
              <p className="bold">Who we are?</p>
              <div className="prose text-subdued">
                <p>
                  The team @plantedants is on a mission to spread knowledge and appreciation for ants in the natural world.
                </p>
                <p><strong>Ant love from California.</strong></p>
              </div>
            </div>

          </div>

          {/* ASIDE */}
          <div className="footer__aside empty:hidden">
            <div className="footer__aside-bottom">
              <p className="footer__copyright text-sm text-subdued">
                © 2026, Planted ANTS.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}