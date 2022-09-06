const orders = [
  {
    date: "2022-09-04",
    subtotal: 200.5,
    items: [
      {
        product: {
          id: "p3",
          description: "Old Red Shoe",
          price: 99.99,
        },
        quantity: 4,
      },
    ],
  },
];

function getAllOrders() {
  return orders;
}

module.exports = { getAllOrders };
