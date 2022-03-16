import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyD78iodXdhugL7RhLJhiK8Qh4PCRw9F7M8",
  authDomain: "events-55bc4.firebaseapp.com",
  projectId: "events-55bc4",
  storageBucket: "events-55bc4.appspot.com",
  messagingSenderId: "544302827353",
  appId: "1:544302827353:web:14771f5fb6e8c224492e48"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);