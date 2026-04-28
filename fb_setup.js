/**************************************************************/
// fb_initialise()
// Initialize firebase, connect to the Firebase project.
// 
// Find the config data in the Firebase console. Cog wheel > Project Settings > General > Your Apps > SDK setup and configuration > Config
//
// Input:  n/a
// Return: n/a
/**************************************************************/
  const firebaseConfig = {
  apiKey: "AIzaSyDIi7zG7ZkdRHh9jaLZvEcYMrsw20plGt4",
  authDomain: "database01-c0470.firebaseapp.com",
  databaseURL: "https://database01-c0470-default-rtdb.firebaseio.com",
  projectId: "database01-c0470",
  storageBucket: "database01-c0470.firebasestorage.app",
  messagingSenderId: "435250750417",
  appId: "1:435250750417:web:d22e0a3942c0f57c7436f0",
  measurementId: "G-ZMXJ7ZBXQD"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


 