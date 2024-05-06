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
    {title: "Interstellar", year: 2014, rating: 8.6},
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
    {title: "Whiplash", year: 2014, rating: 8.5},
    {title: "Memento", year: 2000, rating: 8.4},
    {title: "The Usual Suspects", year: 1995, rating: 8.5},
    {title: "The Great Dictator", year: 1940, rating: 8.4},
    {title: "The Pianist", year: 2002, rating: 8.5},
    {title: "Back to the Future", year: 1985, rating: 8.5},
    {title: "American Beauty", year: 1999, rating: 8.3},
    {title: "Reservoir Dogs", year: 1992, rating: 8.3},
    {title: "The Hunt", year: 2012, rating: 8.3},
    {title: "The Truman Show", year: 1998, rating: 8.1},
    {title: "The Sixth Sense", year: 1999, rating: 8.1},
    {title: "The Wizard of Oz", year: 1939, rating: 8.0},
    {title: "Gone with the Wind", year: 1939, rating: 8.1},
    {title: "City of God", year: 2002, rating: 8.6},
    {title: "The Social Network", year: 2010, rating: 7.7},
    {title: "The Curious Case of Benjamin Button", year: 2008, rating: 7.8},
    {title: "Amélie", year: 2001, rating: 8.3},
    {title: "Shutter Island", year: 2010, rating: 8.2},
    {title: "Pan's Labyrinth", year: 2006, rating: 8.2},
    {title: "Blade Runner", year: 1982, rating: 8.1},
    {title: "The Shining", year: 1980, rating: 8.4},
    {title: "The Big Lebowski", year: 1998, rating: 8.1},
    {title: "The Grand Budapest Hotel", year: 2014, rating: 8.1},
    {title: "The Intouchables", year: 2011, rating: 8.5},
    {title: "The Pursuit of Happyness", year: 2006, rating: 8.0},
    {title: "Blade Runner 2049", year: 2017, rating: 8.0},
    {title: "Spirited Away", year: 2001, rating: 8.6},
    {title: "Parasite", year: 2019, rating: 8.6},
    {title: "A Beautiful Mind", year: 2001, rating: 8.2},
    {title: "La La Land", year: 2016, rating: 8.0},
    {title: "Jaws", year: 1975, rating: 8.1},
    {title: "Life of Pi", year: 2012, rating: 7.9},
    {title: "The Revenant", year: 2015, rating: 8.0},
    {title: "Her", year: 2013, rating: 8.0},
    {title: "Silver Linings Playbook", year: 2012, rating: 7.7},
    {title: "Django Unchained", year: 2012, rating: 8.4},
    {title: "A Clockwork Orange", year: 1971, rating: 8.3},
    {title: "Psycho", year: 1960, rating: 8.5},
    {title: "The Breakfast Club", year: 1985, rating: 7.8},
    {title: "Good Will Hunting", year: 1997, rating: 8.3},
    {title: "Sweeney Todd: The Demon Barber of Fleet Street", year: 2007, rating: 7.3},
    {title: "Million Dollar Baby", year: 2004, rating: 8.1},
    {title: "The Notebook", year: 2004, rating: 7.8},
    {title: "Titanic", year: 1997, rating: 7.8},
    {title: "Glengarry Glen Ross", year: 1992, rating: 7.8},
    {title: "The Sixth Sense", year: 1999, rating: 8.1},
    {title: "Jurassic Park", year: 1993, rating: 8.2},
    {title: "Dead Poets Society", year: 1989, rating: 8.1},
    {title: "The Truman Show", year: 1998, rating: 8.1},
    {title: "Harry Potter and the Philosopher's Stone", year: 2001, rating: 7.6},
    {title: "The Dark Knight Rises", year: 2012, rating: 8.4},
    {title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001, rating: 8.8},
    {title: "The Lord of the Rings: The Two Towers", year: 2002, rating: 8.7},
    {title: "The Lord of the Rings: The Return of the King", year: 2003, rating: 8.9},
    {title: "The Social Network", year: 2010, rating: 7.7},
    {title: "The Curious Case of Benjamin Button", year: 2008, rating: 7.8},
    {title: "Amélie", year: 2001, rating: 8.3},
    {title: "Shutter Island", year: 2010, rating: 8.2},
    {title: "Pan's Labyrinth", year: 2006, rating: 8.2},
    {title: "Blade Runner", year: 1982, rating: 8.1},
    {title: "The Shining", year: 1980, rating: 8.4},
    {title: "The Big Lebowski", year: 1998, rating: 8.1},
    {title: "The Grand Budapest Hotel", year: 2014, rating: 8.1},
    {title: "The Intouchables", year: 2011, rating: 8.5},
    {title: "The Pursuit of Happyness", year: 2006, rating: 8.0},
    {title: "The Green Mile", year: 1999, rating: 8.6},
    {title: "Star Wars: Episode IV - A New Hope", year: 1977, rating: 8.6},
    {title: "The Silence of the Lambs", year: 1991, rating: 8.6},
    {title: "Gladiator", year: 2000, rating: 8.5},
    {title: "Braveheart", year: 1995, rating: 8.3},
    {title: "Goodfellas", year: 1990, rating: 8.7},
    {title: "Good Will Hunting", year: 1997, rating: 8.3},
    {title: "Glengarry Glen Ross", year: 1992, rating: 7.8},
    {title: "City of God", year: 2002, rating: 8.6},
    {title: "The Lion King", year: 1994, rating: 8.5},
    {title: "Saving Private Ryan", year: 1998, rating: 8.6},
    {title: "Blade Runner 2049", year: 2017, rating: 8.0},
    {title: "The Dark Knight Rises", year: 2012, rating: 8.4},
    {title: "The Green Knight", year: 2021, rating: 6.6},
    {title: "The Revenant", year: 2015, rating: 8.0},
    {title: "Jurassic World", year: 2015, rating: 7.0},
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
