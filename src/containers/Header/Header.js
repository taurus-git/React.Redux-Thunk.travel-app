import React, { useState } from 'react';
import Logo from '../../components/Logo/Logo'
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import menuIcon from "../../assets/img/menu.svg";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState( false );

    const toggleMenu = () => {
        setIsMenuOpen( !isMenuOpen );
    }

    const closeMenu = () => {
        setIsMenuOpen( false );
    }

    return (
        <header>
            <div className="container">
                <div className="header">
                    <Logo/>
                    <button onClick={ toggleMenu } className="header__menu-toggle">
                        <img src={ menuIcon } alt="Open Menu"/>
                    </button>
                    <HeaderMenu isMenuOpen={ isMenuOpen } closeMenu={ closeMenu }/>
                </div>
            </div>
        </header>
    );
};

export default Header;
