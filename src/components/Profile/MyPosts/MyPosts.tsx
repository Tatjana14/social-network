import s from "./MyPosts.module.scss";
import React, {ChangeEvent} from "react";
import Post from "./Post/Post";
import {AddPostActionType, PostsDataType, UpdateTextActionType} from "../../../redux/state";


type MyPostsType = {
    postsData: Array<PostsDataType>
    newPostText: string
    dispatch: (action: AddPostActionType | UpdateTextActionType) => void
}
const MyPosts: React.FC<MyPostsType> = (props) => {
    let postsElements = props.postsData.map( p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        if (newPostElement.current){
            props.dispatch({type: "ADD-POST"})
        }
    }
    let updatePost = (e: ChangeEvent<HTMLTextAreaElement>) =>{
        let text = e.currentTarget.value
        props.dispatch({type: "UPDATE-NEW-POST-TEXT", newPostText: text})
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