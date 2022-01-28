import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAC1ZMizSf1qgp4XyEjrdSoaapVW0tnSCY",
    authDomain: "team-voting-app-648f1.firebaseapp.com",
    databaseURL: "https://team-voting-app-648f1-default-rtdb.firebaseio.com",
    projectId: "team-voting-app-648f1",
    storageBucket: "team-voting-app-648f1.appspot.com",
    messagingSenderId: "245172421069",
    appId: "1:245172421069:web:5d7e78f4cab65ce9710484"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();

/*const firebaseConfig = {
    apiKey: "AIzaSyAC1ZMizSf1qgp4XyEjrdSoaapVW0tnSCY",
    authDomain: "team-voting-app-648f1.firebaseapp.com",
    databaseURL: "https://team-voting-app-648f1-default-rtdb.firebaseio.com",
    projectId: "team-voting-app-648f1",
    storageBucket: "team-voting-app-648f1.appspot.com",
    messagingSenderId: "245172421069",
    appId: "1:245172421069:web:5d7e78f4cab65ce9710484"
  };*/