import * as firebase from 'firebase';

const config = // Initialize Firebase
  {
    apiKey: "AIzaSyBcO_LdTRYrolIzdBQd1KTjZxN4hYfsHw0",
    authDomain: "teamgoals-57389.firebaseapp.com",
    databaseURL: "https://teamgoals-57389.firebaseio.com",
    projectId: "teamgoals-57389",
    storageBucket: "teamgoals-57389.appspot.com",
    messagingSenderId: "673824030035"
  };

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
