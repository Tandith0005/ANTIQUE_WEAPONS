import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Contact = () => {
  return (
    <section id="contact" className="contact-section custom-container">
      <div className="contact-wrapper">
        {/* Left Side: Social Info */}
        <div className="contact-socials">
          <h2>Get in Touch</h2>
          <p className="text-center">
            Reach out to us through our socials or send a message directly.
          </p>

          <div className="social-links">
            <div className="social-link col-span-5 lg:mx-0 md:mx-auto mx-auto">
              <Icon icon="mdi:email" />
              <span>tandith0005@gmail.com</span>
            </div>
            <Link to="https://facebook.com" className="social-link col-span-3 lg:col-span-5">
              <Icon icon="fa-brands:facebook-f" />
              <span>Facebook</span>
            </Link>
            <Link to="https://linkedin.com" className="social-link col-span-2 lg:col-span-5">
              <Icon icon="fa-brands:linkedin-in" />
              <span>LinkedIn</span>
            </Link>
            <Link to="https://instagram.com" className="social-link col-span-3 lg:col-span-5">
              <Icon icon="fa-brands:instagram" />
              <span>Instagram</span>
            </Link>
            <Link to="https://twitter.com" className="social-link col-span-2 lg:col-span-5">
              <Icon icon="fa-brands:twitter" />
              <span>Twitter</span>
            </Link>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <form className="contact-form">
          <h2>Contact Us</h2>
          <p>Got a business offer or want to trade something? Send us a message below.</p>

          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input id="name" type="text" placeholder="Enter your full name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" placeholder="example@mail.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Write your message..." required></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
