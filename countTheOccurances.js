function countTheOccurances(text = "hello", char = "o") {
    let count = 0
    console.log(text.length)
    while (text.indexOf(char) != -1) {
        console.log(text.indexOf(char))
        text = text.replace(char, "")
        console.log(text[text.indexOf(char)])
        count++
    }
    return count
}

const text = "Hello, how are you today?"
const char = "o"

console.log(countTheOccurances(text, char))
