import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBJ4oEEdrDKixLDuqbmpYGP_rleNI4VsVU",
  authDomain: "unilibras-2b2c6.firebaseapp.com",
  projectId: "unilibras-2b2c6",
  storageBucket: "unilibras-2b2c6.appspot.com",
  messagingSenderId: "233882223374",
  appId: "1:233882223374:web:d9fc6ed0aab3486ec44d5f",
  measurementId: "G-RYB71B43Q8"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default firebase;


