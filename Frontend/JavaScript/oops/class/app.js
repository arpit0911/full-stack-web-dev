// inheritance
// *parent class
class Person {
  constructor(name, age) {
    console.log("person constructor");

    this.name = name;
    this.age = age;
  }
  talk() {
    console.log("talk", this.name);
  }
}
// *children class
class Student extends Person {
  constructor(name, age, roll_no) {
    console.log("student constructor");
    super(name, age);
    this.roll_no = roll_no;
  }
}
// *children class
class Teacher extends Person {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }
}
