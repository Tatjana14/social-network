import s from "./MyPosts.module.scss";
import React from "react";
import Post from "./Post/Post";

export type PostsDataType ={
    id: number
    message: string
    likesCount: string
}
type MyPostsType = {
    postsData: Array<PostsDataType>
}
const MyPosts = (props: MyPostsType) => {
    let postsElements = props.postsData.map( p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
    return (
        <div>
            <h2>My posts</h2>
            <div>
                <textarea></textarea>
            </div>
            <button>add post</button>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;