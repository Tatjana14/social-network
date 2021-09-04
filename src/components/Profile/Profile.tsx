import s from "./Profile.module.scss";
import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from "./ProfileContainer";



const Profile: React.FC<ProfilePropsType>  =  (props) => {

    return (
        <div className={s.container}>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;