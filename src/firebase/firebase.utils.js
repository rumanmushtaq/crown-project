import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyBUUzJSe8lDOKHIV24NS7XHD1Vi54gOanM",
  authDomain: "crown-clothes-dc480.firebaseapp.com",
  projectId: "crown-clothes-dc480",
  storageBucket: "crown-clothes-dc480.appspot.com",
  messagingSenderId: "328445110965",
  appId: "1:328445110965:web:408ef2cedbd425179b6cfc",
  measurementId: "G-6D4P8NSTJY",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  console.log('step 2');
  if (!userAuth) return;///true better for us

  const userRef = firestore.doc(`users/${userAuth.uid}`);///DocumentRefrence
  console.log(userRef);
  const snapShot = await userRef.get();
  console.log(snapShot);
  if (!snapShot.exists) { /// check it is login or not
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ ///storing data in firestore Database
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log(`this error is ${err.message}`);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const addCollectionAndDocuments = (collectionKey , objectsToAdd) => {
  const collectionsRef = firestore.collection(collectionKey)
  console.log(collectionsRef);
}
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
