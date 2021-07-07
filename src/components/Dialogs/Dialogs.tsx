import React from 'react';

import s from './Dialogs.module.scss'
import MessItem from './MessageItem/MessItem';
import DialogItem from "./DialogItem/DialogItem";
import {DialogsDataType, MessagesDataType} from "../../redux/state";



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