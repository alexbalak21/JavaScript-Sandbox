function findLongestWord(text = "") {
    const words = text.split(" ")
    let longest = ""
    for (let word of words) if (word.length > longest.length) longest = word
    return longest
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))
