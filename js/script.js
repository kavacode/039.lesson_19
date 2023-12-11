const apiUrl = "http://api.openweathermap.org/data/2.5/weather";
const apiKey = "a0b60008c5b29e00dc80d85473a517b1";
const units = "metric";

async function getWeather() {
  const cityInput = document.getElementById("cityInput");
  const city = cityInput.value;

  if (!city) {
    alert("Введіть назву міста!");
    return;
  }

  const url = `${apiUrl}?q=${city}&units=${units}&APPID=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const weatherDataContainer = document.getElementById(
      "weatherDataContainer"
    );

    weatherDataContainer.innerHTML = `
		<h3>Погода в місті ${data.name}</h3>
		<p>Температура: ${data.main.temp}°C</p>
		<p>Тиск: ${data.main.pressure} hPa</p>
		<p>Опис: ${data.weather[0].description}</p>
		<p>Вологість: ${data.main.humidity}%</p>
		<p>Швидкість вітру: ${data.wind.speed} m/s</p>
		<p>Напрям у градусах: ${data.wind.deg}°</p>
		<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" class="weather-icon" alt="Weather Icon">
	 `;
  } catch (error) {
    console.error("Помилка при отриманні погоди:", error);
  }
}
