user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = user_name;
  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyAgGlckpWI5AFIIS_lGMwypoPAcyjjBvyM",
      authDomain: "kwitter-3dad2.firebaseapp.com",
      databaseURL: "https://kwitter-3dad2-default-rtdb.firebaseio.com",
      projectId: "kwitter-3dad2",
      storageBucket: "kwitter-3dad2.appspot.com",
      messagingSenderId: "689066319311",
      appId: "1:689066319311:web:d402c2fbbddf745f6906ba"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_name +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
