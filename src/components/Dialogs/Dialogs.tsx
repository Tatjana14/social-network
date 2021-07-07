import React from 'react';

import s from './Dialogs.module.scss'
import MessItem from './MessageItem/MessItem';
import DialogItem from "./DialogItem/DialogItem";

export type DialogsDataType = {
    id: number
    name: string
}
export type MessagesDataType = {
    id: number
    message: string
}

type DialogsType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}
const Dialogs: React.FC<DialogsType> = (props) =>{

    let dialogsElements = props.dialogsData.map( d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messagesData.map( m => <MessItem key={m.id} textMessage={m.message} />)
    return(
        <div className={s.dialogs} >
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages_items}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;