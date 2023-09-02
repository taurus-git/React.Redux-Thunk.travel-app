import React from 'react';
import { Link } from "react-router-dom";

const FooterMenu = ( { links } ) => {
    return (
        <ul className="footer__menu">
            { links.map( ( column, index ) => (
                <li key={ index } className="footer__menu-column">
                    { column.map( ( link, idx ) => (
                        <Link key={ link.label + idx } to={ link.path }>{ link.label }</Link>
                    ) ) }
                </li>
            ) ) }
        </ul>
    );
}

export default FooterMenu;
