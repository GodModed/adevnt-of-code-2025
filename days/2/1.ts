let text = await Bun.file("days/2/input.txt").text();
text = text.trim();

const invalidNumbers = [];

for (const line of text.split(",")) {
    const pair = line.split("-");
    if (!pair[0] || !pair[1]) continue;
    const numberPair = [ parseInt(pair[0]), parseInt(pair[1]) ]
    if (!numberPair[0] || !numberPair[1]) continue;
    for (let i = numberPair[0]; i <= numberPair[1]; i++) {
        const stringNum = i + "";
        for (let j = 0; j < stringNum.length / 2; j++) {
            const partial = stringNum.slice(0, j + 1);
            if (partial + partial == stringNum) invalidNumbers.push(i);
        }
    }

}

console.log(invalidNumbers.reduce((acc, cur) => {
    return acc + cur;
}, 0));