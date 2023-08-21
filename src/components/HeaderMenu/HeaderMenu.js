import React from 'react';
import classNames from "classnames";

const HeaderMenu = ( { isMenuOpen } ) => {
    const navClasses = classNames( {
        'header-nav': true,
        'open': isMenuOpen
    } );

    return (
        <nav className={ navClasses }>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#">Status</a></li>
                <li><a href="#">Flights</a></li>
                <li><a href="#">Packages</a></li>
                <li><a href="#">Sign Up</a></li>
            </ul>
        </nav>
    );
}

export default HeaderMenu;
