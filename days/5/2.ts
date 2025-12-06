let text = await Bun.file("days/5/input.txt").text();

type Range = {
    min: number,
    max: number
}

let ranges: Range[] = [];
let gettingRanges = true;

let count = 0;

for (const line of text.split("\r\n")) {
    if (line == "") gettingRanges = false;
    if (!gettingRanges) break;

    let [min, max] = line.split("-").map(n => parseInt(n));
    if (min == undefined || max == undefined) continue;
    
    let range;
    do {
        range = checkInRange(min);
        if (range) {
            min = range.max + 1;
        }
    } while (range);

    do {
        range = checkInRange(max);
        if (range) {
            max = range.min - 1;
        }
    } while (range);

    if (max >= min) {
        ranges.push({ min, max });
    }

    ranges = ranges.sort((a, b) => a.min - b.min);
    let hadOverlap = false;
    do {
        for (let i = 0; i < ranges.length - 1; i++) {
            let current = ranges[i];
            let next = ranges[i + 1];
            if (current!.max >= next!.min - 1) {
                current!.max = Math.max(current!.max, next!.max);
                hadOverlap = true;
                ranges = [...ranges.slice(0, i + 1), ...ranges.slice(i + 2)];
                break;
            }
        }

        hadOverlap = false;
    } while (hadOverlap)

}

function checkInRange(num: number): Range | null {
    for (const range of ranges) {
        if (range.min <= num && num <= range.max) return range;
    }
    return null;
}

for (const range of ranges) {
    count += range.max - range.min + 1;
}

console.log(count);