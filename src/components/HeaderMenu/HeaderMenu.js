import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from "classnames";

const HeaderMenu = ( props ) => {
    const { isMenuOpen, closeMenu, links } = props;

    const wrapClasses = classNames( {
        'header__menu-wrapper': true,
        'open': isMenuOpen
    } );

    return (
        <div className={ wrapClasses }>
            <div className="header__menu-container">
                <button className="header__menu-icon button" onClick={ closeMenu }>
                    <svg viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M3 21.32L21 3.32001" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"></path>
                            <path d="M3 3.32001L21 21.32" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"></path>
                        </g>
                    </svg>
                </button>
                <nav className="header__menu-nav">
                    <ul>
                        { links.map( ( link ) => (
                            <li key={ link.path }>
                                <NavLink to={ link.path }
                                         onClick={ closeMenu }>{ link.label }</NavLink>
                            </li>
                        ) ) }
                    </ul>
                </nav>
            </div>
        </div>

    );
};

export default HeaderMenu;
