// get all elements with a li tag
const lis = document.querySelectorAll("li");

// for each element found
lis.forEach((el) => {
  // add a click event on the element
  el.addEventListener("click", () => {
    // initialise
    let backgroundColor = "";

    // does the element have a child element ( input type color in <li>)
    var child = el.querySelector("input[type='color']");

    //if input type color exists
    if (child !== null) {
      // add an event on input for this child
      child.addEventListener("input", () => {
        // set the background to the body
        document.body.style.backgroundColor = child.value;
		return true;
		
	  });
    } else {
      /* no child found, no input type color */
	
      /*
      https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
      The Window.getComputedStyle() method returns an object containing
       the values of all CSS properties of an element,
        after applying active stylesheets and resolving
         any basic computation those values may contain.
      */
      backgroundColor = window.getComputedStyle
        ? window.getComputedStyle(el, null).getPropertyValue("background-color")
        : el.style.backgroundColor;
      document.body.style.backgroundColor = backgroundColor;
    }
  });
});

document.querySelector("body").style.color = "white";
