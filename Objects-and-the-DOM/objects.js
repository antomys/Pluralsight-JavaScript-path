let symbol = Symbol();

function showMessage(message){
    document.getElementById('message').textContent = message;
}

let person = {
    name: "Ihor",
    surname: "Volokhovych",
    age: "20",
    parttime:false,
    [symbol]: "420$"
};

showMessage(person);

console.log(person.name);
console.log(person.parttime);
console.log(person.symbol);

