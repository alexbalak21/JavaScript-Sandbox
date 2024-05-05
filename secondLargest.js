function secondLargest(arr = [1, 2]) {
    const copy = [...arr]
    const max = Math.max(...copy)
    while (copy.indexOf(max) !== -1) {
        copy.splice(copy.indexOf(max), 1)
    }
    return Math.max(...copy)
}

console.log(secondLargest([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]))
