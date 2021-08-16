export type LocationType = {
    city: string
    country: string
}
export type UserType = {
    id: number
    userPhoto: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}
let initialState = {
    users: [
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
        },
    ] as Array<UserType>,
}

export type InitialStateType = typeof initialState

export const usersReducer = (state: InitialStateType = initialState, action: AllActionsType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return  {...state, users: state.users.map( u => u.id === action.userID? {...u, followed: true} : u)}
        case "UNFOLLOW":
            return( {...state, users: state.users.map( u => u.id === action.userID? {...u, followed: false} : u)})
        case "SET_USERS":
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

type AllActionsType = FollowACType | UnfollowACType | SetUsersType

export const followAC = (userID: number) => {
    return {type: "FOLLOW", userID} as const
}
export const unfollowAC = (userID: number) => {
    return {type: "UNFOLLOW", userID} as const
}
export const setUsersAC = (users: any) => {
    return {type: "SET_USERS", users} as const
}
export type FollowACType = ReturnType<typeof followAC>
export type UnfollowACType = ReturnType<typeof unfollowAC>
export type SetUsersType = ReturnType<typeof setUsersAC>