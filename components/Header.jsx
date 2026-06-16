"use client";

import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    window.openNav = function () {
      const nav = document.getElementById("myNav");
      if (nav) nav.style.width = "100%";
    };

    window.closeNav = function () {
      const nav = document.getElementById("myNav");
      if (nav) nav.style.width = "0%";
    };

    const links = document.querySelectorAll(".mobile-menu .menu-has-child > a");

    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        this.parentElement.classList.toggle("active");
      });
    });
  }, []);

  return (
    <>
      <section className="top-menu fixed-top">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col d-flex logo-part">
              <div className="logo-part dark">
                <a href="/">
                  <img
                    // src="https://videocms.digitalconnection.ae/wp-content/uploads/2026/04/logo.png"
                    src="https://videocms.digitalconnection.ae/wp-content/uploads/2026/04/white-logo.png"
                    alt="Digital Connection Logo"
                    width="100%"
                  />
                </a>
              </div>

              <div className="logo-part full">
                <a href="/">
                  <img
                    src="https://videocms.digitalconnection.ae/wp-content/uploads/2026/04/white-logo.png"
                    alt="Digital Connection Logo"
                    width="100%"
                  />
                </a>
              </div>
            </div>

            <div className="col right-menu d-none d-md-flex">
              <ul>
                <li className="menu-has-child">
                  <a href="#">Services</a>

                  <ul className="sub-menu">
                    <li><a href="https://digitalconnection.ae//consultancy/">Consultancy</a></li>
                    <li><a href="https://digitalconnection.ae//digital-marketing/">Digital Marketing</a></li>
                    <li><a href="https://digitalconnection.ae//web/">Web</a></li>
                    <li><a href="https://digitalconnection.ae//design/">Design</a></li>
                    <li><a href="#">Content Marketing</a></li>
                  </ul>
                </li>

                <li><a href="https://digitalconnection.ae//about/">About Us</a></li>
                <li><a href="https://digitalconnection.ae//clients/">Clients</a></li>
                <li><a href="https://digitalconnection.ae//blog/">Blog</a></li>
                <li><a href="https://digitalconnection.ae//contact/">Contact Us</a></li>
              </ul>
            </div>

            <div className="col d-flex justify-content-end d-md-none burger-menu">
              <span
                style={{ fontSize: "30px", cursor: "pointer" }}
                onClick={() => window.openNav()}
              >
                &#9776;
              </span>
            </div>
          </div>
        </div>
      </section>

      <div id="myNav" className="overlay mobile-menu">
        <a
          href="#"
          className="closebtn"
          onClick={(e) => {
            e.preventDefault();
            window.closeNav();
          }}
        >
          &times;
        </a>

        <div className="overlay-content">
          <ul>
         

            <li className="menu-has-child">
              <a href="#">Services</a>

              <ul className="sub-menu">
                <li><a href="https://digitalconnection.ae//consultancy/">Consultancy</a></li>
                <li><a href="https://digitalconnection.ae//digital-marketing/">Digital Marketing</a></li>
                <li><a href="https://digitalconnection.ae//web/">Web</a></li>
                <li><a href="https://digitalconnection.ae//design/">Design</a></li>
                <li><a href="#">Content Marketing</a></li>
              </ul>
            </li>

            <li><a href="https://digitalconnection.ae//about/">About Us</a></li>
            <li><a href="https://digitalconnection.ae//clients/">Clients</a></li>
            <li><a href="https://digitalconnection.ae//blog/">Blog</a></li>
            <li><a href="https://digitalconnection.ae//contact/">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}