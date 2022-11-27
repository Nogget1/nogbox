//exercício 1

let max = "..........".length;
let i = ".".length;

let fizzbuzz = (x, y) => {
    let max = "..........".length;
    let i = ".".length;

    for (i = 1; i <= (max * max); i++) {

        if (i % x === 0 && i % y === 0) {
            console.log("FizzBuzz");
        }
        else if (i % x === 0) {
            console.log("Fizz");
        }
        else if (i % y === 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}

fizzbuzz(2, 5);