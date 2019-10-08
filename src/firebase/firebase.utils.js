import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "****",
    authDomain: "crwn-db-9f30f.firebaseapp.com",
    databaseURL: "https://crwn-db-9f30f.firebaseio.com",
    projectId: "crwn-db-9f30f",
    storageBucket: "",
    messagingSenderId: "896698354726",
    appId: "1:896698354726:web:0b594b0c9184498faa6ae7",
    measurementId: "G-9RL304VTVC"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
