import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .min(3, "Must be 3 characters or more")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string()
        .max(300, "Must be 300 characters or less")
        .min(5, "Must be 5 characters or more")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(
        JSON.stringify(
          "Thank you " + values.name + " for your message",
          null,
          2
        )
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
          {/* <ErrorMessage name="email" render={renderError} /> */}
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
          {/* <ErrorMessage name="message" render={renderError} /> */}
        </div>
        <div className="contact-form-field-cont btn-cont">
          <button type="submit" className="contact-form-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
