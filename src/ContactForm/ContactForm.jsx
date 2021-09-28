import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import gsap from "gsap/all";
const ContactForm = () => {
  init("user_WXMrG9H2675m2AFa27nY0");
  const [btn_status, setBtn_status] = useState("Submit");
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Must be 20 characters or less")
        .min(3, "Must be 3 characters or more")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string()
        .max(300, "Must be 300 characters or less")
        .min(5, "Must be 5 characters or more")
        .required("Required"),
    }),
    onSubmit: (values) => {
      var templateParams = {
        name: values.name,
        email: values.email,
        message: values.message,
      };
      gsap.to("#btn-cont", {
        opacity: 0.5,
        pointerEvents: "none",
        duration: 0.1,
      });
      setBtn_status("Sending...");
      emailjs.send("service_ebc0b89", "template_wtoqeqk", templateParams).then(
        (result) => {
          console.log("this is the response", result.text);
          alert("Thank you " + values.name + " for your message 😊");
          gsap.to("#btn-cont", { opacity: 1, pointerEvents: "all" });
          setBtn_status("Submit");
        },
        (error) => {
          console.log("this is error", error.text);
        }
      );
    },
  });
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

      {/*  form using formik */}
      <form onSubmit={formik.handleSubmit}>
        <div className="contact-form-field-cont">
          <label className="text-input-label" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="text-input"
            placeholder="Mike"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error-message">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="contact-form-field-cont">
          <label className="text-input-label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="text-input"
            placeholder="Mike@email.com"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error-message">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="contact-form-field-cont">
          <label className="text-input-label" htmlFor="message">
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            placeholder="Hello..."
            rows="5"
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <div className="error-message">{formik.errors.message}</div>
          ) : null}
        </div>

        <div id="btn-cont" className="contact-form-field-cont btn-cont">
          <button type="submit" className="contact-form-btn">
            {btn_status}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
