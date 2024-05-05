function deepClone(obj) {
    // Base case: if it's a primitive value, return it directly
    if (obj === null || typeof obj !== "object") {
        return obj
    }

    // Handle arrays by creating a new array and recursively cloning each element
    if (Array.isArray(obj)) {
        return obj.map(deepClone)
    }

    // Handle objects by creating a new object and recursively cloning each property
    const clonedObj = {}

    // Iterate over the object's own properties to avoid prototype inheritance issues
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(obj[key]) // Recursively clone nested structures
        }
    }

    return clonedObj // Return the deep cloned object
}
const nestedSet = new Set(["a", "b", "c"])
const st = new Set([1, 2, 3, 4, 5, 6, nestedSet])

const original = {
    name: "Alice",
    age: 25,
    address: {
        city: "New York",
        zip: "10001",
    },
    hobbies: ["reading", "traveling"],
    numers: st,
    sayhello: () => console.log("Hello from Alice"),
}

const clone = deepClone(original)

clone.name = "Bob"
clone.address.city = "Los Angeles"
clone.age = 38
clone.hobbies.push("cooking")
clone.sayhello = () => console.log("hello bob")
original.sayhello()
clone.sayhello()

console.log(original) // Should not change: { name: "Alice", age: 25, address: { city: "New York", zip: "10001" }, hobbies: ["reading", "traveling"] }
console.log(clone)
