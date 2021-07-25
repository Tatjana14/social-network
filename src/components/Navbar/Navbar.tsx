import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.scss';

const Navbar = () => {
    return (
        <nav className={s.navigation}>
            <ul className={s.menu}>
                <li className={s.menu_item}>
                    <NavLink to="/" className={s.menu_link}>Profile</NavLink>
                </li>
                <li className={s.menu_item}>
                    <NavLink to="/dialogs" className={s.menu_link}>Messages</NavLink>
                </li>
                <li className={s.menu_item}>
                    <NavLink to="#" className={s.menu_link} >News</NavLink>
                </li>
                <li className={s.menu_item}>
                    <NavLink to="#" className={s.menu_link} >Music</NavLink>
                </li>
                <li className={s.menu_item}>
                    <NavLink to="#" className={s.menu_link} >Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;