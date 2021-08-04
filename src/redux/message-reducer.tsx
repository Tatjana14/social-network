import {ActionsType, MessageType} from "./store";

export const messageReducer = (state: any, action: ActionsType) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage: MessageType = {
                id: 9,
                message: state.newMessageText
            }
            state.messagesData.push(newMessage)
            state.newMessageText = ''
            return state
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newMessageText;
            return state
        default:
            return state
    }
}

export const changeMessageTextAC  = (newMessageText: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newMessageText: newMessageText
    } as const
}

export const addMessageAC  = () => {
    return {type: "ADD-MESSAGE"} as const
}
export type AddMessageActionType = ReturnType<typeof addMessageAC>
export type UpdateTextMessageActionType = ReturnType<typeof changeMessageTextAC>