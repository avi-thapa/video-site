"use client";

import { useState } from "react";
import "../app/hero.css";
export default function Hero() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <section className="sec_banner">
      <video
        className="d-none d-md-block"
        id="myVideo"
        src="/video/banner1.mp4"
        autoPlay
        playsInline
        loop
        muted
      />

      <video
        className="d-block d-md-none"
        id="myVideoMobile"
        src="/video/banner1.mp4"
        autoPlay
        playsInline
        loop
        muted
      />

      <div className="content">
        <div className="container text-center"></div>
      </div>

      <div className="banner-content">
        <h1>GIVE ACTION TO YOUR BRAND</h1>

        <div className="something-new">
          <button
            id="banner-toggle"
            className="main_btn_new"
            type="button"
            onClick={() => setFormOpen(!formOpen)}
          >
            Let’s Connect <i className="fas fa-arrow-right"></i>
          </button>

          <div className={`banner-form ${formOpen ? "active" : ""}`}>
            <button
              className="abs-close"
              type="button"
              onClick={() => setFormOpen(false)}
            >
              ×
            </button>

            <form>
              <input className="wpcf7-form-control" type="text" placeholder="Name" />
              <input className="wpcf7-form-control" type="email" placeholder="Email" />
              <input className="wpcf7-form-control" type="text" placeholder="Phone" />
              <textarea className="wpcf7-form-control" placeholder="Message" rows="4"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}