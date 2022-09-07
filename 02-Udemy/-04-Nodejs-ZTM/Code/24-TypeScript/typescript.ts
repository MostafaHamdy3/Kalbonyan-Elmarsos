// const sum = (a: number, b: number) => {
//   return a + b;
// };

// const answer = sum(4, 8);
// console.log(answer);

// boolean
let isCool: boolean = false;

// number
let age: number = 21;

// string
let eyeColor: string = "black";
let favouriteQuote: string = `I'm not old, I'm only ${age}`;

// Array
let pets: string[] = ["cat", "dog", "monkey"];
let pets2: Array<string> = ["lion", "dragon", "tiger"];

// Object
let wizard: object = {
  firstName: "Mostafa",
  lastName: "Hamdy",
};

// null and undefined
let meh: undefined = undefined;
let noo: null = null;

// Tuple
let basket: [string, number];
basket = ["socker", 11];

// Enum
enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}
let sizeName: string = Size[2];
let size2: number = Size.Large;

// void
let sing = (): void => {
  console.log("lalalalallaa");
};

// never
let err = (): never => {
  throw Error("ooooopppss!");
};

// interface
interface RobotArmy {
  count: number;
  type: string;
  magic?: string;
}
let fightRobotArmy = (robots: RobotArmy) => {
  console.log("FIGHT!");
};
let fightRobotArmy2 = (robots: {
  count: number;
  type: string;
  //   magic: string;
}) => {
  console.log("FIGHT!");
};

// Type Assertion
interface DogArmy {
  count: number;
  type: string;
  magic: string;
}

let dog = {} as DogArmy;
dog.count;

// Classes
class Animal {
  private sing: string = "alalalalllaa";
  constructor(sound: string) {
    this.sing = sound;
  }

  greet() {
    return `Hello ${this.sing}`;
  }
}

let lion = new Animal("RAAWWAR");
console.log(lion.greet());

// Union
let confused: string | number = "Hello";
confused = 4;
