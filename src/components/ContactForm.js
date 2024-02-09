import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
init(process.env.ID);

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMessage = document.querySelector(".form-message");

    emailjs
      .sendForm("service_xswbgz3", "template_mbkb7ga", form.current, {
        publicKey: process.env.REACT_APP_ID,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          formMessage.innerHTML =
            "<p class='success'>Message envoyé</p>";

          setTimeout(() => {
            formMessage.innerHTML = "";
          }, 100000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          formMessage.innerHTML =
            "<p class='error'>Le message ne s'est pas envoyé, veuillez réessayer</p>";

          setTimeout(() => {
            formMessage.innerHTML = "";
          }, 100000);
        }
      );
  };

  return (
    <div className="form-container">
      <h2>Contactez-nous</h2>
      <form ref={form} onSubmit={sendEmail} className="form-content">
        <label>Nom</label>
        <input type="text" name="name" required autoComplete="off" id="name" />
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          id="email"
        />
        <label>Message</label>
        <textarea name="message" required id="mess" />
        <input type="submit" value="Envoyer" className="hover button" />
      </form>
      <div className="form-message"></div>
    </div>
  );
};

export default ContactForm;
