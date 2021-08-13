import React from 'react';
import {addMessageAC, changeMessageTextAC} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {DialogsDataType, MessageType} from "../../redux/store";

type MapStateToPropsType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessageType>
    newMessageText: string
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
        newMessageText: state.messagesPage.newMessageText
    }
}
const  mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType =>{
    return{
        addMessage: () => dispatch(addMessageAC()),
        updateMessageText: (message: string) => dispatch(changeMessageTextAC(message))
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;