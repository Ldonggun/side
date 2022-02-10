import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import { app } from './shared/firebase';
import AuthService from './shared/login';
import RealTimeDataBase from './shared/realtimedatabase';
import FireStore from './shared/firestore';
import Upload from './shared/upload';
const initFirebase = app;
const authService = new AuthService();
const realTimeDataBase = new RealTimeDataBase();
const fireStore = new FireStore();
const upload = new Upload();
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App
        authService={authService}
        realTimeDataBase={realTimeDataBase}
        fireStore={fireStore}
        upload={upload}
      />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
