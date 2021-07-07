import s from "./Profile.module.scss";
import React from "react";
import MyPosts, {PostsDataType} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfileType = {
    postsData: Array<PostsDataType>
}
const Profile: React.FC<ProfileType> = (props) => {

    return (
        <div className={s.container}>
            <ProfileInfo />
            <MyPosts postsData={props.postsData}/>
        </div>
    );
}

export default Profile;