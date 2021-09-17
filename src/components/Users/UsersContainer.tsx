import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    acceptFollow, acceptUnfollow, follow, getUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleFollowingProgress, unfollow,
    UserType
} from "../../redux/users-reducer";
import Users, {UsersPresentationPropsType} from "./Users";
import Preloader from "../Preloader/Preloader";


class UsersContainer extends React.Component<UsersPropsType, UsersPresentationPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.getUsers(page, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users onPageChanged={this.onPageChanged} totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage} pageSize={this.props.pageSize} users={this.props.users}
                   follow={this.props.follow} unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
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
        followingInProgress: Array<number>
    }
type MapDispatchToPropsType =
    {
        acceptFollow: (userID: number) => void
        acceptUnfollow: (userID: number) => void
        setCurrentPage: (currentPage: number) => void
        setTotalUsersCount: (totalCount: number) => void
        toggleFollowingProgress: (isFetching: boolean, id: number) => void
        getUsers: (currentPage: number, pageSize: number) => any
        unfollow: (userId: number) => any
        follow: (userId: number) => any
    }
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
export default connect(mapStateToProps, {
    acceptFollow,
    acceptUnfollow,
    setCurrentPage,
    setTotalUsersCount,
    toggleFollowingProgress,
    getUsers,
    follow,
    unfollow
})(UsersContainer)
