function outer(outerparam) {
    let testvar = "Testing"
    return function inner(innerparam) {
        console.log("Outer variable: "+outerparam);
        console.log("Inner variable: "+innerparam);
        console.log("Test variable: "+testvar);
    }
}

const functionTest = outer("Test");

functionTest("Inner");