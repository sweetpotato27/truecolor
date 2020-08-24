import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC1x3Pl_ziXJAPU5KeBqfYhS5LDuU0Y-5s",
  authDomain: "true-color-27.firebaseapp.com",
  databaseURL: "https://true-color-27.firebaseio.com",
  projectId: "true-color-27",
  storageBucket: "gs://true-color-27.appspot.com/",
  messagingSenderId: "139818575157",
  appId: "1:139818575157:web:3804a0fab10ef0e40ad87c",
  measurementId: "G-J8JEEKX3DS",
};
firebase.initializeApp(firebaseConfig);

export default firebase;