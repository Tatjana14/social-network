
type MessageType = {
    id: number
    message: string
}
type DialogsDataType = {
    id: number
    name: string
}
let initialState ={
    dialogsData: [
        {id: 1, name: "Ilja"},
        {id: 2, name: "Inna"},
        {id: 3, name: "Polina"},
        {id: 4, name: "Lena"}
    ] as Array<DialogsDataType>,
    messagesData: [
        {id: 5, message: "Hi"},
        {id: 6, message: "How are you?"},
        {id: 7, message: "Yo"},
        {id: 8, message: "Yo"}
    ] as Array<MessageType>,
    newMessageText: ''
}

export type InitialStateType = typeof initialState

export const messageReducer = (state: InitialStateType = initialState, action: AllActionsType): InitialStateType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage: MessageType = {
                id: 9,
                message: state.newMessageText
            }
            return  {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageText: ''
            }
        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {
                ...state,
                newMessageText: action.newMessageText
            }
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