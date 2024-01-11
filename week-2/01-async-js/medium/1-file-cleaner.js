const fs = require('fs');

const filePath = './1-file-cleaner.txt'

fs.readFile(filePath, 'UTF-8', (err, fileContents) => {

    if (err) {
        console.log("ERROR OCCURED WHILE READING FILE.");
    }

    // const splitedData = fileContents.split(" ");
    // console.log("DATA", splitedData);
    // for (let index = 0; index < splitedData.length; index++) {
    //     const element = splitedData[index].length;
    //     if (element > 0) {
    //         data = data + " " + splitedData[index]
    //     }
    // }
    const data = fileContents.replace(/\s+/g, ' ');
    fs.writeFile(filePath, data, (err) => {
        if (err) {
            console.log("ERROR OCCURED WHILE ERITING TO FILE.");
        }
        console.log("DATA WRITTEN TO FILE", data);
    })

})