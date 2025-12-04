let text = await Bun.file("days/3/input.txt").text();

let sum = 0;
for (const line of text.split('\r\n')) {
    let numArr: number[] = line.split('').map(n => parseInt(n));

    let maxNum = -1;

    for (let i = 0; i < numArr.length - 1; i++) {
        let num1 = numArr[i];
        if (num1 == undefined) continue;
        for (let j = i + 1; j < numArr.length; j++) {
            let num2 = numArr[j];
            if (num2 == undefined) continue;
            let combinedNum = num1 * 10 + num2;
            if (combinedNum > maxNum) maxNum = combinedNum;
        }
    }

    sum += maxNum;



}

console.log(sum);
