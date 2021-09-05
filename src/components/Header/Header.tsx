import React from 'react';
import s from './Header.module.scss';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <a href="#" className={s.logo}>LOGO</a>
            </div>
            <div className={s.headerLogin}>

            </div>
        </header>
    );
}

export default Header;