function nvowels(str = "") {
    const vowels = ["a", "e", "i", "o", "u"]
    let new_str = ""
    for (let i = 0; i < str.length; i++) if (!vowels.includes(str[i].toLowerCase())) new_str += str[i]
    return new_str
}

console.log(nvowels(""))

function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, "")
}
