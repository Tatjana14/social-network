import React from 'react';

import s from './Dialogs.module.scss'

const Dialogs = () =>{
    return(
        <div className={s.dialogs} >
            <div className={s.dialogs_items}>
                <div className={s.dialog_item}>
                    <span>Ilja</span>
                </div>
                <div className={s.dialog_item}>
                    <span>Inna</span>
                </div>
                <div className={s.dialog_item}>
                    <span>Polina</span>
                </div>
                <div className={s.dialog_item}>
                    <span>Lena</span>
                </div>
            </div>
            <div className={s.messages_items}>
                <div className={s.message_item}>
                    <span className={s.message_text}>Hi</span>
                </div>
                <div className={s.message_item}>
                    <span className={s.message_text}>How are you?</span>
                </div>
                <div className={s.message_item}>
                    <span className={s.message_text}>Yo</span>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;