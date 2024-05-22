// constructor -> does not return anything start with capital letter
function Person(name, age) {
  this.name = name;
  this.age = age;
  console.log(this);
}

// to define the prototype function or method of the Person
Person.prototype.talk = function () {
  console.log("person should talk");
};

// the above talk function will become the prototype function and will be available for every instance of Person()
// here new keyword is used to create a new instance or blank object using the blueprint of Person()
let p1 = new Person("arpit", 25);
let p2 = new Person("kiki", 23);

// ! better way using the class

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  skills() {
    console.log("students skills");
  }
}

let s1 = new Student("arpit", 25);
let s2 = new Student("kiki", 23);
