import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: "dropbox-clone-721e0.firebaseapp.com",
    projectId: "dropbox-clone-721e0",
    storageBucket: "dropbox-clone-721e0.appspot.com",
    messagingSenderId: "477531367369",
    appId: "1:477531367369:web:e700f7eb80bc1fb7f06a18"
};
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export { db, storage };
