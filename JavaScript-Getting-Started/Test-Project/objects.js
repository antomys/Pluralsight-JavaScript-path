let symbol = Symbol();

function showMessage(message){
    document.getElementById('message').textContent = message;
}

let person = {
    name: "Ihor",
    surname: "Volokhovych",
    age: "20",
    parttime:false,
    [symbol]: "420$",
    show: function(age){
        showMessage(this.name + ' is ' + age + " years old!");
    }
};

person.show(20);

console.log(person.name);
console.log(person.parttime);
console.log(person.symbol);


let message = "hello";

function change(message){
    message = 'hi';
}

change(message);

showMessage(message);

let date = new Date()

showMessage(date.toUTCString() + Math.random());

let string = 'hi!';

showMessage(string.charAt(0));

