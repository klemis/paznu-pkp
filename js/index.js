const oneWay = document.getElementById("one-way");
const roundTrip = document.getElementById("roundtrip");
const returnDate = document.getElementById("return-date");
const fromLocation = document.getElementById("fromLocation");
const destination = document.getElementById("destination");
const leaveTime = document.getElementById("leaveTime");
const arriveTime = document.getElementById("arriveTime");

returnDate.style.display = "none";


oneWay.onclick = function () {
    returnDate.style.display = "none";
}

roundTrip.onclick = function () {
    returnDate.style.display = "block";
}

function redirect() {
    if (isOneWayValid()){
        window.location.replace("tickets.html");
    }

    if (isRoundTripValid()){
        window.location.replace("tickets_two_way.html");
    }
}

function isOneWayValid(){
    var now = new Date();
    return oneWay.checked === true
        && leaveTime.checkValidity() === true
        && fromLocation.checkValidity() === true
        && destination.checkValidity() === true
        && new Date(leaveTime.value) > now;
}

function isRoundTripValid() {
    var now = new Date();
    return roundTrip.checked === true
        && leaveTime.checkValidity() === true
        && arriveTime.checkValidity() === true
        && fromLocation.checkValidity() === true
        && destination.checkValidity() === true
        && new Date(leaveTime.value) > now
        && new Date(arriveTime.value) > now;
}