// variables declaration
const calculate = document.querySelector("button");

// function declaration
function calculateBmi(mass, height) {
  return mass / height ** 2;
}

function checkNotEmpty(value, name) {
  if (
    value === undefined ||
    value === null ||
    value === 0 ||
    value === "" ||
    isNaN(value)
  ) {
    let message = name.split(/(\d)/).join(" ") + " is empty";
    document.getElementById("result").textContent = message;
    return false;
  }
  return true;
}

calculate.addEventListener("click", () => {
  let result = document.getElementById("result");
  result.innerHTML = "";
  let person1Mass = document.getElementById("person1Mass").value;
  let person1Height = document.getElementById("person1Height").value;

  let person2Mass = document.getElementById("person2Mass").value;
  let person2Height = document.getElementById("person2Height").value;
  let controlOk = [];

  [
    [person1Mass, "person1Mass"],
    [person2Mass, "person2Mass"],
    [person1Height, "person1Height"],
    [person2Height, "person2Height"],
  ].forEach((item) => controlOk.push(checkNotEmpty(...item)));

  // no empty values found
  if (controlOk.indexOf(false) === -1) {
    let bmi1 = calculateBmi(person1Mass, person1Height);
    let bmi2 = calculateBmi(person2Mass, person2Height);
    let higherBmi = bmi1 > bmi2 ? 1 : 2;

    result.innerHTML = `Person 1 bmi = ${bmi1} -- Person 2 bmi = ${bmi2}.<br /> <strong>Person ${higherBmi} has the greater Bmi</strong>`;

    console.log(bmi1, bmi2);
  }
});
