// Initialize Firebase
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

// Declare empty variables for user input
var name = "";
var destination = "";
var firstTrainTime = "";
var frequency = "";

// Added click listener to grab user input and send to firebase
$("button").on("click", function() {
    name = $("#trainNameInput").val().trim();
    destination = $("#destinationInput").val().trim();
    firstTrainTime = moment($("#firstTrainTimeInput").val().trim(), "hh:mm").subtract(1, "years").format("X");
    frequency = $("#frequencyInput").val().trim();

    firebase.database().ref().set({
        name:name,
        destination:destination,
        firstTrainTime:firstTrainTime,
        frequency:frequency
    })
})

// Calculations to determine calculated variables (next arrival and minutes away) using moment.js
var now = moment();
var trainTime = moment.unix(firstTrainTime).format("hh:mm");
var difference = moment().diff(moment(trainTime), "minutes");
var remainder = difference % frequency;
var minutesAway = frequency-remainder;
var nextArrival = moment().add(minutesAway, "minutes").format("hh:mm)");
console.log("Current Time: " + moment(currentTime).format("hh:mm"));

// Appending new entries to table
firebase.database().ref().on("value", function(snapshot){
    var newEntryRow = $("<tr>");
    var rowContent = "<td>" + name + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + nextArrival + "</td><td>" + minutesAway + "</td>";

    console.log(snapshot.val());
})