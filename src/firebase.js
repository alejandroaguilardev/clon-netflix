import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';

const firebaseConfig = {
   
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const auth = firebase.auth()
  export { auth }
  