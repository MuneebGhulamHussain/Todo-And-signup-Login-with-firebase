 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

  import { getFirestore,collection, addDoc,getDocs ,deleteDoc,doc,updateDoc ,setDoc} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";
  import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
   
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDs8I3a6UbDxLiRSW_tsOfU5u6XiOX2KRg",
    authDomain: "my-project-661f2.firebaseapp.com",
    projectId: "my-project-661f2",
    storageBucket: "my-project-661f2.firebasestorage.app",
    messagingSenderId: "612289510171",
    appId: "1:612289510171:web:5432938c639c1b4ab6f1be"
  };


// Initialize Cloud Firestore and get a reference to the service


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth=getAuth(app)
  export{app,db,collection, addDoc,getDocs,deleteDoc,doc,updateDoc,auth,createUserWithEmailAndPassword,setDoc,signInWithEmailAndPassword}
  // export{createUserWithEmailAndPassword}