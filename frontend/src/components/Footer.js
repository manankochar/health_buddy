import React from 'react';

function Footer() {
    return (
        <footer className='bg-light border-top '> 
            <div className='container mt-5'>
                <div className='row mt-5'>
                    <div className='col'>
                        <img src='media/images/logo.svg' style={{width:"50%"}} alt="Logo"/>
                        <p>© 2024, Health Buddy Inc. 
                            <br/>
                            All rights reserved.</p>
                    </div>
                    <div className='col'>
                        <h5>Company</h5>
                        <a href='#' style={{color:"gray",textDecoration:"none"}}>About Us</a>
                        <br/>
                        <a href='#' style={{color:"gray",textDecoration:"none"}}>Services</a>
                        <br/>
                        <a href='#' style={{color:"gray",textDecoration:"none"}}>Blog</a>
                        <br/>
                    </div>
                    <div className='col'> 
                        <h5>Support</h5>
                        <a href='#' style={{color:"gray",textDecoration:"none"}}>Contact Us</a>
                        <br/>
                        <a href='#' style={{color:"gray",textDecoration:"none"}}>Help Center</a>
                        <br/>
                        <a href='#' style={{color:"gray",textDecoration:"none"}}>FAQs</a>
                        <br/>
                    </div>
                    <div className='col'> 
                        <h5>Legal</h5>
                        <a href='#' style={{color:"gray",textDecoration:"none"}}>Privacy Policy</a>
                        <br/>
                        <a href='#' style={{color:"gray",textDecoration:"none"}}>Terms of Service</a>
                        <br/>
                        <a href='#' style={{color:"gray",textDecoration:"none"}}>Disclaimer</a>
                        <br/>
                    </div>
                </div>
                
                <div className='container mt-5 text-muted' style={{fontSize:"12px"}}>
                    <p>Disclaimer: The information provided on this website is for informational purposes only and is not intended as a substitute for professional mental health advice, diagnosis, or treatment. If you are in crisis or need immediate assistance, please seek help from a qualified mental health professional.</p>
                    <p>Your privacy is important to us. All your interactions on our platform are secure and confidential. Please review our Privacy Policy for more details.</p>
                    <p>We strive to make our website accessible to everyone, including individuals with disabilities. If you encounter any barriers to accessibility, please let us know.</p>
                </div>
                
                <div className='container text-center p-3'>
                    <a href='' style={{textDecoration:"none",fontSize:"14px",color:"gray",padding:"10px"}}>Home</a>
                    &nbsp;&nbsp;
                    <a href='' style={{textDecoration:"none",fontSize:"14px",color:"gray",padding:"10px"}}>About</a>
                    &nbsp;&nbsp;
                    <a href='' style={{textDecoration:"none",fontSize:"14px",color:"gray",padding:"10px"}}>Services</a>
                    &nbsp;&nbsp;
                    <a href='' style={{textDecoration:"none",fontSize:"14px",color:"gray",padding:"10px"}}>Privacy Policy</a>
                    &nbsp;&nbsp;
                    <a href='' style={{textDecoration:"none",fontSize:"14px",color:"gray",padding:"10px"}}>Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
