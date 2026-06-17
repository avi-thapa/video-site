"use client";

import { useState } from "react";
import { t } from "../lib/translations";
import "../app/hero.css";

const lang = "pt";
export default function Hero() {
  const [formOpen, setFormOpen] = useState(false);
  const [status, setStatus] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("A enviar...");

  const form = e.currentTarget;
  const formData = new FormData(form);

  formData.append("_wpcf7", "215");
  formData.append("_wpcf7_unit_tag", "nextjs-banner");
  formData.append("_wpcf7_container_post", "0");

  try {
    const res = await fetch(
      "https://www.videocms.digitalconnection.pt/wp-json/contact-form-7/v1/contact-forms/215/feedback",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

      if (data.status === "mail_sent") {
        setStatus("Obrigado pela sua mensagem.");
        form.reset();
      } else {
        setStatus(data.message || "Ocorreu um erro ao tentar enviar a sua mensagem. Por favor, tente de novo mais tarde.");
      }
    } catch {
      setStatus("Ocorreu um erro ao tentar enviar a sua mensagem. Por favor, tente de novo mais tarde.");
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
        <h1>{t[lang].heroTitle}</h1>

        <div className="something-new">
          <button
            id="banner-toggle"
            className="main_btn_new"
            type="button"
            onClick={() => setFormOpen(true)}
          >
            {t[lang].connect} <i className="fas fa-arrow-right"></i>
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
  name="Nome"
  type="text"
  placeholder="Nome"
  required
/>

                  <div className="hero-form-row">
                  <input
  name="Email"
  type="email"
  placeholder="Email"
  required
/>


                  <input
  name="Telefone"
  type="text"
  placeholder="Telefone"
  required
/>

                  </div>

                 <textarea
  name="Mensagem"
  placeholder="Mensagem"
  rows="2"
/>


                  <label className="hero-privacy">
                  <input
  name="acceptance-478"
  type="checkbox"
  value="1"
  required
/>
                    <span>
                O utilizador dá o seu consentimento para a utilização dos dados. Mais informações: <a href="https://digitalconnection.pt/politica-privacidade/" target="_blank">Política de privacidade.</a>
                    </span>
                  </label>

                  <button type="submit" className="hero-submit">
                    Enviar
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