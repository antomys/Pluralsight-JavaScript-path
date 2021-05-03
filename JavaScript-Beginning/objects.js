let symbol = Symbol();

let person = {
    name: "Ihor",
    surname: "Volokhovych",
    age: "20",
    parttime:false,
    [symbol]: "420$",
    showInfo: function(realAge) {
        console.log(this.name);
        console.log(this.parttime);
        console.log(realAge);
    }
};

person.showInfo(34);

