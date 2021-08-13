

export type PostsDataType ={
    id: number
    message: string
    likesCount: string
}
export type InitialStateType = {
    postsData: Array<PostsDataType>
    newPostText: string
}
let initialState = {
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
        default:
            return state
    }
}

type AllActionsType = AddPostActionType | UpdateTextActionType

export const addPostAC  = () => {
    return {type: "ADD-POST"} as const
}
export const changeNewPostTextAC  = (newPostText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newPostText: newPostText
    } as const
}
export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateTextActionType = ReturnType<typeof changeNewPostTextAC>