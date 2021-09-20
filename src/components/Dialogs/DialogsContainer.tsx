import React, { ComponentType } from 'react';
import {addMessageAC, changeMessageTextAC} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {DialogsDataType, MessageType} from "../../redux/store";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";



type MapStateToPropsType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessageType>
    newMessageText: string
    isAuth: boolean
}
type MapDispatchToPropsType = {
    addMessage: () => void
    updateMessageText: (message: string) => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType
const  mapStateToProps = (state: AppStateType): MapStateToPropsType =>{
    return{
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
        newMessageText: state.messagesPage.newMessageText,
        isAuth: state.auth.isAuth
    }
}
const  mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType =>{
    return{
        addMessage: () => dispatch(addMessageAC()),
        updateMessageText: (message: string) => dispatch(changeMessageTextAC(message))
    }
}

export default compose<ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);