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
    return(
        <div className={s.dialogs} >
            <div className={s.dialogs_items}>
                <DialogItem name="Ilja" id="1"/>
                <DialogItem name="Inna" id="2"/>
                <DialogItem name="Polina" id="3"/>
                <DialogItem name="Lena" id="4"/>
            </div>
            <div className={s.messages_items}>
                <Message textMessage="Hi" />
                <Message textMessage="How are you?" />
                <Message textMessage="Yo" />
            </div>
        </div>
    );
}

export default Dialogs;