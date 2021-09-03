import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";

import {UserType} from "../../redux/users-reducer";
import Users from "./Users";

type GetUsersResponseType = {
    error: null | string
    items: UserType
    totalCount: number
}

class UsersAPIComponent extends React.Component<UsersPropsType, any> {
    componentDidMount() {
        axios.get<GetUsersResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            //this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        axios.get<GetUsersResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        return <Users onPageChanged={this.onPageChanged} totalUsersCount={this.props.totalUsersCount}
                      currentPage={this.props.currentPage} pageSize={this.props.pageSize} users={this.props.users}
                      follow={this.props.follow} unfollow={this.props.unfollow}
        />

    }
}

export default UsersAPIComponent;