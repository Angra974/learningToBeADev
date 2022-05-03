// variable assignation
const selector = document.getElementById("selector");
const codeArea = document.getElementById("codeArea");
const myConsole = document.getElementById("myConsole");
const reload = document.getElementById("reload");
const copyClip = document.getElementById("copy");
/* use click event on reload button to launch the selected application
 without using the select menu */
reload.addEventListener("click", () => {
  // clear code area
  codeArea.textContent = "";

  // clear app console
  myConsole.value = "";

  // reload the selected app
  selectFunction(selector.value);
});

copyClip.addEventListener("click", () => {
  if ("" !== codeArea.textContent && null !== codeArea.textContent) {

      if (!navigator.clipboard) {
        codeArea.focus();
        codeArea.select();
        document.execCommand('copy');
      } else {
      navigator.clipboard.writeText(codeArea.textContent);
    }
    writeToConsole("Copied to clipboard!!!");
  }
});

// test the code in the code area of the application
test.addEventListener("click", () => {
  let codeEval = codeArea.textContent;
  console.log(codeEval);
  if (codeEval != "") {
    eval(codeEval);
  }
});

// write information in the console app and the debugger console
function writeToConsole(message) {
  // write in the debugger console
  console.log(message);

  // write in the application console
  myConsole.value = `${message}`;
}
// add event on Click
// *Variables*
// Create a variable, add 10 to it and console log the value
function add10ToVariableAndAlert() {
  // get a number from the user
  let variable = window.prompt("Enter a number?");

  // if user didn't give a number
  if (null !== variable) {
    // convert to number so the sign + will make addition, not concatenate
    variable = Number(variable);

    // write code in the code Area
    codeArea.textContent = `
   /*
    Create a variable, add 10 to it, alert the value
   */
   // variable initialisation
   let variable = ${variable};

   // call to alert
   alert(variable + 10);
  `;

    // write in console
    writeToConsole(`Your input was ${variable} and was added 10`);
  }
}

/* return the remainder of 2 numbers */
function returnRemainder() {
  // get data from user prompt
  let variables = prompt("Enter 2 numbers separate with the sign '-'");

  // if data send
  if (null !== variables) {
    // put data in numbers
    let arr = variables.split("-");
    let [num1, num2] = arr.map(Number);

    // not tasked to evaluate the result
    let remainder = num1 % num2;
    let message = "the remainder is " + remainder;

    // write to code area
    codeArea.textContent = `
   /*
   Create a function that divide one number by another and returns the remainder
    your input are
    num1 = ${num1}
    and
    num2 = ${num2}
   */

   // params num1 : integer
   // params num2 : integer
   // return : integer
   function getRemainder(num1, num2) {
       let remainder = ${num1} % ${num2};

        // return the value
        return remainder;
    }

    // call the function
    getRemainder(${num1}, ${num2});
  `;

    writeToConsole(`The remainder is ${remainder}`);
  }
}

function substractWithNumbers() {
  let variables = prompt("Enter 4 numbers separate with the sign -");
  let vars = variables.split("-");
  let total = vars[0];
  for (i = 1; i < vars.length; i++) {
    total -= vars[i];
  }

  codeArea.textContent = `
    /*
     num1 = ${vars[0]};
     num2 = ${vars[1]};
     num3 = ${vars[2]};
     num4 = ${vars[3]};
    */
    function substractFourNumbers(num1, num2, num3, num4) {
        return num1 - num2 - num3 - num4;
    }

    /* we create an alert here just for verification purpose. You can see the result in the console already. */

    alert("the result is " + substractFourNumbers(${vars[0]},${vars[1]},${vars[2]},${vars[3]}));
  `;
  writeToConsole(`${vars.join("-")} + '=' ${total}`);
}

function jumanjiNumbers() {
  let numbers = prompt("Enter 2 numbers separate with the sign -");
  let arr = numbers.split("-");

  // convert all array values to number
  let vars = arr.map(Number);

  codeArea.textContent = `
    /*
        num1 = ${vars[0]};
        num2 = ${vars[1]}
    */

        function jumanjiNumbers(num1, num2) {
            let addition = num1 + num2;
            if(addition > 50) {
                alert("Jumanji");
            }
        }

        jumanjiNumbers(${vars[0]}, ${vars[1]});
    `;

  console.log(vars[0] + " " + vars[1]);
  writeToConsole(vars[0] + " " + vars[1]);
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiple3Numbers() {
  let variables = prompt("Enter 3 numbers separate by the sign '-'");
  if (null !== variables) {
    // https://javascript.info/destructuring-assignment
    let arr = variables.split("-");

    // convert all array values to number
    let [num1, num2, num3] = arr.map(Number);
    let total = num1 + num2 + num3;
    let isDivizible = total % 3 === 0 ? " " : " not ";
    codeArea.textContent = `
    /*
        num1 = ${num1};
        num2 = ${num2};
        num3 = ${num3};
        */

        function divideBy3(num1, num2, num3) {
            let total = num1 + num2 + num3;

            // no rest so divisible by 3
            if(total % 3 === 0) {
                alert('ZEBRA');
            }
        }

        divideBy3(${num1}, ${num2}, ${num3});

    `;

    writeToConsole(
      ` ${num1} +  ${num2} + ${num3} = ${total} is${isDivizible}by 3`
    );
  }
}

function addVariableToConsole() {
  let variable = prompt("Give a number and we wil write it in the console");
  if (null !== variable) {
    writeToConsole(`you have typed ${variable}`);
  }
}

function selectFunction(value) {
  // codeArea.textContent = "";
  if (value == 0) {
    add10ToVariableAndAlert();
  }
  if (value == 1) {
    returnRemainder();
  }
  if (value == 2) {
    substractWithNumbers();
  }
  if (value == 3) {
    jumanjiNumbers();
  }

  if (4 == value) {
    multiple3Numbers();
  }

  if (5 == value) {
    addVariableToConsole();
  }
  console.log("You selected: ", value);
}

selector.addEventListener("change", function () {
  selectFunction(this.value);
});

// Create a function that divides one number by another and returns the remainder

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
