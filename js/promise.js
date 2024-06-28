let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
for (let i in arr) {
  console.log(i, arr[i]);
  arr.splice(i, 1);
}
console.log(arr);
