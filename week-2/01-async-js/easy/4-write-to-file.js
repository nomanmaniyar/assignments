const fs = require('fs');

const filePath = './4-write-to-file.txt'; // Replace with the actual file path
const data = "\nNEW DATA ADDED TO FILE."

fs.appendFile(filePath, data, (err) => {
    if (err) {
        console.log("ERROR OCCURED WHILE APPENDING TO FILE.")
    }

    console.log('File written!');
    fs.readFile(filePath, 'UTF-8', (err, fileContents) => {
        if (err) {
            console.log("ERROR OCCURED WHILE READING FILE.")
        } else {
            console.log("FILE CONTENT\n\n", fileContents)
        }
    })

});

console.log('This line might be printed before the file is written');
