"use strict";

/*
const Person = function (firstName, birthYear) {
  //   console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to this
  //   this.calcAge = function () {
  //     console.log(2022 - this.birthYear);
  //   };
};

const mo = new Person("Mostafa", 2001);
console.log(mo);

// 1) New Object {} is created
// 2) function is called, this={}
// 3) {} linked to prototype
// 4) function automatically return {}

const bob = new Person("Bob", 2008);
const jack = new Person("Jack", 1990);
console.log(bob, jack);

console.log(mo instanceof Person);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

mo.calcAge();
jack.calcAge();

console.log(mo.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(mo));
console.log(Person.prototype.isPrototypeOf(Person));

console.log(mo.hasOwnProperty("firstName"));
console.log(mo.hasOwnProperty("species"));

console.log(mo.__proto__);
console.log(mo.__proto__.__proto__);
console.log(mo.__proto__.__proto__.__proto__);
console.log(Person.prototype.constructor);

const arr = [4, 1, 6, 9, 1, 4];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2022 - this.birthYear);
  }
  great() {
    console.log(`Hey ${this.fullName}`);
  }

  // Getter and Setter
  get age() {
    return 2022 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log("Hey there 👋");
    // console.log(this);
  }
}

const mostafa = new PersonCl("Mostafa Hamdy", 2001);
console.log(mostafa);
mostafa.calcAge();
mostafa.great();
console.log(mostafa.age);

const walter = new PersonCl("Walter White", 1997);

PersonCl.hey();

const account = {
  owner: "Mostafa",
  movements: [233, 456, 210, 400],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = "Steven";
steven.birthYear = 2000;
steven.calcAge();
console.log(steven);

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1999);
sarah.calcAge();

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);
// Student.prototype = Person.prototype;  bad

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const darsh = new Student("Mostafa", 2001, "Java Script");
console.log(darsh);
darsh.introduce();
darsh.calcAge();

console.log(darsh instanceof Student);
console.log(darsh instanceof Person);
console.log(darsh instanceof Object);


class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2022 - this.birthYear);
  }
  great() {
    console.log(`Hey ${this.fullName}`);
  }
  get age() {
    return 2022 - this.birthYear;
  }
  set fullName(name) {
    // console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
  static hey() {
    console.log("Hey there 👋");
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(`I'm ${2022 - this.birthYear} years old`);
  }
}

const sarah = new StudentCl("Sarah Smith", 2004, "Computer Science");
sarah.introduce();
sarah.calcAge();


const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init("Jay", 2010, "Java");
jay.introduce();
jay.calcAge();
*/

class Account {
  // public fields
  // Same as the decleration in costructor
  // _movement = [];
  locale = navigator.language;

  // Private fields
  #movement = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // Protected property
    // this._movement = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public methods
  getMovements() {
    return this.#movement;
  }

  deposit(val) {
    this.#movement.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log("Helper");
  }

  // Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account("Mostafa", "EUR", 1111);
// acc1.movement.push(250);
// acc1.movement.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1.#approveLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);
// console.log(acc1.#pin);
Account.helper();

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(2500).withdraw(425);
console.log(acc1.getMovements());
