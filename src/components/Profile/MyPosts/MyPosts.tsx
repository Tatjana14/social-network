import s from "./MyPosts.module.scss";
import React from "react";
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            <h2>My posts</h2>
            <div>
                <textarea></textarea>
            </div>
            <button>add post</button>
            <div className={s.posts}>
                <Post message='Hi, how are you?'/>
                <Post message="It's my first post" />
            </div>
        </div>
    );
}

export default MyPosts;