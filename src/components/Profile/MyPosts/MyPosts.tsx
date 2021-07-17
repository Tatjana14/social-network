import s from "./MyPosts.module.scss";
import React from "react";
import Post from "./Post/Post";
import { PostsDataType } from "../../../redux/state";


type MyPostsType = {
    postsData: Array<PostsDataType>
    addPost: (postMessage: string) => void
}
const MyPosts: React.FC<MyPostsType> = (props) => {
    let postsElements = props.postsData.map( p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        if (newPostElement.current){
            props.addPost(newPostElement.current.value)
            newPostElement.current.value = ''
        }
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