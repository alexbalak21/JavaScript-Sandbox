function reverseWords(text = "hello") {
    text = text.trim()
    const words = text.split(" ")
    return words.reverse().join(" ")
}

const text = "Hello world, how are you?"

console.log(reverseWords(text))
