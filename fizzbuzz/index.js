


//Get input from user typeof number
//for-loop over input from user
//if-loop to compare and evaluate if its a number fizz, buzz or fizzbuzz

let input = parseInt(prompt("Write a number 1-100"));
let outputArray = [];

for (let i = 1; i <= input; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        //console.log("FizzBuzz");
        outputArray.push("FizzBuzz");
    } else if (i % 5 === 0) {
        //console.log("Buzz");
        outputArray.push("Buzz");
    } else if (i % 3 === 0) {
        //console.log("Fizz");
        outputArray.push("Fizz");
    } else {
        //console.log(i);
        outputArray.push(i);
    }

}
for (var i=0; i<outputArray.length; i++) {
    console.log(outputArray[i] + ", ");
}


document.getElementById("demo").innerHTML = outputArray;