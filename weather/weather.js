"use strict";
document.getElementById("forecast").addEventListener("click", getData);

function getData(){
  console.log("clicked");
  //get zipcode
  let zipcode =
  document.getElementById("zipcode").value;
  console.log(zipcode);
  getWeather(zipcode);
}

function getWeather(zip) {
    console.log("zip is " + zip);
  let endpoint =
  "https://api.openweathermap.org/data/2.5/weather";
  let apiKey = "2d0c906795437b7a51bc9c4aefede7b3";

  let queryString = "zip=" + zip +
  "&units=imperial&appid=" + apiKey;
  let url = endpoint + "?" + queryString;
  console.log("url is " + url);

  let xhr = new XMLHttpRequest();
  xhr.addEventListener("load",
  responseReceivedHandler);
  xhr.responseType = "json";
  xhr.open("GET", url);
  xhr.send();
}

function responseReceivedHandler() {
  let weatherInfo =
  document.getElementById("weatherInfo");
  if (this.status === 200) {
    let data = this.response;

    weatherInfo.innerHTML =
    "<p>City: " + this.response.name + "</p>" +
    "<p>Current temp: " + data.main.temp + "&deg;F</p>" +
    "<p>Description: " + data.weather[0].description + "</p>" +
    "<p>Humidity: " + data.main.humidity + "%</p>";
  }
  else {
    weatherInfo.innerHTML = "Weather Data Unavailable.";
  }
}
