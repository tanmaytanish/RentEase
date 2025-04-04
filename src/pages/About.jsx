import React from "react";
import "../styles/aboutus.css";

function About() {
    return (
        <div>
            <div className="about-container">
                <div className="about-content">
                    <h1>About Us</h1>
                    <p>
                        Welcome to <strong>MyCompany</strong>! We are passionate about building modern, user-friendly
                        digital experiences that help people and businesses grow.
                    </p>

                    <p>
                        Our team is made up of developers, designers, and creators who believe in quality,
                        collaboration, and innovation. Whether you're a small startup or a large enterprise, we're here
                        to bring your ideas to life with efficiency and care.
                    </p>

                    <p>
                        With a focus on reliability, simplicity, and performance, we’re committed to delivering
                        high-quality products and excellent customer support.
                    </p>

                    <h2>Our Mission</h2>
                    <p>To empower users through seamless technology and meaningful design.</p>

                    <h2>Contact Us</h2>
                    <p>
                        Email: <a href="mailto:support@mycompany.com">support@mycompany.com</a>
                    </p>
                    <p>
                        Phone: <a href="tel:+1234567890">+1 (234) 567-890</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
