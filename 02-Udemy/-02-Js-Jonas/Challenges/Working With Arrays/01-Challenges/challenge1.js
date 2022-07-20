const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  //   dogsJulia.slice(1,3);

  const concatDogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(concatDogs);
  concatDogs.forEach(function (age, i, arr) {
    let type = age >= 3 ? `adult, and is ${age} years old` : "puppy 🐹";
    console.log(`Dog number ${i + 1} is an ${type}`);
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
