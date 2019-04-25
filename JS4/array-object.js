//define test array
var input = [-1, 5, "cat", false, 10.2, true, "dog"];

/**
 * This function accepts an array of values and returns an object separated by type
 * (string, numbers, booleans) as a key (type) and value - array of values of that type.
 */
function newObject(array) {

    let result = {
        strings: [],
        numbers: [],
        booleans: []
    };

    //go through the array given
    array.forEach(function(element) {

        if(typeof(element) === "string") {
            result['strings'].push(element);
        }

        if(typeof(element) === "number") {
            result['numbers'].push(element);
        }

        if (typeof(element) === "boolean") {
            result['booleans'].push(element);
        }
    });

    return result;
}

//call function
let myObject = newObject(input);

//assign object values to HTML elements
document.getElementById("stringVal").innerHTML = "Strings: " + myObject.strings;

document.getElementById("numberVal").innerHTML = "Numbers: " + myObject.numbers;

document.getElementById("booleanVal").innerHTML = "Booleans: " + myObject.booleans;
