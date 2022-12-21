import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_DOMAIN}`,
  projectId: "react-quiz-dd78a",
  storageBucket: "react-quiz-dd78a.appspot.com",
  messagingSenderId: "138507236864",
  appId: "1:138507236864:web:f16ed3b6384f3f15148ae5",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;
