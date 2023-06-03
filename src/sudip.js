function dateDiffInDays(a, b) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    console.log(typeof a.getFullYear())
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());//start
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());//end

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

// test it
const a = new Date("2023-05-05"), //start
    b = new Date("2023-06-30"),//end
    difference = dateDiffInDays(a, b);

console.log(difference + ' days')