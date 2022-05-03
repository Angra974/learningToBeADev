let result = document.getElementById("placeToPutResult");

let _lis = document.querySelectorAll('li');

_lis.forEach((el) => el.addEventListener('click', (elem) => {
	console.log(el.textContent)
	result.textContent = eval(`${result.textContent} + ${Number(el.textContent)}`);
}))