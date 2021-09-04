export type LocationType = {
    city: string
    country: string
}
type PhotosType = {
    small: null | string
    large: null | string
}

export type UserType = {
    followed: boolean
    id: number
    name: string
    photos: PhotosType
    status: null | string
    uniqueUrlName: null | string
}
let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 100,
    currentPage: 1,
    isFetching: true,
}

export type InitialStateType = typeof initialState

export const usersReducer = (state: InitialStateType = initialState, action: AllActionsType):InitialStateType  => {
    switch (action.type) {
        case "FOLLOW":
            return  {...state, users: state.users.map( u => u.id === action.userID? {...u, followed: true} : u)}
        case "UNFOLLOW":
            return( {...state, users: state.users.map( u => u.id === action.userID? {...u, followed: false} : u)})
        case "SET_USERS":
            return {...state, users: action.users}
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET_TOTAL_USERS_COUNT":
            return {...state, totalUsersCount: action.totalCount}
        case "TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

type AllActionsType = FollowACType | UnfollowACType | SetUsersType | SetCurrentPageType | SetTotalUsersCountType | ToggleFetchingACType

export const followAC = (userID: number) => {
    return {type: "FOLLOW", userID} as const
}
export const unfollowAC = (userID: number) => {
    return {type: "UNFOLLOW", userID} as const
}
export const setUsersAC = (users: any) => {
    return {type: "SET_USERS", users} as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {type: "SET_CURRENT_PAGE", currentPage} as const
}
export const setTotalUsersCountAC = (totalCount: number) => {
    return {type: "SET_TOTAL_USERS_COUNT", totalCount} as const
}
export const toggleFetchingAC = (isFetching: boolean) => {
    return {type: "TOGGLE_IS_FETCHING", isFetching} as const
}
export type FollowACType = ReturnType<typeof followAC>
export type UnfollowACType = ReturnType<typeof unfollowAC>
export type SetUsersType = ReturnType<typeof setUsersAC>
export type SetCurrentPageType = ReturnType<typeof setCurrentPageAC>
export type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCountAC>
export type ToggleFetchingACType = ReturnType<typeof toggleFetchingAC>