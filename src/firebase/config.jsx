import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import "firebase/auth";

const fireBaseConfig = {
  apiKey: "AIzaSyAT4-k7oM1Ordrw00sIHs5y8vKZLbjcbnQ",
  authDomain: "olxx-b2fd8.firebaseapp.com",
  projectId: "olxx-b2fd8",
  storageBucket: "olxx-b2fd8.appspot.com",
  messagingSenderId: "785154296965",
  appId: "1:785154296965:web:57f34e655cee77d21cadec",
  measurementId: "G-PL7Q4LEKC2",
};

const app = initializeApp(fireBaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();

export default app;
