import s from "./Post.module.scss";
import React from "react";

type PropsType = {
    message: string
}

const Post: React.FC<PropsType> = (props) => {
    return (
        <div>
            <img className={s.avatar} src='https://www.meme-arsenal.com/memes/feb52faae4d7f8ff35f92711dff8773d.jpg'/>
            <span className={s.postItem}>{props.message}</span>
            <div>
                <span>like</span>
            </div>
        </div>
    );
}

export default Post;