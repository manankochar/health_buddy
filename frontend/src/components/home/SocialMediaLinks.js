import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function SocialMediaLinks() {
    return (
        <div className="social-media-links text-center py-4 bg-dark text-white">
            <h4>Follow Us</h4>
            <div className="d-flex justify-content-center">
                <a href="https://facebook.com" className="mx-3 text-white">
                    <FaFacebook size={30} />
                </a>
                <a href="https://twitter.com" className="mx-3 text-white">
                    <FaTwitter size={30} />
                </a>
                <a href="https://instagram.com" className="mx-3 text-white">
                    <FaInstagram size={30} />
                </a>
                <a href="https://linkedin.com" className="mx-3 text-white">
                    <FaLinkedin size={30} />
                </a>
            </div>
        </div>
    );
}

export default SocialMediaLinks;
