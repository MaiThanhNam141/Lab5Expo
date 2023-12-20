import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import firebaseStore from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDm9I6-7g6VRq7CkoxaR3wy7k5ZuwP63VM",
    authDomain: "lab5expo.firebaseapp.com",
    projectId: "lab5expo",
    storageBucket: "lab5expo.appspot.com",
    messagingSenderId: "734654999163",
    appId: "1:734654999163:web:a40e769c0eba62498290de"
};

if (!firebaseStore.apps.length) {
  firebaseStore.initializeApp(firebaseConfig);
}
export { firebaseStore };
export const FIRE_BASE_EXPO_APP = initializeApp(firebaseConfig);
export const FIRE_BASE_AUTH = getAuth(FIRE_BASE_EXPO_APP);
