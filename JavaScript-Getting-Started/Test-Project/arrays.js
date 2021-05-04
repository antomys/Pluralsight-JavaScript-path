let array = [1, 2, 3];

let array1 = Array.of(1, 2, 3);
console.log(array);
console.log(array1);

array1[0] = 'a';
console.log(array1);

array1.push('d', 123);
console.log(array1);
array1.pop();
console.log(array1);


console.log(array1.slice(0, 2));

array1.splice(1, 0, "bar");
console.log(array1);

console.log(array1.indexOf(2));

let i = 0;
array1.forEach(element => {
    if(typeof element === 'number' && !isNaN(+element))
    {
        i++;
        console.log(i, element);
    }  
});
if(Array.isArray(array1)){
    console.log('is array');
}
