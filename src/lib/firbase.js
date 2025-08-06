import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2a8Rz68vojCIFOxyyiCVNgbUjOTJqNNQ",
  authDomain: "bittersoul-73d30.firebaseapp.com",
  projectId: "bittersoul-73d30",
  storageBucket: "bittersoul-73d30.firebasestorage.app",
  messagingSenderId: "822049824040",
  appId: "1:822049824040:web:2a40c84a10c3151b73c41d",
  measurementId: "G-XV8S39LP1M"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
