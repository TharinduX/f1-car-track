import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCsIVewx_nPqk-0g9StLhTv1tE4eYue9tE',
  authDomain: 'f1-track.firebaseapp.com',
  projectId: 'f1-track',
  storageBucket: 'f1-track.appspot.com',
  messagingSenderId: '970388751717',
  appId: '1:970388751717:web:7bad5b99d89c94d2fa8d8c',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
