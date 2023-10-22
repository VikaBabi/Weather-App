let now = new Date();

let date = now.getDate();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];
// let hours = now.getHours();
// let minutes = now.getMinutes();

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
const d = new Date();
let hours = addZero(d.getHours());
let minutes = addZero(d.getMinutes());
let time = hours + ":" + minutes;

let currentDate = document.querySelector(".current");
currentDate.innerHTML = `${day} ${hours}:${minutes}`;

function search() {
  let searchInput = document.querySelector("#search-city-value");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
  let cityValue = searchInput.value;
  return cityValue;
}

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector(".temperaturecurrent");
  temperatureElement.innerHTML = `${temperature}C`;
  console.log(response)
}

let form = document.querySelector("#form1");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let cityValue = search();
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let appId = "1fd8093fa5ff12d796d7de756cc9d6b9";
  let units = "metric";
  let apiUrl = `${apiEndpoint}?q=${cityValue}&appId=${appId}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
});
