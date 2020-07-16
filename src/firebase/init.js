import firebase from 'firebase'
import firestore from 'firebase/firestore'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBKAkoQlcfA2_4EqT80mUSTr78Z3E0pP3o",
    authDomain: "geo-ninjas-d5109.firebaseapp.com",
    databaseURL: "https://geo-ninjas-d5109.firebaseio.com",
    projectId: "geo-ninjas-d5109",
    storageBucket: "geo-ninjas-d5109.appspot.com",
    messagingSenderId: "810480360679",
    appId: "1:810480360679:web:80fee94b8c6ed36f655642",
    measurementId: "G-LPTEP8MNWL"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default firebaseApp.firestore()