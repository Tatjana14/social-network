import React from "react";
import {addPostAC, changeNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()
                    let addPost = () => {
                        store.dispatch(addPostAC())
                    }
                    let updatePost = (text: string) => {
                        store.dispatch(changeNewPostTextAC(text))
                    }
                    return (
                        <MyPosts postsData={state.profilePage.postsData} newPostText={state.profilePage.newPostText}
                                 addPost={addPost} updateNewPostsText={updatePost}/>
                    )
                }
            }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;