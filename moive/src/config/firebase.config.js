

// import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore';
// import { getAuth } from "firebase/auth";
// // import { GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCvVkA07Vmo2XKXPw__3mk_I3h6_i21kuU",
//   authDomain: "megamart-7a376.firebaseapp.com",
//   projectId: "megamart-7a376",
//   storageBucket: "megamart-7a376.firebasestorage.app",
//   messagingSenderId: "773473707889",
//   appId: "1:773473707889:web:aea30dc32cc19b165e38d0",
//   measurementId: "G-KB95Q2288S"
// };


// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// export const auth = getAuth(app);
// // export const provider = new GoogleAuthProvider();

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDw98J8ugNM6VyC2JTcEHpQI02bYPNMSpU",
  authDomain: "moive-1af23.firebaseapp.com",
  projectId: "moive-1af23",
  storageBucket: "moive-1af23.firebasestorage.app",
  messagingSenderId: "295125554776",
  appId: "1:295125554776:web:48b79835be2147dde49c2d"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

