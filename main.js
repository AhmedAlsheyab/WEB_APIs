let x = document.getElementById("else");

function Location1() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}

function GoBack() {
    window.history.back();
}
function MyName() {
    sessionStorage.setItem("name", "Ahmed");
    document.getElementById("MyName").innerHTML = sessionStorage.getItem("name");
}