import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';
import {HeaderPropsType} from "./HeaderContainer";

const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <a href="#" className={s.logo}>LOGO</a>
            </div>
            <div className={s.headerLogin}>
                {props.isAuth? props.login :
                    <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;