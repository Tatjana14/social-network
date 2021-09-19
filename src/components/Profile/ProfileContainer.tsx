import React from 'react';
import Profile from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, UserProfileType} from '../../redux/profile-reducer';
import {connect} from "react-redux";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';

type PathParamPropsType = {
    userId: string
}
type OwnPropsType = RouteComponentProps<PathParamPropsType> & ProfilePropsType


class ProfileContainer extends React.Component<OwnPropsType, any> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getUserProfile(userId)
    }

    render() {
        if(!this.props.isAuth) return <Redirect to={'/login'} />
        return (
            <Profile {...this.props}/>
        );
    }

}

export type ProfilePropsType = MapDispatchToPropsType & MapStateToPropsType & RouteComponentProps

type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => any
}
type MapStateToPropsType = {
    profile: UserProfileType | undefined
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

let WithURLDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithURLDataContainerComponent)