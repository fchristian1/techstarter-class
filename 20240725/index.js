let nums = [5, 2, 10, 7, 1, 8, 4, 6, 9, 3];

const findMax = (arr) => arr.sort((a, b) => b - a)[0];

console.log(findMax(nums));
