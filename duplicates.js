function findDuplicates(arr = []) {
    duplicates = []
    for (let i = 0; i < arr.length; i++)
        for (let j = i + 1; j < arr.length; j++)
            if (arr[i] === arr[j]) if (!duplicates.includes(arr[i])) duplicates.push(arr[i])
    return duplicates
}

function removeDuplicate(arr = [1, 2]) {
    const copy = [...arr]
    for (let i = 0; i < arr.length; i++)
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                copy[j] = null
            }
        }
    return copy.filter((item) => item != null)
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

numbers = new Array(100)

for (let i = 0; i < 100; i++) numbers[i] = getRandomInt(1, 50)
// console.log("ORIGINAL:")
// console.log(numbers)
// console.log("INPUT:")
// console.log(numbers.sort((a, b) => a - b))
// duplicates = removeDuplicate(numbers)
// console.log("OUTPOUT:")
// console.log(duplicates.sort((a, b) => a - b))

const arr = [1, 2, 2, 3, 4, 4, 5, 1, 6]

const st = new Set(arr)
const res = [...st]

console.log(res)
