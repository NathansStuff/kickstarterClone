import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBuKRke2ZXy90teZTCx2UkAry0m6QMg1XU',
  authDomain: 'kickstarterclone-3f673.firebaseapp.com',
  projectId: 'kickstarterclone-3f673',
  storageBucket: 'kickstarterclone-3f673.appspot.com',
  messagingSenderId: '277876426055',
  appId: '1:277876426055:web:522dd8fdde06dbacf07862',
  measurementId: 'G-0QR1FC2SCR',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
