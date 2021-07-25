import {rerenderEntireTree} from "../render";


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





let state = {

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

export let addPost = () => {
    let newPost: PostsDataType = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: '0'
    }
    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = '';
    rerenderEntireTree(state)
}
export let updatePost = (newPostText: string) => {
    state.profilePage.newPostText = newPostText;
    rerenderEntireTree(state)
}
export default state;