import firebase from 'firebase';

  const prodConfig = {
    apiKey: "AIzaSyAGrU8Td0-y3PqSTdAinIXVZgRK4QNhCK0",
    authDomain: "pixelhead-92cac.firebaseapp.com",
    databaseURL: "https://pixelhead-92cac.firebaseio.com",
    projectId: "pixelhead-92cac",
    storageBucket: "pixelhead-92cac.appspot.com",
    messagingSenderId: "70940085799"
};

const devConfig = {
  apiKey: "AIzaSyAGrU8Td0-y3PqSTdAinIXVZgRK4QNhCK0",
  authDomain: "pixelhead-92cac.firebaseapp.com",
  databaseURL: "https://pixelhead-92cac.firebaseio.com",
  projectId: "pixelhead-92cac",
  storageBucket: "pixelhead-92cac.appspot.com",
  messagingSenderId: "70940085799"
};

const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig;

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();