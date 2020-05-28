import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import Dialogs from './Components/Dialogs/Dialogs'
import { BrowserRouter, Route } from 'react-router-dom'
import News from './Components/News/News'
import Music from './Components/Music/Music'
import Settings from './Components/Settings/Settings'

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar DialogsData={props.appState.DialogsData} />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <Dialogs
            DialogsData={props.appState.DialogsData}
            MassagesData={props.appState.MassagesData}
          />} />
          <Route path='/profile' render={() => <Profile
            PostData={props.appState.PostData}
            addPost={props.addPost}
            // updateNewPostText={updateNewPostText}
             />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
