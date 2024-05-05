function arrayIntersection(arr1, arr2) {
    return arr1.filter((value) => arr2.includes(value))
}
const arr1 = [10, 20, 30, 40, 50, 20, 60]

// Second array with some numbers from arr1 and some unique numbers
const arr2 = [15, 25, 30, 40, 55, 60]

console.log(arrayIntersection(arr1, arr2))
