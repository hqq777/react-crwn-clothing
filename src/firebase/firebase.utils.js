import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAXIRKvuQ9St4qsDLC4Uoqs4jmYzhQM0wI",
  authDomain: "crwn-db-9f30f.firebaseapp.com",
  databaseURL: "https://crwn-db-9f30f.firebaseio.com",
  projectId: "crwn-db-9f30f",
  storageBucket: "crwn-db-9f30f.appspot.com",
  messagingSenderId: "896698354726",
  appId: "1:896698354726:web:0b594b0c9184498faa6ae7",
  measurementId: "G-9RL304VTVC"
};

firebase.initializeApp(config);
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
