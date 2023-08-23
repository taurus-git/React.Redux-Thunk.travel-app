import React, { useState, useRef } from 'react';
import classNames from "classnames";
import Logo from '../../components/Logo/Logo'
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import menuIcon from "../../assets/img/menu.svg";
import useOutsideClick from "../../hooks/useOutsideClick";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState( false );
    const menuRef = useRef( null );
    const overlayClasses = classNames( {
        'overlay': true,
        'active': isMenuOpen
    } );

    const toggleMenu = () => {
        setIsMenuOpen( !isMenuOpen );
    }

    const closeMenu = () => {
        setIsMenuOpen( false );
    }

    useOutsideClick( menuRef, () => {
        if ( isMenuOpen ) {
            closeMenu();
        }
    } );

    return (
        <header>
            <div className={ overlayClasses } onClick={ closeMenu }></div>
            <div className="container">
                <div className="header" ref={ menuRef }>
                    <Logo/>
                    <button onClick={ toggleMenu } className="header__menu-toggle button">
                        <img src={ menuIcon } alt="Open Menu"/>
                    </button>
                    <HeaderMenu isMenuOpen={ isMenuOpen } closeMenu={ closeMenu }/>
                </div>
            </div>
        </header>
    );
};

export default Header;
