// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHRk7a2frlaZqQ5bOlSIgxQ1yqiwMi5ow",
  authDomain: "portfolio-d0b3d.firebaseapp.com",
  projectId: "portfolio-d0b3d",
  storageBucket: "portfolio-d0b3d.appspot.com",
  messagingSenderId: "372520123661",
  appId: "1:372520123661:web:254c47d3e5ed7c63fc8444",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);
const storage = getStorage();
console.log({ firebaseApp });

const auth = getAuth();

export const createUserWithEmailPassword = async (email, password) => {
  let user;
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    user = userCredential.user;

    if (!user) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(userCredential);
    } else {
      return user;
    }
  } catch (err) {
    console.log(err.message);
  }
};

export const loginWithEmailPassword = async (email, password) => {
  let user;
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    user = userCredential.user;

    if (!user) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    } else {
      return user;
    }
  } catch (err) {
    console.log(err.message);
    alert(err.message);
  }
};

// module.exports = {
//   storage,
//   loginWithEmailPassword
// }

export const loginOut = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};

//google login auth

const provider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
  let user;
  try {
    let userCredential = await signInWithPopup(auth, provider);

    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(userCredential);
    const token = credential.accessToken;
    // The signed-in user info.
    user = userCredential.user;
    if (!user) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // console.log(errorMessage);
    } else {
      return user;
    }
    // ...

    // .catch((error) => {
    //   // Handle Errors here.
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // The email of the user's account used.
    //   const email = error.customData.email;
    //   // The AuthCredential type that was used.
    //   const credential = GoogleAuthProvider.credentialFromError(error);
    //   // ...
    // });
  } catch (err) {
    console.log(err.message);
  }
};
