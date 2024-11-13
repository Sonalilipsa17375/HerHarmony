// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth , initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXndkkfupr36ocDi-WlPfccSmvjLw8WME",
  authDomain: "herharmony-65a54.firebaseapp.com",
  projectId: "herharmony-65a54",
  storageBucket: "herharmony-65a54.firebasestorage.app",
  messagingSenderId: "308006659804",
  appId: "1:308006659804:web:ae013042c6ee5263fe7619",
  measurementId: "G-JHHQ76V3FG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});