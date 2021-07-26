import s from "./MyPosts.module.scss";
import React, {ChangeEvent} from "react";
import Post from "./Post/Post";
import { PostsDataType } from "../../../redux/state";


type MyPostsType = {
    postsData: Array<PostsDataType>
    addPost: () => void
    newPostText: string
    updatePost: (newPostText: string) => void
}
const MyPosts: React.FC<MyPostsType> = (props) => {
    let postsElements = props.postsData.map( p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        if (newPostElement.current){
            props.addPost()
        }
    }
    let updatePost = (e: ChangeEvent<HTMLTextAreaElement>) =>{
        props.updatePost(e.currentTarget.value)
    }
    return (
        <div>
            <h2>My posts</h2>
            <div>
                <textarea
                    ref={newPostElement}
                    value={props.newPostText}
                    onChange={updatePost}
                ></textarea>
            </div>
            <button onClick={addPost}>add post</button>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;