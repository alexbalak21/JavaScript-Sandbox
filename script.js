function Adress(street, city, zipcode) {
    this.street = street
    this.city = city
    this.zipcode = zipcode
}

const adress1 = new Adress("49 rue des Docks", "Lyon", 69009)
const adress2 = new Adress("49 rue des Docks", "Lyon", 69009)

function createPerson(name, age) {
    return {
        name,
        age,
        set infos(value) {
            const parts = value.split(" ")
            console.log(this.name)
            console.log(parts[0])
            this.name = parts[0]
            console.log(this.name)
            this.age = parseInt(parts[1])
            console.log("SETTER")
        },
        get infos() {
            console.log(`${this.name}, ${this.age} old.`)
        },
    }
}

function areEquals(obj1, obj2) {
    let equals = true
    for (let key in obj1) {
        if (obj1[key] != obj2[key]) return false
    }
    return true
}

function areSame(obj1, obj2) {
    return obj1 === obj2
}

const blogPost = {
    title: "How we live",
    body: "Description",
    author: "Alex",
    comments: {
        author: "Max",
        body: "Comment",
    },
    isLive: true,
}

function Post(title, body, author) {
    this.title = title
    this.body = body
    this.author = author
    this.isLive = false
    this.views = 0
    this.comments = []
}

function PiriceRange(name, min, max) {
    this.name = name
    this.min = min
    this.max = max
}

const low = new PiriceRange("low", 0, 15)
