export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "91266b1a30msh2861c71bedc5fbbp12c05fjsn137c5de120d6",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
export const CURRENT_WEATHER_API_URL =
  "https://api.openweathermap.org/data/2.5";
export const CURRENT_WEATHER_API_KEY = "8ab1388cbe68509d738a6fe8fe99df63";
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//CurrentWeather API key = 8ab1388cbe68509d738a6fe8fe99df63
export function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime, 1000);
}
