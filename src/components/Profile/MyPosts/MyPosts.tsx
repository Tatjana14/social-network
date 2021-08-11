import s from "./MyPosts.module.scss";
import React, {ChangeEvent} from "react";
import Post from "./Post/Post";
import {PostsDataType} from "../../../redux/store";




type MyPostsType = {
    postsData: Array<PostsDataType>
    newPostText: string
    addPost: () => void
    updateNewPostsText: (text: string) => void
}
const MyPosts: React.FC<MyPostsType> = (props) => {
    let postsElements = props.postsData.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        if (newPostElement.current) {
            props.addPost()
        }
    }
    let updatePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostsText(text)
    }
    return (
        <div>
            <h2>My posts</h2>
            <div>
                <textarea
                    ref={newPostElement}
                    value={props.newPostText}
                    onChange={updatePost}
                />
            </div>
            <button onClick={addPost}>add post</button>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;