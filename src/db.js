import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAtfwedqqWrNnX4_Z8a_PUhPcfH517XKHI",
    authDomain: "curricula-auth.firebaseapp.com",
    databaseURL: "https://curricula-auth.firebaseio.com",
    projectId: "curricula-auth",
    storageBucket: "curricula-auth.appspot.com",
    messagingSenderId: "627774625619",
    appId: "1:627774625619:web:a88b9d788c1cc2bed673a6"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();
  