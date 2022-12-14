import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDC8bOzJ3qL7Fy-8Ml8swPfGlAE_c_Ek1Y",
  authDomain: "react-quiz-dd78a.firebaseapp.com",
  projectId: "react-quiz-dd78a",
  storageBucket: "react-quiz-dd78a.appspot.com",
  messagingSenderId: "138507236864",
  appId: "1:138507236864:web:f16ed3b6384f3f15148ae5",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;
