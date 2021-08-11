import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {messageReducer} from "./message-reducer";
import {StoreType} from "./store";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer
})
let store: StoreType = createStore(reducers);


export default store;