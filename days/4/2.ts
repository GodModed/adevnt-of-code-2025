let text = await Bun.file("days/4/input.txt").text();

const enum Tile {
    TAKEN,
    EMPTY
}

let grid: Tile[][] = [];

for (const line of text.split("\r\n")) {
    const row: Tile[] = [];

    for (const char of line.split("")) {
        if (char == "@") row.push(Tile.TAKEN);
        else row.push(Tile.EMPTY);
    }

    grid.push(row);

}

let lastRemovedCount = 0;
let count = 0;

do {

    lastRemovedCount = count;
    const gridCopy = structuredClone(grid);

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r]!.length; c++) {

            if (grid[r]![c] == Tile.EMPTY) continue;

            let takenCount = 0;

            for (let y = -1; y <= 1; y++) {
                for (let x = -1; x <= 1; x++) {
                    let newR = r + y;
                    let newC = c + x;

                    if (newR == r && newC == c) continue;
                    if (newR < 0 || newR >= grid.length) continue;
                    if (newC < 0 || newC >= grid[newR]!.length) continue;
                    
                    const tile = grid[newR]![newC];
                    if (tile == Tile.TAKEN) takenCount++;
                }
            }

            if (takenCount < 4) {
                gridCopy[r]![c] = Tile.EMPTY;
                count++;
            }
        }
    }

    grid = gridCopy;
} while (lastRemovedCount != count);
console.log(count);