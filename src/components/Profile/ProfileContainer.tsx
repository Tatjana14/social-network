import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile, UserProfileType} from '../../redux/profile-reducer';
import {connect} from "react-redux";
import {RouteComponentProps, withRouter } from 'react-router-dom';

type PathParamPropsType = {
    userId: string
}
type OwnPropsType = RouteComponentProps<PathParamPropsType> & ProfilePropsType


class ProfileContainer extends  React.Component<OwnPropsType, any> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        axios.get<UserProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
            <Profile {...this.props}/>
        );
    }

}
export type ProfilePropsType = MapDispatchToPropsType & MapStateToPropsType & RouteComponentProps

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

let WithURLDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithURLDataContainerComponent)