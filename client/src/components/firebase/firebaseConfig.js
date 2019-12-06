var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "find-it-quick.firebaseapp.com",
  databaseURL: "https://find-it-quick.firebaseio.com",
  projectId: "find-it-quick",
  storageBucket: "find-it-quick.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGEINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
};

export default firebaseConfig;