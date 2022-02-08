import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { app } from './shared/firebase';
import AuthService from './shared/login';
import DataBase from './shared/database';
import FireStore from './shared/firestore';
import Upload from './shared/upload';
const initFirebase = app;
const authService = new AuthService();
const dataBase = new DataBase();
const fireStore = new FireStore();
const upload = new Upload();
ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      dataBase={dataBase}
      fireStore={fireStore}
      upload={upload}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
