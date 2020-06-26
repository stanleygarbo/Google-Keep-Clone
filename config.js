const firebaseConfig = {
    apiKey: "AIzaSyDCW9IecQXjMxNSxqIX8-dMwcqz4Lt_jhk",
    authDomain: "keep-clone-18b45.firebaseapp.com",
    databaseURL: "https://keep-clone-18b45.firebaseio.com",
    projectId: "keep-clone-18b45",
    storageBucket: "keep-clone-18b45.appspot.com",
    messagingSenderId: "1014518256494",
    appId: "1:1014518256494:web:d945392b69026dcfda277f",
    measurementId: "G-BLL4H9D926"
  };

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()