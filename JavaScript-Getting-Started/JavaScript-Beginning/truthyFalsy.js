// Actually Falsy are:
let falsy = [false,0,'empty string',null,undefined,NaN];

console.log('false are:', falsy);

// Truthy are:
let truthy = [true,0.5,'0'];

console.log('truthy are: ', truthy);

// To round numbers we need to:

// Do not do like that. not fixed!
if( 1.1 + 1.3 === 2.4)
    {console.log('NOT FIXED 1.1+1.3 === 2.4');}
else {console.log('not FIXED 1.1+1.3 !== 2.4');}

// Do like that! .toFixed returns string so we need to convert to number! + sigh does it
if( +(1.1 + 1.3).toFixed(2) === 2.4)
    {console.log('FIXED 1.1+1.3 === 2.4');}
else {console.log('FIXED 1.1+1.3 !== 2.4');}