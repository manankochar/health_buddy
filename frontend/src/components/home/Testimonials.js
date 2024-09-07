import React from 'react';

const testimonials = [
    { name: "John Doe", quote: "Health Buddy has changed my life! The resources here are invaluable." },
    { name: "Jane Smith", quote: "The mental health tools on this platform are incredibly helpful." }
];

function Testimonials() {
    return (
        <div className="container testimonials-section my-5">
            <h2 className="text-center">What Our Users Say</h2>
            <div className="row mt-5">
                {testimonials.map((testimonial, index) => (
                    <div className="col-md-6" key={index}>
                        <blockquote className="blockquote">
                            <p>"{testimonial.quote}"</p>
                            <footer className="blockquote-footer">{testimonial.name}</footer>
                        </blockquote>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;
