const fahrenheit = document.getElementById("fahrenheit");
const rankine = document.getElementById("rankine");
const celsius = document.getElementById("celsius");
const kelvin = document.getElementById("kelvin");

const btnFahrenheit = document.querySelector(".fahrenheit > button");
const btnRankine = document.querySelector(".rankine > button");
const btnCelsius = document.querySelector(".celsius > button");
const btnKelvin = document.querySelector(".kelvin > button");

const degreeSelect = document.getElementById("degreeSelect");

const convertFunctions = {
  fahrenheit: convertFromFahrenheit,
  rankine: convertFromRankine,
  celsius: convertFromCelsius,
  kelvin: convertFromKelvin,
};

// select all button with class btn
const btns = document.querySelectorAll(".btn");

function convertFromFahrenheit(value = undefined) {
  console.log(Number(value));
  console.log("convertFromFahrenheit");
  let fahrenheitValue =
    value !== undefined ? Number(value) : Number(fahrenheit.value);
  let rankinValue = fahrenheitValue + 459.67;
  console.log(value);
  fahrenheit.value = fahrenheitValue.toFixed(3);
  rankine.value = (fahrenheitValue + 459.67).toFixed(3);
  kelvin.value = (rankinValue * (5 / 9)).toFixed(3);
  celsius.value = ((fahrenheitValue - 32) * (5 / 9)).toFixed(3);
}

function convertFromRankine(value = undefined) {
  console.log("convertFromFahrenheit");
  let rankinValue = value !== undefined ? Number(value) : Number(rankine.value);
  console.log(rankinValue);
  rankine.value = rankinValue;
  fahrenheit.value = (rankinValue - 459.67).toFixed(3);
  kelvin.value = (rankinValue * (5 / 9)).toFixed(3);
  celsius.value = (((rankinValue - 491.67) * 5) / 9).toFixed(3);
}

function convertFromCelsius(value = undefined) {
  console.log("convertFromFahrenheit");
  let celsiusValue =
    value !== undefined ? Number(value) : Number(celsius.value);
  console.log(celsiusValue);
  celsius.value = celsiusValue;
  fahrenheit.value = (celsiusValue * (9 / 5) + 32).toFixed(3);
  rankine.value = (((celsiusValue + 273.15) * 9) / 5).toFixed(3);
  kelvin.value = (celsiusValue + 273.15).toFixed(3);
}

function convertFromKelvin(value = undefined) {
  console.log("convertFromFahrenheit");
  let kelvinValue = value !== undefined ? Number(value) : Number(kelvin.value);
  console.log(kelvinValue);
  kelvin.value = kelvinValue;
  fahrenheit.value = ((kelvinValue * 9) / 5 - 459.67).toFixed(3);
  rankine.value = ((kelvinValue * 9) / 5).toFixed(3);
  celsius.value = (kelvinValue - 273.15).toFixed(3);
}

btnFahrenheit.addEventListener("click", () => {
  convertFromFahrenheit();
});

btnRankine.addEventListener("click", () => {
  convertFromRankine();
});

btnCelsius.addEventListener("click", () => {
  convertFromCelsius();
});

btnKelvin.addEventListener("click", () => {
  convertFromKelvin();
});

document.getElementById("reset").onclick = resetAll;

/* we don't set values as 0 because 0 can be converted
to another data in the app */
function resetAll() {
  fahrenheit.value = "";
  celsius.value = "";
  kelvin.value = "";
  rankine.value = "";
}

// for each btn
btns.forEach((item) =>
  // add event to each click
  item.addEventListener("click", (e) => {
    convertFunctions[degreeSelect.value](e.target.textContent);
  })
);
