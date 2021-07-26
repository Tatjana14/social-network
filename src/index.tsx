import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {StateType, subscriber} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";



let rerenderEntireTree = (state: StateType) =>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(state)
subscriber(rerenderEntireTree)
reportWebVitals();
