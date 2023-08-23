import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from "classnames";
import closeIcon from "../../assets/img/close.svg";

const HeaderMenu = ( { isMenuOpen } ) => {
    const navClasses = classNames( {
        'header__nav': true,
        'open': isMenuOpen
    } );

    return (
        <div className="header__menu-wrapper">
            <div className="header__icon">
                <img src={ closeIcon } alt=""/>
            </div>
            <nav className={ navClasses }>
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
