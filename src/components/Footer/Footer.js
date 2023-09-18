import React from 'react';
import Logo from "../../components/Logo/Logo";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import FooterMenu from "../../components/FooterMenu/FooterMenu";
import footerLinks from "../../data/footerLinks";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrap">
                    <div className="footer__wrap-item footer__wrap_menu">
                        <div className="footer__logo">
                            <Logo/>
                        </div>
                        <FooterMenu links={ footerLinks }/>
                    </div>
                    <div className="footer__wrap-item footer__promo">
                        <div className="footer__promo_cta">
                            <button className="button cta">Hizmet Kodu</button>
                        </div>
                        <div className="footer__promo_social">
                            <SocialLinks/>
                        </div>
                    </div>
                    <div className="footer__wrap-item footer__copyright">
                        <p>© 1997-{ currentYear } Netflix, Inc.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
