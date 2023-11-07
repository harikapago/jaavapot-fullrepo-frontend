import React, { useEffect } from "react";
import "../assets/css/main.css";
import AOS from "aos";

function ContactScreen() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Contact</h2>
            <p>
              Need Help? <span>Contact Us</span>
            </p>
          </div>

          <div className="mb-3">
            <iframe
              style={{
                border: 0,
                width: "100%",
                height: "350px",
                margin: "0 auto",
              }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3839006979145!2d78.4787722148925!3d17.38504418808357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98e31f98b7d1%3A0x56f75b8c45a9ea2!2sCharminar%2C%20Char%20Kaman%2C%20Ghansi%20Bazar%2C%20Hyderabad%2C%20Telangana%20500002%2C%20India!5e0!3m2!1sen!2sus!4v1642845127406!5m2!1sen!2sus"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>

          <div className="row gy-4">
            <div className="col-md-6">
              <div className="info-item  d-flex align-items-center">
                <i className="icon bi bi-map flex-shrink-0"></i>
                <div>
                  <h3>Our Address</h3>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="info-item d-flex align-items-center">
                <i className="icon bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>contact@example.com</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="info-item  d-flex align-items-center">
                <i className="icon bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>+1 5589 55488 55</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="info-item  d-flex align-items-center">
                <i className="icon bi bi-share flex-shrink-0"></i>
                <div>
                  <h3>Opening Hours</h3>
                  <div>
                    <strong>Mon-Sat:</strong> 11AM - 23PM;
                    <strong>Sunday:</strong> Closed
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form
            action="forms/contact.php"
            method="post"
            role="form"
            className="php-email-form p-3 p-md-4"
          >
            <div className="row">
              <div className="col-xl-6 form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="col-xl-6 form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                name="message"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">
                Your message has been sent. Thank you!
              </div>
            </div>
            <div className="text-center">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ContactScreen;
