const student = {
    fullName : "leo k.",
    marks : 90.4,
    printMarks: function () {
        console.log("marks =", this.marks);
    },
};

const employee = {
    calcTax () {
        console.log("tax rate is 10%");
    },
};

const karanArjun = {
    salary : 200000,
    calcTax () {
        console.log("tax rate is 20%");
    }
};


karanArjun.__proto__ = employee;

class ToyotaCar {
    constructor(brand, mileage) {
        console.log("creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }
}

let fortuner = new ToyotaCar("fortuner", 10);

let lexus = new ToyotaCar("lexus", 12);


class Parent {
    hello() {
        console.log("hello");   
    }
}

// class Child extends Parent {}

// let obj = new Child();

// class Person {
//     constructor(name) {
//         this.species = "homo sapiens";
//         this.name = name;
//     }

//     eat() {
//         console.log("eat");
//     }

//     sleep() {
//         console.log("sleep");
//     }

//     work() {
//         console.log("do nothing");
//     }
// }

// class Engineer extends Person {
//     constructor(name){
//         super(name);
//     }

//     work() {
//         super.eat();
//         console.log("solve problems, build something");
//     }
// }

// let enjObj = new Engineer("kaal");

let Data = "secret information";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }   

    viewData() {
        console.log("data =", Data);
    }
}

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        Data = "some new info";
    }
}

let student1 = new User("aman", "aman@mail.com");
let student2 = new User("ben", "ben@mail.com");

let admin1 = new Admin("admin", "admin@college.com");

//ERROR HANDLING
let a = 2;
let b = 3;

console.log("a =", a);
console.log("b =", b);
console.log("a + b =", a+b);
console.log("a + b =", a+b);

// try {
//     console.log("a + b =", a+c);
// }catch(err) {
//     console.log(err);
// }

console.log("a + b =", a+b);
console.log("a + b =", a+b);