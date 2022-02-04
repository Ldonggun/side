import React from 'react';
import './app.css';
//components
import { Modal } from './components/index';

function App({ authService }: any) {
  return (
    <>
      <h1>Hello :)</h1>
      <Modal authService={authService} />
    </>
  );
}

export default App;
