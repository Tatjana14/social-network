/*
let rerenderEntireTree = () => {
    console.log('change')
}
*/



export type PostsDataType ={
    id: number
    message: string
    likesCount: string
}
export type DialogsDataType = {
    id: number
    name: string
}
export type MessagesDataType = {
    id: number
    message: string
}
type ProfilePageType = {
    postsData: Array<PostsDataType>
    newPostText: string
}
type MessagesPageType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}

export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}
export type AllStateType ={
    state: StateType
}
export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateTextActionType = ReturnType<typeof changeNewPostTextAC>

export type ActionsType =  AddPostActionType | UpdateTextActionType
export type SoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: () => void
    subscriber: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}

export const addPostAC  = () => {
    return {type: "ADD-POST"} as const
}

export const changeNewPostTextAC  = (newPostText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newPostText: newPostText
    } as const
}

let store: SoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: "Hi, how are you?", likesCount: '0'},
                {id: 2, message: "It's my first post", likesCount: '23'},
            ],
            newPostText: '',
        },
        messagesPage: {
            dialogsData: [
                {id: 1, name: "Ilja"},
                {id: 2, name: "Inna"},
                {id: 3, name: "Polina"},
                {id: 4, name: "Lena"}
            ],
            messagesData: [
                {id: 5, message: "Hi"},
                {id: 6, message: "How are you?"},
                {id: 7, message: "Yo"},
                {id: 8, message: "Yo"}
            ]
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber () {
        console.log('change')
    },
    dispatch(action){
        if ( action.type === 'ADD-POST'){
            let newPost: PostsDataType = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: '0'
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = '';
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newPostText;
            this._callSubscriber()
        }
    },
    subscriber (observer){
        this._callSubscriber = observer
    }
}
export default store;