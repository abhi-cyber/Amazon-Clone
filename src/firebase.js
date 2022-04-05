import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD68AYejAWI5mU0jjV_W6nUf2GQHUT6S_Y",
  authDomain: "clone-17b3c.firebaseapp.com",
  projectId: "clone-17b3c",
  storageBucket: "clone-17b3c.appspot.com",
  messagingSenderId: "813999641923",
  appId: "1:813999641923:web:8188daf3d80761ee248bf6",
  measurementId: "G-4XL4PTL9S5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };