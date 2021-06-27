import s from "./Profile.module.scss";
import React from "react";
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div className={s.container}>
            <div className={s.profile_bg}></div>
            <span>ava+decription</span>
            <MyPosts />
        </div>
    );
}

export default Profile;