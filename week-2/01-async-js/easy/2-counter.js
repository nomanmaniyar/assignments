let counter = 0;
let startTime = Date.now();

function updateCounter() {
    
    const elapsedTime = (Date.now() - startTime) / 1000; // Convert milliseconds to seconds
    console.log("TIME: ", Date.now())
    console.log("START TIME: ", startTime)
    console.log("ELAPSED TIME: ", elapsedTime)
    
    if (elapsedTime >= 1) {
        counter++;
        console.log("Counter:", counter);
        startTime = Date.now(); // Reset start time for next minute
    }

    // Use setTimeout with 1 second delay for smoother execution
    setTimeout(updateCounter, 1000);
}

updateCounter(); // Start the counter
