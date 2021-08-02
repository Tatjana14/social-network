import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import {AddPostActionType, StateType, UpdateTextActionType} from "./redux/state";

type PropsType = {
    state: StateType
    dispatch: (action: AddPostActionType | UpdateTextActionType) => void
}

const App = (props: PropsType) => {

  return (
      <BrowserRouter>
          <div className="app">
              <Header />
              <Navbar />
              <Route exact path='/'
                     render={() => <Profile
                         dispatch={props.dispatch}
                         newPostText={props.state.profilePage.newPostText}
                         postsData={props.state.profilePage.postsData}
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
