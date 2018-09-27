// Document ready
// $(document).ready(function () {

    // // Initialize Firebase
    // var config = {
    //     apiKey: "AIzaSyD8M45nlLwzBUXYSkprdR2-uAQHvYJuM6c",
    //     authDomain: "traintime-39c75.firebaseapp.com",
    //     databaseURL: "https://traintime-39c75.firebaseio.com",
    //     projectId: "traintime-39c75",
    //     storageBucket: "traintime-39c75.appspot.com",
    //     messagingSenderId: "888532953730"
    // };

    // firebase.initializeApp(config);

    // var train = $("#train-Name").val().trim();
    var dest = $("#destination-ID").val().trim();
    var fTrain = $("#first-Train").val().trim();
    var frequency = $("#frequency-ID").val().trim();

    var train = $("#train-Name").val().trim();

    $("#button").on("click",function(e){
        e.preventDefault();
        console.log(train);
        console.log(dest);
        console.log(fTrain);
        console.log(frequency);

    });




// });