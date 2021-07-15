import s from "./Profile.module.scss";
import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsDataType} from "../../redux/state";

type ProfileType = {
    postsData: Array<PostsDataType>
    addPost: (postMessage: string) => void
}
const Profile: React.FC<ProfileType> = (props) => {

    return (
        <div className={s.container}>
            <ProfileInfo />
            <MyPosts addPost={props.addPost} postsData={props.postsData}/>
        </div>
    );
}

export default Profile;