import s from "./Users.module.scss";
import user from "../../assets/img/user.png";
import React from "react";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

export type UsersPresentationPropsType = {
    onPageChanged: (num: number) => void
    totalUsersCount: number
    currentPage: number
    pageSize: number
    users: Array<UserType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    toggleFollowingProgress: (isFetching: boolean, id: number) => void
    followingInProgress: Array<number>
}

let Users = (props: UsersPresentationPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div className={s.container}>
        <div>
            {
                pages.map((p, index) => {
                    return <span key={p + index} className={props.currentPage === p ? s.selectedPage : ''}
                                 onClick={() => props.onPageChanged(p)}>{p}</span>
                })
            }
        </div>
        {props.users.map(u => <div key={u.id}>
            <div>
                <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small === null ? user : u.photos.small} alt="User photo"/>
                </NavLink>
                {u.followed ? <button disabled={props.followingInProgress.some( id => id === u.id)} onClick={() => {
                    props.toggleFollowingProgress(true, u.id)
                        usersAPI.makeUnfollow(u.id).then(data => {
                            if (data.resultCode === 0) {
                                props.unfollow(u.id)
                            }
                            props.toggleFollowingProgress(false, u.id)

                        })
                    }}>Unfollow</button> :
                    <button disabled={props.followingInProgress.some( id => id === u.id)} onClick={() => {
                        props.toggleFollowingProgress(true, u.id)
                        usersAPI.makeFollow(u.id).then(data => {
                            if (data.resultCode === 0) {
                                props.follow(u.id)
                            }
                            props.toggleFollowingProgress(false, u.id)
                        })
                    }}>Follow</button>}
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