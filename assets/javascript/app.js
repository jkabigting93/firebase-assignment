var firebaseConfig = {
    apiKey: "AIzaSyDQJ27gQO_jJW-FUJbvkfIpeQ9WX9tjFM8",
    authDomain: "fir-assignment-2019.firebaseapp.com",
    databaseURL: "https://fir-assignment-2019.firebaseio.com",
    projectId: "fir-assignment-2019",
    storageBucket: "fir-assignment-2019.appspot.com",
    messagingSenderId: "1077675087519",
    appId: "1:1077675087519:web:1f5dfc0c19fd31d9afb4aa",
    measurementId: "G-BPCTSBW4LB"
  };

  firebase.initializeApp(firebaseConfig);

  var name = "";
  var destination = "";
  var firstTrainTime = "";
  var frequency = "";

  $("button").on("click", function() {
      name = $("#trainNameInput").val().trim();
      destination = $("#destinationInput").val().trim();
      firstTrainTime = $("#firstTrainTimeInput").val().trim();
      frequency = $("#frequencyInput").val().trim();

      firebase.database().ref().set({
          name:name,
          destination:destination,
          firstTrainTime:firstTrainTime,
          frequency:frequency
      })
  })

  firebase.database().ref().on("value", function(snapshot){
      console.log(snapshot.val());
  })