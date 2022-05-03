const fName = document.querySelector("#firstName").value;
const fMidName = document.querySelector("#firstMiddle").value;
const lMidName = document.querySelector("#lastMiddle").value;
const lName = document.querySelector("#lastName").value;
const photo = document.getElementById("photo");
const synth = window.speechSynthesis;

document.querySelector("#yell").addEventListener("click", run);

function run() {
  // document.querySelector('#placeToYell').innerText = fName + ' ' + fMidName + ' ' + ' ' + lMidName + ' ' + lName

  let choiceArray = ["couple", "color", ""].sort((a, b) => 0.5 - Math.random());
  //Add what you should be doing - conditionals go here

  let choice = choiceArray[0];
  console.log(choice);
  switch (choice) {
    case "couple":
      coupleChoice();
      break;
    case "color":
      colorChoice();
      break;

    default:
      defaultChoice();
      break;
  }

  document.querySelector(
    "#placeToYell"
  ).innerText = `${fName} ${fMidName} ${lMidName} ${lName}`;
}

function coupleChoice() {
  let yellText = `${fName} ${fMidName} we are happy to have found a photo of you with ${lMidName} ${lName} last year.`;
  photo.style.background = 'url("./img/couple.jpg")';
  photo.style.backgroundSize = "cover";
  yellMyText(yellText);
}

function colorChoice() {
  let yellText = `${fName} ${fMidName} we wish you a colorful life with ${lMidName} ${lName}.`;

  photo.style.background = 'url("./img/color.jpg")';
  photo.style.backgroundSize = "cover";
  yellMyText(yellText);
}

function defaultChoice() {
  let yellText = `${fName} ${fMidName} are in love with ${lMidName} ${lName} and will have a baby... or more.`;
  photo.style.background = 'url("./img/babies.jpg")';
  photo.style.backgroundSize = "cover";
  yellMyText(yellText);
}

function yellMyText(yellText) {
  document.querySelector("#placeToYell").innerText = yellText;

  let yellThis = new SpeechSynthesisUtterance(yellText);

  synth.speak(yellThis);
}
