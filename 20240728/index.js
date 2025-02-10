class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("Hello, " + this.name);
  }
  static info() {
    console.log("This is a person class");
  }
}

class Employee extends Person {
  constructor(name, age, jobTitel) {
    super(name, age);
    this.jobTitel = jobTitel;
  }

  greet() {
    console.log("Hello, " + this.name + ", your jobtitle is " + this.jobTitel);
  }
}

let person1 = new Employee("Alice", 20, "tester");
person1.greet();
