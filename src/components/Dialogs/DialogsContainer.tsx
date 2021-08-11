import React from 'react';
import {addMessageAC, changeMessageTextAC} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";


type DialogsType = {
    store: any
}
const DialogsContainer: React.FC<DialogsType> = (props) => {
    const state = props.store.getState()
    const updateMessage = (message: string) => {
        props.store.dispatch(changeMessageTextAC(message))
    }
    const addMessage = () => {
        props.store.dispatch(addMessageAC())
    }
    return (
        <Dialogs dialogsData={state.dialogsPage.dialogsData} messagesData={state.dialogsPage.messagesData}
                 newMessageText={state.dialogsPage.newMessageText} addMessage={addMessage}
                 updateMessageText={updateMessage}/>
    );
}

export default DialogsContainer;