const Address = require("./Address");
class Customer {
  constructor(acc_No, acc_Name, age, address, e = {}) {
    this.acc_No = acc_No;
    this.acc_Name = acc_Name;
    this.age = age;
    this.address = address;
    this.e = e;
  }
  getCity() {
    console.log("City Name:", this.address.city);
  }
}

let c1 = new Customer(
  101,
  "Kavitha",
  24,
  new Address(5, "RJ Garden", "Bangalore"));

console.log(c1.acc_Name);
c1.getCity();