import s from "./MyPosts.module.scss";
import React from "react";
import Post from "./Post/Post";
import { PostsDataType } from "../../../redux/state";


type MyPostsType = {
    postsData: Array<PostsDataType>
}
const MyPosts: React.FC<MyPostsType> = (props) => {
    let postsElements = props.postsData.map( p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        let text = newPostElement.current?.value
        alert(text);
    }
    return (
        <div>
            <h2>My posts</h2>
            <div>
                <textarea ref={newPostElement} ></textarea>
            </div>
            <button onClick={addPost}>add post</button>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;