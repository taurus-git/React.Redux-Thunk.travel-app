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
            <button className="header__menu-icon button" onClick={ closeMenu }>
                <img src={ closeIcon } alt="Close menu"/>
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

    );
};

export default HeaderMenu;
