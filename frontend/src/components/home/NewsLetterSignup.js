import React from 'react';

function NewsletterSignup() {
    return (
        <div className="newsletter-signup bg-light py-5">
            <div className="container text-center">
                <h2>Stay Informed</h2>
                <p>Subscribe to our newsletter for the latest updates and resources.</p>
                <form>
                    <input 
                        type="email" 
                        className="form-control mb-3" 
                        placeholder="Enter your email" 
                        style={{ maxWidth: '400px', margin: '0 auto' }} 
                    />
                    <button type="submit" className="btn btn-primary">Subscribe</button>
                </form>
            </div>
        </div>
    );
}

export default NewsletterSignup;
