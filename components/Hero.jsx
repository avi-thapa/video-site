"use client";

import { useState } from "react";
import "../app/hero.css";

export default function Hero() {
  const [formOpen, setFormOpen] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(
        "https://videocms.digitalconnection.ae/wp-json/contact-form-7/v1/contact-forms/5/feedback",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (data.status === "mail_sent") {
        setStatus("Message sent successfully.");
        form.reset();
      } else {
        setStatus(data.message || "Something went wrong.");
      }
    } catch {
      setStatus("Failed to send message.");
    }
  };

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
        src="https://videocms.digitalconnection.ae/wp-content/uploads/2026/04/banner-mobile-new-1.mp4"
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
            onClick={() => setFormOpen(true)}
          >
            Let’s Connect <i className="fas fa-arrow-right"></i>
          </button>

          {formOpen && (
            <div
              className="banner-overlay"
              onClick={() => setFormOpen(false)}
            >
              <div
                className="banner-form active"
                onClick={(e) => e.stopPropagation()}
              >
                <form onSubmit={handleSubmit} className="hero-contact-form">
                  <input
                    name="your-name"
                    type="text"
                    placeholder="Name"
                    required
                  />

                  <div className="hero-form-row">
                    <input
                      name="your-email"
                      type="email"
                      placeholder="Email"
                      required
                    />

                    <input
                      name="your-phone"
                      type="text"
                      placeholder="Phone"
                    />
                  </div>

                  <textarea
                    name="your-message"
                    placeholder="Message"
                    rows="2"
                    required
                  />

                  <label className="hero-privacy">
                    <input name="privacy" type="checkbox" required />
                    <span>
                      The user consents to the use of the data. More information:
                      Privacy Policy.
                    </span>
                  </label>

                  <button type="submit" className="hero-submit">
                    SEND
                  </button>

                  {status && <p className="form-status">{status}</p>}
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}