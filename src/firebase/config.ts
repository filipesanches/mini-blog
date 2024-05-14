// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBJH6q-tYas4VlYhX1VJ00vjEYrWC6Q6Fw',
  authDomain: 'miniblog-6b923.firebaseapp.com',
  projectId: 'miniblog-6b923',
  storageBucket: 'miniblog-6b923.appspot.com',
  messagingSenderId: '692016193979',
  appId: '1:692016193979:web:91c57c8ba599798a16e49e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
