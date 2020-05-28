import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import { addPost } from './Redux/State'
import { BrowserRouter } from 'react-router-dom'
import updateNewPostText from './Redux/State'



export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                appState={state}
                addPost={addPost}
                // updateNewPostText={updateNewPostText} 
                />
        </BrowserRouter>, document.getElementById('root'));
}
