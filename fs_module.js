// fs, os, http
const fs = require('fs')

/**
 * while writing a json file - serialization - JSON.stringify()
 * while reading a json file - deserialization - JSON.parse()
 */

// // Reading the json file
// const file = fs.readFileSync('./data.json')
// console.log(file)

// // Deserializing the returned value
// const data = JSON.parse(file)
// console.log(data)

// // changing the data
// data.rating = 5

// // rewriting the file
// fs.writeFileSync('./data.json', JSON.stringify(data))

// Reading the json file
fs.readFile('./data.json', (error, file) => {
    const data = JSON.parse(file)
    console.log(data)

    // changing the data
    data.rating = 6

    // rewriting the file
    fs.writeFile('./data.json', JSON.stringify(data), () => {
        console.log('file rewritten...')
    })
})

/**
 * readFileSync, writeFileSync - Synchronous - blocking nature
 * readFile, writeFile - Asynchronous - non-blocking nature
 */
