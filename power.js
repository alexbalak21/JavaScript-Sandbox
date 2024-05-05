function sumPower2(arr = [1, 2]) {
    let summ = 0
    for (let numer of arr) summ += Math.pow(numer, 2)
    return summ
}

console.log(sumPower2([1, 2, 3, 4, 5]))
