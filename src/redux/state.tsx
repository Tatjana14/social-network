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
export type SoreType = {
    _state: StateType
    updatePost: (newPostText: string) => void
    addPost: () => void
    getState: () => StateType
    _callSubscriber: () => void
    subscriber: (observer: () => void) => void
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
    addPost () {
        let newPost: PostsDataType = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likesCount: '0'
        }
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = '';
        this._callSubscriber()
    },

    updatePost (newPostText: string){
        this._state.profilePage.newPostText = newPostText;
        this._callSubscriber()
    },
    subscriber (observer){
        this._callSubscriber = observer
    }
}


/*let state = {

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

}

export const addPost = () => {
    let newPost: PostsDataType = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: '0'
    }
    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = '';
    rerenderEntireTree()
}
export const updatePost = (newPostText: string) => {
    state.profilePage.newPostText = newPostText;
    rerenderEntireTree()
}

export const subscriber = (observer: () => void) =>{
   rerenderEntireTree = observer;
}*/
export default store;