import React from "react";
import {addPost, changeNewPostText, PostsDataType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import { Dispatch } from "redux";

type MapStateToPropsType = {
    postsData: Array<PostsDataType>
    newPostText: string
}

type MapDispatchToPropsType = {
    addPost: () => void
    updateNewPostsText: (text: string) => void
}
export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

const  mapStateToProps = (state: AppStateType): MapStateToPropsType =>{
    return{
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}
const  mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType  =>{
    return{
        addPost: () =>  dispatch(addPost()),
        updateNewPostsText: (text: string) => dispatch(changeNewPostText(text))
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;