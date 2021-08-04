import s from "./MyPosts.module.scss";
import React, {ChangeEvent} from "react";
import Post from "./Post/Post";
import {ActionsType, PostsDataType} from "../../../redux/store";
import {addPostAC, changeNewPostTextAC} from "../../../redux/profile-reducer";




type MyPostsType = {
    postsData: Array<PostsDataType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}
const MyPosts: React.FC<MyPostsType> = (props) => {
    let postsElements = props.postsData.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        if (newPostElement.current) {
            props.dispatch(addPostAC())
        }
    }
    let updatePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.dispatch(changeNewPostTextAC(text))
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