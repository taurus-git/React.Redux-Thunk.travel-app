import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from "classnames";
import closeIcon from "../../assets/img/close.svg";

const HeaderMenu = ( props ) => {
    const { isMenuOpen, closeMenu } = props;

    const wrapClasses = classNames( {
        'header__menu-wrapper': true,
        'open': isMenuOpen
    } );

    return (
        <div className={ wrapClasses }>
            <div className="header__menu-container">
                <button className="header__menu-icon button" onClick={ closeMenu }>
                    <svg viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M3 21.32L21 3.32001" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"
                                  stroke-linejoin="round"></path>
                            <path d="M3 3.32001L21 21.32" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"
                                  stroke-linejoin="round"></path>
                        </g>
                    </svg>
                </button>
                <nav className="header__menu-nav">
                    <ul>
                        <li>
                            <NavLink to="/" onClick={ closeMenu }>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/status" onClick={ closeMenu }>Status</NavLink>
                        </li>
                        <li>
                            <NavLink to="/flights" onClick={ closeMenu }>Flights</NavLink>
                        </li>
                        <li>
                            <NavLink to="/packages" onClick={ closeMenu }>Packages</NavLink>
                        </li>
                        <li>
                            <NavLink to="/signup" onClick={ closeMenu }>Sign Up</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

    );
};

export default HeaderMenu;
