import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, onSnapshot, query, where } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDEpmPMzkDiJBZWFYvidl2PpdwWQ18DEMs",
  authDomain: "photogallery-72c10.firebaseapp.com",
  projectId: "photogallery-72c10",
  storageBucket: "photogallery-72c10.appspot.com",
  messagingSenderId: "625519056920",
  appId: "1:625519056920:web:12762d1ac40da0daf14b6d",
  measurementId: "G-T1YFHPGLN3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { db, collection, addDoc, onSnapshot, query, where };
