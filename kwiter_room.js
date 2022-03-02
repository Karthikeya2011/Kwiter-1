const firebaseConfig = {
    apiKey: "AIzaSyCBFG73NenBJ0OlYFGDPjYyMBS-t0rLQj0",
    authDomain: "kwitter-c47c8.firebaseapp.com",
    projectId: "kwitter-c47c8",
    storageBucket: "kwitter-c47c8.appspot.com",
    messagingSenderId: "803329744029",
    appId: "1:803329744029:web:4804474364a89387b1c874",
    measurementId: "G-1Z42989BF2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
