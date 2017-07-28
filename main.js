// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max (x, y) {
  if (x < y) {
    return y;
  } else { (x > y)
    return x;
  }
}

console.log(max(2, 3));
console.log(max(2, 1));

    // Your answer here

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(x, y, z){
  if ((x > y) || (x > z)) {
    return x;
  } else if ((z > y) || (z > x)) {
    return z;
  } else if ((y > z) || (y > x)) {
    return y;
    }
  }

  console.log(maxOfThree(2, 3, 4));
  console.log(maxOfThree(4, 1, 2));
  console.log(maxOfThree(1, 4, 1));



// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    return true;
  } else { (char !== "a" || char !== "e" || char !== "i" || char !== "o" || char !== "u")
    return false;
  }
}

console.log(isVowel("a"));
console.log(isVowel("q"));


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
//
//

function sum(x, y){
  return x + y
}

console.log(sum(3,4))
console.log(sum(12,100))

//
// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
//
//

function avg(i, k, n){
  return (i + k + n) / 3
}

console.log(avg(12,7,100))


//
// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

function getLength(x){
  return "12 Feet"
}

console.log(getLength("Shoe"))


//
//
//
// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(r,g){
  if (r < g) {
  return true;
} else {
  (g > r)
  return false;
}

}

console.log(greaterThan(6, 12))
console.log(greaterThan(12, 6))



//
//
//
// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
//
//

function greet(x){
  return "Hello my name is " + x + "\!";
}

console.log(greet("Bobo"))



//
// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madlib(x, q, w, r){
  return "This " + x + " is " + q + " but, " + w + " " + r + "\.";
}

console.log(madlib("tomato","purple","tastes", "delicious"))
