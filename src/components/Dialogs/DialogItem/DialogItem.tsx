import s from "./DialogItem.module.scss";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemType = {
    id: number
    name: string
}
const DialogItem: React.FC<DialogItemType> = (props) =>{
    let path = "/dialogs/" + props.id;
    return(
        <div className={s.dialog_item}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem