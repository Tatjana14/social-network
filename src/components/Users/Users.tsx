import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.scss'
import axios from "axios";
import user from '../../assets/img/user.png'

class Users extends React.Component<UsersPropsType, any> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <div className={s.container}>
            {this.props.users.map(u => <div key={u.id}>
                <div>
                    <img src={u.photos.small === null ? user : u.photos.small} alt="User photo"/>
                    {u.followed ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button> :
                        <button onClick={() => this.props.follow(u.id)}>Follow</button>}
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
            </div>)}
        </div>
    }
}

export default Users;