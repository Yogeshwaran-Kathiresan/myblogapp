import React from 'react';
import { SocialIcon } from 'react-social-icons';


function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-logo">
                    <a href="/">Branding Today</a>
                </div>
                <div className="footer-social">
                    <SocialIcon className='social-icon' url="https://www.facebook.com" target='blank' />
                    <SocialIcon className='social-icon' url="https://www.twitter.com" target='blank' />
                    <SocialIcon className='social-icon' url="https://www.instagram.com" target='blank' />
                    <SocialIcon className='social-icon' url="https://www.linkedin.com" target='blank' />
                </div>
                <div className="footer-links">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
