// select all buttons by class
const btns = document.querySelectorAll(".btn");

//
const calc = document.getElementById("calc");
const result = document.getElementById("result");
const substract = document.querySelector("#substract");
const powRacine = document.querySelector("#powRacine");
const clear = document.querySelector("#clear");
const back = document.querySelector("#back");

const substractContent = document.querySelector("#substract .content");
const powRacineContent = document.querySelector("#powRacine .content");
const clearContent = document.querySelector("#clear .content");
const backContent = document.querySelector("#back .content");

var bracketOpen = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let lastChar = calc.textContent.slice(-1);
    let val = e.target.getAttribute("data-value");
    let calcValue = calc.textContent;
    console.log(e);
    // if not a number, it's an operation or changing abs value
    if (isNaN(val)) {
      switch (val) {
        case ".":
          val = ["/", "*", "+", "-"].includes(lastChar)
            ? "0."
            : calc.textContent.includes(".")
            ? ""
            : ".";
          calc.textContent = calc.textContent + val;
          break;
        case "/":
          val = ["/", "*", "+"].includes(lastChar) ? "" : val;
          calc.textContent = calc.textContent + val;
          break;
        case "-":
          val = ["-"].includes(lastChar) ? "" : val;
          calc.textContent = calc.textContent + val;
          break;
        case "+":
          val = ["/", "*", "+"].includes(lastChar) ? "" : val;
          calc.textContent = calc.textContent + val;
          break;
        case "*":
          val = ["/", "*", "+"].includes(lastChar) ? "" : val;
          calc.textContent = calc.textContent + val;
          break;
        case "²":
          if (["*", "/", "+", "²", "√"].includes(lastChar)) return;

          result.textContent = Math.pow(eval(calc.textContent), 2);
          break;
        case "√":
          if (["*", "/", "+", "²", "√"].includes(lastChar)) return;
          result.textContent = Math.sqrt(eval(calc.textContent));
          break;
        case "(":
          console.log(typeof lastChar);
          // if already something in the calculator, we add a multiplication
          val =
            calc.textContent.length > 1 &&
            ["O", "1", "2", "3", "4", "5", "6", "7", "8", "9", "1O"].includes(
              lastChar
            )
              ? "*" + val
              : val;
          bracketOpen++;
          calc.textContent =
            calc.textContent == 0 ? val : calc.textContent + val;
          break;
        case ")":
          if (bracketOpen > 0) {
            bracketOpen--;
            calc.textContent =
              calc.textContent == 0 ? val : calc.textContent + val;
          }
          break;
        case "±":
          calc.textContent = eval(calc.textContent) * -1;
          break;
        case "CE":
          calc.textContent = 0;
          break;
        case "←":
          // if calc content == 0, do nothing
          if (calc.textContent != 0) {
            if (lastChar === ")") bracketOpen++;
            calc.textContent =
              calc.textContent.length === 1 ||
              (calc.textContent[0] == "-" && calc.textContent.length === 2)
                ? 0
                : calc.textContent.slice(0, calc.textContent.length - 1);
          }
          break;
        case "fn":
          holdFn();
          break;
        case "=":
          try {
            result.textContent = eval(calc.textContent);
          } catch (err) {
            calc.style.backgroundColor = "red";
          } finally {
            setTimeout(restoreColor, 500);
          }
          break;
      }
    } else {
      calc.textContent =
        calc.textContent == 0 && calc.textContent.length < 2
          ? val
          : calc.textContent + val;
    }
    console.log(e.target.getAttribute("data-value"));
  });
});

function restoreColor() {
  console.log(calc.textContent.slice(-1));
  calc.style.backgroundColor = "transparent";
}
function holdFn() {
  const fn = document.getElementById("fn");
  if (fn.classList.contains("hold")) {
    fn.classList.remove("hold");

    /* set minus back */
    substractContent.textContent = "-";
    substract.setAttribute("data-value", "-");

    /* set pow back */
    powRacineContent.textContent = "²";
    powRacine.setAttribute("data-value", "²");

    clearContent.textContent = "CE";
    clear.setAttribute("data-value", "CE");

    backContent.textContent = "←";
    back.setAttribute("data-value", "←");
  } else {
    fn.classList.add("hold");
    substractContent.textContent = "±";
    substract.setAttribute("data-value", "±");

    /* set pow back */
    powRacineContent.textContent = "√";
    powRacine.setAttribute("data-value", "√");

    clearContent.textContent = "(";
    clear.setAttribute("data-value", "(");

    backContent.textContent = ")";
    back.setAttribute("data-value", ")");
  }
}
