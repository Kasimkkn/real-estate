import React, { useState } from 'react';

const Footer: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle email submission here
        console.log('Email submitted:', email);
        setEmail('');
    };

    return (
        <footer>
            <div className="container-xl">
                <div className="footer">
                    <div>
                        <a href="/" className="logo wow animate__animated animate__fadeInUp">
                            <img src="/images/logo.png" alt="Visionary Architects" />
                        </a>
                        <div className="wow animate__animated animate__fadeInUp">
                            <p>Follow Us</p>
                            <span>
                                <a href="#facebook">.facebook</a>
                                <a href="#instagram">.instagram</a>
                                <a href="#twitter">.twitter</a>
                            </span>
                        </div>
                    </div>

                    <div>
                        <div className="heading_3 wow animate__animated animate__fadeInUp">
                            Enter Your Email To <br />
                            Get The Latest News
                        </div>
                        <form
                            className="input_container wow animate__animated animate__fadeInUp"
                            onSubmit={handleSubmit}
                        >
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit" className="btn_1">Submit</button>
                        </form>
                    </div>
                </div>
                <br />
                <hr />
                <small>&copy; 2024 Visionary Architects. All rights reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;