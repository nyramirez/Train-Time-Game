// Getting documetn ready
$(document).ready(function () {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyD8M45nlLwzBUXYSkprdR2-uAQHvYJuM6c",
        authDomain: "traintime-39c75.firebaseapp.com",
        databaseURL: "https://traintime-39c75.firebaseio.com",
        projectId: "traintime-39c75",
        storageBucket: "traintime-39c75.appspot.com",
        messagingSenderId: "888532953730"
    };

    firebase.initializeApp(config);

    // Create variables
    var database = firebase.database();

    // Initial values
    var train = "";
    var dest = "";
    var firsTrain = "";
    var freq = "";

    // Current Time
    var currenTime = moment().format('HH:mm');

    // Moment calculations
    var ftConvert = moment().format('HH:mm');
    var diffTime = moment().format('HH:mm');;
    var tRemai = moment().format('HH:mm');
    var minutesForNextTrain = "";
    var nexTrain = "";

    // Pulling information from inputs when button clicks
    $("#add-train").click(function (e) {
        e.preventDefault();
        train = $("#train-Name").val().trim();
        dest = $("#destination-ID").val().trim();
        firsTrain = $("#first-Train").val().trim();
        freq = $("#frequency-ID").val().trim();
        // console.log(train);
        // console.log(dest);
        // console.log(firsTrain);
        // console.log(freq);
        // console.log(currenTime);

        // Moment calculations
        ftConvert = moment(firsTrain,"hh:mm").subtract(1,"years");
        diffTime = moment().diff(moment(ftConvert), "minutes");
        tRemai = diffTime % freq;

        // Minutes for next train
        minutesForNextTrain = freq - tRemai;
        // console.log("***************************");
        // console.log(minutesForNextTrain);
        // console.log("***************************");

        // Next Train
        nexTrain = moment().add(minutesForNextTrain,"minutes");
        // console.log("***************************");
        // console.log(moment(nexTrain).format("hh:mm"));
        // console.log("***************************");

        // Code to get values in database
        database.ref().push({
            trainName: train,
            destination: dest,
            firstTrain: firsTrain,
            frequency: freq,
        });

    });

    database.ref().on("child_added", function (childSnapshot) {

        var data = childSnapshot.val();

        // Logs values on database
        // console.log(data);
        // console.log(data.trainName);
        // console.log(data.destination);
        // console.log(data.firstTrain);
        // console.log(data.frequency);

        $("tbody").append("<tr>\
                            <td>" + data.trainName +  "</td>\
                            <td>" + data.destination + "</td>\
                            <td> Every " + data.frequency + " minutes</td>\
                            <td> " + moment(nexTrain).format("hh:mm") + "</td>\
                            <td> in " + minutesForNextTrain + " minutes</td>\
                        </tr>");


    }, function (errorObject) {
        console.log("Errors handled: " + errorObject.code);
    });




});