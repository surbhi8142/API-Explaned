const apikey = "https://api.nasa.gov/planetary/apod?api_key=7QPw7tMR5moSRV6Tu8fcPK0PT3TNVeB4DdHpXqKU";

function processDate(){
  event.preventDefault();
  var year = document.querySelector("#year").value;
  var month = document.querySelector("#month").value;
  var day = document.querySelector("#day").value;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", apikey + "&date=" + year + "-" + month + "-" + day);
  xhr.send();
  xhr.onload = function() {
    var body = JSON.parse(xhr.response);
    console.log(body);
    document.querySelector("#title").textContent = body.title;
    document.querySelector("#date").textContent = body.date;
    document.querySelector("#pic").src = body.hdurl;
    document.querySelector("#description").textContent = body.explanation;
  }
}