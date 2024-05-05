const fileSystemofHell = {
    name: "root",
    contents: [
        {
            name: "src",
            contents: [
                {name: "index.js", contents: []},
                {name: "app.js", contents: []},
                {
                    name: "components",
                    contents: [
                        {name: "header.js", contents: []},
                        {name: "footer.js", contents: []},
                    ],
                },
            ],
        },
        {
            name: "docs",
            contents: [
                {name: "readme.md", contents: []},
                {name: "changelog.md", contents: []},
            ],
        },
        {name: "package.json", contents: []},
    ],
}

// function findFilePath(fileSystem, search) {
//     let path = ""
//     const recSearch = (file, search) => {
//         if (file.name === search) return (path += "\\" + search)
//         if (file.contents.length !== 0) return path
//         for (let item of file) {
//             recSearch(item, search)
//             if (path === '')
//         }
//     }
// }

function findFilePath(fileSystem, search) {
    let path = ""
    let found = false
    function recursiveSearch(currentFile) {
        if (typeof currentFile === "object") {
            if (currentFile.name === search) {
                console.log("FOUND FILE")
                found = true
                return (path += search)
            } else recursiveSearch(currentFile.contents)
        } else if (Array.isArray(currentFile)) {
            path += currentFile.name + "\\"
            for (let file of currentFile) {
                if (file.name === search) {
                    found = true
                    return (path += search)
                } else recursiveSearch(file)
            }
        }
    }
    recursiveSearch(fileSystem)
    if (found) return path
    else return "NOT FOUND"
}

function findFilePath666(fileSystem, search) {
    let path = ""
    let found = false
    function rs(fs) {
        if (typeof fs === "object") {
            console.log("OBJECT")

            if (fs["name"] === search) {
                found = true
                return (path += search)
            } else {
                path += fs.name + "\\"
                rs(fs["contents"])
            }
        }
        if (Array.isArray(fs) && fs.length !== 0) {
            console.log("ARRAY")
            console.log("IN FOLDER: ", path)
            for (let subfile of fs) rs(subfile)
        }
    }
    rs(fileSystem)
    if (found) return path
    else return "NOT FOUND"
}
const path = findFilePath666(fileSystemofHell, "header.js")

console.log(path) // Expected output: "root\\src\\components\\header.js"
