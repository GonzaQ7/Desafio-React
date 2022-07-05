import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOp3-b-qv1ST27a8ykze-nS9DnC_qOPVQ",
  authDomain: "productos-boca.firebaseapp.com",
  projectId: "productos-boca",
  storageBucket: "productos-boca.appspot.com",
  messagingSenderId: "1051247616762",
  appId: "1:1051247616762:web:8a6027ca99445caa4c9f43",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const collectionProd = collection(db, "productos");
