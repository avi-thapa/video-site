"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(
        "https://video.digitalconnection.ae/wp-json/contact-form-7/v1/contact-forms/5/feedback",
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
    <section className="sec-contact-form" id="contact-form">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <h3>
              LET’S <br />
              CONNECT
            </h3>
          </div>

          <div className="col-md-8">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <label>
                    Name
                    <input name="your-name" type="text" required />
                  </label>

                  <label>
                    Email
                    <input name="your-email" type="email" required />
                  </label>

                  <label>
                    Phone
                    <input name="your-phone" type="text" />
                  </label>

                  <label>
                    Subject
                    <input name="your-subject" type="text" />
                  </label>

                  <label className="full">
                    Message
                    <textarea name="your-message" rows="1" required />
                  </label>

                  <label className="privacy full">
                    <input name="privacy" type="checkbox" required />
                    <span>
                      The user consents to the use of the data. More information:
                      Privacy Policy.
                    </span>
                  </label>

                  <div className="full">
                    <button type="submit" className="contact-submit">
                      SEND
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