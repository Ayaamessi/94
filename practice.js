
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyA-mChHOZfmSGfVYJbUUnEqXbcuKH3pPXo",
    authDomain: "kwitter-3b314.firebaseapp.com",
    databaseURL: "https://kwitter-3b314-default-rtdb.firebaseio.com",
    projectId: "kwitter-3b314",
    storageBucket: "kwitter-3b314.appspot.com",
    messagingSenderId: "330792728806",
    appId: "1:330792728806:web:94f8f45c053ca1cfce2327",
    measurementId: "G-DNRESYTH77"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 function addUser()
 {
     user_name =document.getElementById("user_name").value;
     firebase.database().ref("/").child(user_name).update({
         purpose : "adding user"
     });
 }