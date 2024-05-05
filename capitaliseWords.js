function capitalizeWords(text = "") {
    const words = text.split(" ")
    function capitaliseFirstLetter(word = "") {
        const letters = word.split("")
        letters[0] = letters[0].toUpperCase()
        return letters.join("")
    }
    for (let i = 0; i < words.length; i++) words[i] = capitaliseFirstLetter(words[i])
    return words.join(" ")
}

console.log(capitalizeWords("hello world, this is a test"))
