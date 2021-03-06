import React, {ComponentType} from 'react';
import Profile from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, UserProfileType} from '../../redux/profile-reducer';
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

type PathParamPropsType = {
    userId: string
}
type OwnPropsType = RouteComponentProps<PathParamPropsType> & ProfilePropsType


class ProfileContainer extends React.Component<OwnPropsType, OwnPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getUserProfile(userId)
    }

    render() {

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
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
    }
}


export default compose<ComponentType>(connect(mapStateToProps, {getUserProfile}), withRouter, withAuthRedirect)(ProfileContainer)