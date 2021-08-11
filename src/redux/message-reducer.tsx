import { MessageType} from "./store";

let initialState ={
    dialogsData: [
        {id: 1, name: "Ilja"},
        {id: 2, name: "Inna"},
        {id: 3, name: "Polina"},
        {id: 4, name: "Lena"}
    ],
    messagesData: [
        {id: 5, message: "Hi"},
        {id: 6, message: "How are you?"},
        {id: 7, message: "Yo"},
        {id: 8, message: "Yo"}
    ],
    newMessageText: ''
}


export const messageReducer = (state = initialState, action: AllActionsType) => {
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
type AllActionsType = AddMessageActionType | UpdateTextMessageActionType
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