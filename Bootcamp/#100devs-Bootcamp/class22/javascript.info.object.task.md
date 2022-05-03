## Hello, object

```Javascript
//Cimportance: 5
// Write the code, one line for each action:

// Create an empty object user.
const user = {};
// Add the property name with the value John.
user.name = 'John';
// Add the property surname with the value Smith.
user.surname = 'Smith';
// Change the value of the name to Pete.
user.name = 'Pete';
// Remove the property name from the object.
delete user.name;

```

---

## check for emptiness

```Javascript
// importance: 5
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// Should work like that:
// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
//alert( isEmpty(schedule) ); // false

function isEmpty(obj) {

  return (Object.keys(obj).length === 0)
}
```

---

## Sum object properties

```Javascript
importance: 5
We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.

const sum = (obj) => {
    let sum = 0;
    for (let value in obj) {
      sum += obj[value]
    }
  return sum
}


```

# Multiply numeric property values by 2

```Javascript
/* importance: 3
  Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

 For instance:

 before the call
 */
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
/*
multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.
*/

/* solution */
const multiplyNumeric = (obj) => {
    for(let value in obj) {
      console.log(typeof obj[value])
      if(typeof obj[value] === 'number') {
          obj[value] *= 2
      }
    }
};



```

P.S. Use typeof to check for a number here.
