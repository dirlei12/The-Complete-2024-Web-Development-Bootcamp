function Car(brand,model,year,numberPlate) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.numberPlate = numberPlate;
    this.running = function () {
       console.log("The car is running..."); 
    }
};

var car1 = new Car("Audi","A6",2024,"PN24-AUD");

car1.running();