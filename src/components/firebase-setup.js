import firebase from "firebase/app";
import "firebase/firestore";

var config = {
  timestampsInSnapshots: true,
  apiKey: "AIzaSyBQNkFYPCV9mYd_Nn6kRbAWCvl3iunpI0k",
  authDomain: "newtestproject-6cac7.firebaseapp.com",
  databaseURL: "https://newtestproject-6cac7.firebaseio.com",
  projectId: "newtestproject-6cac7",
  storageBucket: "newtestproject-6cac7.appspot.com",
  messagingSenderId: "203269510371"
};

const firebaseApp = firebase.initializeApp(config);

// this will return the database associated with the app configuration
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);
export default firestore;
