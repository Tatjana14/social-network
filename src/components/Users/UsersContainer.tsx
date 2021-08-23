import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import Users from "./Users";

type MapStateToPropsType = {
    users: Array<any>
}
type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: any) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType
const  mapStateToProps = (state: AppStateType): MapStateToPropsType =>{
    return{
        users: state.usersPage.users
    }
}
const  mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType =>{
    return{
        follow: (userID: number) => dispatch(followAC(userID)),
        unfollow: (userID: number) => dispatch(unfollowAC(userID)),
        setUsers: (users: UserType) => dispatch(setUsersAC(users))
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;