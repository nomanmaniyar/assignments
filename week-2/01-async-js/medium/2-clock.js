function clock() {
    const now = new Date();
    let hours = now.getHours()
    let minutes = now.getMinutes().toString().padStart(2, 0)
    let seconds = now.getSeconds().toString().padStart(2, 0)
    let time1 = hours + ":" + minutes + ":" + seconds
    let time2 = `${hours % 12 || 12}:${minutes}:${seconds} ${hours >= 12 ? 'PM' : 'AM'}`;

    console.log(time1)
    console.log(time2)
    setTimeout(clock, 1000);
}
clock()
