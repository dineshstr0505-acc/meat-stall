import { useState } from "react";
import "./contact.css";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // KB Meat Stall WhatsApp number
        const whatsappNumber = "+91 93456 62833";

        // Create message
        const whatsappMessage = `
New Customer Message - KB Meat Stall

Name: ${formData.name}

Email: ${formData.email}

Phone: ${formData.phone}

Message: ${formData.message}
        `;

        // Encode message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);

        // Open WhatsApp
        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        window.open(whatsappURL, "_blank");
    };

    return (
        <div className="contact-page">

            <div className="contact-header">

                <h1>Contact Us</h1>

                <p>
                    Have a question or want to place an order?
                    Get in touch with KB Meat Stall.
                </p>

            </div>

            <div className="contact-container">

                {/* Contact Information */}

                <div className="contact-info">

                    <h2>Get In Touch</h2>

                    <div className="contact-item">
                        <div>
                            <h3>Address</h3>
                            <p>
                                KB Meat Stall, Dindigul,
                                Tamil Nadu, India
                            </p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div>
                            <h3>Phone</h3>
                            <p>+91 93456 62833</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div>
                            <h3>Email</h3>
                            <p>kbmeatstall@gmail.com</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div>
                            <h3>Opening Hours</h3>
                            <p>Monday - Sunday</p>
                            <p>6:00 AM - 8:00 PM</p>
                        </div>
                    </div>

                </div>

                {/* Contact Form */}

                <div className="contact-form">

                    <h2>Send Us a Message</h2>

                    <form onSubmit={handleSubmit}>

                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Your Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />

                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>

                        <button type="submit">
                            Send Message
                        </button>
                    </form>

                </div>

            </div>

        </div>
    );
}

export default Contact;