type ContactsType = {
    "facebook": null | string,
    "website": null | string,
    "vk": null | string,
    "twitter": null | string,
    "instagram": null | string,
    "youtube": null | string,
    "github": null | string,
    "mainLink": null | string
}
type PhotosType = {
    "small": string | undefined
    "large": string | undefined
}
export type UserProfileType = {
    "aboutMe": null | string,
    "contacts": ContactsType,
    "lookingForAJob": boolean,
    "lookingForAJobDescription": null | string,
    "fullName": null | string,
    "userId": number,
    "photos": PhotosType
}

export type PostsDataType ={
    id: number
    message: string
    likesCount: string
}

type InitialStateType = {
    profile: undefined | UserProfileType
    postsData: Array<PostsDataType>
    newPostText: string
}

let initialState = {
    profile: undefined,
    postsData: [
        {id: 1, message: "Hi, how are you?", likesCount: '0'},
        {id: 2, message: "It's my first post", likesCount: '23'},
    ],
    newPostText: '',
}


export const profileReducer = (state: InitialStateType = initialState, action: AllActionsType): InitialStateType => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostsDataType = {
                id: 3,
                message: state.newPostText,
                likesCount: '0'
            }
            return  {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }
        case  'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.newPostText
            }
        case "SET_USER_PROFILE":
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}

type AllActionsType = AddPostActionType | UpdateTextActionType | SetUserProfileType

export const addPost  = () => {
    return {type: "ADD-POST"} as const
}
export const changeNewPostText  = (newPostText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newPostText: newPostText
    } as const
}
export const setUserProfile  = (profile: UserProfileType) => {
    return {
        type: 'SET_USER_PROFILE',
        profile,
    } as const
}
export type AddPostActionType = ReturnType<typeof addPost>
export type UpdateTextActionType = ReturnType<typeof changeNewPostText>
export type SetUserProfileType = ReturnType<typeof setUserProfile>