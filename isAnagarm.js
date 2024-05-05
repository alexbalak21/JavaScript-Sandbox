function isAnagram(str1 = "hello", str2 = "olleh") {
    if (str1.length === 0 || str2.length === 0 || str1.length !== str2.length) return false
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    let condioton = false
    for (let i = 0; i < str1.length; i++) {
        if (str1.includes(str2[i])) condioton = true
        else {
            condioton = false
            break
        }
    }
    return condioton
}

const str1 = "Listen"
const str2 = "Silent"

console.log(isAnagram(str1, str2))
