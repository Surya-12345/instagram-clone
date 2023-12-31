import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAqjgk99YOhq5RWyfyVrqzWFCNiu7JqJDA",
  authDomain: "instagram-clone-3a7e7.firebaseapp.com",
  projectId: "instagram-clone-3a7e7",
  storageBucket: "instagram-clone-3a7e7.appspot.com",
  messagingSenderId: "643314698662",
  appId: "1:643314698662:web:9153281ddb95e73c876767",
  measurementId: "G-L05CKNSMRM",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
