import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.scss'
import axios from "axios";
import user from '../../assets/img/user.png'

const Users: React.FC<UsersPropsType> = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            })
        }
    }
    const users = props.users.map(u => <div key={u.id}>
        <div>
            <img src={u.photos.small === null ? user : u.photos.small} alt="User photo"/>
            {u.followed ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                <button onClick={() => props.follow(u.id)}>Follow</button>}
        </div>
        <div>
            <div>
                <h3>{u.name}</h3>
                <span>{u.status}</span>
            </div>
            <div>
                <span>{"u.location.city"},</span>
                <span>{"u.location.country"}</span>
            </div>
        </div>
    </div>)

    return (
        <div className={s.container}>
            <button onClick={getUsers}>Get users</button>
            {users}
        </div>
    );
};

export default Users;