//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector("#check").addEventListener("click", check);

function check() {
  const day = document.querySelector("#day").value.toLowerCase();
  let resultText = "";
  if (day === "tuesday" || day === "thursday") {
    resultText = "YOU HAVE CLASS";
  } else if (day === "saturday" || day === "sunday") {
    resultText = "It's The Weekend";
  } else if (day === "wednesday") {
    resultText = "It's HUMPDAY";
  } else {
    resultText = "BORING";
  }

  console.log(resultText);
  document.getElementById("placeToSee").textContent = resultText;
}
