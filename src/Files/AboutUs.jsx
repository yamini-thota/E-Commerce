import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { Loginn } from './Loginn';

function AboutUs() {
    return (
        <div style={{margin:'0px',
            padding:'0'
        }}>
            <Header />

            <h2 style={{
                backgroundImage: "url('../Images/table.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '80px',
                textAlign: 'center'
            }}>
                <b>About Us</b>
            </h2>

            {/* Main Content Section */}
            <div className="d-flex justify-content-center align-items-center my-4">
                {/* Left Side - Social Media Icons */}
                <div style={{ flex: 1, textAlign: 'center' }}>
                    <h5><i className="fa-brands fa-instagram"></i><small> AchieversIT@Insta</small></h5>
                    <h5><i className="fa-brands fa-linkedin"></i><small> LinkedInAchieversIT5426.com</small></h5>
                    <h5><i className="fa-brands fa-square-x-twitter"></i><small> AchieversIT12345@gmail.com</small></h5>
                    <h5><i className="fa-brands fa-square-whatsapp"></i><small> +91 9876543212</small></h5>
                </div>

                {/* Right Side - Loginn Component */}
                <div style={{ flex: 1, textAlign: 'center' }}>
                    <Loginn />
                </div>
            </div>

            {/* Google Maps iframe */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39192.05790363623!2d77.6819489265334!3d12.949772365918564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1359f187ff7f%3A0x24c3decd3581f625!2sAchieversIT!5e0!3m2!1sen!2sin!4v1732263629871!5m2!1sen!2sin"
                width="1080"
                height="400"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <Link to="/" className="text-decoration-none">Home</Link>
            <Footer />
        </div>
    );
}

export default AboutUs;
