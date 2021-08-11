import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import {ActionsType, StateType} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
type PropsType = {
    state: StateType
    dispatch: (action: ActionsType) => void
    store: any
}

const App = (props: PropsType) => {

  return (
      <BrowserRouter>
          <div className="app">
              <Header />
              <Navbar />
              <Route exact path='/'
                     render={() => <Profile
                         store={props.store}
                     />} />
              <Route path='/dialogs'
                     render={() => <DialogsContainer
                         store={props.store}
                     />}/>
          </div>
      </BrowserRouter>

  );
}

export default App;
