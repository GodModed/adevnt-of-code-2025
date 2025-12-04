let text = await Bun.file("days/3/input.txt").text();

let sum = 0;

function findNextNNumbers(numArr: number[], n: number): number {
    let result: number[] = [];
    let start = 0;

    while (n > 0) {
        let end = numArr.length - n;

        let maxDigit = -1;
        let maxIndex = -1;
        for (let i = start; i <= end; i++) {
            if (numArr[i]! > maxDigit) {
                maxDigit = numArr[i]!;
                maxIndex = i;
            }
        }

        result.push(maxDigit);

        start = maxIndex + 1;
        n--;
    }

    // turn digit array into number
    return parseInt(result.join(""));
}

for (const line of text.split('\r\n')) {
    let numArr: number[] = line.split('').map(n => parseInt(n));

    sum += findNextNNumbers(numArr, 12);



}

console.log(sum);
