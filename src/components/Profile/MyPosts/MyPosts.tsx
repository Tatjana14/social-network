import s from "./MyPosts.module.scss";
import React from "react";
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            <p>My posts</p>
            <textarea></textarea>
            <button>add post</button>
            <div className={s.posts}>
                <Post message='Hi, how are you?'/>
                <Post message="It's my first post" />
            </div>
        </div>
    );
}

export default MyPosts;