import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFetching,
    unfollow,
    UserType
} from "../../redux/users-reducer";

import axios from "axios";
import Users, {UsersPresentationPropsType} from "./Users";
import Preloader from "../Preloader/Preloader";


type GetUsersResponseType = {
    error: null | string
    items: UserType
    totalCount: number
}

class UsersContainer extends React.Component<UsersPropsType, UsersPresentationPropsType> {
    componentDidMount() {
        this.props.toggleFetching(true)
        axios.get<GetUsersResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true}).then(response => {
            this.props.toggleFetching(false)
            this.props.setUsers(response.data.items)
            //this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        axios.get<GetUsersResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`, {withCredentials: true}).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users onPageChanged={this.onPageChanged} totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage} pageSize={this.props.pageSize} users={this.props.users}
                   follow={this.props.follow} unfollow={this.props.unfollow}/>
        </>
    }
}


type MapStateToPropsType =
    {
        users: Array<UserType>
        pageSize: number
        totalUsersCount: number
        currentPage: number
        isFetching: boolean
    }
type MapDispatchToPropsType =
    {
        follow: (userID: number) => void
        unfollow: (userID: number) => void
        setUsers: (users: UserType) => void
        setCurrentPage: (currentPage: number) => void
        setTotalUsersCount: (totalCount: number) => void
        toggleFetching: (isFetching: boolean) => void
    }
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleFetching
})(UsersContainer)
