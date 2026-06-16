"use client";

import { useState } from "react";



export default function Footer() {

  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <section className="sec_footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-logo">
                <a href="/">
                  <img
                    src="https://videocms.digitalconnection.ae/wp-content/uploads/2026/04/white-logo.png"
                    alt="footer-logo"
                  />
                </a>
              </div>
            </div>

            <div className="col-md-8">
              <div className="office-details">
                <div className="row d-flex footer-menu">
                  <div className="col-md-2 mt-4 mt-md-0 menu">
                    <ul>
                     
<li className="menu-has-child">
  <a onClick={() => setOpenMenu(!openMenu)}>
    Services
  </a>

  <ul className={`sub-menu ${openMenu ? "active" : ""}`}>
    <li><a href="/consultancy/">Consultancy</a></li>
    <li><a href="/digital-marketing/">Digital Marketing</a></li>
    <li><a href="/web/">Web</a></li>
    <li><a href="/design/">Design</a></li>
    <li><a href="#">Content Marketing</a></li>
  </ul>
</li>

                      <li><a href="/about/">About Us</a></li>
                      <li><a href="/blog/">Blog</a></li>
                    </ul>
                  </div>

                  <div className="col-md-6 mt-4 mt-md-0">
                    <div className="footer-city">
                      <ul>
                        <li><b>Dubai</b></li>
                        <li>United Arab Emirates</li>
                        <br />

                        <li><b>Lisbon</b></li>
                        <li>Portugal</li>

                        <li><b>Riyadh</b></li>
                        <li>Kingdom of Saudi Arabia</li>
                        <br />

                        <li><b>Praia</b></li>
                        <li>Cape Verde</li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-3 mt-4 mt-md-0">
                    <ul>
                      <li>
                        <a href="mailto:joao@digitalconnection.ae">
                          joao@digitalconnection.ae
                        </a>
                      </li>
                      <li>
                        <a href="tel:+971529335805">
                          +971 529 335 805
                        </a>
                      </li>

                      <hr />

                      <li>
                        <a href="mailto:goncalo@digitalconnection.ae">
                          goncalo@digitalconnection.ae
                        </a>
                      </li>
                      <li>
                        <a href="tel:+971558501583">
                          +971 55 850 1583
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="last-div">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6 social-media">
              <ul>
                <li>
                  <a href="https://www.facebook.com/digitalconnectionpt" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>

                <li>
                  <a href="https://www.instagram.com/digital_connection/" target="_blank">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>

                <li>
                  <a href="https://www.linkedin.com/company/digitalconnection/" target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>

                <li>
                  <a href="https://www.youtube.com/channel/UCFuJU0wVeOqbsDyGEXqOXog" target="_blank">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-6 d-flex justify-content-end">
              <p>
                © Copyright {new Date().getFullYear()}{" "}
                <a href="https://digitalconnection.pt/" target="_blank">
                  digital connection
                </a>{" "}
                | All rights reserved |
                <a href="https://digitalconnection.ae/privacy-policy/">
                  {" "}Privacy policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}