const text = await Bun.file("days/1/input.txt").text();

let timesHitZero = 0;
let pointer = 50;
for (const command of text.split("\r\n")) {
    const lr = command[0];
    const number = parseInt(command.slice(1, command.length));

    let scale;
    if (lr == "L") scale = -1;
    else scale = 1;

    let prev = pointer;

    pointer += scale * number;

    while (pointer <= 0) {
        pointer += 100;
    }

    pointer %= 100;

    for (let i = 0; i < number; i++) {
        prev += scale;
        if (prev <= 0) {
            prev += 100;
        }
        prev %= 100;
        if (prev == 0) timesHitZero++;
    }

}

console.log(timesHitZero);