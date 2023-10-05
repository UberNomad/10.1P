import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC1ex9mYiYxh7tsXcbecwAMyHrbEkL2sGE",
  authDomain: "deakinproject-43681.firebaseapp.com",
  projectId: "deakinproject-43681",
  storageBucket: "deakinproject-43681.appspot.com",
  messagingSenderId: "781226370747",
  appId: "1:781226370747:web:21082a53ed384754ce2b9e",
  measurementId: "G-49GZZ8XKZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
