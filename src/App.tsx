import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import Dialogs, {DialogsDataType, MessagesDataType} from './components/Dialogs/Dialogs';
import {PostsDataType} from "./components/Profile/MyPosts/MyPosts";

type ProfilePageType = {
    postsData: Array<PostsDataType>
}
type MessagesPageType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}

type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}
type AppType ={
    state: StateType
}
const App: React.FC<AppType> = (props) => {

  return (
      <BrowserRouter>
          <div className="app">
              <Header />
              <Navbar />
              <Route path='/profile' render={() => <Profile  postsData={props.state.profilePage.postsData}/>} />
              <Route path='/dialogs'  render={() => <Dialogs dialogsData={props.state.messagesPage.dialogsData}
                                                             messagesData={props.state.messagesPage.messagesData}/>}/>
          </div>
      </BrowserRouter>

  );
}

export default App;
