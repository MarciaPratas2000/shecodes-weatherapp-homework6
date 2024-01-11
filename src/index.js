/*let weather = {
  paris: { temp: 19.7, humidity: 80 },
  tokyo: { temp: 17.3, humidity: 50 },
  lisbon: { temp: 30.2, humidity: 20 },
  "san francisco": { temp: 20.9, humidity: 100 },
  oslo: { temp: -5, humidity: 20 },
};

      let cityName = null;
      let userAnswer = prompt("Enter a city:");

      if (userAnswer !== undefined && userAnswer !== null) {
        userAnswer = userAnswer.trim().toLowerCase();
      }

      function celsius_to_fahrenheit(celsiusDegrees) {
        let cityTemperatureFahrenheit = celsiusDegrees * (9 / 5) + 32;
        return Math.round(cityTemperatureFahrenheit);
      }

      function cityNameVerifier(mainObject) {
        for (let prop in mainObject) {
          if (prop === userAnswer) {
            cityName = prop;
            return true;
          }
        }
        // statement is outside the for loop, allowing the loop to complete its iterations before returning false if the city is not found.
        return false;
      }

      function get_cityData() {
        let boleeanCity = cityNameVerifier(weather);
        if (boleeanCity === true) {
          let cityTemperature = Math.round(weather[cityName]["temp"]);
          let cityHumidity = Math.round(weather[cityName]["humidity"]);
          let cityTemperatureFahrenheitConverted =
            celsius_to_fahrenheit(cityTemperature);
          alert(
            `It is currently ${cityTemperature}ºC (${cityTemperatureFahrenheitConverted}°F) in ${cityName}  with a humidity of ${cityHumidity} %`
          );
          return {
            cityName,
            cityHumidity,
            cityTemperature,
            cityTemperatureFahrenheitConverted,
          };
        }
        if (userAnswer === null) {
          //because cancel button of prompt returns null and keeps running the rest of the program.
        } else {
          //case in which the city is not recognizable
          alert(
            `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+ ${userAnswer}`
          );
        }
      }
     
//let result = get_cityData();
*/
function formatDate(date) {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let currentDay = days[date.getDay()];
    let currentHour = date.getHours();
    let currentMinutes = date.getMinutes();
    if (currentMinutes < 10) {
      currentMinutes = `0${currentMinutes}`;
    }
  
    if (currentHour < 10) {
      currentHour = `0${currentHour}`;
    }
    let nowDate = `${currentDay} ${currentHour}:${currentMinutes}`;
    return nowDate;
  }
  
  let time = document.querySelector("#date-now");
  time.innerHTML = formatDate(new Date());
  
  function displayTemperature(response) {
    let city = response.data.city;
    let currentCity = document.querySelector("#current-city");
    currentCity.innerHTML = city;
  
    let temperature = Math.round(response.data.temperature.current);
    let currentTemp = document.querySelector(".current-temperature-value");
    currentTemp.innerHTML = temperature;
  }
  
  function showNewCityInfo(event) {
    event.preventDefault();
    let newCityname = "Paris"; // Assuming a default value
    let inputCity = document.querySelector("#search-input");
    newCityname = inputCity.value.trim();
  
    // Update the API URL with the newCityname
    let apiKey = "ec0ft3ef184fa26o40bf0860bad82dc8";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${newCityname}&key=${apiKey}&units=metric`;
    console.log(apiUrl);
    // Make the API call
    axios.get(apiUrl).then(displayTemperature);
  }
  
  let form = document.querySelector("#city-form");
  form.addEventListener("submit", showNewCityInfo);
  