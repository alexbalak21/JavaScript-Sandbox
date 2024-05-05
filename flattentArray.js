function flattenArray(arr = []) {
    const result = []
    for (let item of arr)
        if (Array.isArray(item)) result.push(...flattenArray(item))
        else result.push(item)
    return result
}

const nestedArray = [1, [2, [3, 4], 5], [6, 7], 8]

console.log(flattenArray(nestedArray))

console.log(text)
