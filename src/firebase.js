import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAW9T3_TmRsTDWBfpT-3MECBizTfjuijCM",
  authDomain: "whatsapp-936a1.firebaseapp.com",
  projectId: "whatsapp-936a1",
  storageBucket: "whatsapp-936a1.appspot.com",
  messagingSenderId: "683046668935",
  appId: "1:683046668935:web:b5a6703debb1406ee18622",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
