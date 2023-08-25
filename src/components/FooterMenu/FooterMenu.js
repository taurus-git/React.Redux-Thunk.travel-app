import React from 'react';
import { NavLink } from "react-router-dom";

const FooterMenu = ( { links } ) => {
    return (
        <ul className="footer__menu">
            { links.map( ( column, index ) => (
                <li key={ index } className="footer__menu-column">
                    { column.map( ( link, idx ) => (
                        <NavLink key={ idx } to={ link.path }>{ link.label }</NavLink>
                    ) ) }
                </li>
            ) ) }
        </ul>
    );
}

export default FooterMenu;
