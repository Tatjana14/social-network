import axios from "axios";
import {UserType} from "../redux/users-reducer";
import {UserProfileType} from "../redux/profile-reducer";

type GetUsersResponseType = {
    error: null | string
    items: UserType
    totalCount: number
}
const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "e45bf822-869b-4e78-8fc6-0900ff5c0847"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    makeFollow(id: number) {
        return instance.post(`follow/${id}`, {}).then(response => {
            return response.data
        })
    },
    makeUnfollow(id: number) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data
        })
    },
    getProfile(userId: string){
        return instance.get<UserProfileType>(`profile/${userId}`).then(response => {
            return response.data
        })
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me` )
    }
}


