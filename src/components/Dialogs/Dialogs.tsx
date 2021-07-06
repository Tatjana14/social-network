import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Dialogs.module.scss'


const DialogItem = (props:any) =>{
    let path = "/dialogs/" + props.id;
    return(
        <div className={s.dialog_item}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props:any) =>{
    return(
        <div className={s.message_item}>
            <span className={s.message_text}>{props.textMessage}</span>
        </div>
    )
}

const Dialogs = () =>{

    let dialogsData = [
        { id: 1, name: "Ilja"},
        { id: 2, name: "Inna"},
        { id: 3, name: "Polina"},
        { id: 4, name: "Lena"}
    ]
    let messagesData = [
        { id: 5, message: "Hi"},
        { id: 6, message: "How are you?"},
        { id: 7, message: "Yo"},
        { id: 8, message: "Yo"}
    ]
    return(
        <div className={s.dialogs} >
            <div className={s.dialogs_items}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name="Inna" id="2"/>
                <DialogItem name="Polina" id="3"/>
                <DialogItem name="Lena" id="4"/>
            </div>
            <div className={s.messages_items}>
                <Message textMessage={messagesData[0].message} />
                <Message textMessage="How are you?" />
                <Message textMessage="Yo" />
            </div>
        </div>
    );
}

export default Dialogs;