let arr = [
  { name: "xiaoming", age: 22 },
  { name: "xiaoming1", age: 22 },
  { name: "xiaoming2", age: 23 },
  { name: "xiaoming3", age: 24 },
];

// let obj = {};
// for (const v of arr) {
//   if (!obj[v.age]) obj[v.age] = [];
//   obj[v.age].push(v);
// }
// console.log(obj);

// let aa = arr.reduce((total, current) => {
//   if (!total[current.age]) total[current.age] = [];
//   total[current.age].push(current);
//   return total;
// }, {});
// console.log(aa);

// let arr1 = [10, 20, 30, 40, 50];
// let aa = Object.fromEntries(arr1.map((v, k) => [k, v]));
// console.log(aa);

// let arr2 = new Set();
// console.log(arr2);
// arr2.add(100);
// arr2.add(100);
// arr2.add(300);
// console.log(arr2.length);

let aa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(aa.shuffle());
