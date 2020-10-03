import * as firebase from 'firebase';

const  firebaseConfig= {
    

    apiKey: "AIzaSyBz-1S1rkmdlTdFoZUZ46xvvm9m3y8VroM",
    authDomain: "pushnotification-e369d.firebaseapp.com",
    databaseURL: "https://pushnotification-e369d.firebaseio.com",
    projectId: "pushnotification-e369d",
    storageBucket: "pushnotification-e369d.appspot.com",
    messagingSenderId: "72431602242",
    appId: "1:72431602242:web:5ead2d8f2ab174a390fbdb",
    measurementId: "G-T7FXT2L3QT"

};

firebase.initializeApp(firebaseConfig);

export default firebase;