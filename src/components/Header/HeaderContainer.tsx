import React from 'react';
import Header from "./Header";
import { connect } from 'react-redux';
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserData} from "../../redux/auth-reducer";


class HeaderContainer extends  React.Component<HeaderPropsType, HeaderPropsType>{
    componentDidMount() {
       this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>
    }
}

export type HeaderPropsType = MapDispatchToPropsType & MapStateToPropsType

type MapDispatchToPropsType = {
    getAuthUserData: () => any
    }
type MapStateToPropsType = {
    isAuth: boolean
    login: string | undefined
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}


export default connect(mapStateToProps, {getAuthUserData}) (HeaderContainer);
