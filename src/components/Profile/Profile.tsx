import s from "./Profile.module.scss";
import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {AddPostActionType, PostsDataType, UpdateTextActionType} from "../../redux/state";

type ProfileType = {
    postsData: Array<PostsDataType>
    dispatch: (action: AddPostActionType | UpdateTextActionType) => void
    newPostText: string
}
const Profile: React.FC<ProfileType> = (props) => {

    return (
        <div className={s.container}>
            <ProfileInfo />
            <MyPosts
                dispatch={props.dispatch}
                postsData={props.postsData}
                newPostText={props.newPostText}
            />
        </div>
    );
}

export default Profile;