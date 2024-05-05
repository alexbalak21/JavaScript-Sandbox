function removeDuplicates(arr = []) {
    const set_arry = new Set(arr)
    return [...set_arry]
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

numbers = new Array(20)

for (let i = 0; i < 20; i++) numbers[i] = getRandomInt(1, 20)

console.log(numbers)
console.log(removeDuplicates(numbers))
