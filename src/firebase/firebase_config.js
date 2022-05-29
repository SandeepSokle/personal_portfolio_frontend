// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
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

export const loginWithEmailPassword = async (email, password) => {
  let user;
  let userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  user = userCredential.user;

  if (!user) {
    const errorCode = error.code;
    const errorMessage = error.message;
  } else {
    return user;
  }
};

// module.exports = {
//   storage,
//   loginWithEmailPassword
// }
