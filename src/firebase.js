import firebase from "firebase"
var firebaseConfig = {
  apiKey: "AIzaSyD5bah4p-utZC-7tVLKcUjgUoWpIKUDgf4",
  authDomain: "linkedinclone-b10e7.firebaseapp.com",
  projectId: "linkedinclone-b10e7",
  storageBucket: "linkedinclone-b10e7.appspot.com",
  messagingSenderId: "579809994164",
  appId: "1:579809994164:web:1c52e2be4078a3b9a07ee1"
};
  //intialize 
  const firebaseApp=firebase.initializeApp(firebaseConfig)
  //storgae
  const db=firebaseApp.firestore();
  const auth= firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  const storage=firebase.storage()
  export{auth,provider,storage};
  export default db;

  