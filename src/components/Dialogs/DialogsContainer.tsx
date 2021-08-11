import React from 'react';
import {addMessageAC, changeMessageTextAC} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            { (store) => {
                const state = store.getState()
                const updateMessage = (message: string) => {
                    store.dispatch(changeMessageTextAC(message))
                }
                const addMessage = () => {
                    store.dispatch(addMessageAC())
                }
                return (
                    <Dialogs dialogsData={state.messagesPage.dialogsData}
                             messagesData={state.messagesPage.messagesData}
                             newMessageText={state.messagesPage.newMessageText} addMessage={addMessage}
                             updateMessageText={updateMessage}/>
                )
            }
        }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;