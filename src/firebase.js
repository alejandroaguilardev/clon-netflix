import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCzoaxxXu8LjFYy1DLFL2MZLbUu3UGoFl0",
    authDomain: "neflix-241c9.firebaseapp.com",
    projectId: "neflix-241c9",
    storageBucket: "neflix-241c9.appspot.com",
    messagingSenderId: "921224549551",
    appId: "1:921224549551:web:b73d01a98850ccf618b05a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const auth = firebase.auth()
  export { auth }
  