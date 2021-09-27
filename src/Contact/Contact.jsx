import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import Svg from "./Svg";
import SvgWaves from "./SvgWaves";

const Contact = () => {
  return (
    <div className="contact-cont">
      <h1 className="title">Contact Me</h1>
      <hr className="title-underline" />
      <ContactForm />
      <Svg />
      <SvgWaves />
    </div>
  );
};

export default Contact;
