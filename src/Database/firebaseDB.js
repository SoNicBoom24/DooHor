import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAzXotpufDfVKO-uDyteoUFeWAzFL6XGxs",
    authDomain: "dohor-6f890.firebaseapp.com",
    projectId: "dohor-6f890",
    storageBucket: "dohor-6f890.appspot.com",
    messagingSenderId: "744354809976",
    appId: "1:744354809976:web:81f6e62621e92bdb65858d",
    measurementId: "G-DGCLE028X1"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;