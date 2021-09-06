import s from "./Users.module.scss";
import user from "../../assets/img/user.png";
import React from "react";
import {UserType} from "../../redux/users-reducer";
import { NavLink } from "react-router-dom";
import axios from "axios";

export type UsersPresentationPropsType = {
     onPageChanged: (num: number) => void
     totalUsersCount: number
     currentPage: number
     pageSize: number
     users: Array<UserType>
     follow: (userID: number) => void
     unfollow: (userID: number) => void
 }

let Users = (props: UsersPresentationPropsType) =>{
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for( let i = 1; i <= pagesCount; i++){
        pages.push(i)
    }

    return <div className={s.container}>
        <div>
            {
                pages.map( (p, index) =>{
                    return <span key={p + index} className={props.currentPage === p? s.selectedPage : ''}
                                 onClick={() => props.onPageChanged(p)}>{p}</span>
                })
            }
        </div>
        {props.users.map(u => <div key={u.id}>
            <div>
                <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small === null ? user : u.photos.small} alt="User photo"/>
                </NavLink>
                {u.followed ? <button onClick={() =>{
                        axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`,
                            {withCredentials: true,
                                headers: {
                                "API-KEY": "e45bf822-869b-4e78-8fc6-0900ff5c0847"
                                }
                            }).
                        then(response => {
                            if(response.data.resultCode === 0){
                                props.unfollow(u.id)
                            }
                        })
                        }}>Unfollow</button> :
                    <button onClick={() => {
                        axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {}, {withCredentials: true,  headers: {
                                "API-KEY": "e45bf822-869b-4e78-8fc6-0900ff5c0847"
                            }}).
                        then(response => {
                            debugger
                            if(response.data.resultCode === 0){
                                props.follow(u.id)
                            }
                        })
                    } }>Follow</button>}
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

export default Users