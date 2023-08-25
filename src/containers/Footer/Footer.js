import React from 'react';
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer__wrap-menu">
                    <div className="footer__logo">

                    </div>
                    <div className="footer__menu">
                        <div className="footer__menu-column">
                            <NavLink to="/">Seslendirme ve Alt Yazı</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
