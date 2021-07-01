import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';

const App = () => {
  return (
      <BrowserRouter>
          <div className="app">
              <Header />
              <Navbar />
              <Route path='/profile' component={Profile} />
              <Route path='/dialogs' component={Dialogs} />
          </div>
      </BrowserRouter>

  );
}

export default App;
