import s from './ProfileInfo.module.scss'
import {UserProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../Preloader/Preloader";
type ProfileInfoPropsType = {
    profile: UserProfileType | undefined
}
const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    if(!props.profile){
        return <Preloader/>
    } else{
        return (
            <div className={s.container}>
                <div className={s.profile_bg}></div>
                <div>
                    <img src={props.profile.photos.large} alt=""/>
                    ava+decription</div>
            </div>
        );
    }

}

export default ProfileInfo;