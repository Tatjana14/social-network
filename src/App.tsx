import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import Dialogs, {DialogsDataType, MessagesDataType} from './components/Dialogs/Dialogs';
import {PostsDataType} from "./components/Profile/MyPosts/MyPosts";

type AppType ={
    postsData: Array<PostsDataType>
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}
const App = (props: AppType) => {

  return (
      <BrowserRouter>
          <div className="app">
              <Header />
              <Navbar />
              <Route path='/profile' render={() => <Profile  postsData={props.postsData}/>} />
              <Route path='/dialogs'  render={() => <Dialogs dialogsData={props.dialogsData}
                                                             messagesData={props.messagesData}/>}/>
          </div>
      </BrowserRouter>

  );
}

export default App;
