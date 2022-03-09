// for loader:

const toogleLoader = (displayProperty) => {
  document.getElementById("loader").style.display = displayProperty;
};

const API_KEY = `3b551b57c383993273a985d14a369d1e`;

document.getElementById("search-btn").addEventListener("click", async () => {
  const countryName = document
    .getElementById("search-input")
    .value.toLowerCase();

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${API_KEY}&units=metric`;

  const res = await fetch(apiUrl);

  const data = await res.json();

  // see the loader when loading data:
  toogleLoader("block");

  displayWeather(data);

  //   clear the field:
  document.getElementById("search-input").value = "";
});

const displayWeather = (weather) => {
  console.log(weather);

  if (document.getElementById("search-input").value == "") {
    alert("please Enter some country Name");
    toogleLoader("none");
  } else {
    //   for city name:
    const city = document.getElementById("city");
    city.textContent = weather.name;

    //   for city degree:

    const cityWeather = document.getElementById("city-weather");
    cityWeather.innerHTML = `${weather.main.temp}&deg;C`;

    //   for type of weather:

    const cityTypeWeather = document.getElementById("weather-type");
    cityTypeWeather.textContent = weather.weather[0].main;

    //   for weather icon:
    const weatherIconURL = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png

 
`;
    const weatherIcon = document.getElementById("weather-icon");
    weatherIcon.setAttribute("src", weatherIconURL);

    toogleLoader("none");
  }
};
