import s from './ProfileInfo.module.scss'

const ProfileInfo = () => {
    return (
        <div className={s.container}>
            <div className={s.profile_bg}></div>
            <span>ava+decription</span>
        </div>
    );
}

export default ProfileInfo;