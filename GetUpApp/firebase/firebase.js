import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCidT5F5m0bcTQGwxXNFJ8WgQxToJHA4kY",
  authDomain: "getupapp-f5a39.firebaseapp.com",
  projectId: "getupapp-f5a39",
  storageBucket: "getupapp-f5a39.appspot.com",
  messagingSenderId: "779824837117",
  appId: "1:779824837117:web:605b6fe9bca9ede2982994",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
