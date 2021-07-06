import s from "./MyPosts.module.scss";
import React from "react";
import Post from "./Post/Post";


const MyPosts = () => {
    let postsData = [
        { id: 1, message: "Hi, how are you?", likesCount: '0'},
        { id: 2, message: "It's my first post",  likesCount: '23'},
    ]
    return (
        <div>
            <h2>My posts</h2>
            <div>
                <textarea></textarea>
            </div>
            <button>add post</button>
            <div className={s.posts}>
                <Post message='Hi, how are you?' likesCount="0"/>
                <Post message="It's my first post" likesCount="23" />
            </div>
        </div>
    );
}

export default MyPosts;