var firebaseConfig = {
    apiKey: "AIzaSyDIqchHUz7RRDnaO0a_q_zh2zuiUeI9bSI",
    authDomain: "kwitter-hw-3dc3e.firebaseapp.com",
    projectId: "kwitter-hw-3dc3e",
    storageBucket: "kwitter-hw-3dc3e.appspot.com",
    messagingSenderId: "410092188637",
    appId: "1:410092188637:web:d7d33d19fd7f32a6abfc34"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
