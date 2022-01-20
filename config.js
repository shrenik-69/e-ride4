import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBTbYI7OLv4PbRhGScAh_l3xHnS7rxkrZw",
    authDomain: "e-ride-871aa.firebaseapp.com",
    projectId: "e-ride-871aa",
    storageBucket: "e-ride-871aa.appspot.com",
    messagingSenderId: "737532580997",
    appId: "1:737532580997:web:33e9f0d6bc3e8c58be45ec"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


