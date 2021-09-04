import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile, UserProfileType} from '../../redux/profile-reducer';
import {connect} from "react-redux";




class ProfileContainer extends  React.Component<ProfilePropsType, any> {
    componentDidMount() {
        axios.get<UserProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
            <Profile {...this.props}/>
        );
    }

}
export type ProfilePropsType = MapDispatchToPropsType & MapStateToPropsType

type MapDispatchToPropsType = {
    setUserProfile: (profile: UserProfileType) => void
}
type MapStateToPropsType = {
    profile: UserProfileType | undefined
}

const mapStateToProps = (state: AppStateType):MapStateToPropsType  => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)