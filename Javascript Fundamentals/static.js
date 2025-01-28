class Car { 
    constructor(brand) {
    this.carname = brand;
    }
    static hello() { return "Hello!!";
    }
    }
    mycar = new Car("Ford");
    //Call 'hello()' on the class Car: document.getElementById("demo").innerHTML = Car.hello();
    