const items = [
    {id: 1, category: "fruit", name: "apple", color: "red"},
    {id: 2, category: "vegetable", name: "carrot", color: "orange"},
    {id: 3, category: "fruit", name: "banana", color: "yellow"},
    {id: 4, category: "dairy", name: "milk", color: "white"},
    {id: 5, category: "fruit", name: "orange", color: "orange"},
    {id: 6, category: "fruit", name: "lemon", color: "yellow"},
    {id: 7, category: "fruit", name: "strobery", color: "red"},
]

function groupByCategory(items = [], key = "") {
    const result = {}
    for (let item of items) {
        if (!(key in item)) continue
        if (!(item[key] in result)) result[item[key]] = [item]
        else result[item[key]].push(item)
    }
    return result
}

// Calling your function
const grouped = groupByCategory(items, "category")

// Expected output
console.log(grouped)
/*
Output should be:
{
    fruit: [
        { id: 1, category: 'fruit', name: 'apple' },
        { id: 3, category: 'fruit', name: 'banana' },
        { id: 5, category: 'fruit', name: 'orange' }
    ],
    vegetable: [
        { id: 2, category: 'vegetable', name: 'carrot' }
    ],
    dairy: [
        { id: 4, category: 'dairy', name: 'milk' }
    ]
}
*/
