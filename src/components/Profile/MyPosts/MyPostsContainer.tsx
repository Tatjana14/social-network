import React  from "react";
import {StoreType} from "../../../redux/store";
import {addPostAC, changeNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";




type MyPostsContainerType = {
    store: any
}
const MyPostsContainer: React.FC<MyPostsContainerType> = (props) => {
    let state = props.store.getState()
    let addPost = () => {
        props.store.dispatch(addPostAC())
    }
    let updatePost = (text: string) => {
        props.store.dispatch(changeNewPostTextAC(text))
    }
    return (
        <MyPosts postsData={state.profilePage.postsData} newPostText={state.profilePage.newPostText} addPost={addPost} updateNewPostsText={updatePost}/>
    );
}

export default MyPostsContainer;