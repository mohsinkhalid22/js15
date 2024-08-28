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
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }
}

let fortuner = new ToyotaCar();
let lexus = new ToyotaCar();