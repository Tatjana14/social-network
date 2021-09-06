
type UserData = {
    id: number | null
    email: string | undefined
    login: string | undefined
}
type InitialStateType = {
    id: number | null
    email: string | undefined
    login: string | undefined
    isAuth: boolean
}


let initialState = {
    id: null,
    email: undefined,
    login: undefined,
    isAuth: false
}



export const authReducer = (state: InitialStateType = initialState, action: AllActionsType):InitialStateType  => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.userData,
                isAuth: true,
            }
        default:
            return state
    }
}

type AllActionsType = SetUserDataType

export const setUserData = (id: number, email: string, login: string) => {
    return {type: "SET_USER_DATA", userData: {id, email, login}} as const
}

export type SetUserDataType = ReturnType<typeof setUserData>
