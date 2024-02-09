import React from "react";
import Buttons from "../components/Buttons";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import ContactForm from "../components/ContactForm";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetwork from "../components/SocialNetwork";
import { motion } from "framer-motion";

const Contact = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 200,
    },
  };

  return (
    <main>
      <Mouse />
      <motion.div
        className="contact"
        exit="out"
        animate="in"
        initial="out"
        variants={pageTransition}
        transition={{ duration: 0.3 }}
      >
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          {/* <div className="address">
            <div className="content">
              <h4>adresse</h4>
              <p>12 rue de la Bachata</p>
              <p>5620 Barcelone</p>
            </div>
          </div> */}

          <div className="phone">
            <div className="content">
              <h4>téléphone</h4>
              <CopyToClipboard text="0667719276" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Téléphone copié !")}
                >
                  06 67 71 92 76 
                </p>
              </CopyToClipboard>
            </div>
          </div>

          <div className="email">
            <div className="content">
              <h4>email</h4>
              <CopyToClipboard text="digermarie.bachata@gmail.com" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Email copié !")}
                >
                  digermarie.bachata@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>

          <SocialNetwork />

          <div className="credits">
            <p>Patrick Diger - 2024</p>
          </div>
        </div>
        <Buttons left={"/projet-4"} />
      </motion.div>
    </main>
  );
};

export default Contact;
