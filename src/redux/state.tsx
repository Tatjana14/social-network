/*
let rerenderEntireTree = () => {
    console.log('change')
}
*/


export type MessageType = {
    id: number
    message: string
}
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
    newMessageText: string
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
export type AddMessageActionType = ReturnType<typeof addMessageAC>
export type UpdateTextMessageActionType = ReturnType<typeof changeMessageTextAC>

export type ActionsType =  AddPostActionType | UpdateTextActionType | AddMessageActionType | UpdateTextMessageActionType
export type StoreType = {
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
export const changeMessageTextAC  = (newMessageText: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newMessageText: newMessageText
    } as const
}

export const addMessageAC  = () => {
    return {type: "ADD-MESSAGE"} as const
}


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
        }else if ( action.type === 'ADD-MESSAGE'){
            let newMessage: MessageType = {
                id: 9,
                message: this._state.messagesPage.newMessageText
            }
            this._state.messagesPage.messagesData.push(newMessage)
            this._state.messagesPage.newMessageText = ''
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT'){
            this._state.messagesPage.newMessageText = action.newMessageText;
            this._callSubscriber()
        }
    },
    subscriber (observer){
        this._callSubscriber = observer
    }
}
export default store;