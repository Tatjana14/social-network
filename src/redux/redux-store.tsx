import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {messageReducer} from "./message-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    usersPage: usersReducer,
    auth: authReducer,
})
export type AppStateType = ReturnType<typeof rootReducer>;
let store = createStore(rootReducer);

export default store;

