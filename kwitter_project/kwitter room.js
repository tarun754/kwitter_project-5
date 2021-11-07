// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRJgTKozOp0UQUPmvsl_cz1O2WqhFq7iY",
  authDomain: "kwitter-167f0.firebaseapp.com",
  projectId: "kwitter-167f0",
  storageBucket: "kwitter-167f0.appspot.com",
  messagingSenderId: "808477619916",
  appId: "1:808477619916:web:ce2e1a3c69d3d0b205f469"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
