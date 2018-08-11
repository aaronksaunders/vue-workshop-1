import firebase from "firebase/app";
import "firebase/firestore";

var config = {};

const firebaseApp = firebase.initializeApp(config);

// this will return the database associated with the app configuration
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);
export default firestore;
