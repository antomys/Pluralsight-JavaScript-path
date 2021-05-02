// This is function declaration
function logMessage(){
    console.log('log message function withoud parameters');
}

// Calling twice
logMessage();
logMessage();

// This is function expression:
let dn = function(){
    console.log("function expression, dn variable");
}

dn();

// We can name a function:

let namedFuncExpre = function loggingFunction(){
    console.log('loggind variable function inside variable');
}
namedFuncExpre();