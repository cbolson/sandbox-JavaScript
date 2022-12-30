import "./style.css";
import { getWeather } from "./weather";
import { ICON_MAP } from "./iconsMap";

navigator.geolocation.getCurrentPosition(positionSuccess, positionError);

function positionSuccess({ coords }) {
  getWeather(
    coords.latitude,
    coords.longitude,
    Intl.DateTimeFormat().resolvedOptions().timeZone
  )
    .then(renderWeather)
    .catch((e) => {
      console.log(e);
      alert("Error getting weather");
    });
}

function positionError() {
  alert(
    "Error getting your location.  Make sure you allow us ton use your location and refresh the page"
  );
}

function renderWeather({ current, daily, hourly }) {
  renderCurrentWeather(current);
  renderDailyWeather(daily);
  //renderHourlyWeather(hourly);
  document.body.classList.remove("blurred");
}

function setValue(selector, value, { parent = document } = {}) {
  parent.querySelector(`[data-${selector}]`).textContent = value;
}

function getIconUrl(iconCode) {
  return `icons/${ICON_MAP.get(iconCode)}.svg`;
}

const currentIcon = document.querySelector("[data-current-icon]");

function renderCurrentWeather(current) {
  currentIcon.src = getIconUrl(current.iconCode);

  setValue("current-temp", current.currentTemp);
  setValue("current-high", current.highTemp);
  setValue("current-low", current.lowTemp);
  //setValue("current-fl-high", current.highFeelsLike);
  //setValue("current-fl-low", current.lowFeelsLike);
  setValue("current-wind", current.windSpeed);
  setValue("current-precip", current.precip);
}

const DAY_FORMATTER = new Intl.DateTimeFormat("es-ES", { weekday: "short" });
const dailySection = document.querySelector("[data-day-section]");
const dayCardTemplate = document.querySelector("#day-card-template");

function renderDailyWeather(daily) {
  dailySection.innerHTML = "";

  daily.forEach((day) => {
    const element = dayCardTemplate.content.cloneNode(true);
    setValue("date", DAY_FORMATTER.format(day.timestamp), { parent: element });
    setValue("temp", day.maxTemp, { parent: element });
    element.querySelector("[data-icon]").src = getIconUrl(day.iconCode);

    dailySection.append(element);
  });
}

// const HOUR_FORMATTER = new Intl.DateTimeFormat(undefined, {
//   hour: "numeric",
//   hour12: false,
//   minute: "numeric",
// });
// const hourlySelection = document.querySelector("[data-hour-section]");
// const hourCardTemplate = document.querySelector("#hour-row-template");

// function renderHourlyWeather(hourly) {
//   hourlySelection.innerHTML = "";

//   hourly.forEach((hour) => {
//     const element = hourCardTemplate.content.cloneNode(true);
//     setValue("temp", hour.temp, { parent: element });
//     //setValue("fl-temp", hour.feelsLike, { parent: element });
//     setValue("wind", hour.windSpeed, { parent: element });
//     setValue("precip", hour.precip, { parent: element });
//     setValue("day", DAY_FORMATTER.format(hour.timestamp), { parent: element });
//     setValue("time", HOUR_FORMATTER.format(hour.timestamp), {
//       parent: element,
//     });

//     element.querySelector("[data-icon]").src = getIconUrl(hour.iconCode);

//     hourlySelection.append(element);
//   });
// }
