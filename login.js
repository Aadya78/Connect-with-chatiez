var firebaseConfig = {
    apiKey: "AIzaSyDHbZMhBf5g6hxvQFpk1VMSR-Sy5Gv5mJQ",
    authDomain: "chatiez-50d0f.firebaseapp.com",
    projectId: "chatiez-50d0f",
    storageBucket: "chatiez-50d0f.appspot.com",
    messagingSenderId: "655689491330",
    appId: "1:655689491330:web:604454fa4320a6ccc7659b",
    measurementId: "G-W9B77W341E"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = document.getElementById("name").value;
  pass = document.getElementById("password").value;

function direct1(){
   localStorage.setItem("aadtya");
}