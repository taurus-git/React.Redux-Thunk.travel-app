import React from 'react';
import Logo from '../../components/Logo/Logo'
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <Logo/>
                    <HeaderMenu/>
                </div>
            </div>
        </header>
    );
};

export default Header;
