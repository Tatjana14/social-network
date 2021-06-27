import React from 'react';
import s from './Navbar.module.scss';

const Navbar = () => {
    return (
        <nav className={s.navigation}>
            <ul className={s.menu}>
                <li className={s.menu_item}><a href="#" className={s.menu_link}>Profile</a></li>
                <li className={s.menu_item}><a href="#" className={s.menu_link}>Messages</a></li>
                <li className={s.menu_item}><a href="#" className={s.menu_link}>News</a></li>
                <li className={s.menu_item}><a href="#" className={s.menu_link}>Music</a></li>
                <li className={s.menu_item}><a href="#" className={s.menu_link}>Settings</a></li>

            </ul>
        </nav>
    );
}

export default Navbar;