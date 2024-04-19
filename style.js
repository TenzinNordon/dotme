// Import Firebase and its authentication module
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

// Add your Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFxVcF2scY5SA6aoNDJbxq6vCU4rm8dhU",
    authDomain: "auth-9748c.firebaseapp.com",
    projectId: "auth-9748c",
    storageBucket: "auth-9748c.appspot.com",
    messagingSenderId: "375314076532",
    appId: "1:375314076532:web:dcac74abfe138ba83ed221",
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

// Function to handle user sign-in
const userSignIn = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // Handle successful sign-in
      const user = result.user;
      console.log("Signed in as: ", user.displayName);
    })
    .catch((error) => {
      // Handle sign-in errors
      console.error("Sign-in error: ", error);
    });
};

// Function to handle user sign-out
const userSignOut = () => {
  signOut(auth)
    .then(() => {
      // Handle successful sign-out
      console.log("Signed out successfully");
    })
    .catch((error) => {
      // Handle sign-out errors
      console.error("Sign-out error: ", error);
    });
};

// Add event listeners for sign-in and sign-out buttons
document.getElementById("signInButton").addEventListener("click", userSignIn);
document.getElementById("signOutButton").addEventListener("click", userSignOut);

// Function to update UI based on user authentication state
const updateUI = (user) => {
  const signInButton = document.getElementById("signInButton");
  const signOutButton = document.getElementById("signOutButton");
  const message = document.getElementById("message");

  if (user) {
    // User is signed in
    signInButton.style.display = "none";
    signOutButton.style.display = "block";
    message.textContent = `You are signed in as: ${user.displayName}`;
    message.style.display = "block";
  } else {
    // User is signed out
    signInButton.style.display = "block";
    signOutButton.style.display = "none";
    message.textContent = "";
    message.style.display = "none";
  }
};

// Listen for changes in user authentication state
onAuthStateChanged(auth, (user) => {
  updateUI(user); // Update UI based on user authentication state
});
