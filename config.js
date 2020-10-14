import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCnQAUY2XoIoNIbE48DGcYwEFn5Hjca7kA",
  authDomain: "attendance-app-a0001.firebaseapp.com",
  databaseURL: "https://attendance-app-a0001.firebaseio.com",
  projectId: "attendance-app-a0001",
  storageBucket: "attendance-app-a0001.appspot.com",
  messagingSenderId: "1076906779158",
  appId: "1:1076906779158:web:454d0ef824fb7350790b37"
};


  firebase.initializeApp(firebaseConfig);

export default firebase.database();