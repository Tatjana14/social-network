import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import { StateType} from "./redux/state";

type PropsType = {
    state: StateType
    addPost: () => void
    updateNewPostText:  (newPostText: string) => void
}

const App = (props: PropsType) => {

  return (
      <BrowserRouter>
          <div className="app">
              <Header />
              <Navbar />
              <Route exact path='/'
                     render={() => <Profile
                         addPost={props.addPost}
                         newPostText={props.state.profilePage.newPostText}
                         postsData={props.state.profilePage.postsData}
                         updatePost={props.updateNewPostText}
                     />} />
              <Route path='/dialogs'
                     render={() => <Dialogs
                     dialogsData={props.state.messagesPage.dialogsData}
                     messagesData={props.state.messagesPage.messagesData}/>}/>
          </div>
      </BrowserRouter>

  );
}

export default App;
