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
    Serviços
  </a>

  <ul className={`sub-menu ${openMenu ? "active" : ""}`}>
    <li><a href="https://digitalconnection.pt/consultoria/" target="_blank">Consultoria</a></li>
    <li><a href="https://digitalconnection.pt/marketing-digital/" target="_blank">Marketing Digital</a></li>
    <li><a href="https://digitalconnection.pt/web/" target="_blank">Web</a></li>
    <li><a href="https://digitalconnection.pt/design/ " target="_blank">Design</a></li>
    <li><a href="#">Content Marketing</a></li>
  </ul>
</li>

                      <li><a href="https://digitalconnection.pt/sobre-nos/" target="_blank">Sobre Nós</a></li>
                      <li><a href="https://digitalconnection.pt/blog/" target="_blank">Blog</a></li>
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
                        <a href="mailto:goncalo@digitalconnection.ae">
                          goncalo@digitalconnection.ae
                        </a>
                      </li>
                      <li>
                        <a href="tel:+351 913 988 058">
                          +351 913 988 058
                        </a>
                         </li>
                          <li>
                         <a href="tel:+351 927 277 523">
                          +351 927 277 523
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
                | Todos os direitos reservados |
                <a href="https://digitalconnection.pt/politica-privacidade/" target="_blank">
                  {" "}Política de Privacidade
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <a
  href="https://wa.me/351913988058"
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-float"
>
  <i className="fab fa-whatsapp"></i>
</a>
    </>
  );
}