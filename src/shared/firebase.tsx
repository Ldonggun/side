import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDqU2GnMhfkXZWBGy7Fd_SCAruZpYBZqmY',
  authDomain: 'chat-mini-7f143.firebaseapp.com',
  projectId: 'chat-mini-7f143',
  databaseURL: 'https://databaseName.firebaseio.com',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { app, db };
