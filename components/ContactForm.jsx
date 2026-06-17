"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.currentTarget;
    const formData = new FormData(form);
      formData.append("_wpcf7", "5");
formData.append("_wpcf7_unit_tag", "nextjs-form");
formData.append("_wpcf7_container_post", "0");
formData.append("_wpcf7_version", "6.1");

    try {
    const res = await fetch(
  "https://www.videocms.digitalconnection.pt/wp-json/contact-form-7/v1/contact-forms/5/feedback",
  {
    method: "POST",
    body: formData,
  }
);

     const text = await res.text();
console.log(text);

const data = JSON.parse(text);

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
    <section className="sec-contact-form" id="contact-form">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <h3>
              Vamos <br />
              Conectar
            </h3>
          </div>

          <div className="col-md-8">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <label>
                    Nome
                    <input name="Name" type="text" required />
                  </label>

                  <label>
                    Email
                    <input name="Email" type="email" required />
                  </label>

                  <label>
                    Telefone
                    <input name="Phone" type="text" />
                  </label>

                  <label>
                    Assunto
                    <input name="Subject" type="text" />
                  </label>

                  <label className="full">
                    Mensagem
                    <textarea name="Messagex1" rows="1" required />
                  </label>

                  <label className="privacy full">
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

                  <div className="full">
                    <button type="submit" className="contact-submit">
                      Enviar
                    </button>
                  </div>
                </div>

                {status && <p className="form-status">{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}