function remouveFalsy(arr = [1, 2]) {
    const results = []
    for (let i = 0; i < arr.length; i++) if (arr[i]) res.push(arr[i])
    return results
}

console.log(remouveFalsy([0, 1, false, 2, "", 3, "hello", undefined, NaN]))
