function arrayFromRange(min, max) {
    let res = []
    for (let i = min; i <= max; i++) res.push(i)
    return res
}

function searchArray(arr = [], search = 1) {
    let result = false
    for (let item of arr) if (item === search) result = true
    return result
}

function exclude(arr = [], excludes = []) {
    return arr.filter((value) => !(value in excludes))
}

function move(arr = [], index, offset) {
    const output = [...arr]
    if (index > arr.length - 1 || index + offset > arr.length - 1) return console.error("Invalid offset")
    const [element] = output.splice(index, 1)
    output.splice(index + offset, 0, element)
    return output
}

function countOccurances(arr = [], search) {
    return arr.reduce((total, value) => {
        return (total += value === search ? 1 : 0)
    }, 0)
}

function getMax(arr = []) {
    return arr.sort((a, b) => a - b)[arr.length - 1]
}

const movies = [
    {title: "The Matrix", year: 1999, rating: 8.7},
    {title: "Inception", year: 2010, rating: 8.8},
    {title: "The Godfather", year: 1972, rating: 9.2},
    {title: "Pulp Fiction", year: 1994, rating: 8.9},
    {title: "The Dark Knight", year: 2008, rating: 9.0},
    {title: "Fight Club", year: 1999, rating: 8.8},
    {title: "Forrest Gump", year: 1994, rating: 8.8},
    {title: "The Shawshank Redemption", year: 1994, rating: 9.3},
    {title: "The Lord of the Rings: The Return of the King", year: 2003, rating: 8.9},
    {title: "Interstellar", year: 2014, rating: 7},
    {title: "Schindler's List", year: 1993, rating: 9.0},
    {title: "The Godfather: Part II", year: 1974, rating: 9.0},
    {title: "Goodfellas", year: 1990, rating: 8.7},
    {title: "Star Wars: Episode IV - A New Hope", year: 1977, rating: 8.6},
    {title: "The Silence of the Lambs", year: 1991, rating: 8.6},
    {title: "Gladiator", year: 2000, rating: 8.5},
    {title: "Braveheart", year: 1995, rating: 8.3},
    {title: "The Green Mile", year: 1999, rating: 8.6},
    {title: "Saving Private Ryan", year: 1998, rating: 8.6},
    {title: "The Prestige", year: 2006, rating: 8.5},
    {title: "The Lion King", year: 1994, rating: 8.5},
    {title: "Seven", year: 1995, rating: 8.6},
    {title: "The Departed", year: 2006, rating: 8.5},
    {title: "Whiplash", year: 2014, rating: 6},
    {title: "Memento", year: 2000, rating: 8.4},
    {title: "The Usual Suspects", year: 1995, rating: 8.5},
]

function sortMovies(movies = [{title: "The Matrix", year: 1999, rating: 8.7}], minRaiting, year) {
    return movies
        .filter((movie) => movie.year === year && movie.rating >= minRaiting)
        .map((movie) => ({
            title: movie.title,
        }))
}

const r = sortMovies(movies, 6, 2014)

console.log(r)
