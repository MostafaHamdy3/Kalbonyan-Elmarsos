// Importing module
// import { addToCart, totalPrice as tp, tq } from "./shoppingCart.js";
// addToCart("bread", 5);
// console.log(tp, tq);

console.log("Importing module");

// import * as ShoppingCart from "./shoppingCart.js";
// ShoppingCart.addToCart("bread", 4);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as tp, tq } from "./shoppingCart.js";
// add("pizza", 4);
// console.log(tp);

import add, { cart } from "./shoppingCart.js";
add("pizza", 4);
add("bread", 6);
add("apples", 7);

console.log(cart);

// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);

/*
const getLastPost = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  //   console.log(data);
  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
// lastPost.then((last) => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);


const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 240;
  const totalQuantity = 30;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    orderStock,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart("pizza", 3);
ShoppingCart2.addToCart("apples", 7);
console.log(ShoppingCart2);
*/

class Person {
  #greeting = "Hey";
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}
const mo = new Person("Mostafa");

console.log(cart.find((el) => el.quantity >= 2));
Promise.resolve("TEST").then((x) => console.log(x));
