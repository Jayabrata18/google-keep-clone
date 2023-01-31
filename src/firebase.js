import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChtHk1DeDJAhOrLfIer50WxLy6GN-lUEI",
  authDomain: "keep-clone-d799d.firebaseapp.com",
  projectId: "keep-clone-d799d",
  storageBucket: "keep-clone-d799d.appspot.com",
  messagingSenderId: "830979602763",
  appId: "1:830979602763:web:79524ac9a429adce4e10ce",
  measurementId: "G-NRVMJKRVYB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};