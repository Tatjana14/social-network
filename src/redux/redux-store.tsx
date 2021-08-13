import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {messageReducer} from "./message-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer
})
export type AppStateType = ReturnType<typeof rootReducer>;
let store = createStore(rootReducer);

export default store;