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
    if (gettingRanges) {
        
        const [min, max] = line.split("-").map(n => parseInt(n));
        if (min == undefined || max == undefined) continue;

        ranges.push({
            min,
            max
        });
    } else {
        const id = parseInt(line);
        for (const range of ranges) {
            if (range.min <= id && id <= range.max) {
                count++;
                break;
            }
        }
    }
}

console.log(count);