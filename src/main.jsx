import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css'  
import { BrowserRouter as Router } from 'react-router-dom';
import { firebaseContext } from './store/context.jsx';
import firebase from './firebase/config.jsx'
import Context from './store/context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Router> 
    <firebaseContext.Provider value={{firebase}}>
      <Context>
      <App />
      </Context>
    </firebaseContext.Provider>
    </Router>
  </React.StrictMode>,
)
