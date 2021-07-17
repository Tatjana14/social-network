import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {StateType} from "./redux/state";


export const rerenderEntireTree = (state: StateType) =>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}