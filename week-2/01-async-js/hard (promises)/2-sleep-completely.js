/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    const startTime = Date.now();
    const endTime = startTime + milliseconds;

    // while (Date.now() < endTime) {
    //     console.log(" This empty loop is the essence of busy waiting")
    // }
    for (let index = 0; index < milliseconds; index++) {
        console.log(index)

    }
    return new Promise((resolve) => {
        resolve();
    });
}

module.exports = sleep;
