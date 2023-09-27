import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAv3lptqt7lMFgDdZ_NFswJfVj-QkOWcRI",
  authDomain: "e-comerce-725ba.firebaseapp.com",
  projectId: "e-comerce-725ba",
  storageBucket: "e-comerce-725ba.appspot.com",
  messagingSenderId: "1037801039461",
  appId: "1:1037801039461:web:8e0b0b5566393bed10488c"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
