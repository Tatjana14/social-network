import {PostsDataType} from "./store";

let initialState = {
    postsData: [
        {id: 1, message: "Hi, how are you?", likesCount: '0'},
        {id: 2, message: "It's my first post", likesCount: '23'},
    ],
    newPostText: '',
}
export const profileReducer = (state = initialState, action: AllActionsType) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostsDataType = {
                id: 3,
                message: state.newPostText,
                likesCount: '0'
            }
            state.postsData.push(newPost)
            state.newPostText = '';
            return state
        case  'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newPostText;
            return state
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