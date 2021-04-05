// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyB_HMOyj9XzI-oki8OEONiIQGg7gAhIC28",
    authDomain: "facebook-clone-3fe1d.firebaseapp.com",
    projectId: "facebook-clone-3fe1d",
    storageBucket: "facebook-clone-3fe1d.appspot.com",
    messagingSenderId: "774990016955",
    appId: "1:774990016955:web:fb8465755690848d68949e",
    measurementId: "G-64S3DRFE3L"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider  = new firebase.auth.GoogleAuthProvider();
 
  export {auth,provider}
  export default db;