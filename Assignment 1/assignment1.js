function printer(val) {
    console.log("Output: "+val)
}

function calculator(num1, num2, callback) {
    let sum = num1 + num2;
    callback(sum);
}

calculator(5, 6, printer);