import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import state from './redux/state'
import {addPost} from "./redux/state";


const App = () => {

  return (
      <BrowserRouter>
          <div className="app">
              <Header />
              <Navbar />
              <Route exact path='/' render={() => <Profile addPost={addPost} postsData={state.profilePage.postsData}/>} />
              <Route path='/dialogs'  render={() => <Dialogs dialogsData={state.messagesPage.dialogsData}
                                                             messagesData={state.messagesPage.messagesData}/>}/>
          </div>
      </BrowserRouter>

  );
}

export default App;
