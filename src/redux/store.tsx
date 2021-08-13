


import {AddPostActionType, profileReducer, UpdateTextActionType} from "./profile-reducer";
import {AddMessageActionType, messageReducer, UpdateTextMessageActionType} from "./message-reducer";

export type MessageType = {
    id: number
    message: string
}
 type PostsDataType ={
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
    newMessageText: string
}

export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}
export type AllStateType ={
    state: StateType
}

export type ActionsType =  AddPostActionType | UpdateTextActionType | AddMessageActionType | UpdateTextMessageActionType
export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}

/*
let store: StoreType = {
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
            ],
            newMessageText: ''
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber () {
        console.log('change')
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messageReducer(this._state.messagesPage, action)
        this._callSubscriber()
    },
    subscriber (observer){
        this._callSubscriber = observer
    }
}
export default store;*/
