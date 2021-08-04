import React, {ChangeEvent} from 'react';

import s from './Dialogs.module.scss'
import MessItem from './MessageItem/MessItem';
import DialogItem from "./DialogItem/DialogItem";
import {ActionsType, DialogsDataType, MessagesDataType} from "../../redux/store";
import {addMessageAC, changeMessageTextAC} from "../../redux/message-reducer";




type DialogsType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    newMessageText: string
    dispatch: (action: ActionsType) => void
}
const Dialogs: React.FC<DialogsType> = (props) =>{

    let dialogsElements = props.dialogsData.map( d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messagesData.map( m => <MessItem key={m.id} textMessage={m.message} />)
    let newMessageElement = React.createRef<HTMLTextAreaElement>()
    const updateMessage = (e: ChangeEvent<HTMLTextAreaElement>) =>{
        let message = e.currentTarget.value
        props.dispatch(changeMessageTextAC(message))
    }
    const addMessage = () =>{
        if(newMessageElement.current){
            props.dispatch(addMessageAC())
        }
    }
    return(
        <div className={s.dialogs} >
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages_items}>
                {messagesElements}
                <textarea
                    ref={newMessageElement}
                    value={props.newMessageText}
                    onChange={updateMessage}></textarea>
                <button onClick={addMessage}>Send message</button>
            </div>

        </div>
    );
}

export default Dialogs;