import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="footer-brand">
                <div className="footer-component">My App © {year}</div>
            </div>
        </footer>
    );
};

export default Footer;
