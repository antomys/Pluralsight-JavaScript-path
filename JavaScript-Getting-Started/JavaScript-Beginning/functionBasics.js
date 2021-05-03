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


//With parameter

function showMsg(message){
    console.log('function showMsg: ',message);
}

showMsg('test');
let asda = [1,2,'4214'];
showMsg(asda);


// Returning from a function;

let funcReturn = function(value){
    if(value !== null && !isNaN(value)){
        return value*2;
    }
    return 0;
}


let funcRet = funcReturn(44); 

console.log('funcReturn returned', funcRet);

