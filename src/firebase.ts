import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBSXe6XAOp4tFlJ65_uoWTYmLhZO9Ecd9k',
  authDomain: 'cms-ticket-4b43a.firebaseapp.com',
  projectId: 'cms-ticket-4b43a',
  storageBucket: 'cms-ticket-4b43a.appspot.com',
  messagingSenderId: '261669304197',
  appId: '1:261669304197:web:a958ebf6d93871dcb676ec',
  measurementId: 'G-ZQK5H8GDK2',
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
