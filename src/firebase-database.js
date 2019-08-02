var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");

export const db = firebase
  .initializeApp({
    apiKey: "AIzaSyCRov_Z4_298PgC7AUs6Xz3L_Ri45bLgMU",
    authDomain: "glitch-app-16890.firebaseapp.com",
    databaseURL: "https://glitch-app-16890.firebaseio.com",
    projectId: "glitch-app-16890",
    storageBucket: "glitch-app-16890.appspot.com",
    messagingSenderId: "834014912484",
    appId: "1:834014912484:web:0cffc4c05bc32f46"
  })
  .firestore();

export const auth = firebase.auth();
//export default firestore;
