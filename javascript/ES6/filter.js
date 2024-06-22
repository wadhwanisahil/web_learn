const nums = [1, 2, 4, 32, 5, 435, 23, 4, 3, 12, 3, 35];

const filteredNums = nums.filter((_, idx) => idx % 2 !== 0);
console.log(filteredNums);
