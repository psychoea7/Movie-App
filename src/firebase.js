import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDodaQIdQbBWcXgnxMBAPOQoUeWk-emv2k",
  authDomain: "netflix-clone-8c461.firebaseapp.com",
  projectId: "netflix-clone-8c461",
  storageBucket: "netflix-clone-8c461.appspot.com",
  messagingSenderId: "295653545029",
  appId: "1:295653545029:web:1b38b67a3aeeb6106b7f2c",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
