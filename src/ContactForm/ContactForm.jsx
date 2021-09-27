import React from "react";

const ContactForm = () => {
  return (
    <div className="contact-form-cont">
      <div className="contact-form-title">Send me a message</div>
      <div className="links">
        <div className="link">
          <i className="fas fa-envelope-open-text"></i>
          <div className="link-text">rabeealjaramani@yahoo.com</div>
        </div>
        <div className="link">
          <i className="fas fa-mobile-alt"></i>
          <div className="link-text">+971567657124</div>
        </div>
        <div className="link">
          <i className="fas fa-location-arrow"></i>
          <div className="link-text">Dubai, UAE</div>
        </div>
      </div>
      <div className="contact-form-field-cont">
        <label className="text-input-label" htmlFor="name">
          Name
        </label>
        <input
          className="text-input"
          type="text"
          id="name"
          name="name"
          placeholder="Mike"
        />
        <div className="error-message"></div>
      </div>

      <div className="contact-form-field-cont">
        <label className="text-input-label" htmlFor="name">
          Name
        </label>
        <input
          className="text-input"
          type="text"
          id="name"
          name="name"
          placeholder="Mike"
        />
        <div className="error-message"></div>
      </div>
      <div className="contact-form-field-cont">
        <label className="text-input-label" htmlFor="name">
          Your message
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Hello..."
          rows="5"
        ></textarea>
      </div>
      <div className="contact-form-field-cont btn-cont">
        <div className="contact-form-btn">Submit</div>
      </div>
    </div>
  );
};

export default ContactForm;
