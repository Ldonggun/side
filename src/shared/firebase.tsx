import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDqU2GnMhfkXZWBGy7Fd_SCAruZpYBZqmY",
  authDomain: "chat-mini-7f143.firebaseapp.com",
  projectId: "chat-mini-7f143",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
