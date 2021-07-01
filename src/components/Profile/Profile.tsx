import s from "./Profile.module.scss";
import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = () => {
    return (
        <div className={s.container}>
            <ProfileInfo />
            <MyPosts />
        </div>
    );
}

export default Profile;