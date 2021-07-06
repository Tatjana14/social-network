import s from "./MessItem.module.scss"
import React from "react";

type MessageType = {
    textMessage: string
}

const Message = (props:MessageType) =>{
    return(
        <div className={s.message_item}>
            <span className={s.message_text}>{props.textMessage}</span>
        </div>
    )
}
export default Message