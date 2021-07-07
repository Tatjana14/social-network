import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
    { id: 1, message: "Hi, how are you?", likesCount: '0'},
    { id: 2, message: "It's my first post",  likesCount: '23'},
]
let dialogsData = [
    { id: 1, name: "Ilja"},
    { id: 2, name: "Inna"},
    { id: 3, name: "Polina"},
    { id: 4, name: "Lena"}
]

let messagesData = [
    { id: 5, message: "Hi"},
    { id: 6, message: "How are you?"},
    { id: 7, message: "Yo"},
    { id: 8, message: "Yo"}
]


ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData}
         messagesData={messagesData}
         dialogsData={dialogsData}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
