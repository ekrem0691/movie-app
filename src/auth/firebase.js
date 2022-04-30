import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,  updateProfile } from "firebase/auth";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object


// const firebaseConfig = {
//   apiKey: "AIzaSyAZTzkF8Xrc1euScZD8H729LqKyVXIZnhg",
//   authDomain: "new-movie-app-4e101.firebaseapp.com",
//   projectId: "new-movie-app-4e101",
//   storageBucket: "new-movie-app-4e101.appspot.com",
//   messagingSenderId: "593799486404",
//   appId: "1:593799486404:web:3264c42b7b676eefca2291"
// };------{apikey kamuya açık hali :)}
  


const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
// eslint-disable-next-line no-unused-vars
const auth = getAuth(app);

export const createUser = async (email, password,displayName, navigate,) => {

  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );


    await updateProfile(auth.currentUser, {
      displayName:  displayName,
    })


    navigate('/');
    console.log(userCredential);
    // navigate to the home page

  } catch (error) {
    alert(error.message)
  }
};


export const signIn  = async (email, password, navigate) => {
  
  try {
    let userCredential = await signInWithEmailAndPassword(auth, email, password)
    navigate('/');
    console.log(userCredential);

  } catch (error) {
    alert(error.message)
  }
}


export const logOut = () => {
  signOut(auth);

  alert('logged successfully');

}


export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (currentUser) => {
  if (currentUser) {

    setCurrentUser(currentUser);
   
    // ...
  } else {
    // User is signed out
    // ...
    setCurrentUser(false);
  }
});
}

export const signUpProvider = (navigate) => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
  .then((result) => {
    navigate('/');

    console.log(result);
   
  }).catch((error) => {

    console.log(error);
    
  });
}

 