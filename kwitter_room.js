
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDU4aPoq8GhLJ9qcX6mvgU_qUhgzGQOWUU",
      authDomain: "kwitter-6de15.firebaseapp.com",
      databaseURL: "https://kwitter-6de15-default-rtdb.firebaseio.com",
      projectId: "kwitter-6de15",
      storageBucket: "kwitter-6de15.appspot.com",
      messagingSenderId: "594820265605",
      appId: "1:594820265605:web:8ce9f7bcf14345d99e1bec",
      measurementId: "G-4146TWZJKW"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
