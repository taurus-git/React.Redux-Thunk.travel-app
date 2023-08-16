import React from 'react';
import Logo from '../../components/Logo/Logo'
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";

const Header = () => {
    return (
        <header>
            <Logo/>
            <HeaderMenu/>
        </header>
    );
};

export default Header;
