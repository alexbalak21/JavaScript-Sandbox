function FizzBuzz(n = 1) {
    const resArray = new Array(n)
    for (let i = 0; i < n; i++) {
        let res = ""
        if ((i + 1) % 3 === 0) res += "Fizz"
        if ((i + 1) % 5 === 0) res += "Buzz"
        resArray[i] = res ? res : i + 1
    }
    return resArray
}

const res = FizzBuzz(50)
for (let item of res) console.log(item)
