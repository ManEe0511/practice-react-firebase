// // Import the functions you need from Firebase SDK
// import {initializeApp} from 'firebase/app';
// import {getFirestore, Timestamp} from 'firebase/firestore';
// import {getAuth} from 'firebase/auth';

// const firebaseConfig = {
//     apiKey: 'AIzaSyC02XWU7N_ZPYPKPEEg79Wx9gzXxnnPOfE',
//     authDomain: 'thedojosite-a75a1.firebaseapp.com',
//     projectId: 'thedojosite-a75a1',
//     storageBucket: 'thedojosite-a75a1.firebasestorage.app',
//     messagingSenderId: '859485856419',
//     appId: '1:859485856419:web:49b2bade7a676397fd1516',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Init services
// const projectFirestore = getFirestore(app);
// const projectAuth = getAuth(app);

// // Timestamp
// const timestamp = Timestamp;

// export {projectFirestore, projectAuth, timestamp};

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyC02XWU7N_ZPYPKPEEg79Wx9gzXxnnPOfE',
    authDomain: 'thedojosite-a75a1.firebaseapp.com',
    projectId: 'thedojosite-a75a1',
    storageBucket: 'thedojosite-a75a1.firebasestorage.app',
    messagingSenderId: '859485856419',
    appId: '1:859485856419:web:49b2bade7a676397fd1516',
};
// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
// const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export {projectFirestore, projectAuth, timestamp};
