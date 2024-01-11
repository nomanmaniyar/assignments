const fs = require('fs');

const filePath = './3-read-from-file.txt'; // Replace with the actual file path

fs.readFile(filePath, 'utf8', (err, fileContents) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log("File contents:", fileContents);

    // Expensive operation (simulated)
    const startTime = Date.now();
    while (Date.now() - startTime < 5000) { // Simulate a 5-second task
        // Do something computationally expensive here
        // (e.g., complex calculations, large data processing)
        for (let index = 0; index < Date.now() - startTime; index++) {
            console.log(index);

        }

    }

    console.log("Expensive operation completed!");
});

console.log("This will print first, before the file contents and expensive operation.");
