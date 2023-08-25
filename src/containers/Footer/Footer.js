import React from 'react';
import { NavLink } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import SocialLinks from "../../components/SocialLinks/SocialLinks";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrap_menu">
                    <div className="footer__logo">
                        <Logo/>
                    </div>
                    <div className="footer__menu">
                        <div className="footer__menu-column">
                            <NavLink to="/">Seslendirme ve Alt Yazı</NavLink>
                            <NavLink to="/">Medya Merkezi</NavLink>
                            <NavLink to="/">Gizlilik</NavLink>
                        </div>
                        <div className="footer__menu-column">
                            <NavLink to="/">Sesli Betimleme</NavLink>
                            <NavLink to="/">Yatırımcı İlişkileri</NavLink>
                            <NavLink to="/">Yasal Hükümler</NavLink>
                        </div>
                        <div className="footer__menu-column">
                            <NavLink to="/">Yardım Merkezi</NavLink>
                            <NavLink to="/">İş İmkanları</NavLink>
                            <NavLink to="/">Çerez Tercihleri</NavLink>
                        </div>
                        <div className="footer__menu-column">
                            <NavLink to="/">Hediye Kartları</NavLink>
                            <NavLink to="/">Kullanım Koşulları</NavLink>
                            <NavLink to="/">Kurumsal Bilgiler </NavLink>
                        </div>
                    </div>
                </div>
                <div className="footer__promo">
                    <div className="footer__promo_cta">
                        <button className="button cta">Hizmet Kodu</button>
                    </div>
                    <div className="footer__promo_social">
                        <SocialLinks/>
                    </div>
                </div>
                <div className="footer__copyright">
                    <p>© 1997-{currentYear} Netflix, Inc.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
