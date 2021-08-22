import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.scss'
import axios from "axios";
import user from '../../assets/img/user.png'

const Users: React.FC<UsersPropsType> = (props) => {
    if (props.users.length === 0){
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then( response => {
            props.setUsers(response.data.items)
        })
        /*props.setUsers([
            {
                id: 111,
                userPhoto: 'https://www.meme-arsenal.com/memes/90ea353f15778fa082b8ba92690225f4.jpg',
                followed: false,
                fullName: "Tati",
                status: 'I am constantly learning',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 222,
                userPhoto: 'https://www.meme-arsenal.com/memes/90ea353f15778fa082b8ba92690225f4.jpg',
                followed: true,
                fullName: "Ilja",
                status: 'I am a fitness instructor',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 333,
                userPhoto: 'https://www.meme-arsenal.com/memes/90ea353f15778fa082b8ba92690225f4.jpg',
                followed: false,
                fullName: "Inna",
                status: 'I sell laboratory instruments',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 444,
                userPhoto: 'https://www.meme-arsenal.com/memes/90ea353f15778fa082b8ba92690225f4.jpg',
                followed: false,
                fullName: "Polina",
                status: 'I treat children teeth',
                location: {city: 'Grodno', country: 'Belarus'}
            }
        ])*/
    }
    const users = props.users.map( u => <div key={u.id}>
        <div>
            <img src={u.photos.small === null? user : u.photos.small} alt="User photo"/>
            { u.followed ?  <button onClick={ () => props.unfollow(u.id)}>Unfollow</button> : <button onClick={ () => props.follow(u.id)} >Follow</button>}
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
        <div  className={s.container}>
            {users}
        </div>
    );
};

export default Users;