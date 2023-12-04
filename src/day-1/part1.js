import input from './input';
const numMap = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
}
const normaliseNum = (str => numMap[str] || str);
export const getPart = (part) => {
    const nums = part.match(/[0-9]/g);
    return Number(`${nums[0]}${nums[nums.length - 1]}`);
}
export const getPartV2 = (part) => {
    const nums = part.match(/(one|two|three|four|five|six|seven|eight|nine)|\d/g);
    return Number(`${normaliseNum(nums[0])}${normaliseNum(nums[nums.length - 1])}`);
}
const lines = input.split('\n');

const total = lines.reduce((acc, line) => {
    const part = getPartV2(line);
    console.log(`${line},${part}`);
    return acc + part;
}, 0);
console.log(`Output is ${total}`);