import firebase from 'firebase';

// add SDK Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyBbD4j3QjXaqYTnEM9Wgy14-Yt-kk6y0eQ",
        authDomain: "team-voting-app-94a9f.firebaseapp.com",
        projectId: "team-voting-app-94a9f",
        storageBucket: "team-voting-app-94a9f.appspot.com",
        messagingSenderId: "1022113416083",
        appId: "1:1022113416083:web:b5a9f3901225524e639e66"
      };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();