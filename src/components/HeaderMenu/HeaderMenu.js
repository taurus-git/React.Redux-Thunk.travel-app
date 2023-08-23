import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from "classnames";
import closeIcon from "../../assets/img/close.svg";

const HeaderMenu = ( { isMenuOpen, closeMenu } ) => {
    const wrapClasses = classNames( {
        'header__menu-wrapper': true,
        'open': isMenuOpen
    } );

    return (
        <div className={ wrapClasses }>
            <button className="header__menu-icon button" onClick={ closeMenu }>
                <img src={ closeIcon } alt=""/>
            </button>
            <nav className="header__menu-nav">
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/status">Status</NavLink>
                    </li>
                    <li>
                        <NavLink to="/flights">Flights</NavLink>
                    </li>
                    <li>
                        <NavLink to="/packages">Packages</NavLink>
                    </li>
                    <li>
                        <NavLink to="/signup">Sign Up</NavLink>
                    </li>
                </ul>
            </nav>
        </div>

    );
}

export default HeaderMenu;
