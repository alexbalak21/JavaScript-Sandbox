function isAPalandorme(str) {
    str = str.toLowerCase()
    str = str.replaceAll(",", "")
    str = str.replaceAll(".", "")
    str = str.replaceAll(" ", "")
    console.log(str)
    const letters = str.split("")
    const reversed = letters.reverse()
    const reversed_srt = reversed.join("")
    return str === reversed_srt ? true : false
}

const tst = "A man, a plan, a canal, Panama"

console.log(isAPalandorme(tst))
console.log(tst)
